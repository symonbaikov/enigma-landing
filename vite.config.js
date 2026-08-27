import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, readFileSync } from 'node:fs';
import { buildSitemap } from './scripts/build-sitemap.mjs';
import { buildRouteMeta } from './scripts/route-meta.mjs';

/*
 * The site's origin, resolved once for the whole build.
 *
 * It reaches index.html as %VITE_SITE_URL% and src/lib/seo.js through
 * import.meta.env, so the static head and the runtime canonical can never
 * disagree. On Cloudflare Pages, CF_PAGES_URL is the deployment's own origin —
 * an honest default until a real domain is set through VITE_SITE_URL.
 */
const siteUrl = (
  process.env.VITE_SITE_URL ||
  process.env.CF_PAGES_URL ||
  'http://localhost:5173'
).replace(/\/+$/, '');
process.env.VITE_SITE_URL = siteUrl;

/* robots.txt and sitemap.xml carry absolute URLs, so they are emitted at build
   time from the same origin rather than kept as static copies that go stale. */
function siteFiles() {
  return {
    name: 'enigma-site-files',
    apply: 'build',
    closeBundle() {
      const robots = readFileSync('public/robots.txt', 'utf8').trimEnd();
      writeFileSync('dist/robots.txt', `${robots}\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
      const { xml, pages } = buildSitemap();
      writeFileSync('dist/sitemap.xml', xml);
      const urls = (xml.match(/<loc>/g) || []).length;

      /* Read by functions/_middleware.js to give non-rendering crawlers the
         right title and description per URL. */
      const meta = buildRouteMeta();
      writeFileSync('dist/route-meta.json', JSON.stringify(meta));
      this.info(
        `site origin ${siteUrl} — sitemap: ${pages} pages, ${urls} URLs; route meta: ${Object.keys(meta).length} routes`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), siteFiles()],
});
