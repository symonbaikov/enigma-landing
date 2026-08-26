/* GEO for e-commerce — English edition.
   The E-GEO figures were re-read from the paper's abstract: it describes
   13,747 consumer product queries paired with 10 Amazon listings each. The
   Russian and Ukrainian editions state "7000+ queries", which the abstract
   does not support — worth correcting there too. */
export default {
  slug: 'geo-for-ecommerce',
  date: 'May 2026',
  readTime: '7 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'GEO for e-commerce: how products reach AI answers and AI shopping',
  subtitle: 'An AI assistant recommends specific products for a shopper\'s question — and the listing that best matches the intent and the constraints of that question can win, even where classic ranking does not explain the whole result. Here is what the research and the platform guides actually require.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'A query with constraints', desc: 'A shopper asks an assistant to "recommend wireless headphones under $200 with noise cancelling" — and your product is either in the answer or it is not.' },
        { title: 'Product cards written for old SEO', desc: 'Product pages are written for classic SEO, while the AI engine judges fit to intent, constraints and the context of the purchase.' },
        { title: 'Unclear what to tune', desc: 'It is not obvious what to change: the description copy, the structured data, or the Merchant Center feed.' },
      ],
    },
    { type: 'heading', text: 'What the E-GEO research says' },
    {
      type: 'paragraph',
      text: 'Claim: e-commerce GEO now has a measurable benchmark rather than heuristics alone. Argument: E-GEO (Bagga et al., 2025) is described as "the first dataset built specifically for e-commerce GEO" — 13,747 realistic consumer product queries, each paired with 10 Amazon listings. Evidence: the authors (Puneet S. Bagga, Vivek F. Farias, Tamar Korkotashvili, Tianyi Peng, Yuhang Wu) evaluated fifteen hand-crafted rewriting heuristics across several generative engines and LLM rewriters [Source 4].',
    },
    {
      type: 'finding',
      stat: '13,747',
      statLabel: 'product queries in the E-GEO dataset',
      label: 'Preprint (November 2025), not peer-reviewed',
      text: 'E-GEO (Bagga et al., 2025) is the first dataset built specifically for e-commerce GEO: 13,747 realistic consumer product queries, each paired with 10 Amazon listings [Source 4].',
    },
    {
      type: 'paragraph',
      text: 'Claim: under research conditions E-GEO found a durable pattern; test it on a live catalogue. Argument: the optimized prompts revealed "a stable, domain-agnostic pattern, suggesting the existence of a \'universally effective\' GEO strategy" within the benchmark — a signal of a potentially transferable strategy, not a proven guarantee across any assortment. Evidence: rather than leaning on heuristics, the authors framed GEO as an optimization problem and built "a lightweight prompt meta-optimization algorithm that significantly improves over heuristic baselines"; the paper also red-teams its own results to check that gains "reflect genuine content improvement rather than manipulation". The source remains a preprint [Source 4].',
    },
    {
      type: 'paragraph',
      text: 'Methodological caveat: this is a preprint (November 2025) that has not been peer-reviewed; the results come from a constructed query set and depend on the particular evaluating LLMs — transferability to live retail traffic needs checking.',
    },
    { type: 'heading', text: 'What helps a product into an AI answer: the platforms\' positions' },
    { type: 'heading', text: 'Google: feed and structure matter more than "special AI markup"' },
    {
      type: 'paragraph',
      text: 'Claim: for product visibility in Google\'s generative features, ordinary SEO fundamentals plus product feeds are what work. Argument: Google\'s AI features use retrieval and query fan-out over the existing index, so the page has to be indexed and eligible to appear with a snippet. Evidence: Google recommends Google Merchant Center and Google Business Profiles for surfacing products and local businesses in AI answers, and mentions the Business Agent tool for conversational shopping [Source 85].',
    },
    {
      type: 'paragraph',
      text: 'Claim: separate "AI markup" is a myth. Argument: Google states plainly that structured data is not required for generative AI search and that there is no special schema.org markup for AI, and that llms.txt files and artificial chunking are unnecessary. Evidence: structured data nevertheless remains part of the general SEO strategy for rich results [Source 85]. This is Google\'s own platform position.',
    },
    { type: 'heading', text: 'Microsoft Copilot: indexability and crawling for grounded answers' },
    {
      type: 'paragraph',
      text: 'Claim: for a product to reach a grounded Copilot answer, the page has to be well indexed in Bing. Argument: Copilot Studio over public websites works through Bing Custom Search and retrieval-augmented generation, checking the citability and relevance of results. Evidence: Microsoft recommends keeping the sitemap current, using IndexNow and the Bing URL Submission API, interlinking pages, applying dynamic rendering for Bingbot, and avoiding nofollow/noindex [Source 73]. This is Microsoft\'s platform position.',
    },
    {
      type: 'paragraph',
      text: 'An important caveat on dynamic rendering: the user and the bot must receive the same main content. Dynamic rendering is acceptable only for technical accessibility — rendering JavaScript for a crawler — and never for serving bots different content, which is cloaking and is penalized by search engines.',
    },
    { type: 'heading', text: 'Summary: what to optimize for AI shopping' },
    {
      type: 'list',
      items: [
        { title: 'Product data', desc: 'Precise fit of the listing to intent, constraints and purchase context — E-GEO, 2025 — high: the benchmark\'s core subject' },
        { title: 'Listing wording', desc: 'A domain-agnostic description structure (the optimized pattern) — E-GEO, 2025 — high: a "universally effective" strategy' },
        { title: 'Product feed', desc: 'Google Merchant Center / Business Profile — Google guide — high for Google AI features' },
        { title: 'Indexability', desc: 'Sitemap, IndexNow, internal links, no noindex — Microsoft guide — high for Copilot/Bing grounding' },
        { title: 'Baseline SEO', desc: 'Indexed plus snippet eligibility — Google guide — the precondition for entry' },
        { title: '"Special AI markup"', desc: 'llms.txt, artificial chunking — Google guide — not needed, not recommended' },
      ],
    },
    { type: 'heading', text: 'The practical takeaway on query intent' },
    {
      type: 'paragraph',
      text: 'Claim: e-commerce GEO optimizes for intent, not for a keyword. Argument: E-GEO deliberately builds its queries around intent, constraints and purchase context, while Google\'s AI features use query fan-out to split a question into sub-intents. Evidence: a listing that states the price range, the key constraints (size, compatibility, budget) and the use case explicitly matches both the structure of an E-GEO evaluation query and Google\'s fan-out sub-queries.',
    },
    { type: 'heading', text: 'E-E-A-T: the sources' },
    {
      type: 'list',
      items: [
        { title: 'Bagga et al., E-GEO', desc: 'arXiv preprint (2025) — a 13,747-query dataset, a universal optimization pattern — [Source 4]' },
        { title: 'Microsoft Copilot Studio', desc: 'Official documentation — indexability requirements for grounded answers — [Source 73]' },
        { title: 'Google Search Central', desc: 'Official guide — Merchant Center, and the absence of special AI markup — [Source 85]' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Caveat: E-GEO is a non-peer-reviewed preprint; the Google and Microsoft recommendations reflect those platforms\' own positions and may be updated.',
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Do I need special schema markup for a product to reach Google\'s AI answers?', desc: 'No. Google states that structured data is not required for generative search and that no special "AI" markup exists; use Merchant Center and ordinary SEO.' },
        { title: 'What matters more for AI shopping — ranking position or product data?', desc: 'Per E-GEO (2025), what decides it is the listing\'s fit to intent, constraints and purchase context; the authors found an optimization pattern that holds across categories.' },
        { title: 'How does a product reach Microsoft Copilot answers?', desc: 'Through Bing Custom Search and RAG. It needs solid indexing: sitemap, IndexNow or the Bing Submission API, internal links, and no noindex.' },
        { title: 'Is there a universal GEO strategy for a catalogue?', desc: 'E-GEO points to a stable, domain-agnostic pattern in listing optimization. It is a preprint without peer review — test it on your own assortment.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team' },
        { title: 'Published', desc: '18 May 2026' },
        { title: 'Updated', desc: '18 May 2026' },
        { title: 'Sources', desc: 'Preprints and official platform documentation — the type is stated next to each claim' },
        { title: 'Verification', desc: 'The E-GEO figures were re-read from the paper\'s abstract, which reports 13,747 queries paired with 10 listings each' },
        { title: 'Caveat', desc: 'Preprints and platform guidance are cited with their limits; verify the conclusions on your own catalogue' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The full list of sources and their reliability levels lives in the research catalogue.',
    },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '4 · Bagga et al., 2025', desc: 'E-GEO: A Testbed for Generative Engine Optimization in E-Commerce. https://arxiv.org/abs/2511.20867 — preprint.' },
        { title: '73 · Microsoft Copilot Studio, current version', desc: 'Use public websites for generative answers. https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites — official documentation.' },
        { title: '85 · Google Search Central, 2026', desc: 'Google\'s Guide to Optimizing for Generative AI Features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — official documentation.' },
      ],
    },
  ],
};
