import { ArrowRight } from './icons.jsx';

export default function FeatCards() {
  return (
    <section className="feat-cards" style={{display: 'block', padding: '40px 0 100px'}}>
      <div className="container-wide" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22}}>
        <div className="feat-press">
          <div>
            <div className="eye">As featured in</div>
            <div className="source">⌬ The Forge</div>
          </div>
          <p>How brands are rethinking SEO for an AI-powered web</p>
        </div>
        <div className="feat-q">
          <div className="icon-tile">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M14 20l-4 4 6 6 4-4M26 20l4-4-6-6-4 4M16 24l8-8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h4>Your AI citation questions, answered</h4>
            <p>Got questions about AI search citations? Find answers from citation tracking to beating existing sources.</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </div>
        <div className="feat-q">
          <div className="icon-tile" style={{background: 'linear-gradient(135deg, #8a7050, #4a3020)'}}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="18" cy="18" r="9" stroke="white" strokeWidth="2"/>
              <path d="M25 25l6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h4>Your AI monitoring questions, answered</h4>
            <p>From prompt benchmarking to competitive tracking — everything you need to monitor your brand in AI search.</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </div>
      </div>
    </section>
  );
}
