import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const Donut = ({ color = '#6B3FFF', size = 96 }) => {
  const r = 38, c = 2 * Math.PI * r;
  return (
    <div className="donut" style={{width: size, height: size}}>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#eee" strokeWidth="10"/>
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={`${c * 0.6} ${c}`} strokeLinecap="round"/>
      </svg>
      <div className="pct">—</div>
    </div>
  );
};

const MonitoringMock = () => {
  const { t } = useTranslation();
  return (
  <div className="visual-wrap">
    <div className="dash float-slow">
      <div className="dash-prompt">
        <span className="pl">ChatGPT · Prompt</span>
        <span style={{flex: 1}}>{t('mock.payrollPrompt')}</span>
        <span className="resp">{t('mock.schematicTag')}</span>
      </div>
      <div className="dash-card dash-card-1">
        <h5>{t('mock.brandPresence')}</h5>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{flex: 1, fontSize: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6}}>
              <span style={{width: 8, height: 8, background: '#6B3FFF', borderRadius: 999}}/> {t('mock.yes')} <span style={{marginLeft: 'auto'}}>—</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <span style={{width: 8, height: 8, background: '#ddd', borderRadius: 999}}/> {t('mock.no')} <span style={{marginLeft: 'auto'}}>—</span>
            </div>
            <svg viewBox="0 0 80 24" style={{width: '100%', marginTop: 14}}>
              <path d="M0 16 Q 20 10 40 12 T 80 6" stroke="#6B3FFF" strokeWidth="1.5" fill="none"/>
            </svg>
            <div style={{fontSize: 12, color: '#7A6F5E', marginTop: 4}}>{t('mock.last7Days')}</div>
          </div>
          <Donut color="#6B3FFF"/>
        </div>
      </div>
      <div className="dash-card dash-card-2">
        <h5>{t('mock.competitivePresence')}</h5>
        {[
          { name: `${t('mock.brandLabel')} A`, w: 78 },
          { name: `${t('mock.brandLabel')} B`, w: 54 },
          { name: `${t('mock.brandLabel')} C`, w: 36 },
          { name: `${t('mock.brandLabel')} D`, w: 20 },
        ].map(r => (
          <div className="dash-row" key={r.name}>
            <div className="bar-wrap">
              <div className="bar" style={{ width: `${r.w}%` }}>{r.name}</div>
            </div>
            <div className="pct-num">—</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted-2)', marginTop: 12, textAlign: 'center' }}>{t('mock.schematicCaption')}</div>
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
            <button className="btn btn-cobalt btn-lg">{t('monitoring.exploreBtn')} <ArrowRight/></button>
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
