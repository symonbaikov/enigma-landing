import { useState } from 'react';
import { useContent } from '../hooks/useContent.js';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { AILogos } from '../components/BrandLogos.jsx';
import { IllustrationIcon } from '../components/Illustrations.jsx';
import FeatureDrawer from '../components/FeatureDrawer.jsx';
import { Link } from 'react-router-dom';

const ProductVisual = ({ slug }) => {
  if (slug === 'product-axp') return (
    <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
      <div className="container-wide">
        <Reveal variant="up-sm">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'center', maxWidth: 860, margin: '0 auto' }}>

            {/* BEFORE: bloated page */}
            <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 20, padding: '28px 28px 24px', boxShadow: '0 12px 40px -12px rgba(31,26,20,0.1)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Without AXP</div>
              <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'monospace', color: 'var(--ink)', marginBottom: 4 }}>128,440</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>tokens sent to AI</div>
              {[
                { label: 'JavaScript bundles', pct: 47, color: '#e5e7eb' },
                { label: 'Navigation & menus', pct: 13, color: '#e5e7eb' },
                { label: 'Images & media refs', pct: 22, color: '#e5e7eb' },
                { label: 'CSS & decorative markup', pct: 11, color: '#e5e7eb' },
                { label: 'Actual useful content', pct: 7, color: '#6B3FFF' },
              ].map((row, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: i === 4 ? '#6B3FFF' : 'var(--muted)', marginBottom: 4, fontWeight: i === 4 ? 600 : 400 }}>
                    <span>{row.label}</span><span>{row.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--cream)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ width: `${row.pct}%`, height: '100%', background: row.color, borderRadius: 99 }}/>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--cobalt)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(107,63,255,0.4)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cobalt)', textAlign: 'center', letterSpacing: '-0.01em' }}>−98.99%<br/>tokens</div>
            </div>

            {/* AFTER: clean content */}
            <div style={{ background: 'white', border: '1.5px solid rgba(107,63,255,0.25)', borderRadius: 20, padding: '28px 28px 24px', boxShadow: '0 12px 40px -12px rgba(107,63,255,0.2)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B3FFF', marginBottom: 6 }}>With AXP</div>
              <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'monospace', color: 'var(--ink)', marginBottom: 4 }}>1,287</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>tokens — pure signal</div>
              {[
                'Company overview & key facts',
                'Product descriptions & specs',
                'Pricing & packaging details',
                'Reviews & trust signals',
                'Schema.org structured data',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 13, color: 'var(--ink)' }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(107,63,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#6B3FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </div>
              ))}
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
                { name: 'ChatGPT', label: 'ChatGPT / OpenAI', pct: 38, color: '#10a37f', Logo: AILogos.ChatGPT },
                { name: 'Perplexity', label: 'Perplexity AI', pct: 29, color: '#20B2AA', Logo: AILogos.Perplexity },
                { name: 'Claude', label: 'Claude / Anthropic', pct: 18, color: '#d97757', Logo: AILogos.Claude },
                { name: 'Gemini', label: 'Gemini / Google', pct: 11, color: '#4285f4', Logo: AILogos.Gemini },
                { name: 'Bing', label: 'Bing AI / Microsoft', pct: 4, color: '#0078D4', Logo: AILogos.Bing },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <row.Logo size={22}/>
                  <span style={{ width: 130, fontSize: 13, color: 'var(--ink)', flexShrink: 0 }}>{row.label}</span>
                  <div style={{ flex: 1, height: 22, background: 'var(--cream)', borderRadius: 999, overflow: 'hidden' }}>
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
                { model: 'ChatGPT', Logo: AILogos.ChatGPT, mentioned: true, rank: 1, sentiment: 'Positive' },
                { model: 'Perplexity', Logo: AILogos.Perplexity, mentioned: true, rank: 2, sentiment: 'Positive' },
                { model: 'Claude', Logo: AILogos.Claude, mentioned: false, rank: null, sentiment: '—' },
                { model: 'Gemini', Logo: AILogos.Gemini, mentioned: true, rank: 3, sentiment: 'Neutral' },
              ].map((row, i) => (
                <div key={i} style={{ padding: '18px 22px', borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none', borderBottom: i < 2 ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <row.Logo size={20}/>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{row.model}</span>
                    </div>
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
  const [activeFeature, setActiveFeature] = useState(null);

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
                  <p>{f.desc}</p>
                  <span className="feature-card-read">Read more →</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Quote */}
      <section style={{ background: 'var(--cream-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div className="page-stats" style={{ marginBottom: 80 }}>
            {c.stats.map((s, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className="page-stat">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(52px,6vw,80px)', lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--cobalt)', marginBottom: 12 }}>{s.value}</div>
                <div style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 200, margin: '0 auto' }}>{s.label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={2}>
            <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', borderTop: '1px solid var(--line)', paddingTop: 64 }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--ink)', lineHeight: 1.4, marginBottom: 28 }}>
                "Enigma gave us complete visibility into how AI systems perceive our brand — and a clear roadmap to improve it."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, color: 'white' }}>TK</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Taylor Kim</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>VP of Growth, Arclight SaaS</div>
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

      <FeatureDrawer feature={activeFeature} onClose={() => setActiveFeature(null)}/>
    </>
  );
}
