/*
 * Public posts by founders and operators about AI-search traffic.
 *
 * Every quote here is verbatim from the original post, retrieved from the
 * source rather than retyped from a screenshot: the X posts through the
 * syndication endpoint, the LinkedIn ones from the public post pages. These
 * are real named people, so an approximated quote would be a fabricated
 * statement attributed to someone who never made it.
 *
 * Rules for adding an entry:
 *  - `text` is copied from the source, not paraphrased or tidied up;
 *  - if it is shortened, cut only whole trailing sentences and set
 *    `truncated: true`, which renders an ellipsis and a link to the full post;
 *  - `url` always points at the original, so any reader can check the quote;
 *  - nothing is translated. A translated quote is no longer a quote;
 *  - the avatar is the author's own profile photo, taken from the same source
 *    as the quote and served from public/avatars. Hotlinking would leak our
 *    readers to a third party, and LinkedIn's signed image URLs expire.
 *
 * These are individual public reports, not a study, and the section says so.
 * X dates come from the API; LinkedIn dates are decoded from the timestamp
 * embedded in the post's activity id.
 */

export const socialPosts = [
  {
    id: 'rauchg',
    avatar: '/avatars/rauchg.jpg',
    author: 'Guillermo Rauch',
    handle: '@rauchg',
    role: 'CEO, Vercel',
    platform: 'x',
    date: '9 Apr 2025',
    url: 'https://x.com/rauchg/status/1910093634445422639',
    text: 'ChatGPT now refers 10% of new @vercel signups, which have also accelerated',
  },
  {
    id: 'zenorocha',
    avatar: '/avatars/zenorocha.jpg',
    author: 'Zeno Rocha',
    handle: 'zenorocha',
    role: 'CEO, Resend',
    platform: 'linkedin',
    date: 'May 2025',
    url: 'https://www.linkedin.com/posts/zenorocha_chatgpt-is-now-the-top-3-source-of-traffic-activity-7329153728060538880-CeaA/',
    text: 'ChatGPT is now the top 3 source of traffic for resend.com. It surpassed both GitHub, and Twitter.',
  },
  {
    id: 'levelsio',
    avatar: '/avatars/levelsio.jpg',
    author: '@levelsio',
    handle: '@levelsio',
    role: 'Indie founder',
    platform: 'x',
    date: '3 May 2025',
    url: 'https://x.com/levelsio/status/1918670904227168301',
    text: '20% of my Google traffic is now ChatGPT (pic 1)\n\nA month ago it was just 5% (pic 2)\n\nSo it grew by 4x in a month',
  },
  {
    id: 'marclou',
    avatar: '/avatars/marclou.jpg',
    author: 'Marc Lou',
    handle: '@marclou',
    role: 'Indie founder',
    platform: 'x',
    date: '1 Jun 2025',
    url: 'https://x.com/marclou/status/1929157995327529122',
    text: 'ChatGPT is now sending significant traffic to my little startup.\n\nAt $3.34 revenue per visitor, it’s also one of the top converting marketing channels.',
  },
  {
    id: 'jhtscherck',
    avatar: '/avatars/jhtscherck.jpg',
    author: 'JH Scherck',
    handle: '@JHTScherck',
    role: 'Founder, Growth Plays',
    platform: 'x',
    date: '24 Jul 2025',
    url: 'https://x.com/JHTScherck/status/1948430120026550368',
    text: 'We have a client seeing ~3000 sessions a day via ChatGPT and it’s converting form fills for the free version of their product at 25%.',
    truncated: true,
  },
  {
    id: 'juanbello',
    avatar: '/avatars/juanbello.jpg',
    author: 'Juan Bello',
    handle: 'juan-bello',
    role: 'Growth & analytics',
    platform: 'linkedin',
    date: 'Nov 2024',
    url: 'https://www.linkedin.com/posts/juan-bello_ai-search-engine-traffic-template-on-looker-activity-7264291825203437568-jeeY/',
    text: 'I built a template to track your referral traffic from ChatGPT, Gemini, Perplexity, and other AI search engines… Things I’ve noticed so far: +1k visits from these AI chats. Perplexity, Gemini, and ChatGPT are pretty “even” referring traffic.',
    truncated: true,
  },
];
