import { useContent } from '../hooks/useContent.js';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { Link } from 'react-router-dom';

const ProductVisual = ({ slug }) => {
  if (slug === 'product-axp') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0 80px' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }}>
            {/* Human view */}
            <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px -20px rgba(31,26,20,0.12)' }}>
              <div style={{ background: 'rgba(242,238,246,0.8)', padding: '10px 14px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--muted)' }}>
                <div style={{ display: 'flex', gap: 5 }}><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(31,26,20,0.15)' }}/><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(31,26,20,0.15)' }}/><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(31,26,20,0.15)' }}/></div>
                <span style={{ fontStyle: 'italic' }}>Human view · 128,440 tokens</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ height: 10, background: 'var(--line)', borderRadius: 6, width: '60%', marginBottom: 8 }}/>
                <div style={{ height: 8, background: 'var(--cream-2)', borderRadius: 6, width: '90%', marginBottom: 6 }}/>
                <div style={{ height: 8, background: 'var(--cream-2)', borderRadius: 6, width: '75%', marginBottom: 6 }}/>
                <div style={{ height: 8, background: 'var(--cream-2)', borderRadius: 6, width: '85%', marginBottom: 16 }}/>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[...Array(4)].map((_, i) => <div key={i} style={{ height: 60, background: 'var(--cream)', borderRadius: 8 }}/>)}
                </div>
              </div>
            </div>
            {/* VS */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '0 8px' }}>
              <div style={{ flex: 1, width: 1, background: 'linear-gradient(to bottom, transparent, var(--cobalt), transparent)' }}/>
              <div style={{ padding: '8px 14px', borderRadius: 999, background: 'var(--cobalt)', color: 'white', fontSize: 11, fontWeight: 600, textAlign: 'center', whiteSpace: 'nowrap' }}>−98.99%<br/>tokens</div>
              <div style={{ flex: 1, width: 1, background: 'linear-gradient(to bottom, var(--cobalt), transparent)' }}/>
            </div>
            {/* Agent view */}
            <div style={{ background: '#15102A', border: '1px solid rgba(107,63,255,0.25)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px -20px rgba(107,63,255,0.3)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--muted-2)' }}>
                <div style={{ display: 'flex', gap: 5 }}><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,0.15)' }}/><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,0.15)' }}/><span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,0.15)' }}/></div>
                <span style={{ fontStyle: 'italic' }}>Agent view · 1,287 tokens</span>
              </div>
              <div style={{ padding: 20, fontFamily: 'monospace', fontSize: 12 }}>
                {[
                  { tag: '<h1>', text: ' Company Name ' },
                  { tag: '<p>', text: ' One-line description of what company does. ' },
                  { tag: '<h2>', text: ' Core products ' },
                  { tag: '—', text: ' Product A — brief fact' },
                  { tag: '—', text: ' Product B — brief fact' },
                  { tag: '<cite>', text: ' Trusted by 500+ enterprise teams ' },
                ].map((l, i) => (
                  <div key={i} style={{ marginBottom: 6, color: 'rgba(201,168,255,0.9)', display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ color: 'rgba(107,63,255,0.7)', flexShrink: 0 }}>{l.tag}</span>
                    <span style={{ color: 'rgba(244,239,230,0.8)' }}>{l.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  if (slug === 'product-agent-traffic') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0 80px' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ maxWidth: 760, margin: '0 auto', background: 'white', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px -25px rgba(31,26,20,0.15)' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 500 }}>Agent Traffic · Last 7 days</span>
              <span style={{ fontSize: 12, background: 'rgba(107,63,255,0.08)', color: 'var(--cobalt)', padding: '4px 12px', borderRadius: 999 }}>Live</span>
            </div>
            <div style={{ padding: 22 }}>
              {[
                { name: 'ChatGPT / OpenAI', pct: 38, color: '#10a37f' },
                { name: 'Perplexity AI', pct: 29, color: '#6B3FFF' },
                { name: 'Claude / Anthropic', pct: 18, color: '#d97757' },
                { name: 'Gemini / Google', pct: 11, color: '#4285f4' },
                { name: 'Bing AI / Microsoft', pct: 4, color: '#008272' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <span style={{ width: 140, fontSize: 13, color: 'var(--ink)', flexShrink: 0 }}>{row.name}</span>
                  <div style={{ flex: 1, height: 24, background: 'var(--cream)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ width: `${row.pct * 2.4}%`, height: '100%', background: row.color, borderRadius: 999, opacity: 0.85 }}/>
                  </div>
                  <span style={{ width: 36, fontSize: 13, color: 'var(--muted)', textAlign: 'right', flexShrink: 0 }}>{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  if (slug === 'product-site-maps') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0 80px' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ maxWidth: 720, margin: '0 auto', background: 'white', border: '1px solid var(--line)', borderRadius: 20, padding: 32, boxShadow: '0 30px 60px -25px rgba(31,26,20,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500 }}>Site Map · AI visibility scores</span>
              <span style={{ fontSize: 12, color: 'var(--muted-2)' }}>48 pages analyzed</span>
            </div>
            {[
              { label: '/', name: 'Homepage', score: 94, color: '#6B3FFF' },
              { label: '/product', name: 'Product', score: 78, color: '#8A4FC9' },
              { label: '/pricing', name: 'Pricing', score: 61, color: '#C9A876' },
              { label: '/blog', name: 'Blog (avg)', score: 42, color: '#d97757' },
              { label: '/about', name: 'About', score: 29, color: '#aaa' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <span style={{ width: 80, fontSize: 12, fontFamily: 'monospace', color: 'var(--muted-2)', flexShrink: 0 }}>{p.label}</span>
                <span style={{ width: 100, fontSize: 13, color: 'var(--ink)', flexShrink: 0 }}>{p.name}</span>
                <div style={{ flex: 1, height: 8, background: 'var(--cream)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: `${p.score}%`, height: '100%', background: p.color, borderRadius: 999 }}/>
                </div>
                <span style={{ width: 36, fontSize: 13, fontWeight: 600, color: p.color, textAlign: 'right', flexShrink: 0 }}>{p.score}</span>
              </div>
            ))}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)', fontSize: 12, color: 'var(--muted-2)', display: 'flex', gap: 24 }}>
              <span>● Score 80+ = citation-ready</span>
              <span>● Score 40–79 = needs improvement</span>
              <span>● Score &lt;40 = invisible to AI</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  if (slug === 'product-monitoring') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0 80px' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ maxWidth: 760, margin: '0 auto', background: 'white', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px -25px rgba(31,26,20,0.15)' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 500 }}>Brand presence · "best project management tool"</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {[
                { model: 'ChatGPT', mentioned: true, rank: 1, sentiment: 'Positive' },
                { model: 'Perplexity', mentioned: true, rank: 2, sentiment: 'Positive' },
                { model: 'Claude', mentioned: false, rank: null, sentiment: '—' },
                { model: 'Gemini', mentioned: true, rank: 3, sentiment: 'Neutral' },
              ].map((row, i) => (
                <div key={i} style={{ padding: '18px 22px', borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none', borderBottom: i < 2 ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{row.model}</span>
                    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, background: row.mentioned ? 'rgba(107,63,255,0.1)' : 'rgba(31,26,20,0.06)', color: row.mentioned ? 'var(--cobalt)' : 'var(--muted)' }}>
                      {row.mentioned ? '✓ Mentioned' : '✗ Not found'}
                    </span>
                  </div>
                  {row.rank && <div style={{ fontSize: 12, color: 'var(--muted)' }}>Rank #{row.rank} · {row.sentiment}</div>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  if (slug === 'product-insights') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0 80px' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { priority: 'High', lift: '+34%', title: 'Add structured FAQ to /pricing page', effort: 'Low effort', color: 'var(--cobalt)' },
              { priority: 'High', lift: '+22%', title: 'Update /product hero with entity definitions', effort: 'Medium effort', color: 'var(--cobalt)' },
              { priority: 'Med', lift: '+15%', title: 'Add JSON-LD Organization schema to homepage', effort: 'Low effort', color: 'var(--rust)' },
              { priority: 'Med', lift: '+11%', title: 'Compress /blog pages for agent token efficiency', effort: 'Medium effort', color: 'var(--rust)' },
            ].map((item, i) => (
              <Reveal key={i} variant="up" delay={i + 1}>
                <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{item.priority}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{item.effort}</div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--cobalt)', flexShrink: 0 }}>{item.lift}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );

  return null;
};

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

      {/* Product Visual */}
      <ProductVisual slug={slug}/>

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

      {/* Stats + Quote */}
      <section className="dark-section galactic" style={{ padding: '100px 0' }}>
        <Starfield density={60}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="page-stats" style={{ marginBottom: 80 }}>
            {c.stats.map((s, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="page-stat">
                <div className="page-stat-num">{s.value}</div>
                <div className="page-stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={2}>
            <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', borderTop: '1px solid rgba(244,239,230,0.1)', paddingTop: 64 }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--cream)', lineHeight: 1.4, marginBottom: 28 }}>
                "Enigma gave us complete visibility into how AI systems perceive our brand — and a clear roadmap to improve it."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, color: 'white' }}>TK</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--cream)' }}>Taylor Kim</div>
                  <div style={{ fontSize: 13, color: 'var(--muted-2)' }}>VP of Growth, Arclight SaaS</div>
                </div>
              </div>
            </div>
          </Reveal>
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
            <Link to="/pricing" className="btn btn-cobalt btn-lg">Start free trial <ArrowRight/></Link>
            <a href="#" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', cursor: 'pointer' }}>Book a demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
