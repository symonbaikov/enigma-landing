import { useState, useEffect } from 'react';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight, Check } from './icons.jsx';

const LogoImg = ({ src, alt, filter }) => (
  <div style={{
    height: 40, maxWidth: 160,
    display: 'flex', alignItems: 'center',
    flexShrink: 0,
  }}>
    <img
      src={src} alt={alt}
      style={{ height: '100%', width: 'auto', maxWidth: 160, objectFit: 'contain', filter }}
    />
  </div>
);

const AI_SLIDES = [
  {
    key: 'chatgpt',
    name: 'ChatGPT',
    color: '#10A37F',
    bg: 'rgba(16,163,127,0.07)',
    logoSrc: '/logos/openai.svg',
    stat: '200M+',
    statLabel: 'daily active users',
    hook: 'The platform your customers trust most for product research and recommendations.',
    queryExample: 'Best enterprise AI platform?',
    cited: true,
  },
  {
    key: 'perplexity',
    name: 'Perplexity',
    color: '#1a6464',
    bg: 'rgba(27,100,100,0.06)',
    logoSrc: '/logos/perplexity.svg',
    stat: '100M+',
    statLabel: 'monthly searches',
    hook: 'Every answer cites sources with a live URL. Your brand needs to be one of them.',
    queryExample: 'Top SaaS tools for startups?',
    cited: true,
  },
  {
    key: 'claude',
    name: 'Claude',
    color: '#D97757',
    bg: 'rgba(217,119,87,0.07)',
    logoSrc: '/logos/claude.svg',
    stat: '1B+',
    statLabel: 'queries per month',
    hook: 'Powering decisions at Fortune 500s. Does it recommend your brand or your rival?',
    queryExample: 'Which tools do enterprises use?',
    cited: false,
  },
  {
    key: 'gemini',
    name: 'Gemini',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.07)',
    logoSrc: '/logos/gemini.svg',
    stat: '2B+',
    statLabel: 'Google users exposed',
    hook: 'Now answering in Google Search itself. Your SEO strategy alone is no longer enough.',
    queryExample: 'What are the leading AI tools?',
    cited: true,
  },
  {
    key: 'deepseek',
    name: 'DeepSeek',
    color: '#4D6BFE',
    bg: 'rgba(77,107,254,0.06)',
    logoSrc: '/logos/deepseek.svg',
    stat: '50M+',
    statLabel: 'downloads in 2 weeks',
    hook: 'The breakout AI of 2025. A new front opened in the citation war — overnight.',
    queryExample: 'Best open-source AI solutions?',
    cited: false,
  },
  {
    key: 'grok',
    name: 'Grok',
    color: '#111',
    bg: 'rgba(17,17,17,0.05)',
    logoSrc: '/logos/grok.svg',
    stat: '600M+',
    statLabel: 'X/Twitter users reached',
    hook: 'Embedded in X for hundreds of millions. Real-time answers that bypass your website entirely.',
    queryExample: 'Who leads in AI infrastructure?',
    cited: true,
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
            <LogoImg src={slide.logoSrc} alt={slide.name}/>
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

const PLATFORM_API = import.meta.env.VITE_PLATFORM_API || 'http://localhost:3000';

export default function Hero() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim() || !email.trim()) return;
    setScanning(true);
    setError(null);
    try {
      const res = await fetch(`${PLATFORM_API}/api/audits/free`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Something went wrong.');
        setScanning(false);
        return;
      }
      window.location.href = data.handoff_url;
    } catch (err) {
      setError('Network error. Please try again.');
      setScanning(false);
    }
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
                required
              />
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-cobalt" disabled={scanning}>
                {scanning ? 'Scanning…' : 'Run AI visibility audit'}
                {!scanning && <ArrowRight/>}
              </button>
            </form>
            {error && <p style={{ color: '#DC2626', marginTop: 12, fontSize: 14 }}>{error}</p>}
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
