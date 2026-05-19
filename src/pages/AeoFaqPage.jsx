import { useTranslation } from 'react-i18next';
import { useContent } from '../hooks/useContent.js';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { Link } from 'react-router-dom';
import { renderText, sourceId } from '../lib/cite.jsx';

export default function AeoFaqPage({ slug, eyebrow, hero_title, hero_desc, glossary, faq, eeat, cta_title, cta_desc }) {
  const { t } = useTranslation();
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, glossary, faq, eeat, cta_title, cta_desc });

  const titleLines = c.hero_title.split('\n');
  const terms = Array.isArray(c.glossary) ? c.glossary : [];
  const faqs = Array.isArray(c.faq) ? c.faq : [];
  const sources = Array.isArray(c.eeat) ? c.eeat : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.hero_title.replace(/\n/g, ' '),
    about: ['GEO glossary', 'AEO definitions', 'RAG', 'citation absorption'],
    isPartOf: { '@type': 'WebSite', name: 'Enigma' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>

      {/* Hero */}
      <section className="page-hero galactic">
        <Starfield density={70}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="up">
            <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot"/> {c.eyebrow}</div>
            <h1 className="page-hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i < titleLines.length - 1 ? <br/> : ''}</span>
              ))}
            </h1>
            <p className="page-hero-desc">{c.hero_desc}</p>
          </Reveal>
        </div>
      </section>

      {/* Glossary */}
      {terms.length > 0 && (
        <section style={{ background: 'var(--cream)', padding: '90px 0' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('aeoFaqPage.glossary')}</Reveal>
            <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {terms.map((g, i) => (
                <Reveal key={i} variant="up" delay={(i % 4) + 1}>
                  <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{g.term}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{renderText(g.def)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={{ background: 'var(--paper)', padding: '90px 0' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('aeoFaqPage.faq')}</Reveal>
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

      {/* Sources */}
      {sources.length > 0 && (
        <section style={{ background: 'var(--cream-2)', padding: '90px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container-wide">
            <Reveal variant="up" as="div" className="section-label">{t('aeoFaqPage.sources')}</Reveal>
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

      {/* CTA */}
      <section className="dark-section galactic" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 18 }}>{c.cta_title}</Reveal>
          <p style={{ fontSize: 18, color: 'rgba(244,239,230,0.72)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55 }}>{c.cta_desc}</p>
          <div className="cta-actions">
            <Link to="/resources/geo-playbook" className="btn btn-cobalt btn-lg">{t('resourcePage.startFreeTrial')} <ArrowRight/></Link>
          </div>
        </div>
      </section>
    </>
  );
}
