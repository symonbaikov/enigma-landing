import { localePath, LOCALES, DEFAULT_LOCALE } from './locale.js';

/* The site's own origin. enigma.com belongs to a different company, so
   declaring it in canonical, hreflang or JSON-LD would point search engines
   at someone else's domain. Precedence: an explicit VITE_SITE_URL, then the
   origin Cloudflare Pages built us at, and only then this placeholder. */
const DEFAULT_SITE_URL = 'https://enigmavisibility.com';
const DEFAULT_SITE_NAME = 'Enigma';
const DEFAULT_LEGAL_NAME = 'Enigma Labs Inc.';
const DEFAULT_DESCRIPTION =
  'Enigma helps teams audit, structure, and monitor content for AI search visibility without promising guaranteed inclusion.';
const DEFAULT_ENTITY_DESCRIPTION =
  'Enigma is a GEO/AEO platform for structuring, auditing and monitoring brand visibility in AI answers.';

const SOURCE_MARKER_RE = /\[\s*(?:Джерело|Источник|Source)?\s*\d+(?:\s*,\s*\d+)*\s*\]/gi;
const FAQ_HEADING_RE = /часті питання|частые вопросы|faq|questions/i;

function siteOrigin() {
  // import.meta.env in the browser bundle; process.env when the sitemap
  // generator runs this same module under Node.
  const env = typeof process !== 'undefined' ? process.env : undefined;
  const raw =
    import.meta.env?.VITE_SITE_URL ||
    env?.VITE_SITE_URL ||
    env?.CF_PAGES_URL ||
    DEFAULT_SITE_URL;
  return String(raw).replace(/\/+$/, '') || DEFAULT_SITE_URL;
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = String(path || '/').startsWith('/') ? String(path || '/') : `/${path}`;
  return `${siteOrigin()}${normalizedPath}`;
}

