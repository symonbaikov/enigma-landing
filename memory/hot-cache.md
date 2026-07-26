---
tier: hot
project: enigma-landing
---

# Enigma Landing GEO/SEO Hot Cache

Date: 2026-06-26
Workspace: `/home/sbaikov/Desktop/Projects/enigma-landing`
Skill source: `seo-geo-claude-skills/` from `aaron-he-zhu/seo-geo-claude-skills` v9.9.10, commit `dea9f4d`.

## Active Contracts

- GEO: direct answer in first 150 words, definition-first blocks, source-backed claims, FAQ/schema alignment, visible citation surfaces.
- Intent/Gaps: map user questions into informational, comparison, technical and decision-stage clusters; competitor-relative metrics are N/A until competitor data is provided.
- CORE-EEAT: no invented proof; avoid title/content mismatch, data contradictions, fake reviews or unsupported authority claims.
- Technical SEO: robots.txt, sitemap, canonical, mobile fit, schema validity and crawl/indexability baseline.
- Memory: HOT cache must stay under 80 lines and 25KB; unresolved items live in `memory/open-loops.md`.

## Project Scan

- Stack: Vite + React SPA.
- Public content: `src/i18n/*`, `src/content/*`, `src/pages/*`, `docs/blog/*`, `docs/drafts/*`.
- Main surfaces: home, products, solutions, pricing, resource hubs, AEO FAQ, playbook chapters, research articles, blog posts.

## Completed

- Added shared SEO/schema utilities in `src/lib/seo.js` with tests in `src/lib/seo.test.mjs`.
- Added route-level runtime metadata and JSON-LD via `src/components/Seo.jsx`.
- Added homepage GEO answer surface in `src/components/HomeGeoSection.jsx`.
- Wired Organization, WebSite, WebPage, Article, FAQPage and BreadcrumbList schema across public route templates.
- Added `public/robots.txt` and `public/sitemap.xml`.
- Added root fallback metadata in `index.html`.
- Added raw HTML Organization/WebSite JSON-LD fallback in `index.html`; route-specific schema remains runtime-rendered by React.
- Rewrote unsupported claims in `src/i18n/uk.js` and `src/i18n/ru.js`; removed SOC2/SLA/scale/customer-proof/hype claims.
- Fixed mobile overflow from galactic decorations, closed mobile drawer and horizontal reveal animations.
- Added canonical entity profile: `memory/entities/enigma.md`.
- Added reusable ownership/story section in `src/components/OwnershipStories.jsx` and placed it on home, product, solution, resource and pricing routes.
- Added RU/UK anonymized audit stories with evidence/action/limit fields to strengthen Experience and Exclusivity without inventing customer claims.
- Added page-level GEO explainers in `src/components/PageExplainer.jsx` and rendered them inside product and solution pages after the problem/context section.
- Added RU/UK direct-answer, evidence, action and limitation blocks for 5 product pages and 3 solution pages under `pageExplainers`.

## Verification

- Measured: `node --test src/lib/seo.test.mjs` passed.
- Measured: `npm run rag:test` passed.
- Measured: `npm run build` passed with one large chunk warning.
- Measured: browser crawl across 39 sitemap URLs found 0 issues for title/meta/canonical/H1/schema/image-alt checks.
- Measured: 390px mobile smoke had no horizontal overflow.
- Measured: `schema_lint.py` found 0 JSON-LD errors on raw homepage HTML; warning remains for missing `sameAs` until official profiles are confirmed.
- Measured: Playwright smoke found ownership stories on 5 key routes, with 4 cards each and no horizontal overflow at 1440px or 390px.
- Measured: Playwright smoke found page explainers on all 8 product/solution routes, with 3 cards each, 25-65 word direct answers and 0 horizontal overflow at 1440px and 390px.

## Current Status

- Estimated GEO readiness after optimization: 8/10.
- Strongest gains: page-level answer blocks, source layer, FAQ extraction, JSON-LD graph, ownership stories, claim discipline, crawl baseline.
- Main remaining risks: production domain confirmation, crawler policy stance, SPA/prerender decision, chunk-size warning, live AI citation retest.
