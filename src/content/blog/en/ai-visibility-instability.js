/* Why AI visibility cannot be measured with one prompt — English edition.
   Quotes verified against the papers' abstracts (Schulte 2026, RGB, RAGAS).
   Source numbering follows docs/blog-research.md: 44 = RAGAS, 45 = RGB. The
   Russian and Ukrainian editions have those two numbers swapped. */
export default {
  slug: 'ai-visibility-instability',
  date: 'May 2026',
  readTime: '6 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Why AI visibility cannot be measured with a single prompt',
  subtitle: 'One question to ChatGPT is not a measurement of visibility — it is one observation drawn from a distribution. Visibility in AI search is a distribution, and it has to be measured as one.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'paragraph',
      text: 'A team checks the brand in AI search by hand: open the chat, ask the question, see the brand, report "we are visible". A week later the client asks the same question and the brand is gone. What went wrong:',
    },
    {
      type: 'list',
      items: [
        { title: 'The answer is unstable', desc: 'A generative model\'s answer changes from run to run, even for an identical prompt.' },
        { title: 'It depends on phrasing', desc: 'It changes when the prompt is rephrased, and it changes over time.' },
        { title: 'One measurement is not a fact', desc: 'A single measurement is a point estimate of a random variable, not a fact.' },
      ],
    },
    { type: 'heading', text: 'Why the classic "measure once" logic breaks here' },
    {
      type: 'paragraph',
      text: 'Claim. In classic search a single query gives a representative snapshot of the results. In generative search that assumption falls apart.',
    },
    {
      type: 'paragraph',
      text: 'Argument. Schulte sets the two paradigms against each other: in classical search engines "a single query often provides a representative snapshot of where a page or brand appears relative to competitors", whereas for LLM-based search "answers can vary across runs, prompts, and time, making one-off observations unreliable".',
    },
    {
      type: 'paragraph',
      text: 'Evidence. The paper\'s central methodological contribution is to reframe visibility measurement from a binary, single-point outcome into a probabilistic characterization requiring repeated observations under varying conditions — the recommendation is to "characterize visibility as a distribution rather than a single-point outcome" [Source 06].',
    },
    {
      type: 'paragraph',
      text: 'Consequence. "The brand is mentioned / not mentioned" is not a metric. The metric is the share of runs in which the brand is mentioned, with a confidence interval.',
    },
    { type: 'heading', text: 'Where the instability comes from: three independent axes' },
    {
      type: 'paragraph',
      text: 'Claim. Answer variability is not a bug in one model but a property of the whole RAG pipeline.',
    },
    {
      type: 'paragraph',
      text: 'Argument. On the RGB benchmark, Chen et al. showed that LLMs in a RAG setting stumble on three of four fundamental abilities: negative rejection (refusing to use irrelevant context), information integration (synthesizing several fragments) and counterfactual robustness (resisting false information in the retrieved set). Only noise robustness holds up acceptably.',
    },
    {
      type: 'paragraph',
      text: 'Evidence. Across six representative LLMs the authors conclude that despite how critical these abilities are, "there is still a considerable journey ahead to effectively apply RAG to LLMs" [Source 45].',
    },
    {
      type: 'paragraph',
      text: 'Consequence. If the model integrates and filters retrieved fragments unreliably, the mention of your brand is unreliable from run to run — with nothing changed on your site.',
    },
    { type: 'heading', text: 'Three axes of variance (to fold into one measurement system)' },
    {
      type: 'list',
      items: [
        { title: 'Run stochasticity', desc: 'The same prompt yields different answers — run each prompt N times and count the share of mentions.' },
        { title: 'Prompt phrasing', desc: 'A rephrasing changes retrieval and the answer — use a set of paraphrases per intent and aggregate.' },
        { title: 'Time', desc: 'The index and the model both update — repeat the measurement across time windows and track the trend.' },
      ],
    },
    { type: 'heading', text: 'How to measure properly: repetition, windows, probabilistic metrics' },
    {
      type: 'paragraph',
      text: 'Claim. Visibility has to be judged as a distribution across many runs, not as one value.',
    },
    {
      type: 'paragraph',
      text: 'Argument. Schulte recommends exactly that — characterize visibility as a distribution rather than a point estimate, through repeated measurement under varying conditions [Source 06]. Which demands automation: a manual check does not scale to N runs × M paraphrases × K windows.',
    },
    {
      type: 'paragraph',
      text: 'Evidence. RAGAS answers the automation requirement: a framework for reference-free evaluation of RAG pipelines without manual annotation, shortening the evaluation cycle for architectures. It measures several dimensions — retrieval quality (relevance of the retrieved context), generation faithfulness (how honestly the LLM leans on the passages) and the quality of the answer itself [Source 44].',
    },
    {
      type: 'paragraph',
      text: 'Consequence. A practical protocol for measuring AI visibility: (1) fix the intent and a set of paraphrases; (2) run each prompt N times; (3) compute the share of brand mentions with an interval; (4) repeat across time windows; (5) add reference-free faithfulness metrics to tell "mentioned on the merits" from random noise.',
    },
    { type: 'heading', text: 'E-E-A-T: what the claims rest on' },
    {
      type: 'list',
      items: [
        { title: 'Schulte, 2026', desc: 'Visibility in AI search is a distribution, not a point; repeated measurement is required — arXiv preprint — https://arxiv.org/abs/2604.07585' },
        { title: 'Chen et al., 2024 (RGB)', desc: 'LLMs are unstable on rejection / integration / counterfactual robustness in RAG — arXiv preprint — https://arxiv.org/abs/2309.01431' },
        { title: 'Es et al., 2024', desc: 'Reference-free automated evaluation of RAG (faithfulness, relevance) — peer-reviewed (EACL demo) — https://aclanthology.org/2024.eacl-demo.16/' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Note: Schulte 2026 and Chen et al. 2024 are arXiv preprints; RAGAS (Es et al., 2024) is a peer-reviewed EACL publication.',
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Is asking ChatGPT once enough to check brand visibility?', desc: 'No. Schulte (2026) shows that answers vary across runs, prompts and time, which makes a one-off observation unreliable. It takes many runs.' },
        { title: 'What should the AI visibility metric be, instead of "mentioned / not mentioned"?', desc: 'The share of runs in which the brand is mentioned, with a confidence interval, measured across a set of prompt paraphrases and across time windows.' },
        { title: 'Why does the answer change when I changed nothing on the site?', desc: 'Because of generation stochasticity and RAG instability: Chen et al. (2024) showed that LLMs filter irrelevant context and integrate fragments poorly, so the output drifts.' },
        { title: 'Can this evaluation be automated?', desc: 'Yes. RAGAS (Es et al., 2024) is a framework for reference-free RAG evaluation without manual annotation, which makes repeated measurement at scale practical.' },
      ],
    },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '06 · Schulte, 2026', desc: 'Don\'t Measure Once: Measuring Visibility in AI Search. https://arxiv.org/abs/2604.07585 — arXiv preprint.' },
        { title: '44 · Es et al., 2024', desc: 'RAGAS: Automated Evaluation of Retrieval Augmented Generation. https://aclanthology.org/2024.eacl-demo.16/ — peer-reviewed (EACL demo).' },
        { title: '45 · Chen et al., 2024', desc: 'Benchmarking Large Language Models in Retrieval-Augmented Generation (RGB). https://arxiv.org/abs/2309.01431 — arXiv preprint.' },
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
        { title: 'Verification', desc: 'Quotations reproduce the papers\' own abstracts; source numbers follow the research catalogue' },
        { title: 'Caveat', desc: 'Preprints and industry reports are cited with their methodological limits; verify the conclusions on your own project' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The full list of sources and their reliability levels lives in the research catalogue.',
    },
  ],
};
