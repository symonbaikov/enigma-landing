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
  const { lang, path } = splitLocale(url.pathname);
  const origin = url.origin;
  const canonical = `${origin}${localePath(path, lang)}`;

  const alternates = [
    ...LOCALES.map(
      (alt) => `<link rel="alternate" hreflang="${alt}" href="${origin}${localePath(path, alt)}"/>`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${origin}${localePath(path, DEFAULT_LOCALE)}"/>`,
  ].join('');

  return new HTMLRewriter()
    .on('link[rel="canonical"]', new AttributeSetter('href', canonical))
    .on('link[rel="canonical"]', new AlternatesInjector(alternates))
    .on('meta[property="og:url"]', new AttributeSetter('content', canonical))
    .on('html', new AttributeSetter('lang', lang))
    .transform(response);
}
