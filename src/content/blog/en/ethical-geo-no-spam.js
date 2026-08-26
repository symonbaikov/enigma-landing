/* Ethical GEO: where clear content ends and spam begins — English edition.
   Google's spam definitions quoted from the current policy page; DeepRetrieval's
   figures from its abstract. The Wallat-style caveat is kept for Wen et al.,
   whose full text was unavailable. */
export default {
  slug: 'ethical-geo-no-spam',
  date: 'May 2026',
  readTime: '7 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Ethical GEO: where clear content ends and spam begins',
  subtitle: 'The line is not drawn between optimizing and not optimizing. It is drawn between helping AI give the right answer and substituting your own. This piece draws it against specific criteria.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'paragraph',
      text: 'GEO vendors promise "placement in AI answers" while their methods differ wildly in risk. What teams actually struggle with:',
    },
    {
      type: 'list',
      items: [
        { title: 'A blurred line', desc: 'It is unclear where legitimate content structuring ends and manipulation of the results begins.' },
        { title: 'Tactics that brush the policy', desc: 'A vendor deploys techniques that technically work and fall squarely under the spam policy.' },
        { title: 'A delayed penalty', desc: 'The risk does not materialize immediately — and the rules have already changed for generative search.' },
      ],
    },
    { type: 'heading', text: 'Where the line actually runs' },
    {
      type: 'paragraph',
      text: 'Ethical GEO improves the extractability of honest content. Spam is the attempt to make AI say something the source does not support. The difference is not stylistic but operational — and it is now written into the search engine\'s rules.',
    },
    { type: 'heading', text: 'The rule is now explicit: manipulating AI answers is spam' },
    {
      type: 'paragraph',
      text: 'Claim: since May 2026 the manipulation of generative answers is named as spam outright, not treated as a grey area. Argument: Google rewrote its opening definition of spam. Evidence: the Google Search Central spam policy now defines spam as "techniques used to deceive users or manipulate our Search systems into featuring content prominently, such as attempting to manipulate Search systems into ranking content highly or attempting to manipulate generative AI responses in Google Search" [Source 86].',
    },
    { type: 'heading', text: 'Mass-producing content for ranking is already spam' },
    {
      type: 'paragraph',
      text: 'Claim: volume of content aimed at reaching answers is a category of violation, not a tactic. Argument: the policy calls out scaled content abuse separately. Evidence: Google defines it as the case where "many pages are generated for the primary purpose of manipulating search rankings and not helping users", which covers mass AI page generation and the recombination of content without added value [Source 86].',
    },
    { type: 'heading', text: 'Different content for people and machines is classic cloaking' },
    {
      type: 'paragraph',
      text: 'Claim: an "AI version" kept separate from the human version is disguise. Argument: cloaking is defined as showing different content to users and to search engines in order to manipulate. Evidence: the policy names it a violation — "presenting different content to users and search engines with the intent to manipulate search rankings and mislead users" [Source 86].',
    },
    { type: 'heading', text: 'Why "pressuring the retriever" is technically possible and ethically over the line' },
    {
      type: 'paragraph',
      text: 'Claim: optimizing a query or content against a retriever metric demonstrably moves that metric. Argument: research shows retrieval metrics respond to deliberate reformulation. Evidence: DeepRetrieval (2025, preprint) trains an LLM with reinforcement learning to generate queries against a retrieval reward, lifting recall to "65.07% (vs. previous SOTA 24.68%) recall for publication search and 63.18% (vs. previous SOTA 32.11%) recall for trial search using real-world search engines", with a 3B-parameter model outperforming "industry-leading models like GPT-4o and Claude-3.5-Sonnet on 11/13 datasets" [Source 23]. It is cited here as a cautionary preprint result — an illustration of the risk, not a how-to.',
    },
    {
      type: 'paragraph',
      text: 'The ethical reading: DeepRetrieval shows that a retriever\'s output is a metric that can be optimized against. That is the demarcation. Phrasing your own honest content for extractability is legitimate; training a system to displace more relevant sources for the sake of a metric is the move into manipulation that the spam policy targets.',
    },
    {
      type: 'paragraph',
      text: 'Claim: the research community treats GEO risk as a position question rather than a footnote. Argument: there is now a dedicated position paper on the risks of GEO in the era of LLMs. Evidence: "Position: On the Risks of Generative Engine Optimization in the Era of LLMs" (Wen et al., 2025, preprint, TechRxiv) frames GEO risk as a problem in its own right [Source 22]. Note: the full text of this source was unavailable at the time of writing; only the framing of the problem, per title and authorship, is reflected here — no internal data is reproduced.',
    },
    { type: 'heading', text: 'The practical demarcation' },
    {
      type: 'list',
      items: [
        { title: 'Content structure', desc: 'Ethical GEO: headings, tables, definitions for extractability — Spam: hidden text, keyword stuffing — Rule: Google on hidden text and keyword stuffing' },
        { title: 'Volume', desc: 'Ethical GEO: pages carrying unique value — Spam: mass AI generation for ranking — Rule: Google on scaled content abuse' },
        { title: 'Audience for the content', desc: 'Ethical GEO: one content for people and robots — Spam: a separate "AI version" — Rule: Google on cloaking' },
        { title: 'Working with the retriever', desc: 'Ethical GEO: honest phrasing of your own material — Spam: training a system to displace relevant sources — Rule: the principle from [Source 23] (preprint)' },
        { title: 'Purpose', desc: 'Ethical GEO: help AI answer accurately — Spam: make AI answer in your favour — Rule: [Source 86, 22]' },
      ],
    },
    { type: 'heading', text: 'E-E-A-T: what the conclusions rest on' },
    {
      type: 'list',
      items: [
        { title: '22 · Wen et al., 2025', desc: 'Position: On the Risks of GEO in the Era of LLMs — preprint (TechRxiv) — frames GEO risk as a problem in its own right (full text unavailable) [Source 22]' },
        { title: '23 · DeepRetrieval, 2025', desc: 'DeepRetrieval: Hacking Real Search Engines and Retrievers — preprint (arXiv) — RL query reformulation: recall 24.68%→65.07% and 32.11%→63.18% [Source 23]' },
        { title: '86 · Google Search Central, 2026', desc: 'Spam Policies (updated 15 May 2026) — official policy — manipulation of generative AI responses is explicitly inside the definition of spam [Source 86]' },
      ],
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Is structuring content for AI search already manipulation?', desc: 'No. Headings, tables and definitions improve the extractability of honest content. Manipulation begins where you try to make AI say something your source does not support.' },
        { title: 'Does Google really penalize manipulation of AI answers?', desc: 'Yes. The Google spam policy, in its 15 May 2026 update, explicitly includes attempts to manipulate generative AI responses in the definition of spam.' },
        { title: 'Is mass AI page generation for GEO spam?', desc: 'Yes, when pages are generated primarily for ranking and add no value. Google classifies that as scaled content abuse.' },
        { title: 'Can I optimize queries against the retriever?', desc: 'Phrasing your own material honestly — yes. But DeepRetrieval shows that a retriever\'s output can be steered; training a system to displace more relevant sources is the step into manipulation.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team' },
        { title: 'Published', desc: '18 May 2026' },
        { title: 'Updated', desc: '18 May 2026' },
        { title: 'Sources', desc: 'Preprints and official policy — the type is stated next to each claim' },
        { title: 'Verification', desc: 'The spam definitions are quoted from the current Google policy page; the DeepRetrieval figures from its abstract' },
        { title: 'Caveat', desc: 'Where a full text was unavailable, that is stated at the claim; policies change, so check the primary sources' },
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
        { title: '22 · Wen et al., 2025', desc: 'Position: On the Risks of Generative Engine Optimization in the Era of LLMs. https://www.techrxiv.org/doi/full/10.36227/techrxiv.176620816.64043115 — preprint.' },
        { title: '23 · DeepRetrieval, 2025', desc: 'DeepRetrieval: Hacking Real Search Engines and Retrievers with Large Language Models via Reinforcement Learning. https://arxiv.org/abs/2503.00223 — preprint.' },
        { title: '86 · Google Search Central, 2026', desc: 'Spam Policies for Google Web Search (updated 15 May 2026). https://developers.google.com/search/docs/essentials/spam-policies — official documentation.' },
      ],
    },
  ],
};
