/* What GEO/AEO is and how it differs from SEO — English edition of the audited post.
   Quotes are the sources' own English wording, verified against the originals
   (arXiv abstracts and Google Search Central), not back-translations. */
export default {
  slug: 'geo-aeo-vs-seo',
  date: 'May 2026',
  readTime: '7 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'What GEO/AEO is and how it differs from SEO',
  subtitle: 'GEO and AEO do not replace SEO — they are a layer on top of it: optimizing for how generative engines pick and cite sources, not only for position in the blue links.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'Traffic exists, AI visibility is unknown', desc: 'You can see the traffic from Google and still have no idea whether your content reaches AI Overviews or the answers of ChatGPT and Perplexity.' },
        { title: '"AI SEO" sold as magic', desc: 'Vendors sell "AI SEO" as a separate craft with its own special markup, and you have no way to tell whether that is true.' },
        { title: 'Three terms, zero clarity', desc: 'There are three terms (SEO, GEO, AEO) and nowhere a plain account of which one covers what, and why.' },
      ],
    },
    { type: 'heading', text: 'Three terms without the hype' },
    { type: 'paragraph', text: 'SEO optimizes a page for ranking in a classic list of links. GEO — Generative Engine Optimization — optimizes content for being cited inside a generated answer. The wording comes from the original paper by Aggarwal et al., which introduces GEO as "the first novel paradigm to aid content creators in improving their content visibility in generative engine responses through a flexible black-box optimization framework" [Source 01] (preprint, accepted at KDD 2024).' },
    { type: 'paragraph', text: 'The core problem GEO names is loss of control. The authors write plainly that content creators "have little to no control over when and how their content is displayed" in generative engines. In SEO you can at least see your position; in a generated answer your brand may be absent while the page still ranks.' },
    { type: 'paragraph', text: 'AEO — Answer Engine Optimization — is in practice a behavioural subset of GEO: preparing content for the direct extraction of an answer to a specific question (voice search, an AI snippet, an FAQ answer). The border between GEO and AEO is blurred; academic work uses GEO, industry uses AEO more often.' },
    { type: 'heading', text: 'What GEO optimizations actually deliver' },
    { type: 'paragraph', text: 'In the original GEO-Bench benchmark the authors tested black-box methods on queries across domains and reported a concrete ceiling: "GEO can boost visibility by up to 40% in generative engine responses" [Source 01] (preprint). The same paper carries the caveat that matters: "the efficacy of these strategies varies across domains" — there is no single recipe, and domain-specific tuning is required.' },
    {
      type: 'finding',
      stat: '+40%',
      statLabel: 'ceiling on the visibility gain',
      label: 'GEO-BENCH',
      text: 'In the original benchmark, GEO methods raised visibility in generative engine responses by up to 40%, but the effect depends heavily on the domain [Source 01].',
    },
    { type: 'paragraph', text: 'A more recent preprint by Chen, Wang, Chen and Koudas adds a finding brands should sit with: AI Search shows "a systematic and overwhelming bias towards Earned media (third-party, authoritative sources) over Brand-owned and Social content, a stark contrast to Google\'s more balanced mix" [Source 02] (preprint). In practice: for generative engines, mentions on independent authoritative sites weigh more than your own landing page.' },
    { type: 'heading', text: 'GEO versus SEO: the summary table' },
    {
      type: 'list',
      items: [
        { title: 'Goal', desc: 'SEO — the page\'s position in a list of links · GEO/AEO — appearing and being cited inside the generated answer.' },
        { title: 'Unit of visibility', desc: 'SEO — the URL and its position · GEO/AEO — the claim or fact, and its attribution to a source.' },
        { title: 'Author control', desc: 'SEO — partial, the position is visible · GEO/AEO — low: no control over "when and how" the content is shown [Source 01].' },
        { title: 'What weighs more', desc: 'SEO — relevance plus links to your domain · GEO/AEO — earned media and third-party authority [Source 02].' },
        { title: 'Stability of tactics', desc: 'SEO — relatively stable · GEO/AEO — depends on the domain and on the specific engine.' },
      ],
    },
    { type: 'heading', text: 'E-E-A-T: what Google itself says' },
    { type: 'paragraph', text: 'The strongest counter to the "special AI SEO" hype is Google\'s own position. Its guidance on AI features states plainly: "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary," and "You don\'t need to create new machine readable files, AI text files, or markup to appear in these features. There\'s also no special schema.org structured data that you need to add" [Source 65].' },
    { type: 'paragraph', text: 'The guide to optimizing for generative AI features confirms it: "The best practices for SEO continue to be relevant because our generative AI features on Google Search are rooted in our core Search ranking and quality systems" [Source 85].' },
    {
      type: 'list',
      items: [
        { title: 'Aggarwal et al. 2024', desc: 'preprint arXiv:2311.09735 — GEO as a paradigm; up to +40% visibility; variance across domains.' },
        { title: 'Chen et al. 2025', desc: 'preprint arXiv:2509.08919 — a strong bias in AI search toward earned media.' },
        { title: 'Google: AI features', desc: 'official documentation — no special AI markup needed; baseline SEO is enough for eligibility.' },
        { title: 'Google: AI optimization guide', desc: 'official documentation — generative features are rooted in core ranking; there is no "special style" for AI.' },
      ],
    },
    { type: 'paragraph', text: 'There is a productive tension here: the research shows that experimental GEO methods produce a measurable effect under research conditions, which is not the same as a safe production tactic — while Google insists that special AI optimization does not exist. Both are right in their own frame. Google is talking about technical eligibility; the researchers are talking about competitive visibility among pages that are already eligible.' },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'What is the difference between GEO and SEO, in plain words?', desc: 'SEO competes for the position of a link in the results. GEO competes for your content to be cited inside the finished AI answer. GEO works on top of SEO, not instead of it.' },
        { title: 'Do I need special markup to appear in AI Overviews?', desc: 'No. Google states outright that no special machine-readable files or schema.org markup are needed; it is enough that the page is indexed and eligible to appear with a snippet.' },
        { title: 'Are GEO and AEO the same thing?', desc: 'Almost. AEO (Answer Engine Optimization) is in practice a narrow subset of GEO focused on directly answering a specific question. Academic work favours the term GEO.' },
        { title: 'Do GEO tactics guarantee growth?', desc: 'There is no guarantee. The preprint arXiv:2311.09735 reports a ceiling of up to +40% visibility, but the effect depends heavily on the domain and the specific generative engine.' },
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
        { title: 'Verification', desc: 'Key claims checked against current Google Search Central documentation (May 2026); quotations reproduce the sources\' own English wording.' },
        { title: 'Caveat', desc: 'Preprints and industry reports are cited with their methodological limits; verify the conclusions on your own project.' },
      ],
    },
    { type: 'paragraph', text: 'The full list of sources and their reliability levels lives in the research catalogue.' },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '01 · Aggarwal et al., 2024', desc: 'GEO: Generative Engine Optimization. https://arxiv.org/abs/2311.09735 — preprint.' },
        { title: '02 · Chen, Wang, Chen, Koudas, 2025', desc: 'Generative Engine Optimization: How to Dominate AI Search. https://arxiv.org/abs/2509.08919 — preprint.' },
        { title: '65 · Google Search Central, 2026', desc: 'AI features and your website. https://developers.google.com/search/docs/appearance/ai-features — official documentation.' },
        { title: '85 · Google Search Central, 2026', desc: 'Google\'s Guide to Optimizing for Generative AI Features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — official documentation.' },
      ],
    },
  ],
};
