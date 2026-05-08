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

const TrendsMock = () => (
  <div className="trends-mock float-slow">
    <div className="trends-card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <h5>Project Management for Enterprise</h5>
        <span style={{fontSize: 14, opacity: 0.5}}>↗</span>
      </div>
      <div className="meta">
        <div>
          <div style={{fontSize: 10, color: '#7A6F5E', marginBottom: 2}}>AI search activity</div>
          <div className="meta-val">2.1<span style={{fontSize: 16}}>M</span></div>
        </div>
        <div style={{flex: 1}}>
          <div style={{fontSize: 10, color: '#7A6F5E', marginBottom: 2}}>Brand presence</div>
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
      <span style={{flex: 1}}>"Best testing environments for…"</span>
      <span className="vol">2.6M</span>
      <div style={{position: 'absolute', bottom: -14, left: 12, display: 'flex', alignItems: 'center', gap: 4, fontSize: 10}}>
        <span style={{color: '#7A6F5E', fontFamily: "'EB Garamond', serif"}}>Google · AI Overview</span>
      </div>
    </div>
    <div className="sentiment-pill" style={{top: 254, left: 32}}>● Positive sentiment 68%</div>
    <div className="trends-prompt" style={{top: 300, left: 24, width: 280}}>
      <span style={{flex: 1}}>"How do I run an efficient PM org…"</span>
      <span className="vol">1.8M</span>
    </div>
    <div className="sentiment-pill neg" style={{top: 354, left: 32}}>● Negative 41%</div>
  </div>
);

export default function TrendsSection() {
  return (
    <section style={{background: 'var(--cream)', paddingBottom: 100}}>
      <div className="container-wide">
        <div className="product-section reverse">
          <Reveal variant="right" className="visual-wrap">
            <TrendsMock/>
          </Reveal>
          <Reveal variant="left" delay={2} className="product-text">
            <div className="col-eye section-eyebrow">AI SEARCH TRENDS</div>
            <h3>See what <span className="serif italic">millions</span> are asking AI</h3>
            <p>Track what's trending, approximate prompt volumes, and benchmark your brand presence over time. Discover demand before your competitors do.</p>
            <button className="btn btn-cobalt btn-lg">Explore AI Search Trends <ArrowRight/></button>
            <div className="feature-mini-row">
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><path d="M3 17l5-5 4 3 7-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
                <h6>Track trends</h6>
                <p>See where demand for topics is rising over time.</p>
              </div>
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/><circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.6"/></svg></div>
                <h6>Discover topics</h6>
                <p>Surface relevant topics and hidden opportunity gaps.</p>
              </div>
              <div className="mini">
                <div className="mini-icon"><svg viewBox="0 0 22 22" fill="none"><rect x="4" y="3" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 9h6M8 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
                <h6>Benchmark share</h6>
                <p>See how often your brand appears where it matters.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
