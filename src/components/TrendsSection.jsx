import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

const TrendsMock = () => {
  const { t } = useTranslation();
  const clusters = asArray(t('visuals.trends.clusters', { returnObjects: true }));
  const backlog = asArray(t('visuals.trends.backlog', { returnObjects: true }));

  return (
  <div className="trend-board float-slow">
    <div className="trend-map">
      <div className="trend-map-head">
        <div>
          <span>{t('visuals.trends.kicker')}</span>
          <strong>{t('visuals.trends.mapTitle')}</strong>
        </div>
        <em>{t('visuals.trends.schematic')}</em>
      </div>
      <svg viewBox="0 0 360 118" className="trend-map-lines" aria-hidden="true">
        <path d="M74 62 C124 22 186 36 226 72 S306 96 332 48" fill="none" stroke="rgba(107,63,255,0.36)" strokeWidth="2"/>
        <path d="M78 84 C126 108 178 96 218 58 S294 24 332 70" fill="none" stroke="rgba(16,185,129,0.32)" strokeWidth="2"/>
      </svg>
      <div className="trend-node trend-node-main">
        <strong>{t('visuals.trends.centerNode')}</strong>
      </div>
      {clusters.map((cluster, index) => (
        <div className={`trend-node trend-node-${index + 1}`} key={cluster.title}>
          <span>{cluster.delta}</span>
          <strong>{cluster.title}</strong>
          <small>{cluster.intent}</small>
        </div>
      ))}
    </div>

    <div className="trend-backlog">
      <div className="visual-kicker">{t('visuals.trends.backlogTitle')}</div>
      {backlog.map((item) => (
        <div className="backlog-item" key={item.title}>
          <div>
            <strong>{item.title}</strong>
            <span>{item.signal}</span>
          </div>
          <em>{item.action}</em>
        </div>
      ))}
      <div className="trend-caption">{t('visuals.trends.caption')}</div>
    </div>
  </div>
  );
};

export default function TrendsSection() {
  const { t } = useTranslation();
  return (
    <section style={{background: 'var(--cream)', paddingBottom: 100}}>
      <div className="container-wide">
        <div className="product-section reverse">
          <Reveal variant="right" className="visual-wrap">
            <TrendsMock/>
          </Reveal>
          <Reveal variant="left" delay={2} className="product-text">
            <div className="col-eye section-eyebrow">{t('trends.eyebrow')}</div>
            <h3>{t('trends.h3Before')} <span className="serif italic">{t('trends.h3Highlight')}</span> {t('trends.h3After')}</h3>
            <p>{t('trends.desc')}</p>
            <Link to="/product/insights" className="btn btn-cobalt btn-lg">{t('trends.exploreBtn')} <ArrowRight/></Link>
            <div className="feature-mini-row">
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><path d="M3 17l5-5 4 3 7-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
                <h6>{t('trends.feature1.title')}</h6>
                <p>{t('trends.feature1.desc')}</p>
              </div>
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><circle cx="9.5" cy="9.5" r="6" stroke="currentColor" strokeWidth="1.6"/><path d="M14 14l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M9.5 7v5M7 9.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
                <h6>{t('trends.feature2.title')}</h6>
                <p>{t('trends.feature2.desc')}</p>
              </div>
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><path d="M3 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><rect x="4.5" y="11" width="3.5" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="9.5" y="6" width="3.5" height="11" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="14.5" y="13" width="3.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6"/></svg></div>
                <h6>{t('trends.feature3.title')}</h6>
                <p>{t('trends.feature3.desc')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
