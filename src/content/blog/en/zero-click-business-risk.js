/* Zero-click and the economics of search without a visit — English edition.
   Every figure re-verified against the primary reports (Pew, SparkToro/Datos,
   Ahrefs), including the US/EU split, which the study's URL slug transposes. */
export default {
  slug: 'zero-click-business-risk',
  date: 'May 2026',
  readTime: '6 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Zero-click and the economics of search without a visit: why presence inside the answer is its own value',
  subtitle: 'Organic traffic has stopped being the only currency of visibility: a brand now wins or loses inside the answer itself, before any click. Here is how far click-through has fallen, and how to rebuild your metrics for it.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'The content exists, the visits do not', desc: 'You pay for content and SEO while more and more users get their answer in the results and never reach the site.' },
        { title: 'Analytics cannot see the impression', desc: 'Classic analytics — sessions, CTR — is blind to the impressions where the brand was cited and no click followed.' },
        { title: 'More articles does not fix it', desc: '"Publish more articles" fails when click losses are substantial across whole query sets — with the sampling, vertical and region caveats of each study.' },
      ],
    },
    { type: 'heading', text: 'The scale: how many clicks actually reach a site' },
    {
      type: 'paragraph',
      text: 'Most Google searches end without a click to the open web. In the SparkToro and Datos study (2024), for every 1,000 Google searches in the US only 360 clicks reach a property that is not owned by Google; in the EU the figure is 374. Zero-click searches accounted for 58.5% in the US and 59.7% in the EU, and almost 30% of all US clicks go to platforms Google owns [Source 83].',
    },
    {
      type: 'paragraph',
      text: 'An AI summary roughly halves the chance of a click. Pew Research Center recorded clicks on a traditional search result in 8% of visits where an AI summary appeared, against 15% without one. Links inside the AI block itself were clicked in just 1% of visits, and users ended their browsing session on 26% of pages with an AI summary against 16% without [Source 78].',
    },
    {
      type: 'finding',
      stat: '−58%',
      statLabel: 'CTR of position 1 with AI Overviews',
      label: 'Ahrefs, December 2025',
      text: 'Ahrefs compared 300,000 keywords and recorded a 58% fall in average CTR for position 1 where AI Overviews are present; position 2 fell 50.8% and position 3 fell 46.4% [Source 92].',
    },
    { type: 'heading', text: 'What this does to unit economics' },
    {
      type: 'paragraph',
      text: 'Claim: the value of ranking has shifted from "bring them to the site" to "be cited in the answer". Argument: if an AI summary appears on around 18% of searches [Source 78] and cuts up to 58% of clicks from top positions [Source 92], part of the SEO budget now buys visibility without a visit. Evidence: Pew found that 88% of AI summaries cite three or more sources — the mention becomes a distributed resource rather than a single winner\'s prize.',
    },
    { type: 'heading', text: 'Three measurements of click loss, side by side' },
    {
      type: 'list',
      items: [
        { title: 'Pew Research Center, 2025', desc: 'Share of visits with a click on any link — without AI: 15% · with AI: 8% — 900 US adults, KnowledgePanel, 68,879 searches, March 2025.' },
        { title: 'Ahrefs, 2026', desc: 'CTR of position 1 (desktop) — without AI: 0.076 → 0.037 (forecast) · with AI: 0.016 (observed) — 300,000 keywords, Google Search Console data, Dec 2023 vs Dec 2025.' },
        { title: 'SparkToro / Datos, 2024', desc: 'Clicks to the open web per 1,000 searches (US): 360 — tens of millions of panelists, Sep 2022 – May 2024.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Methodological caveat: Pew sampled only US adults over a single month (March 2025), and behaviour may differ by country and audience. SparkToro/Datos runs on a panel with minimal iOS device coverage, and ad blockers understate paid clicks. Ahrefs uses aggregated Search Console data, and its without-AI CTR is a modelled forecast rather than an observation.',
    },
    { type: 'heading', text: 'Why presence in the answer is its own value' },
    {
      type: 'paragraph',
      text: 'Claim: zero-click does not mean a lost user. Argument: Pew found roughly two thirds of searches ended in leaving or a new query with no click — yet a brand cited in the summary still shapes awareness and intent. Evidence: SparkToro notes total search volume rising while referrals to the open web sit at historic lows — the audience has not disappeared, the point of contact has moved.',
    },
    {
      type: 'paragraph',
      text: 'The practical conclusion: the "organic traffic" metric needs a companion — share of answer, the percentage of relevant AI answers in which the brand appears as a source. Share of answer is an additional metric, not a replacement for every SEO metric: it rises where CTR falls, and it is read alongside traffic, conversion and positions rather than instead of them.',
    },
    { type: 'heading', text: 'E-E-A-T: where the numbers come from' },
    {
      type: 'list',
      items: [
        { title: 'Pew Research Center', desc: 'Independent research centre — behaviour of 900 US users, March 2025 [Source 78].' },
        { title: 'SparkToro + Datos', desc: 'Analytics firm plus a data panel — clicks per 1,000 searches, US/EU, 2022–2024 [Source 83].' },
        { title: 'Ahrefs', desc: 'SEO platform — CTR across 300,000 keywords, Search Console, 2023 vs 2025 [Source 92].' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Ahrefs also notes that an earlier measurement (April 2025) put the decline at 34.5%, while independent studies from Seer Interactive, Kevin Indig and Authoritas reported falls in the 47.5–65.2% range — the estimates agree in order of magnitude and differ in method.',
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'How many clicks actually reach sites from Google?', desc: 'Per SparkToro/Datos (2024), about 360 of every 1,000 US searches produce a click to the open web, and 374 in the EU. Over 58% of searches end with no click, and almost 30% of clicks go to Google-owned properties.' },
        { title: 'How much does an AI summary reduce click-through?', desc: 'Pew Research (2025): the chance of a click falls from 15% to 8% when an AI summary is present. Ahrefs (2026): for content at position 1 the click loss reaches 58%.' },
        { title: 'If clicks are fewer, is content still worth it?', desc: 'Yes. AI summaries cite three or more sources 88% of the time (Pew). Content works for brand presence inside the answer and for shaping intent, even without a visit.' },
        { title: 'Which metric should I track instead of traffic?', desc: 'Share of answer — the percentage of relevant AI answers in which your brand appears as a source. It rises exactly where CTR falls.' },
      ],
    },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '78 · Pew Research Center, 2025', desc: 'Google users are less likely to click on links when an AI summary appears in the results. https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/ — research report.' },
        { title: '83 · SparkToro / Datos, 2024', desc: '2024 Zero-Click Search Study. https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/ — industry research.' },
        { title: '92 · Ahrefs, 2026', desc: 'AI Overviews Reduce Clicks by 58%. https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/ — industry research.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team.' },
        { title: 'Published', desc: '18 May 2026.' },
        { title: 'Updated', desc: '18 May 2026.' },
        { title: 'Sources', desc: 'Peer-reviewed work, preprints and industry research — the type is stated next to each claim.' },
        { title: 'Verification', desc: 'Every figure re-checked against the primary report, including the US/EU split, which the SparkToro URL slug transposes relative to the published title.' },
        { title: 'Caveat', desc: 'Preprints and industry reports are cited with their methodological limits; verify the conclusions on your own project.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The full list of sources and their reliability levels lives in the research catalogue.',
    },
  ],
};
