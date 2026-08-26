import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import en from './en.js';
import uk from './uk.js';
import ru from './ru.js';

/*
 * Guards for the translated locales.
 *
 * The expensive failure here is silent: a missing key renders as a raw
 * dotted path, and a citation whose number or URL drifted turns a sourced
 * claim into an unsourced one. Both are cheap to catch mechanically.
 */

const RESEARCH = readFileSync(new URL('../../docs/research.md', import.meta.url), 'utf8');

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
