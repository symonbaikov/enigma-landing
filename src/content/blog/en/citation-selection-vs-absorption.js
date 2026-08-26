/* Why a citation in an AI answer does not always mean influence — English edition.
   Definitions and figures quoted from the sources' own abstracts (Zhang et al.
   2026, ALCE, MIRAGE); the Wallat et al. caveat about full text is preserved. */
export default {
  slug: 'citation-selection-vs-absorption',
  date: 'May 2026',
  readTime: '8 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'Why a citation in an AI answer does not always mean influence',
  subtitle: 'A link under a ChatGPT or Perplexity answer is not proof that your text shaped it. This piece draws the line between "we were cited" and "we were actually used".',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    { type: 'paragraph', text: 'Marketers and content teams measure success in AI search with a single number: how many times the domain landed in the citation list. The trouble is that the number says almost nothing about what the page contributed. Concretely:' },
    {
      type: 'list',
      items: [
        { title: 'A citation with none of your wording', desc: 'The page sits in the source list while the answer text carries none of your phrasing and none of your facts.' },
        { title: 'Budget aimed at appearing, not influencing', desc: 'The content budget gets optimized for "landing in the citations" rather than for shaping the answer.' },
        { title: 'Citations rise, recognition does not', desc: 'You cannot explain to leadership why growing citation counts fail to move brand awareness.' },
      ],
    },
    { type: 'heading', text: 'Three separate events people collapse into one' },
    { type: 'paragraph', text: 'A citation in an AI answer is not one process but a chain of three independent events. Failure or success at one stage does not predict the others.' },
    { type: 'heading', text: '1. Citation selection — the platform chose the source' },
    { type: 'paragraph', text: 'Claim: choosing a source is a retriever decision, not evidence of its usefulness. Argument: the model first runs a search and picks pages by semantic proximity to the query, and only then decides what to do with them. Evidence: in From Citation Selection to Citation Absorption (Zhang, He, Yao, 2026, preprint) selection is defined as the stage where "a platform triggers search and chooses sources", separately from whether the source reaches the answer [Source 7].' },
    { type: 'heading', text: '2. Source attribution — the model attached a link to a statement' },
    { type: 'paragraph', text: 'Claim: a link pinned to a sentence is a claim by the model, not a verified fact. Argument: the LLM generates the marker as part of the text, and that marker may not support the statement it sits beside. Evidence: the ALCE benchmark (Gao, Yen, Yu, Chen, 2023, peer-reviewed, EMNLP) found that "on the ELI5 dataset, even the best models lack complete citation support 50% of the time" — half the links do not back what is claimed [Source 32].' },
    {
      type: 'finding',
      stat: '50%',
      statLabel: 'of citations without complete support',
      label: 'ALCE BENCHMARK',
      text: 'On the ELI5 dataset even the best models lack complete citation support 50% of the time — half the links do not back the claim [Source 32].',
    },
    { type: 'heading', text: '3. Answer absorption — the source actually shaped the answer' },
    { type: 'paragraph', text: 'Claim: influence is when the page gives the answer its language, facts, structure or evidence. Argument: probable absorption is judged by the source\'s contribution to the final text, not by the presence of a link. Evidence: the same preprint defines absorption as the case where "a cited page contributes language, evidence, structure, or factual support to the final answer" — a metric distinct from the fact of citation [Source 7].' },
    { type: 'paragraph', text: 'One important limit: measuring absorption directly requires access to the model\'s internal signals (as in the MIRAGE approach), which closed platforms do not offer. External tools estimate probable absorption indirectly — through overlap of language, facts and structure between answer and source — not as certain knowledge of the internal mechanism.' },
    { type: 'heading', text: 'Why selection and absorption diverge in practice' },
    { type: 'paragraph', text: 'Claim: a platform can cite broadly and absorb narrowly. Argument: engines balance citation breadth and depth differently. Evidence: across 602 controlled prompts and 21,143 valid search-layer citations on three platforms, Zhang et al. found that Perplexity and Google AI Overview cite more sources on average, while "ChatGPT cites fewer sources but shows substantially higher average citation influence among fetched pages" [Source 7].' },
    { type: 'paragraph', text: 'Claim: a correct citation is not the same as a faithful one. Argument: a link can point to a source that genuinely contains the fact while the model arrived at the answer by another route. That is the correctness versus faithfulness distinction argued in Correctness is not Faithfulness in RAG Attributions (Wallat et al., 2024/2025, peer-reviewed, ACM Digital Library): a correct attribution does not establish that the source was actually used during generation [Source 39]. Note: the full text of this source was unavailable at the time of writing; only the conceptual distinction stated in its title is reproduced here, with no figures.' },
    { type: 'paragraph', text: 'Claim: to learn the real influence you have to look inside the model rather than at its links. Argument: attribution from internal states is decoupled from what the model "decided" to cite. Evidence: the MIRAGE method (Qi et al., 2024, peer-reviewed, EMNLP) "detects context-sensitive answer tokens and pairs them with retrieved documents contributing to their prediction via saliency methods" — precisely because self-citing LLMs "fail to faithfully reflect LLMs\' context usage throughout the generation" [Source 40].' },
    { type: 'heading', text: 'What sets apart a page that really gets absorbed' },
    { type: 'paragraph', text: 'Claim: what gets absorbed is not the "optimized" page but the extractable one. Argument: models pull specific units of meaning into an answer, not general relevance. Evidence: Zhang et al. (preprint) identify a cluster of traits in high-influence pages — greater length, clear structure, semantic fit to the query, and density of extractable evidence: definitions, numeric facts, comparisons and step-by-step procedures [Source 7].' },
    {
      type: 'list',
      items: [
        { title: 'Citation selection', desc: 'The retriever picked the page — presence in the source list — Source 7 (preprint).' },
        { title: 'Source attribution', desc: 'The model pinned a marker to a sentence — citation precision/recall, support for the claim — Source 32 (EMNLP), Source 39 (ACM).' },
        { title: 'Answer absorption', desc: 'The answer text was shaped by the page — contribution of language, facts, structure; internal saliency — Source 7 (preprint), Source 40 (EMNLP).' },
      ],
    },
    { type: 'heading', text: 'E-E-A-T: what the conclusions rest on' },
    {
      type: 'list',
      items: [
        { title: '07 — Zhang, He, Yao (2026)', desc: 'From Citation Selection to Citation Absorption — preprint (arXiv) — introduces the selection/absorption distinction; 602 prompts, 21,143 citations, 3 platforms [Source 7].' },
        { title: '32 — Gao, Yen, Yu, Chen (2023)', desc: 'Enabling LLMs to Generate Text with Citations — peer-reviewed (EMNLP) — the ALCE benchmark; on ELI5 no complete citation support 50% of the time [Source 32].' },
        { title: '39 — Wallat et al. (2024/2025)', desc: 'Correctness is not Faithfulness in RAG Attributions — peer-reviewed (ACM DL) — the correctness versus faithfulness distinction (full text unavailable) [Source 39].' },
        { title: '40 — Qi et al. (2024)', desc: 'Model Internals-based Answer Attribution / MIRAGE — peer-reviewed (EMNLP) — attribution from internal model states instead of self-citation [Source 40].' },
      ],
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'Does a citation in Perplexity mean my site influenced the answer?', desc: 'No. That is citation selection — the retriever picked the page. Influence (absorption) is a separate event in which the page\'s text actually reached the answer. Without access to the model\'s internal signals, probable absorption can only be estimated indirectly.' },
        { title: 'Why does the model attach a link that does not support the statement?', desc: 'The citation marker is part of the generated text, not a verified fact. On the ALCE benchmark, even the best models lack complete citation support 50% of the time on ELI5.' },
        { title: 'How can anyone tell that a source really had influence?', desc: 'Through attribution from the model\'s internal states. MIRAGE pairs answer tokens with the documents that actually contributed to their prediction, bypassing the model\'s unreliable self-citation.' },
        { title: 'What makes a page "absorbable"?', desc: 'Length, clear structure, semantic fit to the query, and a high density of extractable evidence: definitions, numbers, comparisons and step-by-step instructions.' },
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
        { title: 'Verification', desc: 'Definitions and figures reproduce the sources\' own abstracts; where a full text was unavailable, that is stated at the claim.' },
        { title: 'Caveat', desc: 'Preprints and industry reports are cited with their methodological limits; verify the conclusions on your own project.' },
      ],
    },
    { type: 'paragraph', text: 'The full list of sources and their reliability levels lives in the research catalogue.' },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '07 · Zhang, He, Yao, 2026', desc: 'From Citation Selection to Citation Absorption: A Measurement Framework for Generative Engine Optimization Across AI Search Platforms. https://arxiv.org/abs/2604.25707 — preprint.' },
        { title: '32 · Gao, Yen, Yu, Chen, 2023', desc: 'Enabling Large Language Models to Generate Text with Citations. https://aclanthology.org/2023.emnlp-main.398/ — peer-reviewed (EMNLP).' },
        { title: '39 · Wallat et al., 2024/2025', desc: 'Correctness is not Faithfulness in RAG Attributions. https://dl.acm.org/doi/10.1145/3731120.3744592 — peer-reviewed (ACM DL).' },
        { title: '40 · Qi et al., 2024', desc: 'Model Internals-based Answer Attribution for Trustworthy Retrieval-Augmented Generation. https://aclanthology.org/2024.emnlp-main.347/ — peer-reviewed (EMNLP).' },
      ],
    },
  ],
};
