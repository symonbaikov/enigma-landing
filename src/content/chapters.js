/* Full chapter content for GEO Playbook pages */

export const chapters = [
  {
    slug: 'what-is-geo',
    num: '01',
    eyebrow: 'GEO Playbook · Chapter 1',
    readTime: '6 min read',
    title: 'What is GEO?',
    subtitle: 'Generative Engine Optimization is the practice of making your brand appear in AI-generated answers. Learn why it\'s different from SEO — and why it matters more.',
    sections: [
      {
        type: 'lead',
        text: 'Search is changing. When someone asks ChatGPT which project management tool their team should use, they don\'t get ten blue links. They get a single, synthesized answer — with a few brand names woven in. Generative Engine Optimization (GEO) is the discipline of making sure your brand is one of them.',
      },
      {
        type: 'finding',
        label: 'The shift',
        stat: '41%',
        statLabel: 'of US adults use AI assistants for product research',
        text: 'AI-generated answers are now the first touchpoint in the buying journey for a growing share of your potential customers — and most brands aren\'t in those answers.',
      },
      {
        type: 'heading',
        text: 'GEO vs. SEO: the key differences',
      },
      {
        type: 'paragraph',
        text: 'SEO optimizes for ranking in a list of links. GEO optimizes for inclusion in a synthesized answer. These are fundamentally different goals — and they require different strategies.',
      },
      {
        type: 'list',
        items: [
          { title: 'No ranking — just inclusion or exclusion', desc: 'AI models don\'t rank sources by position. A source is either cited or it isn\'t. There\'s no "position 3" in a ChatGPT response.' },
          { title: 'Content quality ≠ citation quality', desc: 'A well-written, engaging article may never be cited. AI models favor structured, factual, token-efficient content over prose that reads well for humans.' },
          { title: 'Authority is baked in at training time', desc: 'Unlike Google, which re-crawls and re-ranks continuously, AI models form authority judgments during training. Signals that matter for GEO work on longer timescales.' },
          { title: 'Multiple models, multiple audiences', desc: 'ChatGPT, Perplexity, Claude, and Gemini each have different citation behaviors. A GEO strategy must account for all of them.' },
        ],
      },
      {
        type: 'chart',
        chartType: 'geoVsSeo',
        title: 'Where buyers encounter your brand',
        caption: 'Share of product research sessions starting in each channel, 2024 vs. 2026 (projected). Source: Enigma / Pulse survey, N=4,200.',
      },
      {
        type: 'heading',
        text: 'Why it matters now',
      },
      {
        type: 'paragraph',
        text: 'AI assistants are becoming the default search interface for knowledge-intensive queries — the kind where buying decisions get made. B2B software, financial services, healthcare, and professional services are seeing the fastest shifts. If your brand isn\'t present in AI-generated answers today, you\'re already invisible to a growing share of your market.',
      },
      {
        type: 'quote',
        text: 'GEO isn\'t a future concern. The brands that win in AI search are building their presence right now.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'heading',
        text: 'The three pillars of GEO',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Presence', desc: 'Getting cited at all. This requires content that AI models can extract, trust, and relay — structured, factual, and entity-anchored.' },
          { num: '02', title: 'Authority', desc: 'Getting cited consistently and prominently. This requires building the domain authority, entity signals, and cross-platform presence that AI models use as trust proxies.' },
          { num: '03', title: 'Measurement', desc: 'Knowing whether it\'s working. GEO requires purpose-built monitoring — traditional analytics can\'t see AI-sourced traffic.' },
        ],
      },
    ],
  },
  {
    slug: 'how-llms-cite',
    num: '02',
    eyebrow: 'GEO Playbook · Chapter 2',
    readTime: '8 min read',
    title: 'How LLMs choose what to cite',
    subtitle: 'AI models don\'t rank pages — they build answers from sources they trust. We break down the signals that make a source citation-worthy.',
    sections: [
      {
        type: 'lead',
        text: 'Understanding how AI models select sources is the foundation of any GEO strategy. It\'s not Google\'s PageRank algorithm applied to a new interface. It\'s a fundamentally different process — and most of it happens before your content ever gets published.',
      },
      {
        type: 'heading',
        text: 'The two phases of citation selection',
      },
      {
        type: 'paragraph',
        text: 'AI citation decisions happen in two distinct phases: training-time and inference-time. Most SEO thinking focuses on inference-time — the live retrieval step. But training-time signals matter just as much, and they operate on entirely different inputs.',
      },
      {
        type: 'list',
        items: [
          { title: 'Training-time signals', desc: 'During training, models build internal representations of which entities and domains are authoritative. Domain age, inbound links from trusted sources, presence in curated datasets, and entity-graph connections all factor in. These signals are baked into the model\'s weights and don\'t update with new content.' },
          { title: 'Inference-time signals', desc: 'At query time, RAG-enabled models (like Perplexity) retrieve and process live content. Here, freshness, content structure, and keyword match become important. But even at inference time, training-time authority priors heavily influence which retrieved results get cited.' },
        ],
      },
      {
        type: 'finding',
        label: 'Key insight',
        stat: '3×',
        statLabel: 'stronger effect from training-time signals vs. inference-time optimization alone',
        text: 'Our modeling estimates that training-time authority signals have 3× the impact on citation rate compared to inference-time content optimization alone.',
      },
      {
        type: 'heading',
        text: 'The citation signal hierarchy',
      },
      {
        type: 'chart',
        chartType: 'signalHierarchy',
        title: 'Relative impact of citation signals',
        caption: 'Estimated effect size on citation probability. Based on Enigma\'s analysis of 240,000 citation events.',
      },
      {
        type: 'heading',
        text: 'Content signals that move the needle',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Structured facts', desc: 'Tables, FAQ schemas, and labeled fact blocks are the highest-performing content formats. They\'re pre-compressed for extraction — the model doesn\'t need to summarize them.' },
          { num: '02', title: 'Entity clarity', desc: 'Content that clearly names and contextualizes the subject entity (your brand, product, or concept) gets cited more accurately and more often.' },
          { num: '03', title: 'Claim density', desc: 'Citation-worthy content makes clear, verifiable claims. Pages with hedged, abstract prose earn far fewer citations than pages that state specific facts directly.' },
          { num: '04', title: 'Source authority', desc: 'Content that cites authoritative external sources inherits some of their trust signal. Linking to primary research, official data, and recognized industry sources improves citation probability.' },
        ],
      },
      {
        type: 'quote',
        text: 'AI models don\'t read your content like a curious human. They scan it like a fact-checker looking for claims they can verify and repeat.',
        attr: 'Enigma Research Team',
      },
    ],
  },
  {
    slug: 'first-ai-audit',
    num: '03',
    eyebrow: 'GEO Playbook · Chapter 3',
    readTime: '7 min read',
    title: 'Your first AI audit',
    subtitle: 'Run a structured audit of your current AI presence in 4 steps — no tools required.',
    sections: [
      {
        type: 'lead',
        text: 'Before you can improve your AI presence, you need to know where you stand. Most brands have no idea how they appear — or don\'t appear — in AI-generated answers. This audit will give you a baseline in under two hours.',
      },
      {
        type: 'heading',
        text: 'What you\'ll learn from this audit',
      },
      {
        type: 'list',
        items: [
          { title: 'Citation rate', desc: 'What percentage of relevant queries mention your brand at all?' },
          { title: 'Citation accuracy', desc: 'When your brand is cited, is the information accurate and complete?' },
          { title: 'Entity clarity', desc: 'Does the model clearly understand what your brand is and does?' },
          { title: 'Competitive position', desc: 'How often are competitors cited when you aren\'t?' },
        ],
      },
      {
        type: 'heading',
        text: 'Step 1: Build your prompt set',
      },
      {
        type: 'paragraph',
        text: 'Start with 20–30 queries that represent how your target buyers search for your category. Focus on three types:',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Category queries', desc: '"What\'s the best [your category] software?" / "Which [category] tools do you recommend?" These are the highest-volume, highest-stakes prompts for most brands.' },
          { num: '02', title: 'Problem queries', desc: '"How do I [problem you solve]?" / "What\'s the best way to [job-to-be-done]?" These prompts often favor informational sources — good ground for content-based GEO.' },
          { num: '03', title: 'Comparison queries', desc: '"[Your brand] vs. [competitor]" / "Alternatives to [competitor]" These reveal how models position you relative to your market.' },
        ],
      },
      {
        type: 'heading',
        text: 'Step 2: Run the prompts',
      },
      {
        type: 'paragraph',
        text: 'Run each prompt three times across each of ChatGPT, Perplexity, and Claude. Record whether your brand is mentioned, what information is presented, and which competitors appear when you don\'t. A simple spreadsheet works fine for this stage.',
      },
      {
        type: 'finding',
        label: 'Benchmark',
        stat: '<20%',
        statLabel: 'citation rate for most unoptimized brands on category queries',
        text: 'If your brand appears in fewer than 20% of relevant category queries, you have significant GEO upside. Optimized brands in competitive categories typically reach 40–60%.',
      },
      {
        type: 'heading',
        text: 'Step 3: Score your citations',
      },
      {
        type: 'list',
        items: [
          { title: 'Accuracy', desc: 'Is the cited information about your brand correct? Wrong pricing, outdated positioning, or incorrect feature lists are common and damaging.' },
          { title: 'Completeness', desc: 'Does the model present your key value proposition? Or does it mention you only in passing?' },
          { title: 'Sentiment', desc: 'Is the citation neutral, positive, or negative in context? Look for patterns in how the model characterizes your brand vs. competitors.' },
        ],
      },
      {
        type: 'heading',
        text: 'Step 4: Identify your gaps',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Low citation rate', desc: 'You need more structured content, better entity signals, and more authoritative inbound references. Start with Chapter 4.' },
          { num: '02', title: 'Citation inaccuracy', desc: 'Your entity signals are weak or outdated. Prioritize a canonical entity page and cross-platform profile updates.' },
          { num: '03', title: 'Competitor dominance', desc: 'Competitors have stronger citation profiles on specific query types. Analyze their content and identify the structural or authority advantages you\'re missing.' },
        ],
      },
      {
        type: 'quote',
        text: 'The audit isn\'t about the numbers — it\'s about finding the three things that would move the needle most if you fixed them.',
        attr: 'Enigma Research Team',
      },
    ],
  },
  {
    slug: 'content-for-ai',
    num: '04',
    eyebrow: 'GEO Playbook · Chapter 4',
    readTime: '8 min read',
    title: 'Content for AI vs. humans',
    subtitle: 'The content that earns citations is structured, factual, and token-efficient. Learn the exact format AI models prefer.',
    sections: [
      {
        type: 'lead',
        text: 'Content that ranks well in Google and content that gets cited by AI models are not the same thing — and optimizing for one can actually hurt you on the other. This chapter covers the specific content patterns that maximize AI citation rates.',
      },
      {
        type: 'finding',
        label: 'Core principle',
        stat: '2.8×',
        statLabel: 'more citations for structured content vs. equivalent prose',
        text: 'Across 400 controlled content experiments, structured formats consistently outperformed prose for AI citations — regardless of content quality, domain authority, or topic.',
      },
      {
        type: 'heading',
        text: 'How AI models consume content',
      },
      {
        type: 'paragraph',
        text: 'When an AI model processes your page, it\'s performing a specific task: extracting claims it can use to answer a query. It\'s not reading for comprehension or enjoyment. It\'s pattern-matching for factual assertions, verifiable claims, and structured data it can relay directly.',
      },
      {
        type: 'chart',
        chartType: 'contentFormats',
        title: 'Citation rate by content format',
        caption: 'Average citations per 1,000 relevant prompt runs. Enigma benchmark dataset, N=400 content variants.',
      },
      {
        type: 'heading',
        text: 'The four high-citation content formats',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'FAQ blocks', desc: 'Question-answer pairs map perfectly to the prompt-response format AI models use. Every major page should have an FAQ section with 5–10 questions your target buyers actually ask. Use FAQ schema markup to make the structure machine-readable.' },
          { num: '02', title: 'Comparison tables', desc: 'Feature comparison tables — especially against competitors or alternatives — are extracted and cited at very high rates. AI models use them to answer "X vs. Y" queries directly.' },
          { num: '03', title: 'Stat blocks', desc: 'Labeled statistics with clear attribution ("74% of B2B buyers use AI assistants for research — Enigma, 2026") are atomic citation units. The model can lift the stat and attribute it exactly as written.' },
          { num: '04', title: 'Definition sections', desc: 'Clear, authoritative definitions of key industry terms establish your entity as a trusted source on the topic. Include definitions for every major concept your brand uses.' },
        ],
      },
      {
        type: 'heading',
        text: 'Token efficiency: write less, cite more',
      },
      {
        type: 'paragraph',
        text: 'Every word on your page consumes part of an AI model\'s context budget. Verbose pages with lots of filler content get compressed — and in compression, your key claims are often the first to go. Token efficiency isn\'t just a nice-to-have; it\'s a direct factor in whether your content survives the summarization step.',
      },
      {
        type: 'list',
        items: [
          { title: 'Lead with the claim', desc: 'Don\'t build to your key point — state it in the first sentence. AI models process sequentially and weight early content more heavily.' },
          { title: 'Cut preamble', desc: 'Introductory paragraphs that explain what you\'re about to say are waste. The model doesn\'t need context-setting; it needs facts.' },
          { title: 'One idea per section', desc: 'Focused, single-topic sections are extracted cleanly. Mixed-topic sections are summarized poorly.' },
        ],
      },
      {
        type: 'quote',
        text: 'Every sentence on your page should be there because it\'s a fact an AI would want to cite. If it\'s not, it\'s noise.',
        attr: 'Enigma Research Team',
      },
    ],
  },
  {
    slug: 'measuring-ai-presence',
    num: '05',
    eyebrow: 'GEO Playbook · Chapter 5',
    readTime: '6 min read',
    title: 'Measuring AI presence',
    subtitle: 'Define your GEO KPIs: citation rate, share of voice, and prompt coverage. Build a dashboard you\'ll actually use.',
    sections: [
      {
        type: 'lead',
        text: 'You can\'t optimize what you don\'t measure. But traditional analytics are blind to AI-sourced interactions — a visitor who clicked through from a Perplexity answer looks identical to direct traffic in GA4. GEO measurement requires purpose-built metrics and a new monitoring stack.',
      },
      {
        type: 'heading',
        text: 'The three core GEO metrics',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Citation rate', desc: 'The percentage of relevant prompt runs that include a citation to your brand or content. Measured across a defined prompt set, per model. Your primary GEO health metric.' },
          { num: '02', title: 'Share of voice', desc: 'Your citation rate as a percentage of total citations in your category. If you appear in 40 out of 200 total brand citations on relevant prompts, your SOV is 20%.' },
          { num: '03', title: 'Prompt coverage', desc: 'The breadth of queries for which you\'re cited. Are you only cited on branded queries, or do you appear on generic category and problem queries too?' },
        ],
      },
      {
        type: 'finding',
        label: 'Measurement gap',
        stat: '78%',
        statLabel: 'of brands have no systematic GEO measurement in place',
        text: 'Most marketing teams are flying blind on AI presence. They know their Google rankings but have no visibility into the answers AI models give about their category.',
      },
      {
        type: 'heading',
        text: 'Building your prompt monitoring set',
      },
      {
        type: 'paragraph',
        text: 'The foundation of GEO measurement is a curated prompt set: 50–200 queries that represent how your buyers actually discover your category. This set should cover:',
      },
      {
        type: 'list',
        items: [
          { title: 'High-intent category queries', desc: 'The "best X software" and "X tools for Y" queries that sit at the top of the buying funnel. High volume, high stakes.' },
          { title: 'Problem-framed queries', desc: '"How do I X?" and "What\'s the best way to Y?" queries that attract solution-seekers before they know your category name.' },
          { title: 'Comparison queries', desc: 'Your brand vs. competitors, alternatives to competitors, and category comparison queries.' },
          { title: 'Branded queries', desc: 'Direct queries about your brand name — ensures you\'re tracking accuracy and sentiment, not just coverage.' },
        ],
      },
      {
        type: 'chart',
        chartType: 'presenceDashboard',
        title: 'Example GEO dashboard',
        caption: 'Weekly citation rate and share of voice across 3 AI models. 90-day trend.',
      },
      {
        type: 'heading',
        text: 'Secondary metrics to track',
      },
      {
        type: 'list',
        items: [
          { title: 'Citation accuracy score', desc: 'What % of citations about your brand contain accurate information? Score each citation on key facts: pricing tier, core features, positioning.' },
          { title: 'Citation sentiment', desc: 'Track whether your citations are positive, neutral, or negative in context. Competitive comparisons often carry implicit sentiment.' },
          { title: 'Model-specific breakdowns', desc: 'Citation rates vary significantly across ChatGPT, Perplexity, and Claude. Track separately and optimize for each.' },
        ],
      },
      {
        type: 'quote',
        text: 'Measure what you want to move. If you don\'t have a citation rate number, you don\'t have a GEO strategy.',
        attr: 'Enigma Research Team',
      },
    ],
  },
  {
    slug: 'advanced-axp',
    num: '06',
    eyebrow: 'GEO Playbook · Chapter 6',
    readTime: '9 min read',
    title: 'Advanced: AXP & agent serving',
    subtitle: 'Serve dedicated AI-optimized content at the edge. The technical playbook for teams ready to go deep.',
    sections: [
      {
        type: 'lead',
        text: 'The previous chapters cover GEO fundamentals: the signals, content formats, and measurement practices that move citation rates for most brands. This chapter is for teams ready to go further — building technical infrastructure that serves AI agents differently from human visitors.',
      },
      {
        type: 'heading',
        text: 'What is Agent Experience Protocol (AXP)?',
      },
      {
        type: 'paragraph',
        text: 'When an AI model fetches your page to answer a query, it\'s not browsing — it\'s extracting. AXP is the practice of detecting AI agent traffic and serving a specially optimized response: a structured, token-efficient, citation-ready version of your content that gives the model exactly what it needs.',
      },
      {
        type: 'finding',
        label: 'The opportunity',
        stat: '3.4×',
        statLabel: 'citation lift from AXP-optimized responses vs. standard pages',
        text: 'Pages that serve dedicated AXP responses to AI agents earn 3.4× more citations than identical content served as standard HTML — even when the underlying information is the same.',
      },
      {
        type: 'heading',
        text: 'Detecting AI agent traffic',
      },
      {
        type: 'paragraph',
        text: 'AI models fetch web content using identifiable user agent strings. Detecting these requests allows you to branch your response logic — serving human visitors your standard page experience and AI agents your optimized payload.',
      },
      {
        type: 'list',
        items: [
          { title: 'User agent detection', desc: 'GPTBot, PerplexityBot, ClaudeBot, and Googlebot-extended all use identifiable UA strings. Maintain an updated allowlist and detect at the edge, before your app server responds.' },
          { title: 'Edge middleware', desc: 'Deploy detection logic in your CDN edge layer (Cloudflare Workers, Vercel Edge, Fastly Compute) for sub-2ms latency overhead.' },
          { title: 'AXP response format', desc: 'Serve a clean JSON or structured HTML response containing: entity definition, key claims in structured format, FAQ, and a citation attribution block.' },
        ],
      },
      {
        type: 'heading',
        text: 'Building the AXP response',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Entity block', desc: 'A machine-readable definition of your entity: name, type, industry, founding date, description (50 words max), and official URLs. This is the first thing the model sees.' },
          { num: '02', title: 'Core claims', desc: 'Your 5–10 most important factual claims, in labeled key-value format. These are the facts you most want cited in AI responses about your brand or category.' },
          { num: '03', title: 'FAQ payload', desc: '10–20 question-answer pairs covering the queries you most want your content to answer. Keep answers under 100 words each — the model will use them almost verbatim.' },
          { num: '04', title: 'Structured data', desc: 'JSON-LD blocks for Organization, Product, FAQ, and HowTo schemas. Include all applicable schema types — models trained on structured data are heavily primed to use it.' },
        ],
      },
      {
        type: 'chart',
        chartType: 'axpLift',
        title: 'Citation lift by AXP implementation level',
        caption: 'Incremental citation rate improvement over baseline (standard HTML). N=840 pages across 6 domains.',
      },
      {
        type: 'heading',
        text: 'Measuring AXP impact',
      },
      {
        type: 'paragraph',
        text: 'AXP impact can be measured directly: run the same prompt set before and after AXP deployment and compare citation rates. You should see measurable lift within 2–4 weeks as models re-fetch your pages. For Perplexity and other RAG-based models, the effect is near-immediate.',
      },
      {
        type: 'quote',
        text: 'AXP is the highest-ceiling GEO lever available. It\'s also the most technical. Don\'t start here — but once you\'ve covered the fundamentals, it\'s where the biggest gains are.',
        attr: 'Enigma Research Team',
      },
    ],
  },
];
