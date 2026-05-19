/* Blog — articles about AI-search trends (GEO/AEO).
   One file per post in ./blog/<slug>.js, each `export default` a post object.
   To publish a new post: add the file and import it into the right locale array.

   i18n-ready: posts are grouped by locale. `getBlogPosts(lang)` returns the
   set for the active language and falls back to `ru` until a locale is
   translated (so adding a `uk` post later is a drop-in, no page changes).

   Section types reuse the shared renderer (see ContentPageRenderer.jsx):
     lead | heading | paragraph | list | steps | quote | finding | chart
   Inline source markers like [Источник 09] auto-link if a matching
   "Источники" list entry ("09 · …") exists in the same post.
   Keep to the SMART FRAME: Hero → Problem → Core value → Trust → FAQ.
   Never invent stats or URLs — cite only what you can verify. */

import geoAeoVsSeo from './blog/geo-aeo-vs-seo.js';
import howAnswerEnginesWork from './blog/how-answer-engines-work.js';
import citationSelectionVsAbsorption from './blog/citation-selection-vs-absorption.js';
import aiVisibilityInstability from './blog/ai-visibility-instability.js';
import googleAiOverviewsGuide from './blog/google-ai-overviews-guide.js';
import zeroClickBusinessRisk from './blog/zero-click-business-risk.js';
import aiCrawlersRobotsTxt from './blog/ai-crawlers-robots-txt.js';
import structuredDataAiSeoMyths from './blog/structured-data-ai-seo-myths.js';
import geoForEcommerce from './blog/geo-for-ecommerce.js';
import ethicalGeoNoSpam from './blog/ethical-geo-no-spam.js';

// Ukrainian localizations (audited) — same slugs and section structure as ru.
import geoAeoVsSeoUk from './blog/uk/geo-aeo-vs-seo.js';
import howAnswerEnginesWorkUk from './blog/uk/how-answer-engines-work.js';
import citationSelectionVsAbsorptionUk from './blog/uk/citation-selection-vs-absorption.js';
import aiVisibilityInstabilityUk from './blog/uk/ai-visibility-instability.js';
import googleAiOverviewsGuideUk from './blog/uk/google-ai-overviews-guide.js';
import zeroClickBusinessRiskUk from './blog/uk/zero-click-business-risk.js';
import aiCrawlersRobotsTxtUk from './blog/uk/ai-crawlers-robots-txt.js';
import structuredDataAiSeoMythsUk from './blog/uk/structured-data-ai-seo-myths.js';
import geoForEcommerceUk from './blog/uk/geo-for-ecommerce.js';
import ethicalGeoNoSpamUk from './blog/uk/ethical-geo-no-spam.js';

/* Curated reading order (introductory → applied). The post page's "next"
   link cycles through this array, so order doubles as the learning path. */
const ru = [
  geoAeoVsSeo,
  howAnswerEnginesWork,
  citationSelectionVsAbsorption,
  aiVisibilityInstability,
  googleAiOverviewsGuide,
  zeroClickBusinessRisk,
  aiCrawlersRobotsTxt,
  structuredDataAiSeoMyths,
  geoForEcommerce,
  ethicalGeoNoSpam,
];

/* Ukrainian localizations — same curated order as ru. */
const uk = [
  geoAeoVsSeoUk,
  howAnswerEnginesWorkUk,
  citationSelectionVsAbsorptionUk,
  aiVisibilityInstabilityUk,
  googleAiOverviewsGuideUk,
  zeroClickBusinessRiskUk,
  aiCrawlersRobotsTxtUk,
  structuredDataAiSeoMythsUk,
  geoForEcommerceUk,
  ethicalGeoNoSpamUk,
];

const BY_LANG = { ru, uk };

/* Active-language posts, with graceful fallback to ru. `lang` is i18n.language
   (may be a region tag like "uk-UA"), so match on the primary subtag. */
export function getBlogPosts(lang) {
  const primary = String(lang || '').toLowerCase().split('-')[0];
  const set = BY_LANG[primary];
  return set && set.length ? set : ru;
}

/* Back-compat default (ru) for any importer not passing a language. */
export const blogPosts = ru;
