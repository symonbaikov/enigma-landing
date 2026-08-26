/*
 * Submits every sitemap URL to IndexNow.
 *
 * IndexNow is the one search-engine notification path that needs no account
 * and no ownership verification through a dashboard: hosting the key file at
 * the site root is the proof. Bing, Yandex, Seznam and Naver share the
 * protocol, so one call reaches all of them. Google does not participate —
 * Search Console remains the route there.
 *
 *   node scripts/indexnow.mjs [--dry]
 *
 * The key lives in public/<key>.txt and is passed as INDEXNOW_KEY.
 */
import { buildSitemap } from './build-sitemap.mjs';

const KEY = process.env.INDEXNOW_KEY;
const SITE = (process.env.VITE_SITE_URL || 'https://enigmavisibility.com').replace(/\/+$/, '');
const host = new URL(SITE).host;
const dry = process.argv.includes('--dry');

if (!KEY) {
  console.error('INDEXNOW_KEY is not set — it must match the filename in public/<key>.txt');
  process.exit(1);
}

const { xml } = buildSitemap();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.error('sitemap produced no URLs');
  process.exit(1);
}
// Submitting URLs on another host is rejected wholesale, so fail loudly here
// rather than let the endpoint reject the batch with a bare 422.
const foreign = urlList.filter((u) => new URL(u).host !== host);
if (foreign.length) {
  console.error(`${foreign.length} URL(s) outside ${host}, first: ${foreign[0]}`);
  process.exit(1);
}

const body = { host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList };

if (dry) {
  console.log(`${urlList.length} URLs ready for ${host}; key at ${body.keyLocation}`);
  console.log(urlList.slice(0, 3).join('\n'), '\n…');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

// 200 accepted, 202 accepted but key still being validated.
console.log(`IndexNow → HTTP ${res.status} for ${urlList.length} URLs`);
const text = await res.text();
if (text.trim()) console.log(text.trim().slice(0, 400));
if (![200, 202].includes(res.status)) process.exit(1);
