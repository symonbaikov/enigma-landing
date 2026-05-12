import { useContent } from '../hooks/useContent.js';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { CompanyLogo } from '../components/BrandLogos.jsx';
import { IllustrationIcon } from '../components/Illustrations.jsx';
import { Link } from 'react-router-dom';

const PROOF_COMPANIES = ['Vercel', 'Notion', 'Figma', 'Linear', 'Stripe'];

export default function SolutionPage({ slug, eyebrow, hero_title, hero_desc, pain_points, benefits, quote, quote_author, quote_role, stat, stat_label, cta_title, cta_desc }) {
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, pain_points, benefits, quote, quote_author, quote_role, stat, stat_label, cta_title, cta_desc });

  const titleLines = c.hero_title.split('\n');

  return (
    <>
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
              <a href="#" className="btn btn-dark btn-lg">Book a demo <ArrowRight/></a>
              <Link to="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social proof logo strip */}
      <section style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', alignItems: 'center', gap: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted by teams at</span>
            {PROOF_COMPANIES.map(n => <CompanyLogo key={n} name={n} height={18}/>)}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 600 }}>
            The problem with <span className="serif italic">AI search today.</span>
          </Reveal>
          <div className="pain-grid">
            {c.pain_points.map((p, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="pain-card">
                <div className="pain-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 560 }}>
            How Enigma <span className="serif italic">solves it.</span>
          </Reveal>
          <div className="benefits-grid">
            {c.benefits.map((b, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="benefit-card">
                <div className="benefit-icon"><IllustrationIcon icon={b.icon} size={44}/></div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Stat — light background, avoids dark-dark pattern */}
      <section style={{ background: 'var(--cream-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div className="stat-quote stat-quote-light">
            <Reveal variant="right" className="big-stat">
              <div>
                <div className="num">{c.stat}</div>
                <div className="desc">{c.stat_label}</div>
              </div>
            </Reveal>
            <Reveal variant="left" delay={2} className="quote-block">
              <blockquote>{c.quote}</blockquote>
              <div className="quote-attr">
                <div className="avatar">{c.quote_author.split(' ').map(w => w[0]).join('')}</div>
                <div>
                  <div className="name">{c.quote_author}</div>
                  <div className="role">{c.quote_role}</div>
                </div>
              </div>
              {(() => { const co = c.quote_role.split(', ').pop(); return <div style={{marginTop: 16}}><CompanyLogo name={co} height={18}/></div>; })()}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section galactic" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 18 }}>{c.cta_title}</Reveal>
          <p style={{ fontSize: 17, color: 'var(--muted-2)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55 }}>{c.cta_desc}</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-cobalt btn-lg">Book a demo <ArrowRight/></a>
            <Link to="/pricing" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', cursor: 'pointer' }}>View pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
