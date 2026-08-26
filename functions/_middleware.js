/*
 * Per-URL canonical and hreflang for crawlers that do not run JavaScript.
 *
 * The app is a client-rendered SPA: every route is served the same index.html,
 * whose <head> can only carry one canonical. src/components/Seo.jsx corrects it
 * once React runs, which is fine for Google but not for Bing's selective
 * rendering and not for AI crawlers, which mostly do not render at all. Those
 * saw 117 URLs each declaring the homepage as its canonical — an instruction to
 * treat the whole site as one page.
 *
 * This rewrites the three path-derived tags in the response stream, so the
 * correct values are present before any script executes. It deliberately knows
 * nothing about page content: titles and descriptions still come from the app
 * at runtime. Everything here follows from the URL alone, which is why it
 * cannot drift out of sync with the app.
 */

const LOCALES = ['en', 'uk', 'ru'];
const DEFAULT_LOCALE = 'en';

/* Known paths, read once per isolate from our own sitemap.
   The SPA rewrite serves index.html for every path, so an unknown URL used to
   answer 200 with the "page not found" screen — a soft 404, which wastes crawl
   budget and reads as thin duplicate content. Deriving the set from the sitemap
   keeps one source of truth: a page that is in the sitemap is a page that
   exists. On any failure this stays null and every path is served as before,
   because answering 404 for real pages is far worse than a soft 404. */
let knownPaths = null;

async function loadKnownPaths(context, url) {
  if (knownPaths) return knownPaths;
  try {
    // Served straight from the asset store, so this never re-enters routing.
    const request = new Request(new URL('/sitemap.xml', url));
    const res = context.env?.ASSETS ? await context.env.ASSETS.fetch(request) : await fetch(request);
    if (!res.ok) return null;
    const xml = await res.text();
    const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => new URL(m[1]).pathname.replace(/\/+$/, '') || '/');
    if (!paths.length) return null;
    knownPaths = new Set(paths);
    return knownPaths;
  } catch {
    return null;
  }
}

/** Split a request path into its locale and its locale-agnostic remainder. */
function splitLocale(pathname) {
  const [, first = '', ...rest] = pathname.split('/');
  if (LOCALES.includes(first) && first !== DEFAULT_LOCALE) {
    return { lang: first, path: `/${rest.join('/')}`.replace(/\/+$/, '') || '/' };
  }
  return { lang: DEFAULT_LOCALE, path: pathname.replace(/\/+$/, '') || '/' };
}

/** '/pricing' + 'uk' → '/uk/pricing' */
function localePath(path, lang) {
  if (lang === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

class AttributeSetter {
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }
  element(element) {
    element.setAttribute(this.attribute, this.value);
  }
}

/** Emits the alternates after the canonical link, replacing any already there. */
class AlternatesInjector {
  constructor(html) {
    this.html = html;
  }
  element(element) {
    element.after(this.html, { html: true });
  }
}

export async function onRequest(context) {
  const response = await context.next();
  const type = response.headers.get('content-type') || '';
  if (!type.includes('text/html')) return response;

  const url = new URL(context.request.url);
  const normalized = url.pathname.replace(/\/+$/, '') || '/';
  const { lang, path } = splitLocale(url.pathname);
  const origin = url.origin;
  const canonical = `${origin}${localePath(path, lang)}`;

  const alternates = [
    ...LOCALES.map(
      (alt) => `<link rel="alternate" hreflang="${alt}" href="${origin}${localePath(path, alt)}"/>`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${origin}${localePath(path, DEFAULT_LOCALE)}"/>`,
  ].join('');

  // Unknown path: same screen, honest status.
  const known = await loadKnownPaths(context, url);
  const status = known && !known.has(normalized) ? 404 : response.status;
  const base =
    status === response.status
      ? response
      : new Response(response.body, {
          status,
          statusText: 'Not Found',
          headers: response.headers,
        });

  return new HTMLRewriter()
    .on('link[rel="canonical"]', new AttributeSetter('href', canonical))
    .on('link[rel="canonical"]', new AlternatesInjector(alternates))
    .on('meta[property="og:url"]', new AttributeSetter('content', canonical))
    .on('html', new AttributeSetter('lang', lang))
    .transform(base);
}
