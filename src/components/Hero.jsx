import { useState, useEffect } from 'react';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight, Check } from './icons.jsx';
import { AILogos } from './BrandLogos.jsx';

const OpenAILogo = ({ size = 24 }) => (
  <div style={{ width: size, height: size, borderRadius: '50%', background: '#10A37F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 41 41" fill="none">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-7.505-3.337 10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.504 3.336 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.759 33.2a7.505 7.505 0 0 1-10.368-2.195zm-2.32-17.36a7.471 7.471 0 0 1 3.908-3.285c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.972-10.213zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l7.048 4.086a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.168zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l7.624-4.4a7.498 7.498 0 0 1 11.158 7.522zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18.026z" fill="white"/>
    </svg>
  </div>
);

const AI_SLIDES = [
  {
    key: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'OpenAI',
    color: '#10A37F',
    bg: 'rgba(16,163,127,0.07)',
    stat: '200M+',
    statLabel: 'daily active users',
    hook: 'The platform your customers trust most for product research and recommendations.',
    queryExample: 'Best enterprise AI platform?',
    cited: true,
    Logo: () => <OpenAILogo size={56}/>,
  },
  {
    key: 'perplexity',
    name: 'Perplexity',
    tagline: 'AI Search',
    color: '#20B2AA',
    bg: 'rgba(32,178,170,0.07)',
    stat: '100M+',
    statLabel: 'monthly searches',
    hook: 'Every answer cites sources with a live URL. Your brand needs to be one of them.',
    queryExample: 'Top SaaS tools for startups?',
    cited: true,
    Logo: () => <AILogos.Perplexity size={56}/>,
  },
  {
    key: 'claude',
    name: 'Claude',
    tagline: 'Anthropic',
    color: '#D97757',
    bg: 'rgba(217,119,87,0.07)',
    stat: '1B+',
    statLabel: 'queries per month',
    hook: 'Powering decisions at Fortune 500s. Does it recommend your brand or your rival?',
    queryExample: 'Which tools do enterprises use?',
    cited: false,
    Logo: () => <AILogos.Claude size={56}/>,
  },
  {
    key: 'gemini',
    name: 'Gemini',
    tagline: 'Google',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.07)',
    stat: '2B+',
    statLabel: 'Google users exposed',
    hook: 'Now answering in Google Search itself. Your SEO strategy alone is no longer enough.',
    queryExample: 'What are the leading AI tools?',
    cited: true,
    Logo: () => <AILogos.Gemini size={56}/>,
  },
  {
    key: 'deepseek',
    name: 'DeepSeek',
    tagline: 'AI Research',
    color: '#4FACF7',
    bg: 'rgba(79,172,247,0.07)',
    stat: '50M+',
    statLabel: 'downloads in 2 weeks',
    hook: 'The breakout AI of 2025. A new front opened in the citation war — overnight.',
    queryExample: 'Best open-source AI solutions?',
    cited: false,
    Logo: () => <AILogos.DeepSeek size={56}/>,
  },
  {
    key: 'grok',
    name: 'Grok',
    tagline: 'xAI · X platform',
    color: '#888',
    bg: 'rgba(100,100,100,0.07)',
    stat: '600M+',
    statLabel: 'X/Twitter users reached',
    hook: 'Embedded in X for hundreds of millions. Real-time answers that bypass your website entirely.',
    queryExample: 'Who leads in AI infrastructure?',
    cited: true,
    Logo: () => <AILogos.Grok size={56}/>,
  },
];

const AICarousel = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (i) => {
    setVisible(false);
    setTimeout(() => {
      setIdx(i);
      setVisible(true);
    }, 220);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(prev => (prev + 1) % AI_SLIDES.length);
        setVisible(true);
      }, 220);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const slide = AI_SLIDES[idx];
  const { Logo } = slide;

  return (
    <div style={{
      background: 'white',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 20px 60px -12px rgba(31,26,20,0.15)',
      border: '1px solid rgba(31,26,20,0.07)',
      userSelect: 'none',
    }}>
      {/* Slide area */}
      <div style={{
        padding: '32px 28px 24px',
        background: slide.bg,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.22s ease, transform 0.22s ease, background 0.4s ease',
      }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Logo/>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink)', lineHeight: 1.1 }}>{slide.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{slide.tagline}</div>
            </div>
          </div>
          <div style={{
            fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 99,
            background: slide.cited ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.08)',
            color: slide.cited ? '#059669' : '#DC2626',
          }}>
            {slide.cited ? '✓ Your brand cited' : '✗ Not mentioned'}
          </div>
        </div>

        {/* Stat */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: slide.color, lineHeight: 1, letterSpacing: '-0.03em' }}>
            {slide.stat}
          </div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{slide.statLabel}</div>
        </div>

        {/* Hook */}
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink)', opacity: 0.8, margin: 0 }}>
          {slide.hook}
        </p>

        {/* Sample query chip */}
        <div style={{
          marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'white', borderRadius: 999, padding: '7px 14px',
          fontSize: 12, color: 'var(--muted)',
          boxShadow: '0 2px 12px -4px rgba(0,0,0,0.12)',
          border: '1px solid rgba(31,26,20,0.07)',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          "{slide.queryExample}"
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 6, borderTop: '1px solid rgba(31,26,20,0.06)' }}>
        {AI_SLIDES.map((s, i) => (
          <button
            key={s.key}
            onClick={() => goTo(i)}
            style={{
              width: i === idx ? 20 : 6, height: 6, borderRadius: 99,
              background: i === idx ? slide.color : 'rgba(31,26,20,0.15)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--muted)' }}>
          {idx + 1} / {AI_SLIDES.length}
        </span>
      </div>
    </div>
  );
};

export default function Hero() {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setScanning(true);
    setTimeout(() => setScanning(false), 2200);
  };
  return (
    <section className="hero">
      <div className="grid-bg"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="hero-grid">
          <Reveal variant="up">
            <div className="eyebrow"><span className="dot"/> AI search visibility · GEO/AEO platform</div>
            <h1>
              Humans don't search.<br/>
              <span className="it">AI answers</span> for them.
            </h1>
            <p className="lead">
              Enigma audits how your brand appears across ChatGPT, Perplexity, Claude, and Gemini — then engineers your site to be the source AI cites.
            </p>
            <form className="url-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter your website URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
              <button type="submit" className="btn btn-cobalt">
                {scanning ? 'Scanning…' : 'Run AI visibility audit'}
                {!scanning && <ArrowRight/>}
              </button>
            </form>
            <div className="hero-checks">
              <span><Check/> Results in 30 seconds</span>
              <span><Check/> No credit card required</span>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={2}>
            <AICarousel/>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
