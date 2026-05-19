import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../hooks/useContent.js';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { IllustrationIcon } from '../components/Illustrations.jsx';
import FeatureDrawer from '../components/FeatureDrawer.jsx';
import { Link } from 'react-router-dom';
import { renderText, sourceId } from '../lib/cite.jsx';

/* Neutral schematic — illustrative only, no fabricated metrics.
   Per audit (17.05.2026): no invented numbers, citations or testimonials in product UI. */
const ProductVisual = ({ slug }) => {
  const { t } = useTranslation();
  const rows = t('productVisual.schematicRows', { returnObjects: true });

  return (
    <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ maxWidth: 760, margin: '0 auto', background: 'white', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px -25px rgba(31,26,20,0.15)' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 500 }}>{t(`productVisual.titles.${slug}`, t('productVisual.titles.default'))}</span>
              <span style={{ fontSize: 12, background: 'rgba(107,63,255,0.08)', color: 'var(--cobalt)', padding: '4px 12px', borderRadius: 999 }}>{t('productVisual.schematicTag')}</span>
            </div>
            <div style={{ padding: 22 }}>
              {(Array.isArray(rows) ? rows : []).map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(107,63,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, color: 'var(--cobalt)', fontWeight: 700 }}>{i + 1}</span>
                  <span style={{ flex: 1, fontSize: 14, color: 'var(--ink)' }}>{row}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', fontSize: 12, color: 'var(--muted-2)' }}>
              {t('productVisual.schematicCaption')}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default function ProductPage({ slug, eyebrow, hero_title, hero_desc, context, steps, features, eeat, faq, cta_title, cta_desc }) {
  const { t } = useTranslation();
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, context, steps, features, eeat, faq, cta_title, cta_desc });
  const [activeFeature, setActiveFeature] = useState(null);

  const titleLines = c.hero_title.split('\n');
  const ctx = Array.isArray(c.context) ? c.context : [];
  const sources = Array.isArray(c.eeat) ? c.eeat : [];
  const faqs = Array.isArray(c.faq) ? c.faq : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.hero_title.replace(/\n/g, ' '),
    about: c.eyebrow,
    isPartOf: { '@type': 'WebSite', name: 'Enigma' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>

      {/* Hero */}
      <section className="page-hero galactic">
        <Starfield density={90}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="up">
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"/> {c.eyebrow}
            </div>
            <h1 className="page-hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i < titleLines.length - 1 ? <br/> : ''}</span>
              ))}
            </h1>
            <p className="page-hero-desc">{c.hero_desc}</p>
            <div className="page-hero-actions">
              <Link to="/pricing" className="btn btn-dark btn-lg">{t('productPage.startFreeTrial')} <ArrowRight/></Link>
              <Link to="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>{t('productPage.viewPricing')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context / Problem */}
      {ctx.length > 0 && (
        <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('productPage.context')}</Reveal>
            <div className="features-grid">
              {ctx.map((item, i) => (
                <Reveal key={i} variant="up" delay={(i % 3) + 1}>
                  <div className="feature-card">
                    <h4>{item.title}</h4>
                    <p>{renderText(item.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Visual — neutral schematic */}
      <ProductVisual slug={slug}/>

      {/* How it works */}
      <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="div" className="section-label">{t('productPage.howItWorks')}</Reveal>
          <div className="steps-grid">
            {c.steps.map((s, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{renderText(s.desc)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 560 }}>
            {t('productPage.everythingYouNeed')}
          </Reveal>
          <div className="features-grid">
            {c.features.map((f, i) => (
              <Reveal key={i} variant="up" delay={(i % 3) + 1}>
                <div
                  className="feature-card feature-card-clickable"
                  onClick={() => setActiveFeature(f)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveFeature(f)}
                >
                  <div className="feature-icon-lg"><IllustrationIcon icon={f.icon} size={44}/></div>
                  <h4>{f.title}</h4>
                  <p>{renderText(f.desc)}</p>
                  <span className="feature-card-read">{t('productPage.readMore')} →</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T sources */}
      {sources.length > 0 && (
        <section style={{ background: 'var(--cream-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('productPage.sources')}</Reveal>
            <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {sources.map((s, i) => (
                <Reveal key={i} variant="up" delay={(i % 4) + 1}>
                  <div id={sourceId(s.title)} style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)' }}>{renderText(s.desc)}</div>
                    </div>
                    {s.url && (
                      <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ fontSize: 13, color: 'var(--cobalt)', whiteSpace: 'nowrap', textDecoration: 'none' }}>↗</a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('productPage.faq')}</Reveal>
            <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {faqs.map((qa, i) => (
                <Reveal key={i} variant="up" delay={(i % 4) + 1}>
                  <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: 18 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{qa.q}</h3>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6 }}>{renderText(qa.a)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="dark-section galactic" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 18 }}>{c.cta_title}</Reveal>
          <p style={{ fontSize: 18, color: 'rgba(244,239,230,0.72)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55 }}>{c.cta_desc}</p>
          <div className="cta-actions">
            <Link to="/pricing" className="btn btn-cobalt btn-lg">{t('productPage.startFreeTrial')} <ArrowRight/></Link>
            <button type="button" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('productPage.bookDemo')}</button>
          </div>
        </div>
      </section>

      <FeatureDrawer feature={activeFeature} onClose={() => setActiveFeature(null)}/>
    </>
  );
}
