import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

const ReadinessVisual = () => {
  const { t } = useTranslation();
  const checks = asArray(t('visuals.axp.checks', { returnObjects: true }));
  const steps = asArray(t('visuals.axp.steps', { returnObjects: true }));
  const evidence = asArray(t('visuals.axp.evidence', { returnObjects: true }));

  return (
    <div className="axp-readiness-visual float-slow">
      <div className="axp-panel axp-page-panel">
        <div className="visual-kicker">{t('visuals.axp.auditLabel')}</div>
        <div className="axp-url-bar">
          <span/>
          <code>{t('visuals.axp.url')}</code>
        </div>
        <h4>{t('visuals.axp.pageTitle')}</h4>
        <div className="axp-check-list">
          {checks.map((row) => (
            <div className={`axp-check axp-check-${row.tone || 'neutral'}`} key={row.metric}>
              <div>
                <strong>{row.metric}</strong>
                <span>{row.detail}</span>
              </div>
              <em>{row.state}</em>
            </div>
          ))}
        </div>
      </div>

      <div className="axp-flow-rail" aria-hidden="true">
        {steps.map((step, index) => (
          <div className="axp-flow-step" key={step.title}>
            <span>{index + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <small>{step.desc}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="axp-panel axp-answer-panel">
        <div className="visual-kicker">{t('visuals.axp.answerLabel')}</div>
        <h4>{t('visuals.axp.answerTitle')}</h4>
        <p>{t('visuals.axp.answerDesc')}</p>
        <div className="axp-evidence-stack">
          {evidence.map((item) => (
            <div className="axp-evidence" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AXPSection() {
  const { t } = useTranslation();
  return (
    <section style={{background: 'var(--cream)', paddingBottom: 120}}>
      <div className="container-wide">
        <div className="split-section">
          <Reveal variant="right" className="col-l">
            <div className="col-eye">{t('axp.eyebrow')}</div>
            <h3 className="h2">
              {t('axp.h2Line1')}<br/>
              <span className="serif italic">{t('axp.h2Highlight')}</span>
            </h3>
          </Reveal>
          <Reveal variant="left" delay={2} className="col-r">
            <p>{t('axp.desc')}</p>
            <Link to="/product/axp" className="btn btn-cobalt btn-lg">{t('axp.exploreBtn')} <ArrowRight/></Link>
          </Reveal>
        </div>

        <Reveal variant="up-sm"><ReadinessVisual/></Reveal>

        <div className="feature-row">
          <Reveal variant="up" delay={1} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
                <circle cx="14" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
                <line x1="14" y1="14" x2="21.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="14" cy="14" r="1.8" fill="currentColor"/>
                <circle cx="20.5" cy="9.5" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h4>{t('axp.feature1.title')}</h4>
            <p>{t('axp.feature1.desc')}</p>
          </Reveal>
          <Reveal variant="up" delay={2} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M11 4v5a2 2 0 0 1-2 2H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4v5a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 24v-5a2 2 0 0 0-2-2H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 24v-5a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>{t('axp.feature2.title')}</h4>
            <p>{t('axp.feature2.desc')}</p>
          </Reveal>
          <Reveal variant="up" delay={3} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>{t('axp.feature3.title')}</h4>
            <p>{t('axp.feature3.desc')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
