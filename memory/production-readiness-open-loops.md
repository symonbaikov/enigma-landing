---
name: production-readiness-open-loops
description: Follow-up checklist for production-grade GEO/SEO readiness decisions
type: open-loops
---

# Production GEO/SEO Readiness Open Loops

Date: 2026-06-26
Project: Enigma Landing

## Goal

Close the remaining production-level GEO/SEO decisions after the baseline optimization pass.

## Checklist

- [ ] Confirm the real production domain.
  - Current placeholder: `https://enigma.com`
  - Update canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD `@id`, OG URLs and any env defaults if the domain differs.

- [ ] Decide AI crawler policy.
  - Current stance: `default-open`
  - Options to decide later: keep default-open, switch to default-closed, or use split policy that allows search/retrieval crawlers while blocking training crawlers.

- [ ] Add official `sameAs` profiles.
  - Do not invent these.
  - Add only confirmed official profiles such as LinkedIn, GitHub, X/Twitter, Crunchbase, Wikidata or other authoritative entity URLs.

- [ ] Decide whether to add SSR or prerendering.
  - Current app is a Vite/React SPA.
  - Runtime metadata and route JSON-LD work for browser-capable crawlers, but raw HTML is weaker for less capable crawlers.

- [ ] Split the large JavaScript chunk if performance budget requires it.
  - Current build passes, but Vite warns that the main JS chunk is larger than 500 kB after minification.
  - Candidate fix: route-level dynamic imports and/or Rollup `manualChunks`.

## Suggested Next Session Order

1. Confirm production domain and update URL constants.
2. Pick crawler policy and patch `public/robots.txt`.
3. Add verified `sameAs` fields to the Enigma entity profile and Organization schema.
4. Evaluate prerender options for the current Vite stack.
5. Profile bundle size and split only the largest route/content groups.
