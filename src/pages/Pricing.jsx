import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../hooks/useContent.js';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight, Check } from '../components/icons.jsx';
import { CompanyLogo } from '../components/BrandLogos.jsx';
import { Link } from 'react-router-dom';
import { getPricing } from '../content/index.js';

const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000';

function PlanCta({ plan }) {
  const slug = plan.name.toLowerCase();
  if (plan.price_monthly === null) {
    return (
      <a href="mailto:sales@enigma.com" className={`btn btn-${plan.cta_style} btn-lg plan-cta`}>
        {plan.cta} {plan.cta_style !== 'outline' && <ArrowRight/>}
      </a>
    );
  }
  return (
    <a href={`${PLATFORM_URL}/signup?plan=${slug}`} className={`btn btn-${plan.cta_style} btn-lg plan-cta`}>
      {plan.cta} {plan.cta_style !== 'outline' && <ArrowRight/>}
    </a>
  );
}

export default function Pricing() {
  const { t } = useTranslation();
  const c = useContent('pricing', getPricing(t));
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
              <span className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>{t('pricing.monthly')}</span>
              <button className={`toggle-pill ${annual ? 'on' : ''}`} onClick={() => setAnnual(a => !a)}>
                <span className="toggle-knob"/>
              </button>
              <span className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>
                {t('pricing.annual')} <span className="save-badge">{t('pricing.save17')}</span>
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
                {plan.highlight && <div className="plan-badge-top">{t('pricing.mostPopular')}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {plan.price_monthly === null ? (
                    <span className="plan-price-custom">{t('pricing.custom')}</span>
                  ) : plan.price_monthly === 0 ? (
                    <span className="plan-price-num">{t('pricing.free')}</span>
                  ) : (
                    <>
                      <span className="plan-price-num">${annual ? plan.price_annual : plan.price_monthly}</span>
                      <span className="plan-price-period">{t('pricing.perMonth')}</span>
                    </>
                  )}
                </div>
                {plan.price_monthly > 0 && annual && (
                  <div className="plan-billed">{t('pricing.billedAnnually')}</div>
                )}
                <p className="plan-desc">{plan.desc}</p>
                <PlanCta plan={plan} />

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
          <div className="col-eye section-eyebrow" style={{ textAlign: 'center' }}>{t('pricing.trustedBy')}</div>
          <div className="logo-row" style={{ marginTop: 28 }}>
            {['Grammarly', 'MacPaw', 'Preply', 'Monobank', 'Ajax', 'Rozetka'].map(n =>
              <div className="logo-cell" key={n}><CompanyLogo name={n} height={20}/></div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 100px' }}>
        <div className="container-wide">
          <Reveal variant="up" as="h2" className="h2" style={{ marginBottom: 56, textAlign: 'center' }}>
            {t('pricing.faqTitle')}
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
          <Reveal variant="blur" as="h2">{t('pricing.finalCtaTitle')}</Reveal>
          <p className="lede" style={{ margin: '16px auto 36px' }}>{t('pricing.finalCtaDesc')}</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-dark btn-lg">{t('pricing.getStartedFree')} <ArrowRight/></a>
            <button type="button" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--cream)' }} data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('pricing.bookDemo')}</button>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal variant="up" delay={delay % 3}>
      <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <div className="faq-q">
          {q}
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-body">
          <div className="faq-a">{a}</div>
        </div>
      </div>
    </Reveal>
  );
}
