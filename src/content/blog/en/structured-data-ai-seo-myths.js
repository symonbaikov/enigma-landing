/* Structured data, FAQPage and the myths of AI SEO — English edition.
   Every Google quotation re-read from Search Central, including the FAQ rich
   result deprecation date, which is confirmed on the FAQPage documentation. */
export default {
  slug: 'structured-data-ai-seo-myths',
  date: 'May 2026',
  readTime: '6 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Structured data, FAQPage and the myths of AI SEO',
  subtitle: 'Structured data helps with rich results in classic search — it is not a ticket into AI answers. Here is where the markup works, and where the myth of "special AI markup" begins.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'AI markup pushed on you', desc: 'Someone is selling "AI markup" or "semantic chunking for LLMs" as a precondition for appearing in AI Overviews.' },
        { title: 'Confusion about FAQPage', desc: 'It is unclear whether FAQPage markup is needed and whether it guarantees a rich snippet.' },
        { title: 'Markup "just in case"', desc: 'There is a temptation to add structured data speculatively, including about content the user never sees.' },
      ],
    },
    { type: 'heading', text: 'What structured data actually does' },
    {
      type: 'paragraph',
      text: 'Structured data is "a standardized format for providing information about a page and classifying the page content", which helps Google understand the page explicitly [Source 68]. Its practical purpose is rich results — the enhanced elements in the results page that raise engagement.',
    },
    {
      type: 'paragraph',
      text: 'The effect on CTR is measurable, but it belongs to classic search rather than AI. In Google\'s case studies, Rotten Tomatoes "measured a 25% higher click-through rate for pages enhanced with structured data, compared to pages without structured data", and Nestlé "measured pages that show as rich results in search have an 82% higher click through rate than non-rich result pages" [Source 68]. An important caveat: these are individual Google case studies, not a forecast of CTR gain for any given page. They argue for markup as such — they do not demonstrate any effect on generative answers.',
    },
    {
      type: 'finding',
      stat: '+82%',
      statLabel: 'CTR for Nestlé on rich results',
      label: 'An individual Google case study, not a forecast for every page',
      text: 'In Google\'s case studies Rotten Tomatoes measured a 25% higher CTR for pages with structured data, and Nestlé an 82% higher CTR for rich-result pages than non-rich ones. These are individual case studies, not a forecast of CTR gain for every page [Source 68].',
    },
    {
      type: 'paragraph',
      text: 'JSON-LD is the recommended format: Google supports JSON-LD, Microdata and RDFa, but marks JSON-LD as recommended and calls it "the easiest solution for website owners to implement and maintain at scale (in other words, less prone to user errors)".',
    },
    { type: 'heading', text: 'Myth 1: "You need special AI markup"' },
    {
      type: 'paragraph',
      text: 'The myth claims AI Overviews have their own schema. The counter-argument is Google\'s own position: "There\'s also no special schema.org structured data that you need to add" and "You don\'t need to create new machine readable files, AI text files, or markup to appear in these features" [Source 65]. The AI optimization guide repeats it: "Structured data isn\'t required for generative AI search, and there\'s no special schema.org markup you need to add" [Source 85].',
    },
    { type: 'heading', text: 'Myth 2: "Content must be chopped into chunks for AI"' },
    {
      type: 'paragraph',
      text: 'Google refutes this directly: there is no requirement to chunk your content into tiny pieces for AI to understand it better, and its systems are able to understand the nuances of multiple topics on a page [Source 85]. Artificial "chunking for LLMs" as a mandatory technique is a myth.',
    },
    { type: 'heading', text: 'Myth 3: "Mark everything up, just in case"' },
    {
      type: 'paragraph',
      text: 'This is not merely useless — it is a violation. Google prohibits fabrication: do not "create blank or empty pages just to hold structured data, and don\'t add structured data about information that is not visible to the user, even if the information is accurate" [Source 68]. Markup describing invisible content is a spam violation, not an optimization.',
    },
    { type: 'heading', text: 'FAQPage: where the truth sits' },
    {
      type: 'paragraph',
      text: 'FAQPage is valid schema, but it is not a guarantee. Google stresses that structured data does not guarantee a rich result, and that it is "more important to supply fewer but complete and accurate recommended properties rather than trying to provide every possible recommended property with less complete, badly-formed, or inaccurate data". Add the visibility rule from Myth 3: FAQ markup has to match questions and answers actually visible on the page.',
    },
    { type: 'heading', text: 'FAQPage: the important 2026 caveat' },
    {
      type: 'paragraph',
      text: 'Google announced that the FAQ rich result "will no longer appear in Google Search starting May 7, 2026", and later removed the feature documentation entirely. FAQPage remains valid schema.org markup and can still serve non-Google consumers — other parsers and systems — but as a Google rich-result tool it is obsolete. Include FAQPage only when the page carries a visible FAQ that matches the markup exactly [Source 68].',
    },
    { type: 'heading', text: 'E-E-A-T: what separates value from myth' },
    {
      type: 'list',
      items: [
        { title: 'Special AI markup is mandatory for AIO', desc: 'Myth — Google: AI features; AI optimization guide' },
        { title: 'Content must be chunked for AI', desc: 'Myth — Google AI optimization guide' },
        { title: 'You can mark up invisible content "just in case"', desc: 'Myth (a violation) — Google: Intro to structured data' },
        { title: 'Structured data raises CTR in classic search', desc: 'Fact — case studies: Rotten Tomatoes (+25%), Nestlé (+82%)' },
        { title: 'FAQPage guarantees a rich snippet', desc: 'Myth — Google: structured data does not guarantee a rich result' },
        { title: 'JSON-LD is the preferred format', desc: 'Fact — Google marks JSON-LD as recommended' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The central tension: structured data is genuinely useful — a measurable CTR gain on rich results — but its value lies in classic search and in valid machine understanding of the page, not in a mythical "AI channel". The very Google documents that praise markup deny that it is required for generative features.',
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Do I need special schema markup to appear in AI Overviews?', desc: 'No. Google states outright that there is no special schema.org markup and no AI files are needed; ordinary indexability and content quality are enough.' },
        { title: 'Does FAQPage markup guarantee an enhanced snippet?', desc: 'No. Google states that structured data does not guarantee a rich result; completeness and accuracy of properties matter more, as does matching the visible content of the page.' },
        { title: 'Should I split articles into small blocks for AI?', desc: 'No. Google says there is no requirement to chunk content into tiny pieces — its systems understand multiple topics on one page.' },
        { title: 'Can I add structured data about hidden content?', desc: 'No, that is a violation. Google prohibits markup about information not visible to the user, and blank pages created to hold structured data.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team' },
        { title: 'Published', desc: '18 May 2026' },
        { title: 'Updated', desc: '18 May 2026' },
        { title: 'Sources', desc: 'Official Google documentation — the document is stated next to each claim' },
        { title: 'Verification', desc: 'Every quotation re-read from Search Central, including the FAQ rich result deprecation date on the FAQPage documentation' },
        { title: 'Caveat', desc: 'Platform documentation changes; check the primary sources before acting on them' },
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
        { title: '65 · Google Search Central, 2026', desc: 'AI features and your website. https://developers.google.com/search/docs/appearance/ai-features — official documentation.' },
        { title: '68 · Google Search Central, current version', desc: 'Introduction to structured data markup in Google Search. https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data — official documentation.' },
        { title: '85 · Google Search Central, 2026', desc: 'Google\'s Guide to Optimizing for Generative AI Features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — official documentation.' },
      ],
    },
  ],
};
