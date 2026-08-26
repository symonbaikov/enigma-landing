/* Research Lab articles — English edition of the audited Ukrainian set.
   Claims are stated indirectly with their source markers (docs/research.md
   numbering); no verbatim quotations are introduced. The original's hedges
   are load-bearing and kept: "in the studied scenario", "an editorial
   heuristic", "not a proven factor", "market framing, not an absolute". */

export const articlesEn = [
  {
    slug: 'ai-bots-robots-txt',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Technical guide',
    title: 'AI bot access: robots.txt for GPTBot, ClaudeBot, PerplexityBot, CCBot',
    subtitle: 'robots.txt decides which agents may read your content. It is the cheapest check in a GEO audit — and a frequent place where visibility leaks unnoticed.',
    sections: [
      {
        type: 'lead',
        text: 'Different AI platforms use different user agents with different crawling purposes. A blocked bot will not extract your content; but robots.txt is access control, not removal from Search. A robots.txt that contradicts your visibility goals is a common error, and a cheap one to fix.',
      },
      { type: 'heading', text: 'Every platform has its own agent' },
      {
        type: 'paragraph',
        text: 'There is no single "AI bot". OpenAI documents its own crawlers: GPTBot for training and OAI-SearchBot for search scenarios [Source 70]. Anthropic describes ClaudeBot, Claude-User and Claude-SearchBot — the last a separate search crawler whose blocking can reduce visibility in Claude search-like scenarios [Source 75]. Perplexity distinguishes PerplexityBot (surfacing and linking, governed by robots.txt) from Perplexity-User (a user-requested fetch that typically ignores robots.txt) [Source 74]. Policy is set per agent, not "for AI in general".',
      },
      { type: 'heading', text: 'What robots.txt actually does' },
      {
        type: 'paragraph',
        text: 'robots.txt governs crawler access to a URL; it does not keep the page out of the index. Google\'s overview of crawlers and fetchers explains which agents it uses for which tasks [Source 76]. A blocked URL can still appear without a description if other pages link to it. Full exclusion from Search needs noindex or password protection — robots.txt is not the tool for that.',
      },
      { type: 'heading', text: 'A map of the main agents' },
      {
        type: 'list',
        items: [
          { title: 'GPTBot / OAI-SearchBot', desc: 'OpenAI\'s training crawler and search agent [70].' },
          { title: 'ClaudeBot / Claude-User / Claude-SearchBot', desc: 'Anthropic crawling, with a separate search crawler [75].' },
          { title: 'PerplexityBot / Perplexity-User', desc: 'Surfacing and linking (robots.txt) versus user-requested fetch, which typically ignores robots.txt [74].' },
          { title: 'Googlebot and fetchers', desc: 'Google\'s various tasks, AI features included [76].' },
          { title: 'Bingbot', desc: 'The base for Microsoft Copilot and AI search [71].' },
          { title: 'CCBot (Common Crawl)', desc: 'The open web corpus feeding many systems [77].' },
        ],
      },
      { type: 'heading', text: 'Why Common Crawl deserves its own decision' },
      {
        type: 'paragraph',
        text: 'Blocking live AI bots does not mean absence from their data. Common Crawl documents CCBot as open web-data infrastructure that many AI systems and research projects rely on [Source 77]. What you decide about CCBot is a separate strategic decision from access for GPTBot or ClaudeBot.',
      },
      { type: 'heading', text: 'Bing as the base for Copilot' },
      {
        type: 'paragraph',
        text: 'Visibility in the Microsoft ecosystem starts with classic rules. The Bing Webmaster Guidelines set out requirements for quality, crawling, indexing and prohibited practices [Source 71]. Through Bing\'s link to Copilot, those rules remain the baseline access layer for the corresponding AI products.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '70 · OpenAI', desc: 'Crawlers and user agents (GPTBot, OAI-SearchBot). developers.openai.com/api/docs/bots' },
          { title: '71 · Microsoft Bing', desc: 'Webmaster Guidelines (quality, crawling).' },
          { title: '74 · Perplexity', desc: 'PerplexityBot / Perplexity-User and robots.txt.' },
          { title: '75 · Anthropic', desc: 'ClaudeBot / Claude-User / Claude-SearchBot and how to block them.' },
          { title: '76 · Google Search Central', desc: 'Overview of crawlers and fetchers.' },
          { title: '77 · Common Crawl', desc: 'CCBot documentation. commoncrawl.org/ccbot' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'Can I hide a page from Google with robots.txt?', desc: 'No. robots.txt governs crawler access but does not remove a URL from Search: a blocked URL can appear without a description. Exclusion needs noindex or password protection [Source 76].' },
          { title: 'Is one rule "for AI bots" enough?', desc: 'No. GPTBot, ClaudeBot, PerplexityBot, Googlebot and CCBot are different agents with different purposes; policy is set for each [Source 70, 74, 75].' },
          { title: 'If I block ClaudeBot, does my content disappear from all AI?', desc: 'No. Blocking one live agent does not remove content from open corpora such as Common Crawl, which other systems use [Source 77].' },
          { title: 'Where should an access-focused GEO audit start?', desc: 'By checking robots.txt and the firewall for Google, Bing, OpenAI, Perplexity, Anthropic and CCBot — one of the first and cheapest checks [Source 76, 71].' },
        ],
      },
    ],
  },
  {
    slug: 'structured-data-for-aeo',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Technical guide',
    title: 'Structured data for AEO: what markup does and does not do',
    subtitle: 'Markup makes entities explicit to a machine and grants Search eligibility — it is not a direct boost in AI answers. Here is the line between real value and overclaim.',
    sections: [
      {
        type: 'lead',
        text: '"Add Schema and you will land in AI Overviews" is a common but inaccurate message. Without markup, entities reach the search engine less explicitly — which is not a condition of AI visibility. And some schemas, FAQ rich results among them, no longer produce a Google rich-result effect at all.',
      },
      { type: 'heading', text: 'What structure actually gives you' },
      {
        type: 'paragraph',
        text: 'Markup does not push a page forward — it provides explicit clues. Google\'s structured data documentation explains that markup helps the system understand a page\'s content and can grant eligibility for rich results [Source 68]. That is technical clarity and Search eligibility, not a lever that guarantees citation in an AI answer.',
      },
      { type: 'heading', text: 'There is no special schema for AI Overviews or AI Mode' },
      {
        type: 'paragraph',
        text: 'This is the most frequent overclaim. Google Search Central documents plainly that AI Overviews and AI Mode have no special schema.org markup and no technical requirements beyond baseline SEO [Source 65]. Do not sell an "AI schema" — there is none; the same technical base that serves ordinary Search is what works.',
      },
      { type: 'heading', text: 'FAQPage is no longer a Google rich-result lever' },
      {
        type: 'paragraph',
        text: 'An FAQ content block is still useful, but JSON-LD FAQPage has changed status. Per Google\'s documentation, FAQ rich results stopped appearing in Google Search on 7 May 2026, and the reporting and support are being withdrawn [Source 68]. Keep the visible FAQ content; treat FAQPage as optional semantics — useful for non-Google consumers — rather than a Google rich-result lever.',
      },
      { type: 'heading', text: 'Machine readability is its own goal' },
      {
        type: 'paragraph',
        text: 'A site is read by more than people. Salemi et al. examine search not only for humans but for machine consumers, RAG systems included [Source 17]. Clear entities, definitions and structured facts make content fit for machine use, whatever the status of any particular rich result.',
      },
      { type: 'heading', text: 'A public site as a source for assistants' },
      {
        type: 'paragraph',
        text: 'Structured public content feeds corporate assistants. Microsoft Copilot Studio documents how Copilot can use public websites for generative answers [Source 73]. Clearly structured public content becomes a source not only for search but for custom AI assistants.',
      },
      { type: 'heading', text: 'Summary: value without overclaim' },
      {
        type: 'list',
        items: [
          { title: 'Helps Google understand the page', desc: 'Yes [68].' },
          { title: 'Grants eligibility for rich results', desc: 'Yes, for the applicable types [68].' },
          { title: 'A special schema exists for AI Overviews / AI Mode', desc: 'No [65].' },
          { title: 'FAQPage produces a Google rich result', desc: 'Not any more, since 7 May 2026 [68].' },
          { title: 'Markup is a direct boost in AI answers', desc: 'Unsupported [65, 68].' },
        ],
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '68 · Google Search Central', desc: 'Structured data: explicit clues, rich-result eligibility; FAQ rich results removed 7 May 2026.' },
          { title: '65 · Google Search Central', desc: 'No special schema and no requirements beyond baseline SEO for AI Overviews / AI Mode.' },
          { title: '17 · Salemi et al., 2024, arXiv', desc: 'Search for machine consumers and RAG. arxiv.org/abs/2405.00175' },
          { title: '73 · Microsoft Copilot Studio', desc: 'Public websites as a source for generative answers.' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'Will structured data help me into an AI answer?', desc: 'Markup gives explicit clues and Search eligibility, but it is not a direct AI boost: there is no special schema for AI Overviews or AI Mode, and no requirements beyond baseline SEO [Source 65, 68].' },
          { title: 'Should I add JSON-LD FAQPage?', desc: 'Visible FAQ content, yes. JSON-LD FAQPage only optionally: FAQ rich results were removed on 7 May 2026, so it is no longer a Google rich-result lever [Source 68].' },
          { title: 'Is there a separate "schema for AI"?', desc: 'No. Google documents it directly: AI Overviews and AI Mode have no special schema.org markup and no technical requirements beyond baseline SEO [Source 65].' },
          { title: 'Then why bother with structured data for GEO?', desc: 'It makes entities and facts explicit for machine use, including RAG systems and custom assistants — clarity, not a guarantee of citation [Source 17, 73].' },
        ],
      },
    ],
  },
  {
    slug: 'passage-ready-content',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Technical guide',
    title: 'How to write passage-ready content: a practical checklist',
    subtitle: 'Many retrieval systems work on passages and chunks. This checklist collects editorial heuristics derived from retrieval research — it is not a guarantee of citation.',
    sections: [
      {
        type: 'lead',
        text: 'Text written as unbroken prose extracts poorly in fragments. A key claim in the middle of a long block may never shape the answer. "Passage-ready" is structural engineering rather than copywriting for its own sake — and it is not a Google requirement to chunk content.',
      },
      { type: 'heading', text: 'Why the passage, not the page' },
      {
        type: 'paragraph',
        text: 'ColBERT introduced efficient passage search through contextualized late interaction — the system picks short fragments rather than whole pages [Source 27]. Many retrieval systems work exactly on passages and chunks, though some products also fetch the page or use snippets. A block has to make sense away from the rest of the page.',
      },
      { type: 'heading', text: 'Semantics, not keyword density' },
      {
        type: 'paragraph',
        text: 'DPR showed that dense representations can outperform sparse retrieval on open-domain QA tasks [Source 26]; production systems often use hybrid methods. For passage-ready writing that means clear definitions, context and completeness decide the outcome, not keyword density.',
      },
      { type: 'heading', text: 'The claim goes at the start of the block' },
      {
        type: 'paragraph',
        text: 'Liu et al. showed that model performance is often higher when the relevant information sits at the beginning or the end, and falls in the middle of a long context [Source 35]. Hence the editorial heuristic — not a proven factor in citation or inclusion: put the claim in the block\'s first sentence to reduce the risk of losing it.',
      },
      { type: 'heading', text: 'A passage-ready block checklist' },
      {
        type: 'list',
        items: [
          { title: 'The claim in the first sentence', desc: 'Less risk of being lost in a long context [35].' },
          { title: 'One block, one complete thought', desc: 'The fragment is extracted without the page context [27].' },
          { title: 'A clear definition plus evidence (data, source, example)', desc: 'Semantic retrieval rewards completeness [26].' },
          { title: 'No long run-up', desc: 'The point must not sink into the middle [35].' },
          { title: 'The block stands alone', desc: 'Legible away from the rest of the page [27].' },
        ],
      },
      { type: 'heading', text: 'Automated rewriting for the engine' },
      {
        type: 'paragraph',
        text: 'Adaptation for generative engines is already being researched. Wu et al. propose AutoGEO, a framework that learns a generative search engine\'s preferences and automatically rewrites web content so it is used better in answers [Source 03]. Useful structural adaptation, yes; manipulative gaming, a risk.',
      },
      { type: 'heading', text: 'Content for machines too' },
      {
        type: 'paragraph',
        text: 'Salemi et al. examine search not only for people but for machine consumers, RAG systems included [Source 17]. Passage-ready structure is also about designing content to be easy to extract and fit for machine use, not merely readable by a person.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '27 · Khattab & Zaharia, 2020, SIGIR', desc: 'ColBERT: retrieval at passage level. arxiv.org/abs/2004.12832' },
          { title: '35 · Liu et al., 2024, TACL', desc: 'Information in the middle of the context is used less well. aclanthology.org/2024.tacl-1.9/' },
          { title: '26 · Karpukhin et al., 2020, EMNLP', desc: 'DPR: dense retrieval beats keyword overlap on open-domain QA.' },
          { title: '03 · Wu et al., 2026, ICLR', desc: 'AutoGEO: automated rewriting for a generative engine.' },
          { title: '17 · Salemi et al., 2024, arXiv', desc: 'Search for machine consumers and RAG. arxiv.org/abs/2405.00175' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'What does "passage-ready" mean?', desc: 'A block that can be extracted and understood away from the rest of the page: one complete thought, the claim first, a clear definition and evidence [Source 27].' },
          { title: 'Does passage-ready structure guarantee citation?', desc: 'No. These are editorial heuristics from retrieval research; they reduce the risk of losing meaning, they do not guarantee inclusion [Source 35].' },
          { title: 'Should I pack the block with keywords?', desc: 'No. Modern retrieval is often semantic or hybrid: clear definitions, context and completeness carry the weight [Source 26].' },
          { title: 'Can content be rewritten for the engine automatically?', desc: 'Technically yes — AutoGEO researches exactly that [Source 03]. But useful structural adaptation differs from manipulation, and gaming patterns risk being classified by platforms.' },
        ],
      },
    ],
  },
  {
    slug: 'prompt-query-clusters',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Technical guide',
    title: 'From keywords to prompt and query clusters',
    subtitle: 'What to target is a group of questions and an intent, not an individual key. This is a practical strategy derived from SEO and IR research, not a proven formula.',
    sections: [
      {
        type: 'lead',
        text: 'One keyword is not one intent: people phrase queries differently. Checking a single phrase does not represent the whole cluster of questions. Without clusters there is no systematic way to measure intent coverage in AI answers.',
      },
      { type: 'heading', text: 'Why a cluster rather than a key' },
      {
        type: 'paragraph',
        text: 'Query strategy is a long game. Erdmann et al. study the long-term strategy of keyword choice in SEO and its effect on competitiveness and traffic stability [Source 61]. Carried across to AEO and GEO: optimize for groups of questions and intents — prompt and query clusters — rather than individual keys. A practical strategy, not a guarantee of outcome.',
      },
      { type: 'heading', text: 'People ask in questions' },
      {
        type: 'paragraph',
        text: 'AEO grew out of QA logic. Natural Questions is built on real user questions paired with Wikipedia documents [Source 30]. Phrase cluster members as natural questions — "how do I…", "which is better…", "X versus Y" — because these systems look for the fragment that answers directly.',
      },
      { type: 'heading', text: 'Test across query types' },
      {
        type: 'paragraph',
        text: 'Retrieval quality cannot be measured on one keyword group. BEIR is a benchmark for evaluating retrieval models across tasks and domains, and it shows that retrieval quality does not reduce to a single dataset [Source 28]. A cluster has to cover different intent types rather than one narrow group.',
      },
      { type: 'heading', text: 'Types of cluster member' },
      {
        type: 'list',
        items: [
          { title: 'Category', desc: '"best tool for…" — high intent, high stakes.' },
          { title: 'Problem', desc: '"how do I solve…" — catches solution-seekers before they know the category name.' },
          { title: 'Comparative', desc: '"X versus Y", "alternatives to Y" — shows positioning against the market.' },
          { title: 'Branded', desc: 'Direct questions about the brand — accuracy and tone control, not just coverage.' },
        ],
      },
      { type: 'heading', text: 'Why the click stopped being a direct signal' },
      {
        type: 'paragraph',
        text: 'ORCAS describes a large set of aggregated query-document click pairs and shows the role of clicks in training and evaluating classic systems [Source 64]. In generative search, clicks on documents fall and feedback becomes less direct — so a cluster is measured by presence in the answer, not by clicks alone.',
      },
      { type: 'heading', text: 'Where AEO pays off most' },
      {
        type: 'paragraph',
        text: 'LLM answers are not equally useful everywhere. Caramancion studies when users prefer an LLM answer and when they prefer classic search [Source 15]. AEO has the greatest effect on complex, comparative and explanatory questions, where the user wants a finished answer.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '61 · Erdmann et al., 2022, J. of Business Research', desc: 'The long-term strategy of keyword choice.' },
          { title: '28 · Thakur et al., 2021, NeurIPS D&B', desc: 'BEIR: retrieval quality across tasks and domains. arxiv.org/abs/2104.08663' },
          { title: '15 · Caramancion, 2024, arXiv', desc: 'When users choose an LLM over search. arxiv.org/abs/2401.05761' },
          { title: '30 · Kwiatkowski et al., 2019, TACL', desc: 'Natural Questions: real user questions.' },
          { title: '64 · Craswell et al., 2020, CIKM', desc: 'ORCAS: the role of clicks in training and evaluating search. arxiv.org/abs/2006.05324' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'What is a prompt or query cluster?', desc: 'A group of queries and phrasings that express one intent ("best X", "X versus Y", "how to do X"). You target the cluster, not the individual key [Source 61].' },
          { title: 'Why can I not just check one phrase?', desc: 'Because one phrase does not represent an intent cluster, and retrieval quality depends on query type and domain [Source 28].' },
          { title: 'How should cluster members be phrased?', desc: 'As natural user questions — answer engines look for the fragment that answers directly, and QA datasets are built on real questions [Source 30].' },
          { title: 'Where does AEO have the biggest effect?', desc: 'On complex, comparative and explanatory queries, where the user wants a finished answer rather than a list of links [Source 15].' },
        ],
      },
    ],
  },
  {
    slug: 'zero-click',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Zero-click',
    title: 'Zero-click: why the value of search is moving into the answer',
    subtitle: 'A large share of searches ends without a click to the open web, and the presence of an AI summary lowers the chance of a visit further. Three sources examined for what that means to brands.',
    sections: [
      {
        type: 'lead',
        text: 'The classic "traffic from search" metric describes real brand visibility ever less well. When a user gets the answer without a click, the value of the visit falls and the value of presence inside the answer rises. Zero-click data is often retold inaccurately — it is worth staying close to the primary wording.',
      },
      { type: 'heading', text: 'Zero-click as a measurable trend' },
      {
        type: 'paragraph',
        text: 'SparkToro and Datos, in their 2024 study, examine what share of Google searches produce no click to the open web [Source 83]. The methodological limit: this is a panel and clickstream sample, not a full log of every search — the data gives a measurable market frame, and cannot be read as absolute statistics across all users and verticals. The key takeaway for GEO: a substantial share of demand resolves without a visit, outside classic SEO reporting.',
      },
      { type: 'heading', text: 'AI summaries deepen the effect' },
      {
        type: 'paragraph',
        text: 'Pew Research Center found that users click links less often when an AI summary appears in the results [Source 78]. This does not retire organic search, but it shifts the weight: being a source inside the summary becomes a goal of its own, distinct from a position in the list.',
      },
      { type: 'heading', text: 'A new discovery channel' },
      {
        type: 'paragraph',
        text: 'Similarweb\'s 2025 Generative AI Report records growth in generative AI usage and in referral traffic from AI platforms [Source 84]. That is a channel growing, not a replacement for Google: a separate brand-discovery channel appears, and it needs measuring separately from classic organic.',
      },
      { type: 'heading', text: 'What this means in practice' },
      {
        type: 'list',
        items: [
          { title: 'Demand without a click', desc: 'The classic metric is organic sessions. In the zero-click era, share of voice in answers.' },
          { title: 'AI summaries', desc: 'The classic metric is CTR from the SERP. Now, presence and absorption inside the summary.' },
          { title: 'AI platforms as a channel', desc: 'Referrals from AI platforms measured separately from organic. This describes a shift in metrics, not a claim that classic traffic disappears.' },
        ],
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '78 · Pew Research Center, 2025', desc: 'Fewer clicks when an AI summary is present. pewresearch.org' },
          { title: '83 · SparkToro / Datos, 2024', desc: 'Zero-click: the share without a click (panel/clickstream). sparktoro.com' },
          { title: '84 · Similarweb, 2025', desc: 'Growth in GenAI usage and referral traffic.' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'What is zero-click search?', desc: 'The case where a search ends without a click to the open web; the SparkToro and Datos study estimates its scale for Google [Source 83].' },
          { title: 'Do AI summaries really reduce clicks?', desc: 'Per Pew Research, users click links less often when an AI summary is present in the results [Source 78].' },
          { title: 'Is organic traffic disappearing entirely?', desc: 'No. The sources describe weight shifting toward visibility inside the answer, not the disappearance of clicks; specific figures hold only within their primary sources [Source 83, 78].' },
          { title: 'Is AI a separate discovery channel?', desc: 'Yes. Similarweb records growth in GenAI usage and referral traffic — a channel worth measuring separately from organic [Source 84].' },
        ],
      },
    ],
  },
  {
    slug: 'ai-overviews-vs-serp',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · AI Overviews',
    title: 'AI Overviews versus the SERP top 10: how much does AI cite what already ranks',
    subtitle: 'Is being in Google\'s top 10 enough to be cited by AI Overviews? Industry studies and empirical work examined for the overlap — and the divergence — between two kinds of visibility.',
    sections: [
      {
        type: 'lead',
        text: 'The common assumption is that top 10 equals presence in the AI answer. The data shows the link is partial. Overlap and divergence between organic rank and AI citation have to be measured rather than assumed. Industry metrics differ in methodology — read them as a frame, not an absolute.',
      },
      { type: 'heading', text: 'How much of AI Overviews comes from the top 10' },
      {
        type: 'paragraph',
        text: 'Ahrefs analyses how often AI Overviews cite pages that already rank in the organic top 10 [Source 81]. The strategic conclusion: overlap exists but is partial — a top position does not equal automatic presence in the answer.',
      },
      { type: 'heading', text: 'Which queries the AI answer touches' },
      {
        type: 'paragraph',
        text: 'The Semrush AI Overviews study provides the market picture: on which query types and in which domains AI Overviews appears more often [Source 80]. That tells you where the SERP/AI divergence matters most — and where GEO effort has more leverage.',
      },
      { type: 'heading', text: 'The trend across a year' },
      {
        type: 'paragraph',
        text: 'BrightEdge, in AI Overviews at the One-Year Mark, tracks changes in the presence, size and citation behaviour of AI Overviews a year after launch [Source 82]. The key point: overlap with organic is a moving quantity, so a one-off measurement goes stale quickly.',
      },
      { type: 'heading', text: 'Why the two visibilities diverge' },
      {
        type: 'paragraph',
        text: 'Grossman et al. compare Google Search, Gemini and AI Overviews empirically and show how the mix of sources and the user path change [Source 09]. That explains the mechanism: the AI system assembles its own set of sources, so SERP rank and AI citation are different quantities.',
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '09 · Grossman et al., 2026', desc: 'Empirical: Google vs Gemini vs AI Overviews. arxiv.org/abs/2604.27790' },
          { title: '80 · Semrush, 2025', desc: 'Which queries AI Overviews touches. semrush.com' },
          { title: '81 · Ahrefs, 2026', desc: 'Overlap between AI Overviews and the top 10. ahrefs.com' },
          { title: '82 · BrightEdge, 2025', desc: 'AI Overviews one year on: the trend. brightedge.com' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'If I rank in Google\'s top 10, will AI Overviews cite me?', desc: 'Not necessarily. The Ahrefs study shows only partial overlap — a top position raises the odds without guaranteeing citation [Source 81].' },
          { title: 'Why do SERP rank and AI citation diverge?', desc: 'Because the AI system assembles its own set of sources; the empirical comparison of Google, Gemini and AI Overviews shows different source mixes [Source 09].' },
          { title: 'Can I rely on a single overlap measurement?', desc: 'No. BrightEdge records substantial year-over-year movement — the overlap shifts, so repeated measurement is required [Source 82].' },
          { title: 'Where does GEO have the most leverage?', desc: 'Where AI Overviews appears more often by query type — which market data establishes, not assumption [Source 80].' },
        ],
      },
    ],
  },
  {
    slug: 'answer-instability',
    date: 'May 2026',
    readTime: '5 min read',
    eyebrow: 'Research Lab · Instability',
    title: 'AI answer instability: why one measurement misleads',
    subtitle: 'The answers of AI search engines and their sets of cited sources change between runs. Two papers examined for why GEO monitoring has to be a repeatable process.',
    sections: [
      {
        type: 'lead',
        text: '"I checked one prompt, the brand is not in AI" is common and mistaken logic. If the answer changes between runs, a one-off measurement does not describe the real position. Without understanding the sources of instability there is no way to build a correct visibility metric.',
      },
      { type: 'heading', text: 'Answers and citations are unstable between runs' },
      {
        type: 'paragraph',
        text: 'Schulte shows directly that the answers of AI search engines and their sets of cited sources are unstable between runs, so a single visibility measurement can misrepresent a brand\'s position [Source 06]. That is the central argument against a one-off "prompt check".',
      },
      { type: 'heading', text: 'The methodological consequence' },
      {
        type: 'paragraph',
        text: 'From source 06 follows a methodological conclusion: a reliable assessment of visibility needs a repeatable measurement design — prompt sets, several runs, time windows, probabilistic metrics, rather than a single observation. That is a well-founded methodological conclusion from the research, not the one mandatory standard for every product.',
      },
      { type: 'heading', text: 'Why feedback complicates the picture' },
      {
        type: 'paragraph',
        text: 'Dai et al. (NExT-Search) describe how, in classic search, user behaviour improves ranking, while in generative search the feedback often attaches only to the final answer [Source 20]. A less direct feedback loop is one reason visibility is harder to capture in a single snapshot.',
      },
      { type: 'heading', text: 'How this affects metrics' },
      {
        type: 'list',
        items: [
          { title: 'One prompt, one run', desc: 'An instantaneous snapshot — the risk of a false "brand absent" [06].' },
          { title: 'Repeated measurement', desc: 'A distribution of presence — more expensive, and correct.' },
          { title: 'Only the final answer', desc: 'An end result with no signal from the retrieval and generation stages [20].' },
        ],
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '06 · Schulte, 2026', desc: 'Instability of answers and citations between runs. arxiv.org/abs/2604.07585' },
          { title: '20 · Dai et al., 2025, ACM SIGIR', desc: 'A less direct feedback loop in generative search. arxiv.org/abs/2505.14680' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'Why can visibility not be checked with one prompt?', desc: 'Because answers and cited sources are unstable between runs; one measurement can falsely show the brand as absent [Source 06].' },
          { title: 'How should it be measured instead?', desc: 'Repeated measurement: prompt sets, several runs, time windows, probabilistic metrics — a methodological conclusion from the GEO measurement research, not the one mandatory standard [Source 06].' },
          { title: 'Why is generative search harder to pin down?', desc: 'Because feedback often attaches only to the final answer rather than to the retrieval and generation stages — the loop is less direct [Source 20].' },
          { title: 'Is instability a platform bug?', desc: 'It is a property of generative systems, to be built into the measurement methodology rather than ignored [Source 06].' },
        ],
      },
    ],
  },
  {
    slug: 'citation-bias',
    date: 'May 2026',
    readTime: '6 min read',
    eyebrow: 'Research Lab · Citation bias',
    title: 'Citation bias: why an AI citation is not objective visibility',
    subtitle: 'LLM search cites a different set of domains than Google, media type can outweigh content (in the scenario studied), and a correct answer does not guarantee faithful attribution. Three papers examined.',
    sections: [
      {
        type: 'lead',
        text: '"AI cites us" sounds like success, but the citation can be biased or fail to support the claim. AI search has its own map of domains — carrying SEO assumptions across is risky. Without understanding bias it is easy to build a metric that misleads your own team.',
      },
      { type: 'heading', text: 'A different map of domains and coverage' },
      {
        type: 'paragraph',
        text: 'Zhang et al. compare source coverage and citation bias in LLM search against classic systems: some domains appear only in LLM search, and source reliability differs [Source 10]. The conclusion: the AI channel needs its own source map rather than an extrapolation from organic.',
      },
      { type: 'heading', text: 'The media source can outweigh the content' },
      {
        type: 'paragraph',
        text: 'Dai et al. show political bias in LLM-generated citations: in the scenario studied, the choice of media source could influence citation behaviour more strongly than the content of the specific text [Source 21]. This is not a general law across all domains but a result within one study of political citation bias. For GEO it is a signal: the authority and type of a domain are a possible distinct risk factor in citation.',
      },
      { type: 'heading', text: 'Correct is not faithfully attributed' },
      {
        type: 'paragraph',
        text: 'Wallat et al. separate correctness from faithfulness: an answer can be right while the link fails to support the specific claim [Source 39]. So the fact of a citation does not by itself mean the source was used honestly in the answer.',
      },
      { type: 'heading', text: 'What follows for metrics' },
      {
        type: 'list',
        items: [
          { title: 'LLM search cites us', desc: 'Wrong reading: "we are objectively visible". Correct: check absorption and faithfulness [39].' },
          { title: 'The domain appears often in AI answers', desc: 'Wrong reading: "the content is better". Correct: possible bias by media type, within the study\'s scope [21].' },
          { title: 'The SEO report shows a top position', desc: 'Wrong reading: "AI will be the same". Correct: a different map of domains [10].' },
        ],
      },
      { type: 'heading', text: 'Sources (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '10 · Zhang et al., 2025', desc: 'Coverage and citation bias in LLM search. arxiv.org/abs/2512.09483' },
          { title: '21 · Dai et al., 2025, EMNLP', desc: 'Media source outweighs content (political bias). aclanthology.org/2025.emnlp-main.872/' },
          { title: '39 · Wallat et al., 2024/2025, ACM', desc: 'Correctness ≠ faithfulness of attribution. dl.acm.org/doi/10.1145/3731120.3744592' },
        ],
      },
      { type: 'heading', text: 'Frequently asked questions' },
      {
        type: 'list',
        items: [
          { title: 'If AI cites us, is that success?', desc: 'Partly. The citation may come without absorption, or fail to support your claim; a separate faithfulness layer is needed [Source 39].' },
          { title: 'Why can I not rely on the SEO map of domains?', desc: 'Because LLM search has different coverage and citation bias — some domains appear only there [Source 10].' },
          { title: 'What is citation bias in plain words?', desc: 'A systematic skew in source selection: in the political-bias scenario studied, the type and authority of a medium could influence citation more than content — not to be carried across as a general law for all domains [Source 21].' },
          { title: 'How do I account for this in metrics?', desc: 'Add absorption and faithfulness layers on top of the fact of citation, or the metric misleads the team [Source 39, 10].' },
        ],
      },
    ],
  },
];