export function plainText(value = '') {
  return String(value)
    .replace(SOURCE_MARKER_RE, '')
    .replace(/\s+([.,;:!?])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(value = '', max = 155) {
  const text = plainText(value);
  if (text.length <= max) return text;
  const sliced = text.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${sliced.slice(0, lastSpace > 80 ? lastSpace : max - 1).trim()}…`;
}

export function extractFaqItems(sections = []) {
  const items = [];
  sections.forEach((section, index) => {
    const previous = sections[index - 1];
    if (
      section?.type === 'list' &&
      previous?.type === 'heading' &&
      FAQ_HEADING_RE.test(previous.text || '') &&
      Array.isArray(section.items)
    ) {
      section.items.forEach((item) => {
        if (item?.title && item?.desc) {
          items.push({ question: plainText(item.title), answer: plainText(item.desc) });
        }
      });
    }
  });
  return items;
}

export function faqFromPairs(pairs = []) {
  return pairs
    .map((item) => ({
      question: plainText(item?.q || item?.question || item?.title || ''),
      answer: plainText(item?.a || item?.answer || item?.desc || ''),
    }))
    .filter((item) => item.question && item.answer);
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization'),
    name: DEFAULT_SITE_NAME,
    legalName: DEFAULT_LEGAL_NAME,
    alternateName: [DEFAULT_LEGAL_NAME],
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo.png'),
    description: DEFAULT_ENTITY_DESCRIPTION,
    knowsAbout: [
      'Generative Engine Optimization',
      'Answer Engine Optimization',
      'AI search visibility',
      'AI crawler access',
      'AI citation monitoring',
    ],
  };
}

export function buildWebsiteSchema({ lang = 'en' } = {}) {
  return {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: DEFAULT_SITE_NAME,
    url: absoluteUrl('/'),
    inLanguage: lang,
    publisher: { '@id': absoluteUrl('/#organization') },
  };
}

export function buildWebPageSchema({ path = '/', title, description, lang = 'en', type = 'WebPage' } = {}) {
  const url = absoluteUrl(localePath(path, lang));
  return {
    '@type': type,
    '@id': url,
    url,
    name: plainText(title || DEFAULT_SITE_NAME),
    description: truncate(description || DEFAULT_DESCRIPTION, 220),
    inLanguage: lang,
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#organization') },
  };
}

export function buildArticleSchema({
  path,
  title,
  description,
  lang = 'en',
  section,
  datePublished,
  dateModified,
} = {}) {
  const url = absoluteUrl(localePath(path || '/', lang));
  const schema = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: plainText(title || DEFAULT_SITE_NAME),
    description: truncate(description || DEFAULT_DESCRIPTION, 220),
    inLanguage: lang,
    articleSection: section ? plainText(section) : undefined,
    mainEntityOfPage: { '@id': url },
    publisher: { '@id': absoluteUrl('/#organization') },
    author: { '@id': absoluteUrl('/#organization') },
  };
  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  return Object.fromEntries(Object.entries(schema).filter(([, value]) => value !== undefined));
}

export function buildFaqSchema(items = []) {
  const faqItems = faqFromPairs(items);
  if (!faqItems.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items = [], lang) {
  if (!items.length) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: plainText(item.name),
      item: absoluteUrl(localePath(item.path, lang)),
    })),
  };
}

export function buildJsonLdGraph(items = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': items.filter(Boolean),
  };
}

export function buildRouteInventory({
  products = [],
  solutions = [],
  resources = [],
  chapters = [],
  articles = [],
  blogPosts = [],
} = {}) {
  const routes = [
    { path: '/', priority: '1.0' },
    { path: '/pricing', priority: '0.8' },
    { path: '/blog', priority: '0.7' },
    ...products.map((item) => ({ path: item.path || `/product/${item.slug}`, priority: '0.8' })),
    ...solutions.map((item) => ({ path: item.path || `/solutions/${item.slug}`, priority: '0.8' })),
    ...resources.map((item) => ({ path: item.path || `/resources/${item.slug}`, priority: '0.7' })),
    ...chapters.map((item) => ({ path: `/resources/geo-playbook/${item.slug}`, priority: '0.7' })),
    ...articles.map((item) => ({ path: `/resources/research-lab/${item.slug}`, priority: '0.7' })),
    ...blogPosts.map((item) => ({ path: `/blog/${item.slug}`, priority: '0.7' })),
  ];

  const seen = new Set();
  return routes.filter((route) => {
    if (!route.path || seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

export function serializeSitemap(routes = [], lastmod = '2026-06-26') {
  const urls = routes
    .map((route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>
    <changefreq>${route.changefreq || 'weekly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/**
 * Sitemap covering every language a route actually exists in.
 *
 * Each entry carries its own `locales`, because the long-form corpora are not
 * translated in lockstep with the interface: listing an English URL for a page
 * that only exists in Ukrainian would invite an indexing of the wrong text.
 * Alternates are emitted per URL so search engines can group the language
 * versions instead of treating them as duplicates.
 */
export function serializeLocalizedSitemap(entries = [], lastmod = '2026-06-26') {
  const urls = [];
  entries.forEach((entry) => {
    const locales = (entry.locales || LOCALES).filter((lang) => LOCALES.includes(lang));
    locales.forEach((lang) => {
      const alternates = locales
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${absoluteUrl(localePath(entry.path, alt))}"/>`)
        .concat(
          locales.includes(DEFAULT_LOCALE)
            ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localePath(entry.path, DEFAULT_LOCALE))}"/>`]
            : [],
        )
        .join('\n');
      urls.push(`  <url>
    <loc>${absoluteUrl(localePath(entry.path, lang))}</loc>
${alternates}
    <lastmod>${entry.lastmod || lastmod}</lastmod>
    <changefreq>${entry.changefreq || 'weekly'}</changefreq>
    <priority>${entry.priority || '0.7'}</priority>
  </url>`);
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}
