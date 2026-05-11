import { useContent } from '../hooks/useContent.js';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { Link } from 'react-router-dom';

export default function ProductPage({ slug, eyebrow, hero_title, hero_desc, badge, steps, features, stats, cta_title, cta_desc }) {
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, badge, steps, features, stats, cta_title, cta_desc });

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
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"/> {c.eyebrow}
            </div>
            <h1 className="page-hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i < titleLines.length - 1 ? <br/> : ''}</span>
              ))}
            </h1>
            <p className="page-hero-desc">{c.hero_desc}</p>
            {c.badge && (
              <div className="page-badge">{c.badge}</div>
            )}
            <div className="page-hero-actions">
              <Link to="/pricing" className="btn btn-dark btn-lg">Start free trial <ArrowRight/></Link>
              <Link to="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>View pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="div" className="section-label">How it works</Reveal>
          <div className="steps-grid">
            {c.steps.map((s, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, maxWidth: 560 }}>
            Everything you need to <span className="serif italic">dominate AI search.</span>
          </Reveal>
          <div className="features-grid">
            {c.features.map((f, i) => (
              <Reveal key={i} variant="up" delay={(i % 3) + 1} className="feature-card">
                <div className="feature-icon-lg">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="dark-section galactic" style={{ padding: '80px 0' }}>
        <Starfield density={60}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="page-stats">
            {c.stats.map((s, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="page-stat">
                <div className="page-stat-num">{s.value}</div>
                <div className="page-stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta galactic cta-galactic">
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2">{c.cta_title}</Reveal>
          <p className="lede" style={{ margin: '16px auto 36px' }}>{c.cta_desc}</p>
          <div className="cta-actions">
            <Link to="/pricing" className="btn btn-dark btn-lg">Start free trial <ArrowRight/></Link>
            <a href="#" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>Book a demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
