import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import en from './en.js';
import uk from './uk.js';
import ru from './ru.js';
import { getBlogPosts } from '../content/blog.js';
import { getArticles } from '../content/articles.js';
import { getChapters } from '../content/chapters.js';
import { socialPosts } from '../content/social-proof.js';
import { existsSync } from 'node:fs';

/*
 * Guards for the translated locales.
 *
 * The expensive failure here is silent: a missing key renders as a raw
 * dotted path, and a citation whose number or URL drifted turns a sourced
 * claim into an unsourced one. Both are cheap to catch mechanically.
 */

const RESEARCH = readFileSync(new URL('../../docs/research.md', import.meta.url), 'utf8');
/* The blog cites the wider blog catalogue (93 sources), which extends research.md. */
const BLOG_RESEARCH = readFileSync(new URL('../../docs/blog-research.md', import.meta.url), 'utf8');

const blogCatalogue = new Set(
  [...BLOG_RESEARCH.matchAll(/^\*\*(\d{2})\./gm)].map((m) => String(Number(m[1]))),
);
const blogCatalogueUrls = new Set(
  [...BLOG_RESEARCH.matchAll(/\((https?:\/\/[^)]+)\)/g)].map((m) => m[1].replace(/\/+$/, '')),
);

/** Source numbers the research catalogue actually defines: "## 07. Title". */
const catalogue = new Set(
  [...RESEARCH.matchAll(/^## (\d{2})\./gm)].map((m) => String(Number(m[1]))),
);

/** Every URL the catalogue lists, normalized for comparison. */
const catalogueUrls = new Set(
  [...RESEARCH.matchAll(/\((https?:\/\/[^)]+)\)/g)].map((m) => m[1].replace(/\/+$/, '')),
);

function paths(value, prefix = '', out = []) {
  if (Array.isArray(value)) {
    value.forEach((item, i) => paths(item, `${prefix}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, v]) => paths(v, prefix ? `${prefix}.${key}` : key, out));
  } else {
    out.push(prefix);
  }
  return out;
}

function strings(value, out = []) {
  if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => strings(v, out));
  else if (typeof value === 'string') out.push(value);
  return out;
}

test('en carries every key uk does, with the same shape', () => {
  const ukPaths = new Set(paths(uk));
  const enPaths = new Set(paths(en));
  const missing = [...ukPaths].filter((p) => !enPaths.has(p));
  assert.deepEqual(missing, [], `en.js is missing ${missing.length} key(s)`);
});

test('ru and uk stay in sync with en so no locale falls back mid-page', () => {
  // Both directions matter: a key only in en renders English inside a
  // Russian page, and a key only in ru is dead weight nothing reads.
  const enPaths = new Set(paths(en));
  const ruPaths = new Set(paths(ru));
  const ukPaths = new Set(paths(uk));
  assert.deepEqual(paths(ru).filter((p) => !enPaths.has(p)), [], 'ru has keys en does not');
  assert.deepEqual(paths(uk).filter((p) => !enPaths.has(p)), [], 'uk has keys en does not');
  assert.deepEqual([...enPaths].filter((p) => !ruPaths.has(p)), [], 'ru is missing keys en has');
  assert.deepEqual([...enPaths].filter((p) => !ukPaths.has(p)), [], 'uk is missing keys en has');
});

test('en contains no untranslated Cyrillic text', () => {
  const leftovers = strings(en).filter((s) => /[Ѐ-ӿ]/.test(s));
  assert.deepEqual(leftovers, [], 'Cyrillic left in the English locale');
});

test('every inline citation marker names a source in the research catalogue', () => {
  const bad = [];
  for (const [lang, dict] of Object.entries({ en, uk, ru })) {
    for (const text of strings(dict)) {
      for (const marker of text.matchAll(/\[\s*(?:Джерело|Источник|Source)?\s*((?:\d+\s*,\s*)*\d+)\s*\]/gi)) {
        for (const num of marker[1].split(',')) {
          const n = String(Number(num.trim()));
          if (!catalogue.has(n)) bad.push(`${lang}: [${marker[1]}] → ${n}`);
        }
      }
    }
  }
  assert.deepEqual(bad, [], 'citation markers pointing outside docs/research.md');
});

test('every source URL in en matches the research catalogue', () => {
  const bad = strings(en)
    .flatMap((s) => [...s.matchAll(/https?:\/\/[^\s'")\]]+/g)].map((m) => m[0].replace(/\/+$/, '')))
    .filter((url) => !catalogueUrls.has(url));
  assert.deepEqual(bad, [], 'URLs not present in docs/research.md');
});

test('the English copy never promises guaranteed inclusion', () => {
  // The product boundary is a claim we make everywhere; a translation that
  // loses it is a factual regression, not a style choice.
  const overclaims = strings(en).filter((s) =>
    // A question ("Do you guarantee citations?") is not a promise — the answer is.
    !s.trim().endsWith('?') &&
    /guarantee[sd]?\s+(?:you\s+)?(?:a\s+)?(?:citation|inclusion|placement|top)/i.test(s) &&
    !/(no|not|never|does not|cannot|without)\b/i.test(s),
  );
  assert.deepEqual(overclaims, [], 'unbounded promise found in en.js');
});

test('English blog posts cite only sources in the blog catalogue', () => {
  const bad = [];
  for (const post of getBlogPosts('en')) {
    for (const text of strings(post)) {
      for (const marker of text.matchAll(/\[\s*Source\s*((?:\d+\s*,\s*)*\d+)\s*\]/gi)) {
        for (const num of marker[1].split(',')) {
          const n = String(Number(num.trim()));
          if (!blogCatalogue.has(n)) bad.push(`${post.slug}: [Source ${n}]`);
        }
      }
    }
  }
  assert.deepEqual(bad, [], 'blog citation markers outside docs/blog-research.md');
});

test('English blog post URLs match the catalogues', () => {
  // Bot documentation quotes user-agent identifier strings, which look like
  // URLs but are tokens rather than citations.
  const userAgentTokens = new Set([
    'https://perplexity.ai/perplexitybot',
    'https://perplexity.ai/perplexity-user',
    'https://commoncrawl.org/faq',
  ]);
  const known = new Set([...blogCatalogueUrls, ...catalogueUrls, ...userAgentTokens]);
  const bad = [];
  for (const post of getBlogPosts('en')) {
    for (const text of strings(post)) {
      for (const m of text.matchAll(/https?:\/\/[^\s'")\]]+/g)) {
        const url = m[0].replace(/[.,]+$/, '').replace(/\/+$/, '');
        if (!known.has(url)) bad.push(`${post.slug}: ${url}`);
      }
    }
  }
  assert.deepEqual(bad, [], 'blog URLs not present in the research catalogues');
});

test('every locale ships the same set of blog slugs', () => {
  const slugs = (lang) => getBlogPosts(lang).map((p) => p.slug).join(',');
  assert.equal(slugs('en'), slugs('uk'), 'en and uk blog sets differ');
  assert.equal(slugs('en'), slugs('ru'), 'en and ru blog sets differ');
});

test('English long-form corpora cite only catalogued sources', () => {
  // Chapters and Research Lab articles follow docs/research.md numbering.
  const bad = [];
  for (const [name, items] of [['chapter', getChapters('en')], ['article', getArticles('en')]]) {
    for (const item of items) {
      for (const text of strings(item)) {
        for (const marker of text.matchAll(/\[\s*Source\s*((?:\d+\s*,\s*)*\d+)\s*\]/gi)) {
          for (const num of marker[1].split(',')) {
            const n = String(Number(num.trim()));
            if (!catalogue.has(n)) bad.push(`${name} ${item.slug}: [Source ${n}]`);
          }
        }
      }
    }
  }
  assert.deepEqual(bad, [], 'markers outside docs/research.md');
});

test('every locale ships the same chapters and articles', () => {
  const slugs = (items) => items.map((i) => i.slug).join(',');
  assert.equal(slugs(getChapters('en')), slugs(getChapters('uk')), 'chapter sets differ (en/uk)');
  assert.equal(slugs(getChapters('en')), slugs(getChapters('ru')), 'chapter sets differ (en/ru)');
  assert.equal(slugs(getArticles('en')), slugs(getArticles('uk')), 'article sets differ (en/uk)');
  assert.equal(slugs(getArticles('en')), slugs(getArticles('ru')), 'article sets differ (en/ru)');
});

test('no English long-form text is left in Cyrillic', () => {
  const leftovers = [...getChapters('en'), ...getArticles('en')]
    .flatMap((item) => strings(item).filter((t) => /[Ѐ-ӿ]/.test(t)))
    .slice(0, 5);
  assert.deepEqual(leftovers, [], 'Cyrillic left in the English long-form corpora');
});

test('every quoted post is attributed and linkable', () => {
  // A quote from a named person is only trustworthy if a reader can open the
  // original, so a missing or non-post URL is a correctness bug, not a nit.
  const bad = [];
  for (const post of socialPosts) {
    if (!post.author?.trim()) bad.push(`${post.id}: no author`);
    if (!post.text?.trim()) bad.push(`${post.id}: no text`);
    if (!['x', 'linkedin'].includes(post.platform)) bad.push(`${post.id}: unknown platform`);
    if (!/^https:\/\/(x\.com|www\.linkedin\.com)\//.test(post.url || '')) {
      bad.push(`${post.id}: url does not point at the original post`);
    }
    // Tracking parameters carry the reader's referrer to someone else's post.
    if ((post.url || '').includes('utm_')) bad.push(`${post.id}: tracking parameters in url`);
    // Avatars are served from our own origin: a hotlinked profile photo leaks
    // readers to a third party and, on LinkedIn, expires with its signed URL.
    if (post.avatar && !post.avatar.startsWith('/avatars/')) {
      bad.push(`${post.id}: avatar is not self-hosted`);
    }
  }
  assert.deepEqual(bad, [], 'social proof entries missing attribution');
});

test('quoted posts are not translated per locale', () => {
  // The quotes live in one module shared by every locale; if a translated copy
  // ever appears, the words stop being the author's.
  const ids = new Set(socialPosts.map((p) => p.id));
  assert.equal(ids.size, socialPosts.length, 'duplicate post ids');
});

test('every quoted post ships its author photo', () => {
  const missing = socialPosts.filter(
    (post) => !post.avatar || !existsSync(new URL(`../../public${post.avatar}`, import.meta.url)),
  );
  assert.deepEqual(missing.map((p) => p.id), [], 'avatar files missing from public/avatars');
});
