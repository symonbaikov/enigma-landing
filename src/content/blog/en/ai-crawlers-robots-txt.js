/* AI crawlers and robots.txt — English edition.
   Bot names, purposes and robots.txt behaviour verified against the platforms'
   own documentation (OpenAI, Anthropic, Google, Common Crawl). Perplexity's
   help-centre page returned HTTP 403 at the time of writing, so its behaviour
   is reported without a verbatim quotation and flagged in the audit block. */
export default {
  slug: 'ai-crawlers-robots-txt',
  date: 'May 2026',
  readTime: '8 min read',
  eyebrow: 'Blog · AI search trends',
  title: 'AI crawlers and robots.txt: a practical guide for site owners',
  subtitle: 'robots.txt shapes the behaviour of specific crawlers; it is not a single switch. Google-Extended governs the use of content for training and grounding in Gemini Apps and Vertex AI, but it does NOT govern inclusion in Google Search AI Overviews — there, what matters is Googlebot and page eligibility (indexed, and able to show a snippet). To manage visibility properly you need the exact bot names and the places where the rules do not apply.',
  sections: [
    { type: 'heading', text: 'Context / Problem' },
    {
      type: 'list',
      items: [
        { title: 'Visibility versus training', desc: 'You want to appear in AI search without handing your content to someone else\'s model training for free.' },
        { title: 'Dozens of user agents', desc: 'The logs show dozens of user agents and it is unclear which to block and which to let through.' },
        { title: 'robots.txt is not a switch', desc: 'robots.txt looks like a universal switch — but some requests legitimately ignore it.' },
      ],
    },
    { type: 'heading', text: 'The key distinction: training, search, and a user request' },
    {
      type: 'paragraph',
      text: 'Claim: the large AI companies split their crawlers by purpose, and blocking them wholesale is a mistake. Argument: the bot that gathers training data and the bot that indexes for AI search are different user agents under different policies. Evidence: OpenAI explicitly suggests you can "allow OAI-SearchBot in order to appear in search results while disallowing GPTBot to indicate that crawled content should not be used for training OpenAI\'s generative AI foundation models" [Source 70].',
    },
    {
      type: 'paragraph',
      text: 'Claim: user-initiated requests are their own category. Argument: when a person asks an assistant to open a page, that is a user action rather than a bulk crawl. Evidence: OpenAI states of ChatGPT-User that "because these actions are initiated by a user, robots.txt rules may not apply" [Source 70]; Perplexity documents the same for Perplexity-User, which generally ignores robots.txt because the fetch was requested by a person [Source 74].',
    },
    { type: 'heading', text: 'User agents of the main AI crawlers' },
    {
      type: 'list',
      items: [
        { title: 'GPTBot', desc: 'Operator: OpenAI. Token: GPTBot/1.4. Purpose: crawling content that may be used to train generative AI foundation models. Obeys robots.txt: yes — Disallow to stay out of training.' },
        { title: 'OAI-SearchBot', desc: 'Operator: OpenAI. Token: OAI-SearchBot/1.4. Purpose: surfacing websites in ChatGPT\'s search features. Obeys robots.txt: yes — Allow for visibility in search.' },
        { title: 'ChatGPT-User', desc: 'Operator: OpenAI. Token: ChatGPT-User/1.0. Purpose: user-triggered actions in ChatGPT and Custom GPTs. Obeys robots.txt: "rules may not apply" (user-initiated).' },
        { title: 'OAI-AdsBot', desc: 'Operator: OpenAI. Token: OAI-AdsBot/1.0. Purpose: validating the safety of pages submitted as ads on ChatGPT. Obeys robots.txt: applies to submitted ad landing pages.' },
        { title: 'PerplexityBot', desc: 'Operator: Perplexity. Token: +https://perplexity.ai/perplexitybot. Purpose: indexing and linking in Perplexity search (not model training). Obeys robots.txt: yes — Allow is recommended.' },
        { title: 'Perplexity-User', desc: 'Operator: Perplexity. Token: +https://perplexity.ai/perplexity-user. Purpose: visiting a page in response to a user\'s question. Obeys robots.txt: generally ignores it (user-initiated).' },
        { title: 'ClaudeBot', desc: 'Operator: Anthropic. Identifier: claude.com/crawling/bots.json. Purpose: gathering web content for AI model training and development. Obeys robots.txt: yes — honours "do not crawl" directives.' },
        { title: 'Claude-User', desc: 'Operator: Anthropic. Identifier: claude.com/crawling/bots.json. Purpose: user-initiated web access while Claude answers a question. Obeys robots.txt: a user action.' },
        { title: 'Claude-SearchBot', desc: 'Operator: Anthropic. Identifier: claude.com/crawling/bots.json. Purpose: indexing content to improve search result quality. Obeys robots.txt: yes.' },
        { title: 'Googlebot', desc: 'Operator: Google. Identifier: the general search crawler. Purpose: Search, Images, Video, News, Discover — including AI Overviews and AI Mode. Obeys robots.txt: yes.' },
        { title: 'Google-Extended', desc: 'Operator: Google. Identifier: a training control only. Purpose: training future Gemini models and grounding in Gemini Apps / Vertex AI. Obeys robots.txt: yes — no effect on ranking or AI Overviews.' },
        { title: 'GoogleOther', desc: 'Operator: Google. Identifier: a generic crawler. Purpose: one-off research crawls. Obeys robots.txt: yes — not tied to a specific product.' },
        { title: 'CCBot', desc: 'Operator: Common Crawl. Token: CCBot/2.0 (https://commoncrawl.org/faq/). Purpose: the open web dataset, used among other things for research. Obeys robots.txt: yes — Disallow to block.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'User agent sources: OpenAI [Source 70], Perplexity [Source 74], Anthropic [Source 75], Google [Source 76], Common Crawl [Source 77].',
    },
    { type: 'heading', text: 'Ready-made robots.txt directives' },
    {
      type: 'paragraph',
      text: 'What follows is an example policy, not a universal recommendation: choose directives that match your goals and your jurisdiction.',
    },
    {
      type: 'paragraph',
      text: 'Example policy "block training, stay in AI search" (directives listed inline): "User-agent: GPTBot · Disallow: /" · "User-agent: Google-Extended · Disallow: /" · "User-agent: CCBot · Disallow: /" · "User-agent: OAI-SearchBot · Allow: /" · "User-agent: PerplexityBot · Allow: /".',
    },
    {
      type: 'paragraph',
      text: 'Example policy "limit ClaudeBot load instead of blocking it outright" (per Anthropic\'s documentation): "User-agent: ClaudeBot · Crawl-delay: 1".',
    },
    {
      type: 'paragraph',
      text: 'Every directive is a trade-off, not a free improvement.',
    },
    {
      type: 'list',
      items: [
        { title: 'Disallow for GPTBot / CCBot', desc: 'What you gain: privacy and a training opt-out — the content stays out of OpenAI\'s training data and out of the open Common Crawl dataset. What you pay: less AI discoverability outside Google Search — fewer chances of being cited in ChatGPT and in products built on Common Crawl.' },
        { title: 'Disallow for Google-Extended', desc: 'What you gain: an opt-out from training future Gemini models and from grounding in Gemini Apps / Vertex AI. What you pay: nothing changes in Google Search AI Overviews or ranking — so it does not solve "take my site out of Google\'s AI answers".' },
        { title: 'Allow for OAI-SearchBot / PerplexityBot', desc: 'What you gain: visibility and citation in ChatGPT and Perplexity search. What you pay: those platforms keep indexing the content, and your control over how it is reworded in an answer stays limited.' },
      ],
    },
    { type: 'heading', text: 'An important detail about Google' },
    {
      type: 'paragraph',
      text: 'Claim: Google-Extended is not an off switch for AI Overviews. Argument: Google states plainly that "Google-Extended does not impact a site\'s inclusion in Google Search nor is it used as a ranking signal in Google Search". Evidence: blocking Google-Extended removes content only from Gemini training and from grounding in Gemini Apps and Vertex AI, while AI Overviews are built on the main Googlebot index [Source 76]. This is the platform\'s own position, not an independent assessment.',
    },
    { type: 'heading', text: 'The limits of robots.txt: what the file does not do' },
    {
      type: 'paragraph',
      text: 'Claim: robots.txt is a request, not a technical block. Argument: compliance depends on the operator acting in good faith, and user-initiated fetches legitimately bypass it. Evidence: OpenAI and Perplexity both document that ChatGPT-User and Perplexity-User may not obey robots.txt because a human initiated the action [Source 70, 74].',
    },
    {
      type: 'paragraph',
      text: 'Claim: user agent spoofing exists, so blocking by string is unreliable. Argument: bots can masquerade as legitimate ones. Evidence: Common Crawl warns that "we are aware of crawlers falsely identifying themselves as CCBot" and publishes its IP ranges at index.commoncrawl.org/ccbot.json for verification; Anthropic likewise recommends checking requests against its published IP list and cautions that blocking IP addresses "may not work correctly or persistently" [Source 77, 75].',
    },
    { type: 'heading', text: 'E-E-A-T: the official sources' },
    {
      type: 'list',
      items: [
        { title: 'OpenAI', desc: 'Official bot documentation — names and purposes of GPTBot / OAI-SearchBot / ChatGPT-User [Source 70].' },
        { title: 'Perplexity', desc: 'Official bot guide — robots.txt policy for PerplexityBot and Perplexity-User [Source 74].' },
        { title: 'Anthropic', desc: 'Support article — ClaudeBot / Claude-User / Claude-SearchBot, Crawl-delay [Source 75].' },
        { title: 'Google', desc: 'Developer documentation — Google-Extended does not affect ranking [Source 76].' },
        { title: 'Common Crawl', desc: 'CCBot page — the CCBot user agent, blocking, IP verification [Source 77].' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Every rule and phrasing above is the official position of the platform in question; policies change, so check the primary sources before you deploy anything.',
    },
    { type: 'heading', text: 'Frequently asked questions' },
    {
      type: 'list',
      items: [
        { title: 'How do I stay in AI search without ending up in model training?', desc: 'Disallow the training bots (GPTBot, Google-Extended, CCBot) and allow the search ones (OAI-SearchBot, PerplexityBot). They are different user agents under different policies.' },
        { title: 'Will blocking Google-Extended remove me from AI Overviews?', desc: 'No. Google states that Google-Extended does not affect inclusion in Search or ranking. AI Overviews are built on the Googlebot index, not on Google-Extended.' },
        { title: 'Why did an AI assistant open a page I disallowed in robots.txt?', desc: 'If a user initiated the fetch (ChatGPT-User, Perplexity-User), robots.txt may not apply — this is documented behaviour at both OpenAI and Perplexity.' },
        { title: 'Can I block AI bots by IP address?', desc: 'Not reliably. Anthropic and Common Crawl both warn about user agent spoofing and recommend verifying requests against their official IP lists rather than blocking ranges by hand.' },
      ],
    },
    { type: 'heading', text: 'Sources (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '70 · OpenAI, current version', desc: 'OpenAI crawlers and user agents. https://developers.openai.com/api/docs/bots — official platform documentation.' },
        { title: '74 · Perplexity Help Center, current version', desc: 'How does Perplexity follow robots.txt? https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt — official platform documentation.' },
        { title: '75 · Anthropic Support, current version', desc: 'Does Anthropic crawl data from the web and how can site owners block the crawler? https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — official platform documentation.' },
        { title: '76 · Google Search Central, 2026', desc: 'Overview of Google crawlers and fetchers. https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers — official platform documentation.' },
        { title: '77 · Common Crawl, current version', desc: 'CCBot documentation. https://commoncrawl.org/ccbot — official data-infrastructure documentation.' },
      ],
    },
    { type: 'heading', text: 'How we checked this material' },
    {
      type: 'list',
      items: [
        { title: 'Author', desc: 'The Enigma editorial team.' },
        { title: 'Published', desc: '18 May 2026.' },
        { title: 'Updated', desc: '18 May 2026.' },
        { title: 'Sources', desc: 'Official platform documentation — the operator is stated next to each claim.' },
        { title: 'Verification', desc: 'Bot names, purposes and robots.txt behaviour re-read from the OpenAI, Anthropic, Google and Common Crawl documentation; quotations are their own wording.' },
        { title: 'Caveat', desc: 'Perplexity\'s help-centre page returned HTTP 403 to our fetch, so its behaviour is reported without a verbatim quotation — check that page directly before relying on it.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The full list of sources and their reliability levels lives in the research catalogue.',
    },
  ],
};
