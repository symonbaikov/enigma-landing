/* GEO Playbook chapters — English edition of the audited Ukrainian set.
   The chapters make no verbatim quotations: every claim is stated indirectly
   with its source marker, and the numbering follows docs/research.md. The
   hedges of the original are preserved deliberately — "editorial heuristic",
   "emerging metric", "not a proven factor" are load-bearing, not filler. */

export const chaptersEn = [
  {
    slug: 'geo-aeo-vs-seo',
    num: '01',
    eyebrow: 'GEO Playbook · Chapter 01',
    readTime: '7 min read',
    title: 'GEO and AEO versus SEO: what actually differs',
    subtitle: 'Visibility inside AI answers is a distinct practical layer on top of SEO — an emerging engineering practice, not another SEO checklist. This chapter sets the working definitions and boundaries the rest of the playbook stands on.',
    sections: [
      {
        type: 'lead',
        text: 'AI systems synthesize a finished answer, often with supporting links, and the user does not always visit the site. A brand can be absent from the AI answer while holding a top position in classic results. And classic SEO reports do not separate citation and absorption in AI answers: Search Console folds AI features into overall web traffic without giving a full map of AI visibility.',
      },
      { type: 'heading', text: 'What GEO is' },
      {
        type: 'paragraph',
        text: 'Generative Engine Optimization is the optimization of content and brand presence for generative search engines. Aggarwal et al. formalize GEO as a task in its own right and introduce GEO-bench for comparing methods of raising content visibility in AI answers [Source 01]. GEO can be treated as a measurable task within GEO-bench, though industry metrics are still forming.',
      },
      { type: 'heading', text: 'What AEO is' },
      {
        type: 'paragraph',
        text: 'In this playbook AEO — Answer Engine Optimization — means optimizing for systems that synthesize a direct answer to a query, often with citations or supporting links (AI Overviews, Perplexity), rather than only for a classic list of SERP links. Unlike GEO, AEO is largely a practitioner term; its research base sits under other names: answer engines, RAG, citations, AI search. Chen et al. show that optimizing your own site alone is not enough for visibility [Source 02].',
      },
      { type: 'heading', text: 'How this differs from SEO' },
      {
        type: 'paragraph',
        text: 'Classic SEO grew out of indexing architecture and link-based ranking: Brin and Page described crawling, indexing and ranking [Source 57], and PageRank formalized a page\'s importance through link structure [Source 58]. GEO and AEO add a new layer — answer generation and citation — where the unit is not a page in a list but a fragment inside an answer.',
      },
      {
        type: 'list',
        items: [
          { title: 'Unit of optimization', desc: 'SEO — the page in the results. GEO/AEO — the fragment inside a generated answer.' },
          { title: 'Key practical levers', desc: 'SEO — links, relevance, technical accessibility, content quality; behavioural signals act as feedback logic rather than a guaranteed direct factor. GEO/AEO — citability, source authority, structure, freshness, source type.' },
          { title: 'Outcome for the brand', desc: 'SEO — a position in a list. GEO/AEO — presence and influence inside the answer.' },
          { title: 'Where the value lives', desc: 'SEO — the visit to the site. GEO/AEO — the mention or citation, even without a visit.' },
          { title: 'Headline metric', desc: 'SEO — rank, CTR. GEO/AEO — share of voice in answers, citation absorption.' },
        ],
      },
      { type: 'heading', text: 'Why a SERP position is not visibility in the answer' },
      {
        type: 'paragraph',
        text: 'A top Google position does not guarantee presence in an AI answer. Chen et al. examine the role of freshness, source types and positional ranking, and explain why a classic SERP position and visibility in an AI answer can diverge [Source 08]. An empirical study of the disruption effect compares Google Search, Gemini and AI Overviews and shows how the mix of sources and the path from query to click both change [Source 09].',
      },
      { type: 'heading', text: 'Your own site is not the whole strategy' },
      {
        type: 'paragraph',
        text: 'Optimizing only your own pages is not sufficient. Chen et al. describe a systematic bias in AI Search toward earned media, external mentions and independent sources, which AI uses and cites more often in answers [Source 02]. The conclusion for a brand: GEO strategy governs a wider web presence — reviews, media, directories — not just the text on the site.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '01 · Aggarwal et al., 2024, ACM SIGKDD / arXiv', desc: 'GEO as a formalized task, plus GEO-bench. arxiv.org/abs/2311.09735' },
          { title: '02 · Chen, Wang, Chen, Koudas, 2025, arXiv', desc: 'The role of earned media and external sources in AI Search. arxiv.org/abs/2509.08919' },
          { title: '08 · Chen et al., 2026, arXiv', desc: 'Divergence between SERP position and AI visibility. arxiv.org/abs/2601.16858' },
          { title: '09 · Grossman, Liu, M. K. Chen, Smith, Borcea, Yi Chen, 2026, arXiv', desc: 'Empirical disruption: Google vs Gemini vs AI Overviews. arxiv.org/abs/2604.27790' },
          { title: '57 · Brin & Page, 1998, Stanford/Google', desc: 'The base architecture of indexing and ranking.' },
          { title: '58 · Page, Brin, Motwani, Winograd, 1999, Stanford', desc: 'PageRank: authority through link structure. ilpubs.stanford.edu/422/' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'How does GEO differ from AEO?', desc: 'In this playbook: GEO is the broader practice — optimizing content and brand for generative search engines in general. AEO is narrower — optimizing for systems that return a finished answer. AEO is mostly a practitioner term; GEO is formalized in research through GEO-bench.' },
          { title: 'Does GEO replace classic SEO?', desc: 'No. GEO adds a generation and citation layer on top of indexing and ranking. Technical SEO stays the foundation — without crawlability and indexability, content reaches neither the results nor the AI answer.' },
          { title: 'Why does ranking first on Google not guarantee a mention in generative AI services?', desc: 'Because the AI system (ChatGPT, Perplexity, Gemini) selects and cites its own set of sources; SERP position and visibility in the answer can diverge through freshness, source type, and how a source enters the model\'s context [Source 08, 02].' },
          { title: 'Is optimizing my own site enough?', desc: 'No. Research shows LLM search engines give weight to earned media and independent sources, so the strategy has to cover the external perimeter of brand presence [Source 02].' },
        ],
      },
    ],
  },
  {
    slug: 'how-answer-engines-work',
    num: '02',
    eyebrow: 'GEO Playbook · Chapter 02',
    readTime: '8 min read',
    title: 'How answer engines work: RAG and retrieval',
    subtitle: 'To be the source of an AI answer you need the "search → generation" pipeline in your head. This chapter walks it stage by stage and shows where your visibility is actually decided.',
    sections: [
      {
        type: 'lead',
        text: '"Optimizing for AI" without understanding retrieval is guesswork. In retrieval-enabled answer engines the answer is built not from the whole web but from a narrow set of retrieved documents; part of an LLM answer may also come from parametric memory. If a fragment did not enter the retrieval context of a particular run, it takes no part in generating that answer.',
      },
      { type: 'heading', text: 'The basic principle of RAG' },
      {
        type: 'paragraph',
        text: 'Retrieval-Augmented Generation means that in retrieval-enabled systems the model first retrieves documents and then generates an answer grounded in what it found. Lewis et al. formalized the scheme as an architecture for knowledge-intensive tasks [Source 24]. The practical takeaway for GEO — a technical precondition, not a guarantee: easy extractability and clear structure improve the odds of entering the answer context, without guaranteeing inclusion in any particular commercial answer engine.',
      },
      { type: 'heading', text: 'External memory in retrieval-augmented models' },
      {
        type: 'paragraph',
        text: 'Retrieval is not an add-on but part of how a retrieval-augmented model "knows". REALM showed that a language model can use an external knowledge corpus during pre-training as well as at answer time [Source 25]. That is why extractability and the quality of external content become part of AI visibility rather than cosmetics on top of it.',
      },
      { type: 'heading', text: 'The stages of the pipeline' },
      {
        type: 'paragraph',
        text: 'Modern answer engines are a pipeline, not a single step. Surveys describe the typical RAG architecture: retrieval method, ranking, generation, evaluation and the practical problems of each [Source 37], while a more recent review treats retrieval as a standard part of generative products [Source 38].',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Retrieval', desc: 'Pulling candidate documents for the query. This decides whether your page is found and extracted at all.' },
          { num: '02', title: 'Ranking / selection', desc: 'Filtering and ordering the candidates. This decides whether the fragment passes the quality filters.' },
          { num: '03', title: 'Generation', desc: 'Composing the answer from the context. This decides whether the source is used and cited.' },
          { num: '04', title: 'Evaluation / feedback', desc: 'Judging retrieval, answer and attribution quality. It can feed system tuning, but it guarantees no future visibility for any given site.' },
        ],
      },
      { type: 'heading', text: 'From search to browsing' },
      {
        type: 'paragraph',
        text: 'AEO logic grew out of web-assisted QA. WebGPT trained a model to use a browser, find sources and answer from what it found — an early example of an LLM as an answer engine [Source 48]. In retrieval-enabled answer engines the answer often combines retrieved sources with the model\'s parametric knowledge; retrieval improves grounding without removing the role of model memory.',
      },
      { type: 'heading', text: 'Why SEO logic does not transfer directly' },
      {
        type: 'paragraph',
        text: 'The interface became conversational, but underneath it sit retrieval, ranking and reasoning. Xiong et al. survey the architectural, user and evaluation challenges where search services meet LLMs [Source 14], and Ma et al. examine the mechanisms by which chat-based systems assemble a coherent answer [Source 18]. The conclusion: content has to be convenient both for extraction and for the generation of coherent text — two different requirements.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '24 · Lewis et al., 2020, NeurIPS', desc: 'RAG: retrieve first, then generate. arxiv.org/abs/2005.11401' },
          { title: '25 · Guu et al., 2020, ICML', desc: 'REALM: an external corpus in pre-training and at answer time. arxiv.org/abs/2002.08909' },
          { title: '37 · Gupta et al., 2024, arXiv', desc: 'A systematic survey of RAG architectures and their problems. arxiv.org/abs/2410.12837' },
          { title: '38 · Zhao et al., 2026, Springer', desc: 'Retrieval as a standard part of generative products.' },
          { title: '48 · Nakano et al., 2021/22, OpenAI', desc: 'WebGPT: browsing plus source-grounded QA. arxiv.org/abs/2112.09332' },
          { title: '18 · Ma et al., 2024, arXiv', desc: 'How chat-search systems form an answer. arxiv.org/abs/2402.19421' },
          { title: '14 · Xiong et al., 2024, arXiv', desc: 'Challenges where search services meet LLMs. arxiv.org/abs/2407.00128' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'What is RAG in plain words?', desc: 'Retrieval-Augmented Generation: the model first searches for and retrieves relevant documents, then builds an answer combining those sources with its parametric memory [Source 24].' },
          { title: 'Why is my content missing from the answer when the page is in Google?', desc: 'Because an answer engine\'s pipeline has retrieval and selection stages before generation. If the fragment was not retrieved, or did not pass the quality filters, it never reaches the generation step.' },
          { title: 'Which matters more for visibility, retrieval or generation?', desc: 'Both. The content has to be retrieved first, then actually used in composing the answer. Failing at either stage can zero out visibility in that particular answer or run — which is not a permanent state across all systems.' },
          { title: 'Why do old SEO tactics fall short in AI search?', desc: 'Because retrieval, ranking and reasoning still sit under the conversational interface, each with its own requirements; content has to suit both extraction and coherent generation [Source 14, 18].' },
        ],
      },
    ],
  },
  {
    slug: 'passage-retrieval',
    num: '03',
    eyebrow: 'GEO Playbook · Chapter 03',
    readTime: '7 min read',
    title: 'Passage retrieval: why blocks have to stand on their own',
    subtitle: 'Many retrieval systems work on passages and chunks rather than whole pages. That changes how every block of content should be built.',
    sections: [
      {
        type: 'lead',
        text: 'Many retrieval systems operate on passages, so a long run-up hurts. A key idea buried mid-text may never shape the answer. A single block, stripped of its page, has to make sense on its own.',
      },
      { type: 'heading', text: 'Semantics, not keywords' },
      {
        type: 'paragraph',
        text: 'Modern retrieval often works on vector proximity rather than word overlap alone. Dense Passage Retrieval showed that dense representations can outperform sparse retrieval on open-domain QA tasks [Source 26]; production search often uses hybrid dense-plus-sparse methods. For GEO this means clear definitions, context and completeness of the answer matter more than keyword density.',
      },
      { type: 'heading', text: 'What gets extracted is often a fragment, not the whole page' },
      {
        type: 'paragraph',
        text: 'ColBERT introduced efficient passage search through contextualized late interaction — the system picks short fragments rather than entire pages [Source 27]. Many retrieval systems work exactly on passages and chunks, although some products also fetch the page, use snippets or use search results. The practical consequence: each H2/H3 block is better built as a self-contained passage that makes sense away from the rest of the page.',
      },
      { type: 'heading', text: 'Lost in the middle' },
      {
        type: 'paragraph',
        text: 'Even after reaching the context, information can fail to land. Liu et al. showed that model performance is often higher when the relevant information sits at the beginning or the end, and drops when it lies in the middle of a long context [Source 35]. The practical consequence — an editorial heuristic, not a proven factor in citation or inclusion: put the claim at the start of the block to reduce the risk of it being lost in a long context.',
      },
      {
        type: 'list',
        items: [
          { title: 'A long run-up before the point', desc: 'Anti-pattern: the point sinks into the middle of the context [35]. GEO pattern: the claim in the block\'s first sentence.' },
          { title: 'An idea scattered across the page', desc: 'Anti-pattern: the fragment is extracted without its context [27]. GEO pattern: one block = one complete answer.' },
          { title: 'Betting on keyword density', desc: 'Anti-pattern: retrieval is often semantic or hybrid [26]. GEO pattern: clear definitions and completeness.' },
        ],
      },
      { type: 'heading', text: 'Content is also searched during the answer' },
      {
        type: 'paragraph',
        text: 'Retrieval is not always a single action at the start. FLARE describes a class of active-retrieval architectures in which the model itself decides when to look something up mid-generation [Source 47]; that is a possible class of system, not a rule for every product. In such systems a well-structured block can be retrieved while a complex query is being refined.',
      },
      { type: 'heading', text: 'Corpus quality counts' },
      {
        type: 'paragraph',
        text: 'Accessibility and quality of representation matter at corpus level. RETRO showed that retrieval from a large corpus can improve a model\'s generation [Source 49]; for GEO that indirectly justifies attention to accessibility and quality of representation, without guaranteeing visibility in any particular answer engine.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '26 · Karpukhin et al., 2020, EMNLP', desc: 'DPR: semantic dense retrieval beats keyword overlap on open-domain QA. aclanthology.org/2020.emnlp-main.550/' },
          { title: '27 · Khattab & Zaharia, 2020, SIGIR', desc: 'ColBERT: retrieval at passage level. arxiv.org/abs/2004.12832' },
          { title: '35 · Liu et al., 2024, TACL', desc: 'Information in the middle of the context is used less well. aclanthology.org/2024.tacl-1.9/' },
          { title: '47 · Jiang et al., 2023, EMNLP', desc: 'FLARE: active retrieval during generation. aclanthology.org/2023.emnlp-main.495/' },
          { title: '49 · Borgeaud et al., 2022, ICML', desc: 'RETRO: retrieval from a large corpus improves generation. arxiv.org/abs/2112.04426' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'What is passage retrieval?', desc: 'In many retrieval and RAG systems it is the extraction of a short relevant fragment of a document instead of, or before, processing the whole page; products may also use snippets, a full-page fetch or SERP results [Source 27].' },
          { title: 'Why can a long introduction hurt visibility?', desc: 'Because models use information in the middle of a long context less well [Source 35]. If the point hides behind a run-up, it may not shape the answer even when the fragment was retrieved.' },
          { title: 'How do I make a block "passage-ready"?', desc: 'One block, one complete thought, with the claim in the first sentence, no dependence on the rest of the page, a clear definition and evidence: a figure, a source, an example or a short explanation.' },
          { title: 'Will keywords get me into an AI answer?', desc: 'On their own, mostly not. Modern retrieval is often semantic and frequently hybrid: what decides it is clarity of definitions, context and completeness rather than keyword density [Source 26].' },
        ],
      },
    ],
  },
  {
    slug: 'selection-vs-absorption',
    num: '04',
    eyebrow: 'GEO Playbook · Chapter 04',
    readTime: '7 min read',
    title: 'Citation selection versus absorption: why a mention is not enough',
    subtitle: 'Being picked as a link is not the same as shaping the answer. This chapter explains the difference and how to make content that genuinely gets absorbed.',
    sections: [
      {
        type: 'lead',
        text: 'A link in the answer does not mean influence over its content. A correct answer can lean on a source that does not support the specific claim. The metric "we were cited" overstates real brand visibility.',
      },
      { type: 'heading', text: 'Two distinct stages' },
      {
        type: 'paragraph',
        text: 'Citation is a sequence of two steps, not one. Zhang, He and Yao propose a framework in which the source is first selected as a citation and only then has its content genuinely absorbed into the answer [Source 07]. The distinction is critical: a link can sit in an answer without affecting its meaning. Note the status: this is an emerging framework in the GEO literature (an arXiv preprint, 2026), not a settled industry standard like CTR — in dashboards, absorption should be presented as a metric still forming.',
      },
      { type: 'heading', text: 'Correctness is not faithfulness of attribution' },
      {
        type: 'paragraph',
        text: 'An accurate answer does not guarantee honest citation. Wallat et al. show the difference between correctness and faithfulness: the answer can be right while the link fails to support the specific claim [Source 39]. For a brand that is a risk: a formal mention without absorption delivers no real visibility.',
      },
      {
        type: 'list',
        items: [
          { title: 'Selection', desc: 'The source was chosen as a link in the answer. We measure the fact of a URL or domain citation.' },
          { title: 'Absorption', desc: 'The source\'s content shaped the meaning of the answer. We measure support for a specific claim.' },
          { title: 'Faithfulness', desc: 'The link genuinely supports the claim. We measure the match between citation and statement [39].' },
        ],
      },
      { type: 'heading', text: 'How real influence is measured' },
      {
        type: 'paragraph',
        text: 'Methods are appearing that look deeper than the presence of a link. Qi et al. propose using the model\'s internal signals for attribution, to establish which sources genuinely influenced the answer [Source 40]. Xu et al. set out principles for evaluating citation: relevance, sufficiency, and the absence of misleading attribution [Source 41].',
      },
      { type: 'heading', text: 'Why this is a hard problem' },
      {
        type: 'paragraph',
        text: 'Binding claims to the right sources is not solved out of the box. Gao et al. study text generation with citations and the methods for judging how well links support generated claims [Source 32]. An academic citation benchmark shows that even choosing the right source for a claim remains difficult [Source 54].',
      },
      { type: 'heading', text: 'What this means for content' },
      {
        type: 'paragraph',
        text: 'For content to be absorbed, the claim has to be unambiguous and supported. Hence the playbook\'s practical editorial rule — a heuristic derived from the attribution and faithfulness problem, not a proven formula from these papers: claim → argument → evidence (a figure or a direct quotation) within a single block. Sources 07 and 39 establish the selection/absorption and correctness/faithfulness distinctions; they do not formalize this content formula. A vague statement can still be cited, but it is unlikely to be absorbed as support for a specific claim.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '07 · Zhang, He, Yao, 2026, arXiv', desc: 'The selection → absorption framework. arxiv.org/abs/2604.25707' },
          { title: '32 · Gao, Yen, Yu, Chen, 2023, EMNLP', desc: 'Generation with citations plus evaluation of claim support. aclanthology.org/2023.emnlp-main.398/' },
          { title: '39 · Wallat et al., 2024/25, ACM', desc: 'Correctness ≠ faithfulness in attribution. dl.acm.org/doi/10.1145/3731120.3744592' },
          { title: '40 · Qi et al., 2024, EMNLP', desc: 'Attribution from the model\'s internal signals. aclanthology.org/2024.emnlp-main.347/' },
          { title: '41 · Xu et al., 2025, ACL', desc: 'Principles for evaluating citation. aclanthology.org/2025.acl-long.1574/' },
          { title: '54 · 2026, ACM', desc: 'A benchmark for academic citation prediction / what-to-cite. dl.acm.org/doi/10.1145/3774904.3792075' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'How does citation selection differ from absorption?', desc: 'Selection is the source being chosen as a link in the answer. Absorption is its content genuinely shaping the answer\'s meaning. The first without the second gives no real visibility. In this playbook absorption is an emerging metric (an arXiv preprint, 2026), not a settled industry standard [Source 07].' },
          { title: 'Why can a correct AI answer carry the wrong link?', desc: 'Because correctness and faithfulness are different properties: an answer can be accurate while the citation fails to support that specific claim [Source 39].' },
          { title: 'How do I make content that gets absorbed?', desc: 'The playbook\'s practical heuristic: build the block as claim → argument → evidence, with a figure or a direct quotation, so the statement is unambiguous and supported. This is an editorial rule derived from the attribution and faithfulness problem, not a proven formula from the sources.' },
          { title: 'Is counting brand mentions enough?', desc: 'No. You need separate levels of metric: the fact of citation, absorption, and faithfulness — otherwise visibility is overstated [Source 07, 39].' },
        ],
      },
    ],
  },
  {
    slug: 'why-visibility-unstable',
    num: '05',
    eyebrow: 'GEO Playbook · Chapter 05',
    readTime: '6 min read',
    title: 'Why AI visibility is unstable — and how to measure it properly',
    subtitle: 'AI answers and the set of cited sources change between runs. A single measurement paints a false picture. This chapter sets the logic of repeated measurement.',
    sections: [
      {
        type: 'lead',
        text: 'Checking one prompt once is not your position in AI search. The same query on different days returns different answers and different sources. Without repeated measurement there is no way to tell signal from noise.',
      },
      { type: 'heading', text: 'One measurement misleads' },
      {
        type: 'paragraph',
        text: 'Visibility in AI search is probabilistic, not fixed. Schulte shows that the answers of AI search engines and their sets of cited sources are unstable between runs, so a single measurement can misrepresent a brand\'s position [Source 06]. The conclusion is direct: monitoring is repeated measurement, not a one-off prompt check.',
      },
      { type: 'heading', text: 'Why the direct feedback loop disappeared' },
      {
        type: 'paragraph',
        text: 'In classic web search, clicks and dwell time can serve as fine-grained feedback for improving ranking models; in generative search the feedback is often attached to the final answer, which makes it harder to map onto the retrieval and generation stages. Dai et al. propose restoring fine-grained feedback at the decomposition, retrieval and generation stages [Source 20]. So visibility depends not only on the document but on behaviour at the stages of AI search.',
      },
      { type: 'heading', text: 'What exactly to measure' },
      {
        type: 'paragraph',
        text: 'If the result is unstable, the metric has to be a distribution rather than a point.',
      },
      {
        type: 'list',
        items: [
          { title: 'Several runs of the same prompt', desc: 'Answers change between runs [06].' },
          { title: 'Several days and time windows', desc: 'Visibility drifts over time [06].' },
          { title: 'Several platforms', desc: 'The source sets differ between systems.' },
          { title: 'A set of prompts, not one', desc: 'A single query does not represent an intent cluster.' },
        ],
      },
      { type: 'heading', text: 'Metrics borrowed from RAG evaluation' },
      {
        type: 'paragraph',
        text: 'What deserves evaluation is not only the fact of a mention but the quality of source use. A survey of RAG evaluation gives the dimensions: relevance, accuracy, claim support, robustness [Source 36]. RAGAS formalizes faithfulness, answer relevancy and context relevance for RAG pipelines [Source 44]. They can be adapted for a GEO dashboard, but they are not a ready-made standard: the dashboard has to record platform, prompt set, run count and citation/absorption separately.',
      },
      { type: 'heading', text: 'One piece of content, different systems' },
      {
        type: 'paragraph',
        text: 'The same page behaves differently across products. The Chen et al. benchmark shows that models use identical context unevenly: accuracy and failure modes differ between them [Source 45]. So share of voice is computed per platform first; an aggregate figure is acceptable only as a secondary layer on top of that breakdown, never instead of it.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '06 · Schulte, 2026, arXiv', desc: 'Answers and citations are unstable between runs. arxiv.org/abs/2604.07585' },
          { title: '20 · Dai et al., 2025, SIGIR', desc: 'Feedback in generative search has weakened. arxiv.org/abs/2505.14680' },
          { title: '36 · Yu et al., 2024, arXiv', desc: 'A set of dimensions for evaluating RAG. arxiv.org/abs/2405.07437' },
          { title: '44 · Es et al., 2024, EACL Demo', desc: 'RAGAS: faithfulness, relevancy, context relevance. aclanthology.org/2024.eacl-demo.16/' },
          { title: '45 · Chen et al., 2024, AAAI', desc: 'Models use the same context differently. arxiv.org/abs/2309.01431' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'Why is the AI answer about my brand different every time?', desc: 'Because answers and the set of cited sources are unstable between runs — a property of generative search, not a bug [Source 06].' },
          { title: 'How many times should visibility be checked?', desc: 'Many: several runs of one prompt, across several days and several platforms. A single measurement is methodologically weak and can mislead; statistical reliability comes from the repetition protocol — run count, windows, variance [Source 06].' },
          { title: 'Why can visibility not be averaged "across all AI"?', desc: 'Because different systems use the same content differently; accuracy and source sets vary between models [Source 45]. Share of voice is computed per platform.' },
          { title: 'Which metrics belong on a GEO dashboard?', desc: 'Faithfulness, answer relevancy and context relevance from RAG evaluation — adapted, not treated as a finished standard; computed over repeated measurements, recording platform, prompt set, run count and citation/absorption [Source 36, 44].' },
        ],
      },
    ],
  },
  {
    slug: 'technical-seo-foundation',
    num: '06',
    eyebrow: 'GEO Playbook · Chapter 06',
    readTime: '7 min read',
    title: 'Technical SEO as the foundation of GEO',
    subtitle: 'GEO does not retire technical SEO — it stands on it. If a site is unreachable or poorly structured, optimizing for AI will not work.',
    sections: [
      {
        type: 'lead',
        text: 'Content a crawler cannot reach is hard to extract; robots.txt controls crawler access but does not remove a URL from Search. Without structured data, entities are conveyed to the search engine less explicitly — an aid to understanding, not a condition of AI visibility. GEO without a technical base is optimizing something the search engine cannot see.',
      },
      { type: 'heading', text: 'The baseline has not changed' },
      {
        type: 'paragraph',
        text: 'Crawling, indexing and ranking remain the first layer of visibility. Brin and Page described exactly this architecture as the basis of search [Source 57], and Google\'s official starter guide confirms that crawlability, indexability, quality and structure are the base conditions [Source 67]. GEO adds a generation layer above that level, not in place of it.',
      },
      { type: 'heading', text: 'The platform\'s official position' },
      {
        type: 'paragraph',
        text: 'Work from primary sources rather than agency interpretations. Google Search Central documents directly how AI features in Search interact with web content [Source 65]. That is the primary document for understanding AI Overviews and AI Mode in the Google ecosystem — the baseline reference for a technical GEO audit.',
      },
      { type: 'heading', text: 'Accessibility for crawlers' },
      {
        type: 'paragraph',
        text: 'If a crawler cannot reach the page, it is harder to extract. Google\'s overview of crawlers and fetchers explains which agents Google uses for which tasks [Source 76]. robots.txt governs crawler access but is not a mechanism for keeping a page out of Google: a blocked URL can still appear without a description if other pages link to it. Full exclusion from Search needs noindex or password protection. Checking access is one of the first and cheapest steps in a GEO audit.',
      },
      { type: 'heading', text: 'Structured data is not magic — it is clarity and Search eligibility' },
      {
        type: 'paragraph',
        text: 'Markup does not push a page forward: it provides explicit clues, helps Google understand the page, and can grant eligibility for rich results [Source 68]. Without it, entities are conveyed less explicitly, but it is not a requirement for AI visibility. Note that AI Overviews and AI Mode have no special schema.org markup and no technical requirements beyond baseline SEO [Source 65]. Separately: FAQ rich results were removed from Google Search on 7 May 2026 — keep FAQPage only as optional semantics.',
      },
      { type: 'heading', text: 'SEO patterns are detectable — for GEO that is a probable risk' },
      {
        type: 'paragraph',
        text: 'Manipulative patterns get detected. Lewandowski and Yagci propose a multi-dimensional approach to detecting SEO patterns in search results [Source 60]. The analogy for GEO is a cautious hypothesis rather than an established fact: artificial optimization patterns will probably be classified by platforms in time, so a technical base and quality are more reliable than workarounds.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '57 · Brin & Page, 1998, Stanford/Google', desc: 'Crawling, indexing and ranking as the basis of search.' },
          { title: '60 · Lewandowski & Yagci, 2021', desc: 'Optimization patterns are detectable.' },
          { title: '65 · Google Search Central', desc: 'How Search AI features interact with content. developers.google.com/search/docs/appearance/ai-features' },
          { title: '67 · Google Search Central', desc: 'Base conditions of technical visibility. developers.google.com/search/docs/fundamentals/seo-starter-guide' },
          { title: '68 · Google Search Central', desc: 'The role of structured data in machine understanding. developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
          { title: '76 · Google Search Central', desc: 'Overview of Google crawlers and fetchers. developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'Does GEO replace technical SEO?', desc: 'No. Crawlability, indexability, structured data and crawler accessibility remain the base layer; GEO adds a generation layer on top rather than instead [Source 67].' },
          { title: 'What should a GEO audit check first?', desc: 'Crawler access — robots.txt and firewall: a misconfiguration makes crawling and extraction harder. But robots.txt is access control, not removal from Search; excluding a page needs noindex or a password [Source 76].' },
          { title: 'Will structured data help me into an AI answer?', desc: 'Markup gives explicit clues and Search eligibility for rich results, but it is not a direct AI boost: there is no special schema for AI Overviews or AI Mode, and no requirements beyond baseline SEO. FAQ rich results were removed on 7 May 2026 — FAQPage is optional semantics only [Source 65, 68].' },
          { title: 'Whose documentation should I trust?', desc: 'The platforms\' primary sources: Google Search Central documents directly how Search AI features interact with web content, which is more reliable than agency interpretation [Source 65].' },
        ],
      },
    ],
  },
];
