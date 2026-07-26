import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from './icons.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

function CitationIllustration() {
  const { t } = useTranslation();
  const steps = asArray(t('visuals.feat.citationSteps', { returnObjects: true }));

  return (
    <div className="mini-visual mini-visual-citation">
      <div className="mini-visual-head">
        <span>{t('visuals.feat.citationLabel')}</span>
        <strong>{t('visuals.feat.citationTitle')}</strong>
      </div>
      <div className="citation-path">
        {steps.map((step) => (
          <div className={`citation-step citation-step-${step.tone || 'neutral'}`} key={step.label}>
            <span/>
            <div>
              <strong>{step.label}</strong>
              <small>{step.desc}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="mini-recommendation">{t('visuals.feat.citationAction')}</div>
    </div>
  );
}

function MonitoringIllustration() {
  const { t } = useTranslation();
  const steps = asArray(t('visuals.feat.playbookSteps', { returnObjects: true }));

  return (
    <div className="mini-visual mini-visual-playbook">
      <div className="mini-visual-head">
        <span>{t('visuals.feat.playbookLabel')}</span>
        <strong>{t('visuals.feat.playbookTitle')}</strong>
      </div>
      <div className="playbook-stack">
        {steps.map((step, index) => (
          <div className="playbook-step" key={step.title}>
            <em>{index + 1}</em>
            <div>
              <strong>{step.title}</strong>
              <small>{step.desc}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="playbook-output">
        <span>{t('visuals.feat.playbookOutputLabel')}</span>
        <strong>{t('visuals.feat.playbookOutput')}</strong>
      </div>
    </div>
  );
}

export default function FeatCards() {
  const { t } = useTranslation();
  const pressRows = asArray(t('visuals.feat.pressRows', { returnObjects: true }));

  return (
    <section className="feat-cards" style={{display: 'block', padding: '40px 0 100px'}}>
      <div className="container-wide" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22}}>
        <Link to="/resources/research-lab" className="feat-press feat-card-link">
          <div>
            <div className="eye">{t('featCards.asFeatureIn')}</div>
            <div className="source">{t('featCards.source')}</div>
            <div className="press-checklist">
              {pressRows.map((row) => (
                <div className="press-check" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <p>{t('featCards.sourceDesc')}</p>
        </Link>
        <Link to="/blog/citation-selection-vs-absorption" className="feat-q feat-card-link">
          <div className="illus-tile"><CitationIllustration/></div>
          <div>
            <h4>{t('featCards.card1.title')}</h4>
            <p>{t('featCards.card1.desc')}</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </Link>
        <Link to="/resources/geo-playbook/selection-vs-absorption" className="feat-q feat-card-link">
          <div className="illus-tile"><MonitoringIllustration/></div>
          <div>
            <h4>{t('featCards.card2.title')}</h4>
            <p>{t('featCards.card2.desc')}</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </Link>
      </div>
    </section>
  );
}
