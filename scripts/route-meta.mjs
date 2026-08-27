/*
 * Per-route title and description, for crawlers that never run our JavaScript.
 *
 * The app is client-rendered, so every URL ships the same <head> and only gets
 * its real title once React runs. Google renders; Bing renders selectively and
 * AI crawlers mostly do not. They were all reading one generic title for 126
 * URLs.
 *
 * This is built from the same sources the pages read — getProducts/getSolutions/
 * getResources and the content modules — so the static head and the runtime head
 * say the same thing. The one thing kept in sync by hand is the small map below
 * of route to i18n key, which mirrors what each page passes to <Seo>; the test
 * asserts every route in the sitemap ends up with an entry.
 */
import en from '../src/i18n/en.js';
import uk from '../src/i18n/uk.js';
import ru from '../src/i18n/ru.js';
import { LOCALES } from '../src/lib/locale.js';
import { getProducts, getSolutions, getResources, getPricing } from '../src/content/index.js';
import { getBlogPosts } from '../src/content/blog.js';
import { getArticles } from '../src/content/articles.js';
import { getChapters } from '../src/content/chapters.js';
import { truncate } from '../src/lib/seo.js';

const DICTS = { en, uk, ru };

/** Minimal stand-in for i18next's t(): dotted lookup, objects returned as-is. */
function translator(lang) {
  const dict = DICTS[lang];
  return (key) => key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

/** Same shape Seo.jsx produces, so the two can never disagree. */
function entry(title, description) {
  if (!title) return null;
  // Hero titles carry newlines for the page layout; a <title> is one line.
  const flat = String(title).replace(/\s+/g, ' ').trim();
  return { title: `${flat} | Enigma`, description: truncate(description || '') };
}

function metaForLang(lang) {
  const t = translator(lang);
  const products = getProducts(t);
  const solutions = getSolutions(t);
  const resources = getResources(t);
  const pricing = getPricing(t);
  const out = {};

  out['/'] = entry(`${t('hero.h1Line1')} ${t('hero.h1Highlight')}`, t('hero.lead'));
  out['/pricing'] = entry(pricing.hero_title, pricing.hero_desc);
  out['/about'] = entry(t('about.seoTitle'), t('about.seoDesc'));
  out['/privacy'] = entry(t('legal.privacy.title'), t('legal.privacy.intro'));
  out['/terms'] = entry(t('legal.terms.title'), t('legal.terms.intro'));
  out['/blog'] = entry(t('nav.tiles.aiSearchTrends'), t('nav.tiles.aiSearchTrendsDesc'));

  for (const [slug, item] of Object.entries(products)) {
    out[`/product/${slug}`] = entry(item.hero_title, item.hero_desc);
  }
  for (const [slug, item] of Object.entries(solutions)) {
    out[`/solutions/${slug}`] = entry(item.hero_title, item.hero_desc);
  }
  for (const [slug, item] of Object.entries(resources)) {
    out[`/resources/${slug}`] = entry(item.hero_title, item.hero_desc);
  }
  for (const post of getBlogPosts(lang)) {
    out[`/blog/${post.slug}`] = entry(post.title, post.subtitle);
  }
  for (const article of getArticles(lang)) {
    out[`/resources/research-lab/${article.slug}`] = entry(article.title, article.subtitle);
  }
  for (const chapter of getChapters(lang)) {
    out[`/resources/geo-playbook/${chapter.slug}`] = entry(chapter.title, chapter.subtitle);
  }

  return out;
}

/** { "/about": { en: {title, description}, uk: {...}, ru: {...} }, … } */
export function buildRouteMeta() {
  const byLang = Object.fromEntries(LOCALES.map((lang) => [lang, metaForLang(lang)]));
  const paths = new Set(LOCALES.flatMap((lang) => Object.keys(byLang[lang])));
  const out = {};
  for (const path of paths) {
    out[path] = {};
    for (const lang of LOCALES) {
      const meta = byLang[lang][path];
      if (meta) out[path][lang] = meta;
    }
  }
  return out;
}
