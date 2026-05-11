import { useState } from 'react';
import { useContent } from '../hooks/useContent.js';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight, Check } from '../components/icons.jsx';
import { Link } from 'react-router-dom';
import { pricing as fallback } from '../content/index.js';

export default function Pricing() {
  const c = useContent('pricing', fallback);
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="page-hero galactic" style={{ paddingBottom: 80 }}>
        <Starfield density={80}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="up">
            <h1 className="page-hero-title">{c.hero_title}</h1>
            <p className="page-hero-desc">{c.hero_desc}</p>

            {/* Toggle */}
            <div className="billing-toggle">
              <span className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</span>
              <button className={`toggle-pill ${annual ? 'on' : ''}`} onClick={() => setAnnual(a => !a)}>
                <span className="toggle-knob"/>
              </button>
              <span className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>
                Annual <span className="save-badge">Save 17%</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: 'var(--cream)', padding: '0 0 100px', marginTop: -40 }}>
        <div className="container-wide">
          <div className="plans-grid">
            {c.plans.map((plan, i) => (
              <Reveal key={i} variant="up" delay={i + 1} className={`plan-card ${plan.highlight ? 'plan-highlight' : ''}`}>
                {plan.highlight && <div className="plan-badge-top">Most popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {plan.price_monthly === null ? (
                    <span className="plan-price-custom">Custom</span>
                  ) : plan.price_monthly === 0 ? (
                    <span className="plan-price-num">Free</span>
                  ) : (
                    <>
                      <span className="plan-price-num">${annual ? plan.price_annual : plan.price_monthly}</span>
                      <span className="plan-price-period">/mo</span>
                    </>
                  )}
                </div>
                {plan.price_monthly > 0 && annual && (
                  <div className="plan-billed">Billed annually</div>
                )}
                <p className="plan-desc">{plan.desc}</p>
                <Link
                  to={plan.cta_style === 'dark' || plan.cta_style === 'cobalt' ? '/pricing' : '/pricing'}
                  className={`btn btn-${plan.cta_style} btn-lg plan-cta`}
                >
                  {plan.cta} {plan.cta_style !== 'outline' && <ArrowRight/>}
                </Link>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><Check/> {f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section style={{ background: 'var(--paper)', padding: '60px 0 80px', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div className="col-eye section-eyebrow" style={{ textAlign: 'center' }}>TRUSTED BY DATA-DRIVEN TEAMS</div>
          <div className="logo-row" style={{ marginTop: 28 }}>
            {['Stratamesh', 'Voltaic', 'Coreframe', 'Halcyon', 'Northwind', 'Quantle'].map(n =>
              <div className="logo-cell" key={n}>{n}</div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 100px' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, textAlign: 'center' }}>
            Frequently asked <span className="serif italic">questions.</span>
          </Reveal>
          <div className="faq-list">
            {c.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} delay={i}/>
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
          <Reveal variant="blur" as="h2">Start for <span className="serif italic">free</span> today.</Reveal>
          <p className="lede" style={{ margin: '16px auto 36px' }}>No credit card required. Upgrade when you're ready.</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-dark btn-lg">Get started free <ArrowRight/></a>
            <a href="#" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }}>Book a demo</a>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal variant="up" delay={delay % 3} className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-q">
        {q}
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </Reveal>
  );
}
