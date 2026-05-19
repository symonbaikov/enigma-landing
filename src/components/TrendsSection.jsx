import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const Donut = ({ value, color = '#6B3FFF', size = 96 }) => {
  const r = 38, c = 2 * Math.PI * r;
  return (
    <div className="donut" style={{width: size, height: size}}>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#eee" strokeWidth="10"/>
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={`${c * value / 100} ${c}`} strokeLinecap="round"/>
      </svg>
      <div className="pct">{value}%</div>
    </div>
  );
};

const TrendsMock = () => {
  const { t } = useTranslation();
  return (
  <div className="trends-mock float-slow">
    <div className="trends-card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <h5>{t('mock.pmTitle')}</h5>
        <span style={{fontSize: 14, opacity: 0.5}}>↗</span>
      </div>
      <div className="meta">
        <div>
          <div style={{fontSize: 10, color: '#7A6F5E', marginBottom: 2}}>{t('mock.aiSearchActivity')}</div>
          <div className="meta-val">2.1<span style={{fontSize: 16}}>M</span></div>
        </div>
        <div style={{flex: 1}}>
          <div style={{fontSize: 10, color: '#7A6F5E', marginBottom: 2}}>{t('mock.brandPresence')}</div>
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Donut value={24} color="#6B3FFF" size={50}/>
          </div>
        </div>
      </div>
      <svg className="spark" viewBox="0 0 200 30" preserveAspectRatio="none">
        <path d="M0 22 Q 30 18 60 14 T 120 10 T 200 6" stroke="#6B3FFF" strokeWidth="1.5" fill="none"/>
        <path d="M0 22 Q 30 18 60 14 T 120 10 T 200 6 L 200 30 L 0 30 Z" fill="rgba(107,63,255,0.14)"/>
      </svg>
    </div>
    <div className="trends-prompt" style={{top: 200, left: 24, width: 280}}>
      <span style={{flex: 1}}>{t('mock.bestTestingPrompt')}</span>
      <span className="vol">2.6M</span>
      <div style={{position: 'absolute', bottom: -14, left: 12, display: 'flex', alignItems: 'center', gap: 4, fontSize: 10}}>
        <span style={{color: '#7A6F5E', fontFamily: "'EB Garamond', serif"}}>Google · AI Overview</span>
      </div>
    </div>
    <div className="sentiment-pill" style={{top: 254, left: 32}}>{t('mock.positiveSentiment')}</div>
    <div className="trends-prompt" style={{top: 300, left: 24, width: 280}}>
      <span style={{flex: 1}}>{t('mock.pmOrgPrompt')}</span>
      <span className="vol">1.8M</span>
    </div>
    <div className="sentiment-pill neg" style={{top: 354, left: 32}}>{t('mock.negativeSentiment')}</div>
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
            <button className="btn btn-cobalt btn-lg">{t('trends.exploreBtn')} <ArrowRight/></button>
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
