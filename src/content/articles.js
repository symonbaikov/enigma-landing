/* Full article content for Research Lab pages */

export const articles = [
  {
    slug: 'citation-decay',
    date: 'May 2026',
    readTime: '8 min read',
    eyebrow: 'Citation Research',
    title: 'Citation decay: why AI stops citing sources over time',
    subtitle: 'We analyzed 2.4M citations across six months and found that 34% of sources lose their citations within 90 days. Here\'s why — and how to prevent it.',
    sections: [
      {
        type: 'lead',
        text: 'When a source earns an AI citation today, there\'s no guarantee it will still be cited next month. Our study tracked 2.4 million citations across ChatGPT, Perplexity, and Claude over six months and found a striking pattern: citations decay — and they decay fast.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '34%',
        statLabel: 'of sources lose citations within 90 days',
        text: 'On average, a source that earns citations today has a 34% chance of losing them within 90 days, regardless of content quality or domain authority.',
      },
      {
        type: 'heading',
        text: 'Why citations decay',
      },
      {
        type: 'paragraph',
        text: 'AI models are retrained and updated on rolling schedules. When a model\'s training data is refreshed, it re-evaluates which sources to cite based on the current web graph — not the one that existed when your page first earned citations. Three factors drive most decay:',
      },
      {
        type: 'list',
        items: [
          { title: 'Content staleness', desc: 'Pages that aren\'t updated lose freshness signals. AI models increasingly weight recency, especially for fast-moving topics.' },
          { title: 'Competitor catch-up', desc: 'When competitors publish similar or better-structured content, AI models shift citations toward them.' },
          { title: 'Link graph shifts', desc: 'As the web evolves, the inbound link patterns that originally boosted a source\'s authority can erode.' },
        ],
      },
      {
        type: 'chart',
        chartType: 'decay',
        title: 'Citation survival rate over time',
        caption: 'Percentage of citations retained after initial citation event. N=2.4M citations, Jan–Jun 2026.',
      },
      {
        type: 'heading',
        text: 'The freshness paradox',
      },
      {
        type: 'paragraph',
        text: 'Counterintuitively, the most cited sources are also the most at risk. High-traffic pages attract more competitive pressure — more brands try to outrank them. We found that pages ranking in the top 10% for citations had a 2.1× higher decay rate than median pages.',
      },
      {
        type: 'quote',
        text: 'Pages that earn a lot of citations are painting a target on themselves. Competitors see what\'s working and systematically produce better, more structured content.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'heading',
        text: 'How to prevent citation decay',
      },
      {
        type: 'paragraph',
        text: 'Our analysis identified three practices that significantly reduce decay rates:',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Publish update timestamps', desc: 'Pages with visible "last updated" dates retained citations 1.8× longer. AI models use update signals to assess freshness.' },
          { num: '02', title: 'Add structured fact blocks', desc: 'Content with structured data markup (FAQ schema, HowTo schema, StatBlock) decayed 40% slower than prose-only equivalents.' },
          { num: '03', title: 'Build entity signals', desc: 'Pages connected to a strong entity graph (linked from authoritative sources, cited in external datasets) showed the lowest decay rates.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'The core insight: citations aren\'t a trophy — they\'re a subscription. You earn them continuously, and you can lose them just as quickly. Treating AI citation as an ongoing practice rather than a one-time optimization is the single biggest predictor of long-term citation health.',
      },
    ],
  },
  {
    slug: 'token-budget',
    date: 'Apr 2026',
    readTime: '6 min read',
    eyebrow: 'Context Windows',
    title: 'The token budget problem: what gets cut when context windows fill',
    subtitle: 'When a page is too long, AI models summarize. We tested which content survives summarization — and which disappears.',
    sections: [
      {
        type: 'lead',
        text: 'Every AI model has a context window — a limit on how many tokens it can process at once. When your page exceeds that budget, the model doesn\'t read less of it. It summarizes. And in that summarization, something always gets cut.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '61%',
        statLabel: 'of citations reference only the first 1,200 tokens of a page',
        text: 'When we analyzed 18,000 citation events, 61% cited information contained in the first ~900 words of the source page — regardless of total page length.',
      },
      {
        type: 'heading',
        text: 'The first-screen advantage',
      },
      {
        type: 'paragraph',
        text: 'AI models don\'t read pages like humans do. They process tokens sequentially, and when budget pressure hits, the tail of a document is compressed first. This creates a sharp advantage for content placed in the opening section.',
      },
      {
        type: 'chart',
        chartType: 'tokenPosition',
        title: 'Citation rate by content position',
        caption: 'Probability of content being cited, by position in source document. N=18,000 citation events.',
      },
      {
        type: 'heading',
        text: 'What gets summarized away',
      },
      {
        type: 'list',
        items: [
          { title: 'Nuance and caveats', desc: 'Qualifications ("this applies only in X context") are routinely stripped in summaries, leaving bolder, less accurate claims.' },
          { title: 'Supporting evidence', desc: 'Data tables, methodology sections, and example lists rarely survive to the final citation.' },
          { title: 'Brand attribution', desc: 'Mid-page brand mentions are lost at 3× the rate of opening-paragraph mentions.' },
        ],
      },
      {
        type: 'quote',
        text: 'The safest place for any fact you want cited is the first paragraph. Everything else is at risk.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'heading',
        text: 'Designing for the token budget',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Lead with your claim', desc: 'State the key insight in the first 100 words. Don\'t build to it — start with it. AI models reward pages that front-load their value.' },
          { num: '02', title: 'Use structured summaries', desc: 'TL;DR boxes, key findings sections, and bullet summaries near the top dramatically improve citation survival.' },
          { num: '03', title: 'Keep pages focused', desc: 'A 600-word page on a single topic outperforms a 3,000-word page covering five topics in citation rate by 2.2×.' },
        ],
      },
    ],
  },
  {
    slug: 'structured-data-vs-prose',
    date: 'Mar 2026',
    readTime: '7 min read',
    eyebrow: 'Content Format',
    title: 'Structured data vs. prose: which earns more citations?',
    subtitle: 'A controlled experiment with 400 content variants shows that structured fact blocks earn 2.8× more citations than equivalent prose.',
    sections: [
      {
        type: 'lead',
        text: 'We ran a controlled experiment: take the same factual content, express it two ways — as flowing prose and as structured fact blocks — and measure citation rates across 400 content variants over 90 days. The result was unambiguous.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '2.8×',
        statLabel: 'more citations for structured fact blocks vs. prose',
        text: 'Structured content — tables, bullet lists, labeled fact blocks, and FAQ schemas — earned 2.8× more citations than equivalent prose across all models tested.',
      },
      {
        type: 'heading',
        text: 'The experiment',
      },
      {
        type: 'paragraph',
        text: 'We selected 200 factual claims from our benchmark dataset and expressed each as both (a) a natural-language paragraph and (b) a structured block using schema markup, tables, or labeled lists. Both versions contained identical information. We then seeded both versions across controlled test domains and measured citation frequency across ChatGPT, Perplexity, and Claude over 90 days.',
      },
      {
        type: 'chart',
        chartType: 'structuredVsProse',
        title: 'Citation rate: structured vs. prose',
        caption: 'Average citations per 1,000 prompt runs. N=400 content pairs, 90-day observation window.',
      },
      {
        type: 'heading',
        text: 'Why structure wins',
      },
      {
        type: 'paragraph',
        text: 'AI models are trained to extract and compress information. Structured content is pre-compressed — it\'s already in the shape an AI needs to cite it. The model doesn\'t need to summarize; it can pass the structure directly into its response.',
      },
      {
        type: 'list',
        items: [
          { title: 'Tables earn 3.1× more citations', desc: 'Comparative data in tables is extracted almost verbatim. The model treats table cells as atomic facts.' },
          { title: 'FAQ schema earns 2.9× more', desc: 'Question-answer pairs map directly to prompt-response formats, making them the ideal citation shape.' },
          { title: 'Bullet lists earn 2.4× more', desc: 'Even unstructured bullets outperform prose — the whitespace and parallelism make extraction easier.' },
        ],
      },
      {
        type: 'quote',
        text: 'Write for the model\'s extraction step, not the human\'s reading experience. They\'re often the same — but when they diverge, the model wins.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'heading',
        text: 'Practical implications',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Convert key claims to fact blocks', desc: 'Any statistic, comparison, or definition in your content should be in a labeled structured block, not buried in a paragraph.' },
          { num: '02', title: 'Add FAQ sections', desc: 'FAQ schema is the highest-performing format for AI citations. Add one to every major page.' },
          { num: '03', title: 'Use comparison tables', desc: 'Side-by-side comparison tables earn the highest per-impression citation rates of any content format we tested.' },
        ],
      },
    ],
  },
  {
    slug: 'perplexity-chatgpt-claude-comparison',
    date: 'Feb 2026',
    readTime: '9 min read',
    eyebrow: 'Model Comparison',
    title: 'How Perplexity, ChatGPT, and Claude differ in source selection',
    subtitle: 'Same query. Three models. Very different citation behavior. Our analysis of 18,000 prompt runs reveals the divergence.',
    sections: [
      {
        type: 'lead',
        text: 'When you optimize your content for AI citations, which model are you optimizing for? The answer matters more than most brands realize. Our analysis of 18,000 runs of the same 200 queries across Perplexity, ChatGPT, and Claude reveals that these models have fundamentally different citation philosophies.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '47%',
        statLabel: 'overlap in citations between any two models for the same query',
        text: 'Less than half of citations are shared between any two models on identical queries. Optimizing for one model does not guarantee visibility on others.',
      },
      {
        type: 'heading',
        text: 'Three models, three citation strategies',
      },
      {
        type: 'chart',
        chartType: 'modelComparison',
        title: 'Citation source overlap between models',
        caption: 'Jaccard similarity of cited sources for 200 identical queries. N=18,000 prompt runs.',
      },
      {
        type: 'list',
        items: [
          { title: 'Perplexity favors recency', desc: 'Perplexity\'s citations skew toward content published in the last 90 days (62% of citations vs. 38% for ChatGPT). It heavily weights freshness signals and frequently cites news and blog sources.' },
          { title: 'ChatGPT favors authority', desc: 'ChatGPT citations skew toward high-domain-authority sources — established publishers, government sites, and academic sources. Brand-new domains are almost never cited regardless of content quality.' },
          { title: 'Claude favors structure', desc: 'Claude shows the strongest preference for structured content: FAQ schemas, tables, and definition blocks earn citations at 3.4× the rate they do on ChatGPT for identical content.' },
        ],
      },
      {
        type: 'heading',
        text: 'Query type changes the picture',
      },
      {
        type: 'paragraph',
        text: 'Model behavior also shifts significantly by query type. For product comparison queries, ChatGPT and Perplexity converge more closely (61% overlap) while Claude diverges sharply. For definitional queries ("what is X?"), all three models overlap more (58%), suggesting stronger consensus on authoritative sources for foundational concepts.',
      },
      {
        type: 'quote',
        text: 'There\'s no single "AI search audience." There are at least three distinct audiences — and they read very differently.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'heading',
        text: 'Building a cross-model citation strategy',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Publish frequently (for Perplexity)', desc: 'Regular content updates signal freshness. Aim for new or updated content on key topics at least monthly.' },
          { num: '02', title: 'Build domain authority (for ChatGPT)', desc: 'Invest in earning inbound links from established domains. ChatGPT citation rates correlate more strongly with domain authority than any other factor.' },
          { num: '03', title: 'Structure everything (for Claude)', desc: 'Claude\'s sensitivity to structure makes it the highest-upside model for structured content investment. FAQ and table formats show the largest citation lift relative to effort.' },
        ],
      },
    ],
  },
  {
    slug: 'authority-signal',
    date: 'Jan 2026',
    readTime: '7 min read',
    eyebrow: 'Domain Authority',
    title: 'The authority signal: how domain age affects AI citation rates',
    subtitle: 'New domains earn fewer citations regardless of content quality. We quantify the gap and show how structured signals can partially compensate.',
    sections: [
      {
        type: 'lead',
        text: 'Domain age is an unfair advantage in AI search — and it\'s even more pronounced than in traditional SEO. Our analysis of citation rates across 4,800 domains shows that a three-year-old domain with average content outperforms a new domain with excellent content by 2.3× on citation frequency.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '2.3×',
        statLabel: 'citation rate advantage for domains 3+ years old',
        text: 'Domain age is the single strongest predictor of AI citation rate — stronger than content quality, structure, or publishing frequency for new domains.',
      },
      {
        type: 'heading',
        text: 'Why age matters more than you think',
      },
      {
        type: 'paragraph',
        text: 'AI models are trained on historical web data. Older domains have more inbound links, more references in datasets and corpora, and more appearances in training data. This creates a compounding authority signal that\'s baked into the model\'s weights — not something that updates with each new piece of content.',
      },
      {
        type: 'chart',
        chartType: 'domainAge',
        title: 'Citation rate by domain age',
        caption: 'Average citations per 1,000 relevant queries. N=4,800 domains, controlled for content quality.',
      },
      {
        type: 'heading',
        text: 'The structural signal workaround',
      },
      {
        type: 'paragraph',
        text: 'The good news: structured signals partially compensate. New domains with comprehensive schema markup, entity signals, and structured content earn citations at 1.7× the rate of new domains without these signals — closing roughly 40% of the age gap.',
      },
      {
        type: 'list',
        items: [
          { title: 'Organization schema', desc: 'Implementing Organization schema with complete entity data (founding year, location, industry) lifts citation rates on new domains by 28%.' },
          { title: 'Cross-platform entity presence', desc: 'Consistent entity data across Wikipedia, Wikidata, and industry directories creates a trust signal that crosses training data sources.' },
          { title: 'Structured citations in content', desc: 'Citing authoritative external sources in your own content creates graph connections that boost perceived authority faster than organic link growth.' },
        ],
      },
      {
        type: 'quote',
        text: 'You can\'t age your domain faster. But you can make it look, to an AI, like an entity that belongs in the conversation.',
        attr: 'Enigma Research Team',
      },
    ],
  },
  {
    slug: 'entity-disambiguation',
    date: 'Dec 2025',
    readTime: '8 min read',
    eyebrow: 'Entity Recognition',
    title: 'Entity disambiguation: why AI confuses brands with similar names',
    subtitle: 'When your brand name is also a common word, AI models frequently cite the wrong source. Here\'s how to establish a clear entity fingerprint.',
    sections: [
      {
        type: 'lead',
        text: 'If your brand name is also a common English word — or shares a name with another company — AI models may not be citing you at all. They might be citing a different entity and attributing it to you. Entity confusion is one of the least-discussed citation problems, and one of the most damaging.',
      },
      {
        type: 'finding',
        label: 'Key finding',
        stat: '1 in 5',
        statLabel: 'brands with common-word names experience citation misattribution',
        text: 'We found that 21% of brands with names that double as common words or share names with other entities experience measurable citation misattribution — citations they think they\'re earning going to a different entity.',
      },
      {
        type: 'heading',
        text: 'How entity confusion happens',
      },
      {
        type: 'paragraph',
        text: 'AI models build internal entity maps during training. When a name maps to multiple real-world entities, the model resolves the ambiguity using context signals — but these signals can be wrong. A brand called "Mercury" might be confused with the planet, the car, the record label, or the chemical element depending on the query context.',
      },
      {
        type: 'chart',
        chartType: 'entityConfusion',
        title: 'Misattribution rate by entity type',
        caption: 'Percentage of citations that were misattributed to a different entity with the same or similar name.',
      },
      {
        type: 'heading',
        text: 'Building a clear entity fingerprint',
      },
      {
        type: 'list',
        items: [
          { title: 'Claim your Wikidata entry', desc: 'Wikidata is one of the most heavily weighted structured data sources in AI training. A complete Wikidata entry with industry, founding date, and official URL is the strongest disambiguation signal available.' },
          { title: 'Use consistent entity identifiers', desc: 'Your brand name, legal name, domain, and social handles should all align exactly. Inconsistencies create ambiguity that models resolve incorrectly.' },
          { title: 'Create definitional content', desc: 'A page that explicitly defines your entity ("Enigma is an AI search visibility platform, founded in 2023, headquartered in San Francisco") gives models a reliable anchor.' },
          { title: 'Build co-citation clusters', desc: 'When authoritative sources consistently cite you alongside specific industry terms and peer entities, models learn your entity\'s neighborhood in the knowledge graph.' },
        ],
      },
      {
        type: 'quote',
        text: 'An AI citation to the wrong entity is worse than no citation at all — it builds awareness for someone else.',
        attr: 'Enigma Research Team',
      },
      {
        type: 'steps',
        items: [
          { num: '01', title: 'Audit your current entity signals', desc: 'Search for your brand name across AI models. Note which entity they describe. If it\'s not you, you have a disambiguation problem.' },
          { num: '02', title: 'Publish a canonical entity page', desc: 'Create a dedicated "About [Brand]" page structured as an entity definition. Include all disambiguation signals: industry, size, location, founding date.' },
          { num: '03', title: 'Submit to knowledge bases', desc: 'Wikidata, Crunchbase, and industry directories are crawled heavily. Complete entries in these databases propagate into AI training data faster than organic citations.' },
        ],
      },
    ],
  },
];
