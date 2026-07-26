import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

const MonitoringMock = () => {
  const { t } = useTranslation();
  const models = asArray(t('visuals.monitoring.models', { returnObjects: true }));
  const clusters = asArray(t('visuals.monitoring.clusters', { returnObjects: true }));
  const evidence = asArray(t('visuals.monitoring.evidence', { returnObjects: true }));

  return (
  <div className="visual-wrap">
    <div className="monitoring-console float-slow">
      <div className="monitoring-topbar">
        <div>
          <span>{t('visuals.monitoring.kicker')}</span>
          <strong>{t('visuals.monitoring.title')}</strong>
        </div>
        <div className="monitoring-models" aria-label={t('visuals.monitoring.modelLabel')}>
          {models.map((model) => (
            <span key={model}>{model}</span>
          ))}
        </div>
      </div>

      <div className="monitoring-query">
        <span>{t('visuals.monitoring.promptLabel')}</span>
        <strong>{t('visuals.monitoring.prompt')}</strong>
      </div>

      <div className="monitoring-grid">
        <div className="monitoring-table">
          <div className="monitoring-table-head">
            <span>{t('visuals.monitoring.clusterLabel')}</span>
            <span>{t('visuals.monitoring.mentionLabel')}</span>
            <span>{t('visuals.monitoring.citationLabel')}</span>
            <span>{t('visuals.monitoring.absorptionLabel')}</span>
          </div>
          {clusters.map((row) => (
            <div className="monitoring-table-row" key={row.cluster}>
              <strong>{row.cluster}</strong>
              <span className={`signal-pill signal-${row.mentionTone}`}>{row.mention}</span>
              <span className={`signal-pill signal-${row.citationTone}`}>{row.citation}</span>
              <span className={`signal-pill signal-${row.absorptionTone}`}>{row.absorption}</span>
            </div>
          ))}
        </div>

        <div className="monitoring-evidence">
          <div className="visual-kicker">{t('visuals.monitoring.evidenceTitle')}</div>
          {evidence.map((item) => (
            <div className="evidence-row" key={item.url}>
              <code>{item.url}</code>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="run-strip" aria-label={t('visuals.monitoring.runsLabel')}>
        {[0, 1, 2, 3, 4].map((run) => (
          <div className="run-dot" key={run}>
            <span style={{ height: `${26 + run * 7}px` }}/>
            <em>{run + 1}</em>
          </div>
        ))}
      </div>
      <p>{t('visuals.monitoring.caption')}</p>
    </div>
  </div>
  );
};

export default function MonitoringSection() {
  const { t } = useTranslation();
  return (
    <section style={{background: 'var(--cream)'}}>
      <div className="container-wide">
        <div className="product-section">
          <Reveal variant="right" className="product-text">
            <div className="col-eye section-eyebrow">{t('monitoring.eyebrow')}</div>
            <h3>{t('monitoring.h3Before')} <span className="serif italic">{t('monitoring.h3Highlight')}</span> {t('monitoring.h3After')}</h3>
            <p>{t('monitoring.desc')}</p>
            <Link to="/product/monitoring" className="btn btn-cobalt btn-lg">{t('monitoring.exploreBtn')} <ArrowRight/></Link>
            <div className="feature-mini-row">
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><path d="M2 11h4l2-5 3 10 2-6 1.5 3H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h6>{t('monitoring.feature1.title')}</h6>
                <p>{t('monitoring.feature1.desc')}</p>
              </div>
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><path d="M9 13a4 4 0 0 0 6 .4l2-2a4 4 0 0 0-5.7-5.7L10 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 9a4 4 0 0 0-6-.4l-2 2a4 4 0 0 0 5.7 5.7L12 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h6>{t('monitoring.feature2.title')}</h6>
                <p>{t('monitoring.feature2.desc')}</p>
              </div>
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><path d="M3 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><rect x="4.5" y="11" width="3.5" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="9.5" y="6" width="3.5" height="11" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="14.5" y="13" width="3.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6"/></svg>
                </div>
                <h6>{t('monitoring.feature3.title')}</h6>
                <p>{t('monitoring.feature3.desc')}</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="left" delay={2}><MonitoringMock/></Reveal>
        </div>
      </div>
    </section>
  );
}
