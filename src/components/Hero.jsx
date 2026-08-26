import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight, Check } from './icons.jsx';
import { track, EVENTS } from '../lib/analytics.js';

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
  { key: 'chatgpt',   name: 'ChatGPT',    color: '#10A37F', bg: 'rgba(16,163,127,0.07)',  logoSrc: '/logos/openai.svg' },
  { key: 'perplexity',name: 'Perplexity', color: '#1a6464', bg: 'rgba(27,100,100,0.06)',  logoSrc: '/logos/perplexity.svg' },
  { key: 'claude',    name: 'Claude',     color: '#D97757', bg: 'rgba(217,119,87,0.07)',  logoSrc: '/logos/claude.svg' },
  { key: 'gemini',    name: 'Gemini',     color: '#4285F4', bg: 'rgba(66,133,244,0.07)',  logoSrc: '/logos/gemini.svg' },
  { key: 'deepseek',  name: 'DeepSeek',   color: '#4D6BFE', bg: 'rgba(77,107,254,0.06)', logoSrc: '/logos/deepseek.svg' },
  { key: 'grok',      name: 'Grok',       color: '#111',    bg: 'rgba(17,17,17,0.05)',    logoSrc: '/logos/grok.svg' },
];

const AICarousel = () => {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (i) => {
    setVisible(false);
    setTimeout(() => { setIdx(i); setVisible(true); }, 220);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(prev => (prev + 1) % AI_SLIDES.length);
        setVisible(true);
      }, 220);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const slide = AI_SLIDES[idx];

  return (
    <div style={{
      background: 'white', borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 20px 60px -12px rgba(31,26,20,0.15)',
      border: '1px solid rgba(31,26,20,0.07)', userSelect: 'none',
    }}>
      <div style={{
        padding: '32px 28px 24px', background: slide.bg,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.22s ease, transform 0.22s ease, background 0.4s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <LogoImg src={slide.logoSrc} alt={slide.name}/>
          </div>
          <div style={{
            fontSize: 13, fontWeight: 600, padding: '5px 12px', borderRadius: 99,
            background: 'rgba(107,63,255,0.08)', color: 'var(--cobalt)',
          }}>
            {t('hero.schematicTag')}
          </div>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', opacity: 0.85, margin: 0 }}>
          {t(`hero.slides.${slide.key}.hook`)}
        </p>
        <div style={{
          marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'white', borderRadius: 999, padding: '9px 16px',
          fontSize: 15, color: 'var(--muted)',
          boxShadow: '0 2px 12px -4px rgba(0,0,0,0.12)',
          border: '1px solid rgba(31,26,20,0.07)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          "{t(`hero.slides.${slide.key}.queryExample`)}"
        </div>
      </div>
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
        <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--muted)' }}>
          {t('hero.schematicCaption')} · {idx + 1} / {AI_SLIDES.length}
        </span>
      </div>
    </div>
  );
};

export default function Hero() {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // Pre-launch: no audit runs. The submission itself is the demand signal, and
  // the URL someone wants audited is worth as much as the address they leave.
  //
  // Two events, not one: the click stands on its own, so a visitor still counts
  // even if the email turns out to be junk.
  const onSubmit = (e) => {
    e.preventDefault();
    const site = url.trim();
    const address = email.trim();
    if (!site || !address) return;
    track(EVENTS.ctaClicked, { source: 'hero_audit', url: site });
    track(EVENTS.waitlistSubmitted, { source: 'hero_audit', url: site, email: address });
    setSent(true);
  };

  return (
    <section className="hero">
      <div className="grid-bg"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="hero-grid">
          <Reveal variant="up">
            <div className="eyebrow"><span className="dot"/> {t('hero.eyebrow')}</div>
            <h1>
              {t('hero.h1Line1')}<br/>
              <span className="it">{t('hero.h1Highlight')}</span>{t('hero.h1Line2')}
            </h1>
            <p className="lead">{t('hero.lead')}</p>
            {sent ? (
              <div className="hero-waitlist-done" role="status" style={{
                background: 'white', border: '1px solid var(--line, #d9cfe4)',
                borderRadius: 16, padding: '20px 22px', marginTop: 4,
              }}>
                <strong style={{ display: 'block', fontSize: 18, marginBottom: 6 }}>
                  {t('waitlist.doneTitle')}
                </strong>
                <span style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                  {t('waitlist.doneBody')}
                </span>
              </div>
            ) : (
              <form className="url-form" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder={t('hero.urlPlaceholder')}
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder={t('hero.emailPlaceholder')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-cobalt">
                  {t('hero.runAudit')}
                  <ArrowRight/>
                </button>
              </form>
            )}
            <div className="hero-checks">
              <span><Check/> {t('hero.check1')}</span>
              <span><Check/> {t('hero.check2')}</span>
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
