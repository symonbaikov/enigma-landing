/* Google AI Overviews: what a site owner needs to know — English edition.
   Google's quotations are taken from the original "How AI Overviews in Search
   work" PDF (July 2024) and Search Central; the independent figures from the
   Xu/Iqbal/Montgomery preprint abstract. */
export default {
  slug: 'google-ai-overviews-guide',
  date: 'May 2026',
  readTime: '6 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Google AI Overviews: what a site owner needs to know',
  subtitle: 'AI Overviews is not a separate product with its own rules but a layer on top of Google\'s core ranking. Here is how sources get in, and what independent measurement says about traffic.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'The effect on clicks is unclear', desc: 'You see the AI block above the results and cannot tell whether it is taking your clicks.' },
        { title: 'The triggers are unclear', desc: 'It is not obvious which queries turn AI Overviews on at all, or whether you can influence that.' },
        { title: 'Myth versus reality', desc: 'Vendors push "AIO optimization" with no clarity about what is real and what is invented.' },
      ],
    },
    { type: 'heading', text: 'How AI Overviews work, according to Google itself' },
    {
      type: 'paragraph',
      text: 'AI Overviews use "a customized Gemini model, which works in tandem with our existing Search systems – like our quality and ranking systems and the Google Knowledge Graph". This is not a standalone chatbot: the block is "designed to carry out traditional \'search\' tasks, like identifying relevant, high-quality results from our index to corroborate the information presented in the overview" [Source 65, 66, 85].',
    },
    {
      type: 'paragraph',
      text: 'The key selection mechanism is corroboration. Google writes that "AI Overviews are built to only surface information that is backed up by top web results, and include links to web content that supports the information presented in the overview". For YMYL queries — health, finance — "we have an even higher bar for showing supporting information from reliable and trustworthy sources" [Source 65].',
    },
    {
      type: 'paragraph',
      text: 'Triggering is deliberately limited. Google says the block was "designed to show up on queries where they can add additional benefit beyond what people might already get on Search today", while the company "aim[s] to not show AI Overviews for hard news topics, where freshness and factuality are particularly important", and restricts election-related queries [Source 65].',
    },
    { type: 'heading', text: 'What a site owner has to do (and what they do not)' },
    {
      type: 'paragraph',
      text: 'Nothing special is required. Google: to be eligible to appear as a supporting link in AI Overviews or AI Mode, a page needs to be indexed and eligible to appear in Google Search with a snippet [Source 66].',
    },
    {
      type: 'paragraph',
      text: 'No special markup is needed. Verbatim: "You don\'t need to create new machine readable files, AI text files, or markup to appear in these features. There\'s also no special schema.org structured data that you need to add" [Source 66]. The AI optimization guide adds: "Structured data isn\'t required for generative AI search, and there\'s no special schema.org markup you need to add", and there is no requirement to chunk your content into tiny pieces for AI to understand it better [Source 85].',
    },
    {
      type: 'paragraph',
      text: 'Display is controlled through the standard directives: nosnippet, data-nosnippet, max-snippet, noindex, robots.txt, and Google-Extended for limiting AI training [Source 66].',
    },
    { type: 'heading', text: 'What independent measurement shows' },
    {
      type: 'paragraph',
      text: 'Google\'s official line is optimistic: "people who use AI Overviews actually use Search more and are more satisfied with their results", and clicks from the block are "higher quality". The independent preprint by Xu, Iqbal and Montgomery gives a measurable and harsher picture, drawn from 55,393 trending queries across 19 topical categories over a 40-day window (13 March – 21 April 2026) [Source 87].',
    },
    {
      type: 'finding',
      stat: '13.7%',
      statLabel: 'of queries trigger an AIO',
      label: 'Measurement in arXiv:2605.14021 (preprint)',
      text: 'Overall AI Overviews activation runs at 13.7% of queries, rising to 64.7% on question-form queries; nearly 30% of AIO sources do not appear in the first page of organic results [Source 87].',
    },
    {
      type: 'list',
      items: [
        { title: 'Overall AIO activation', desc: '13.7% of queries' },
        { title: 'Activation on question-form queries', desc: '64.7%' },
        { title: 'Cited domains versus the first page of results', desc: 'AIO domains are on average more authoritative' },
        { title: 'AIO sources absent from the top results', desc: 'nearly 30%' },
        { title: 'Atomic claims analysed', desc: '98,020' },
        { title: 'Claims unsupported by the cited page', desc: '11.0% (omission is the dominant failure mode)' },
        { title: 'AIO-cited pages carrying display advertising', desc: 'well over half' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Two findings sit in tension with Google\'s position. First, about 30% of cited sources are not on the first page of results: the AI Overviews source set overlaps the classic results without being identical to them, and independent measurement points to partial divergence rather than a contradiction of being rooted in core ranking. Second, 11% of claims are not supported by the page cited — which contrasts with Google\'s statement that AI Overviews "generally don\'t \'hallucinate\' in the ways that other LLM experiences might" [Source 87].',
    },
    { type: 'heading', text: 'E-E-A-T: the sources in brief' },
    {
      type: 'list',
      items: [
        { title: 'Google: How AI Overviews work (July 2024)', desc: 'official PDF — corroboration by top results; a customized Gemini plus core ranking; a higher bar for YMYL' },
        { title: 'Google: AI features', desc: 'official documentation — eligibility = indexed plus snippet-eligible; no special markup; display controls' },
        { title: 'Google: AI optimization guide', desc: 'official documentation — structured data not required; no chunking requirement' },
        { title: 'Xu/Iqbal/Montgomery 2026', desc: 'preprint arXiv:2605.14021 — 13.7% activation (64.7% on questions); ~30% of sources outside the top results; 11% unsupported claims' },
      ],
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Which queries produce an AI Overview?', desc: 'By independent measurement (preprint arXiv:2605.14021), roughly 13.7% of queries overall and up to 64.7% of question-form queries. Google deliberately withholds the block for hard news and sensitive election topics.' },
        { title: 'Do I need special optimization to appear in AI Overviews?', desc: 'No. Google requires only that the page be indexed and eligible to appear with a snippet. No special schema.org markup or AI files are needed.' },
        { title: 'Can I stop my content being used in AI Overviews?', desc: 'Partly. Preview and indexing controls (nosnippet, data-nosnippet, noindex) limit snippet display and eligibility. Google-Extended governs the use of content for training and grounding in Gemini Apps and Vertex AI, but it does NOT govern whether a page appears in AI Overviews.' },
        { title: 'Are AI Overviews always accurate?', desc: 'No. Google states that they are corroborated by top results, but the independent preprint found 11.0% of atomic claims unsupported by the cited page, most often through omitted context.' },
      ],
    },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '65 · Google, 2024', desc: 'How AI Overviews work. https://www.google.com/search/howsearchworks/google-about-AI-overviews.pdf — official PDF (Google\'s own explanation).' },
        { title: '66 · Google, 2026', desc: 'AI features (Google Search Central). https://developers.google.com/search/docs/appearance/ai-features — official documentation.' },
        { title: '85 · Google, 2026', desc: 'AI optimization guide (Google Search Central). https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — official documentation.' },
        { title: '87 · Xu/Iqbal/Montgomery, 2026', desc: 'An independent measurement of AI Overviews activation and citation. https://arxiv.org/abs/2605.14021 — arXiv preprint.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team' },
        { title: 'Published', desc: '18 May 2026' },
        { title: 'Updated', desc: '18 May 2026' },
        { title: 'Sources', desc: 'Peer-reviewed work, preprints and industry research — the type is stated next to each claim' },
        { title: 'Verification', desc: 'Google quotations come from the original July 2024 PDF and current Search Central pages; the independent figures from the preprint abstract' },
        { title: 'Caveat', desc: 'Preprints and industry reports are cited with their methodological limits; verify the conclusions on your own project' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The full list of sources and their reliability levels lives in the research catalogue.',
    },
  ],
};
