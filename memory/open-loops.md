---
name: enigma-landing-open-loops
description: Remaining GEO and SEO follow-ups for the Enigma landing project
type: open-loops
---

# Enigma Landing GEO/SEO Open Loops

Date: 2026-06-26
Workspace: `/home/sbaikov/Desktop/Projects/enigma-landing`

## Product / Domain Decisions

- Confirm production domain. Current canonical, sitemap and robots use `https://enigma.com/`; replace if the actual landing domain differs.
- Confirm AI crawler stance. Current `robots.txt` is default-open; choose default-open, default-closed or split retrieval/training policy before deploy.
- Confirm enterprise compliance copy. Current copy avoids unsupported SOC2, hard SLA, data residency and global deployment claims.

## Entity / Trust

- Run live AI entity-resolution tests for Enigma: "What is Enigma?", "What does Enigma do?", "Enigma vs [competitor]".
- Add authoritative `sameAs` profiles only after official company profiles are confirmed.
- Consider public About, editorial policy, corrections/update policy and contact pages to improve CORE-EEAT trust coverage.

## Technical SEO

- Consider prerendering or SSR for public routes; runtime metadata works in browser-capable crawlers, but raw SPA HTML remains weaker.
- Submit `public/sitemap.xml` after deployment in Google Search Console and Bing Webmaster Tools.
- Validate generated schema in Schema.org Validator and Google Rich Results Test after deployment.
- `npm run build` passes but Vite reports a large JS chunk warning; consider route-level code splitting if performance budgets require it.

## GEO / Content

- Expand visible source layers on product and solution pages where source material is available.
- Add methodology notes for audit and monitoring claims so AI systems can cite the measurement approach.
- Add dedicated public case-study/resource pages after approved customer stories or internal demo datasets are available; current page explainers are anonymized field scenarios, not named case studies.
- Replace anonymized ownership stories with named public case studies only after customer approval, source data and publishable outcomes are confirmed.
- Recheck AI citation visibility after deploy with repeatable queries across ChatGPT, Perplexity, Gemini and AI Overviews.
- Competitor-relative content-gap analysis remains N/A until competitor domains or live SERP data are provided.

## Visual / Assets

- Current visuals use local assets and CSS illustrations. Replace schematic dashboard visuals with real product screenshots once approved screenshots exist.
