import { useTranslation } from 'react-i18next';
import { useContent } from '../hooks/useContent.js';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { IllustrationIcon } from '../components/Illustrations.jsx';
import { Link } from 'react-router-dom';
import { renderText, sourceId } from '../lib/cite.jsx';

export default function SolutionPage({ slug, eyebrow, hero_title, hero_desc, pain_points, benefits, eeat, faq, cta_title, cta_desc }) {
  const { t } = useTranslation();
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, pain_points, benefits, eeat, faq, cta_title, cta_desc });

  const titleLines = c.hero_title.split('\n');
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
            <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot"/> {c.eyebrow}</div>
            <h1 className="page-hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i < titleLines.length - 1 ? <br/> : ''}</span>
              ))}
            </h1>
            <p className="page-hero-desc">{c.hero_desc}</p>
            <div className="page-hero-actions">
              <button type="button" className="btn btn-dark btn-lg" data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('solutionPage.bookDemo')} <ArrowRight/></button>
              <Link to="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>{t('solutionPage.viewPricing')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context / Pain points */}
      <section className="inner-section" style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 600 }}>
            {t('solutionPage.problemTitle')}
          </Reveal>
          <div className="pain-grid">
            {c.pain_points.map((p, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="pain-card">
                <div className="pain-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{renderText(p.desc)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="inner-section" style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 560 }}>
            {t('solutionPage.benefitsTitle')}
          </Reveal>
          <div className="benefits-grid">
            {c.benefits.map((b, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="benefit-card">
                <div className="benefit-icon"><IllustrationIcon icon={b.icon} size={44}/></div>
                <h4>{b.title}</h4>
                <p>{renderText(b.desc)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T sources */}
      {sources.length > 0 && (
        <section className="inner-section" style={{ background: 'var(--cream-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('solutionPage.sources')}</Reveal>
            <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {sources.map((src, i) => (
                <Reveal key={i} variant="up" delay={(i % 4) + 1}>
                  <div id={sourceId(src.title)} style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{src.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)' }}>{renderText(src.desc)}</div>
                    </div>
                    {src.url && (
                      <a href={src.url} target="_blank" rel="noopener noreferrer nofollow" style={{ fontSize: 13, color: 'var(--cobalt)', whiteSpace: 'nowrap', textDecoration: 'none' }}>↗</a>
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
        <section className="inner-section" style={{ background: 'var(--paper)', padding: '100px 0' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('solutionPage.faq')}</Reveal>
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
            <button type="button" className="btn btn-cobalt btn-lg" data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('solutionPage.bookDemo')} <ArrowRight/></button>
            <Link to="/pricing" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', cursor: 'pointer' }}>{t('solutionPage.viewPricing')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
