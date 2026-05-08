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

const MonitoringMock = () => (
  <div className="visual-wrap">
    <div className="dash float-slow">
      <div className="dash-prompt">
        <span className="pl">ChatGPT · Prompt</span>
        <span style={{flex: 1}}>"What's the best enterprise payroll software?"</span>
        <span className="resp">142 responses</span>
      </div>
      <div className="dash-card dash-card-1">
        <h5>Brand presence</h5>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{flex: 1, fontSize: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6}}>
              <span style={{width: 8, height: 8, background: '#6B3FFF', borderRadius: 999}}/> Yes <span style={{marginLeft: 'auto'}}>42%</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <span style={{width: 8, height: 8, background: '#ddd', borderRadius: 999}}/> No <span style={{marginLeft: 'auto'}}>58%</span>
            </div>
            <svg viewBox="0 0 80 24" style={{width: '100%', marginTop: 14}}>
              <path d="M0 16 Q 20 10 40 12 T 80 6" stroke="#6B3FFF" strokeWidth="1.5" fill="none"/>
            </svg>
            <div style={{fontSize: 10, color: '#7A6F5E', marginTop: 4}}>+1.4% · Last 7 days</div>
          </div>
          <Donut value={42} color="#6B3FFF"/>
        </div>
      </div>
      <div className="dash-card dash-card-2">
        <h5>Competitive presence</h5>
        {[
          { name: 'Enigma', val: 42 },
          { name: 'Voltaic', val: 28 },
          { name: 'Stratamesh', val: 19 },
          { name: 'Recall.io', val: 11 },
        ].map(r => (
          <div className="dash-row" key={r.name}>
            <div className="bar-wrap">
              <div className="bar" style={{ width: `${r.val * 2}%` }}>{r.name}</div>
            </div>
            <div className="pct-num">{r.val}%</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function MonitoringSection() {
  return (
    <section style={{background: 'var(--cream)'}}>
      <div className="container-wide">
        <div className="product-section">
          <Reveal variant="right" className="product-text">
            <div className="col-eye section-eyebrow">AI MONITORING &amp; CITATIONS</div>
            <h3>Track and grow your <span className="serif italic">presence</span> in AI search</h3>
            <p>Monitor prompt results across every model, surface authoritative citations, and benchmark brand performance over time — all from one dashboard.</p>
            <button className="btn btn-cobalt btn-lg">Explore Monitoring <ArrowRight/></button>
            <div className="feature-mini-row">
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><path d="M2 18l5-6 4 3 8-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h6>Prompt monitoring</h6>
                <p>See how you show up across the prompts that matter.</p>
              </div>
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6"/><path d="M14 14l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h6>Citations</h6>
                <p>Surface the sources LLMs trust to shape their answers.</p>
              </div>
              <div className="mini">
                <div className="mini-icon">
                  <svg viewBox="0 0 22 22" fill="none"><rect x="4" y="3" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 8h6M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <h6>Insights</h6>
                <p>Detect quick wins — competitive gaps, content holes, momentum.</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="left" delay={2}><MonitoringMock/></Reveal>
        </div>
      </div>
    </section>
  );
}
