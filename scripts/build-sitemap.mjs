/*
 * Regenerates public/sitemap.xml from the routes and the translated corpora.
 *
 * Run after adding a page or translating a corpus:  node scripts/build-sitemap.mjs
 *
 * Hand-maintaining three languages' worth of URLs is how a sitemap starts
 * advertising pages that do not exist in that language. The corpora export the
 * languages they actually cover, so this reads the truth instead of restating it.
 */
import { writeFileSync } from 'node:fs';
import { serializeLocalizedSitemap } from '../src/lib/seo.js';
import { LOCALES } from '../src/lib/locale.js';
import { getBlogPosts, blogLocales } from '../src/content/blog.js';
import { getArticles, articleLocales } from '../src/content/articles.js';
import { getChapters, chapterLocales } from '../src/content/chapters.js';

const LASTMOD = process.argv[2] || new Date().toISOString().slice(0, 10);

/* Interface pages: fully translated, so every locale gets a URL. */
const interfaceRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/pricing', priority: '0.8' },
  { path: '/blog', priority: '0.7' },
  ...['axp', 'agent-traffic', 'site-maps', 'monitoring', 'insights']
    .map((slug) => ({ path: `/product/${slug}`, priority: '0.8' })),
  ...['b2b-saas', 'ecommerce', 'agencies']
    .map((slug) => ({ path: `/solutions/${slug}`, priority: '0.8' })),
  ...['geo-playbook', 'research-lab', 'aeo-faq', 'changelog']
    .map((slug) => ({ path: `/resources/${slug}`, priority: '0.7' })),
].map((route) => ({ ...route, locales: LOCALES }));

/* Long-form pages: only the languages whose text actually exists. */
const corpusRoutes = [
  ...getChapters('uk').map((c) => ({ path: `/resources/geo-playbook/${c.slug}`, locales: chapterLocales })),
  ...getArticles('uk').map((a) => ({ path: `/resources/research-lab/${a.slug}`, locales: articleLocales })),
  ...getBlogPosts('uk').map((p) => ({ path: `/blog/${p.slug}`, locales: blogLocales })),
];

const entries = [...interfaceRoutes, ...corpusRoutes];
const xml = serializeLocalizedSitemap(entries, LASTMOD);
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);

const urlCount = (xml.match(/<loc>/g) || []).length;
console.log(`sitemap.xml: ${entries.length} pages → ${urlCount} URLs (lastmod ${LASTMOD})`);
