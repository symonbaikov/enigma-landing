import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const TokenBlock = () => (
  <div className="token-compare">
    <div className="token-card human-card">
      <div className="card-chrome">
        <div className="dots"><span/><span/><span/></div>
        <div className="chrome-url">voltaic.systems · <span className="chrome-tag human">human view</span></div>
      </div>
      <div className="human-render">
        <div className="render-bg"/>
        <div className="render-nav">
          <div className="render-logo">⏣ Voltaic</div>
          <div className="render-menu"><span/><span/><span/><span/></div>
        </div>
        <div className="render-hero">
          <div className="render-eyebrow">— Enterprise AI Infrastructure</div>
          <div className="render-h1">Build agents<br/>that <em>actually</em> ship.</div>
          <div className="render-p">Deploy autonomous agents, orchestrate AI models, and own how your brand shows up in every answer.</div>
          <div className="render-cta">
            <div className="cta-pill primary">Start free →</div>
            <div className="cta-pill ghost">Watch demo</div>
          </div>
        </div>
        <div className="render-grid">
          <div className="render-tile tile-1">
            <div className="tile-num">412%</div>
            <div className="tile-label">growth</div>
          </div>
          <div className="render-tile tile-2">
            <svg viewBox="0 0 60 36" preserveAspectRatio="none">
              <polyline points="2,28 12,22 22,24 32,14 42,16 52,6 58,8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
              <polyline points="2,28 12,22 22,24 32,14 42,16 52,6 58,8" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.25"/>
            </svg>
          </div>
          <div className="render-tile tile-3">
            <div className="tile-avatars">
              <span className="av av-a">A</span>
              <span className="av av-b">M</span>
              <span className="av av-c">K</span>
              <span className="av av-more">+24</span>
            </div>
            <div className="tile-label">teams</div>
          </div>
        </div>
      </div>
      <div className="card-foot">
        <div className="foot-label">Tokens</div>
        <div className="foot-num">128,440</div>
      </div>
    </div>

    <div className="vs-meter">
      <div className="vs-line"/>
      <div className="vs-badge">
        <div className="vs-num">−98.99%</div>
        <div className="vs-label">token reduction</div>
      </div>
      <div className="vs-line"/>
    </div>

    <div className="token-card agent-card">
      <div className="card-chrome dark">
        <div className="dots"><span/><span/><span/></div>
        <div className="chrome-url">voltaic.systems · <span className="chrome-tag agent">agent view</span></div>
      </div>
      <div className="agent-render">
        <div className="agent-line"><span className="ag-tag">&lt;h1&gt;</span> Voltaic Systems <span className="ag-tag">&lt;/h1&gt;</span></div>
        <div className="agent-line"><span className="ag-tag">&lt;p&gt;</span> Voltaic is an enterprise AI infrastructure company. It helps organizations deploy autonomous agents, orchestrate AI models, and serve AI-optimized content. <span className="ag-tag">&lt;/p&gt;</span></div>
        <div className="agent-line"><span className="ag-tag">&lt;h2&gt;</span> What Voltaic does <span className="ag-tag">&lt;/h2&gt;</span></div>
        <div className="agent-line">– Deploys autonomous agents</div>
        <div className="agent-line">– Orchestrates 12+ AI models</div>
        <div className="agent-line">– Delivers AI-ready content</div>
        <div className="agent-line">– Supports mission-critical ops</div>
        <div className="agent-line"><span className="ag-tag">&lt;h2&gt;</span> Who Voltaic serves <span className="ag-tag">&lt;/h2&gt;</span></div>
        <div className="agent-line">– Enterprise operations teams</div>
        <div className="agent-line">– Platform engineering leads</div>
        <div className="agent-line"><span className="ag-tag">&lt;cite&gt;</span> Trusted by Fortune 500 <span className="ag-tag">&lt;/cite&gt;</span></div>
      </div>
      <div className="card-foot dark">
        <div className="foot-label">Tokens</div>
        <div className="foot-num accent">1,287</div>
      </div>
    </div>
  </div>
);

export default function AXPSection() {
  return (
    <section style={{background: 'var(--cream)', paddingBottom: 120}}>
      <div className="container-wide">
        <div className="split-section">
          <Reveal variant="right" className="col-l">
            <div className="col-eye">AXP — AGENT EXPERIENCE PLATFORM</div>
            <h3 className="h2">
              Your site isn't built for AI.<br/>
              <span className="serif italic">Now it can be.</span>
            </h3>
          </Reveal>
          <Reveal variant="left" delay={2} className="col-r">
            <p>
              Agent Experience Platform detects AI crawlers at the edge and serves them token-efficient, structured content — no JavaScript, no chrome, just facts. Humans still get the full experience.
            </p>
            <button className="btn btn-cobalt btn-lg">Explore AXP <ArrowRight/></button>
          </Reveal>
        </div>

        <Reveal variant="up-sm"><TokenBlock/></Reveal>

        <div className="feature-row">
          <Reveal variant="up" delay={1} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 11h22M8 17h6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h4>Edge agent detection</h4>
            <p>Identify ChatGPT, Perplexity, Claude, Bing AI, and 60+ other agents at the network edge — &lt;5ms overhead.</p>
          </Reveal>
          <Reveal variant="up" delay={2} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 14l4 4 14-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 22h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Token-optimized content</h4>
            <p>Compress your pages 90%+ for LLMs without touching the human experience. Serve the version each audience needs.</p>
          </Reveal>
          <Reveal variant="up" delay={3} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Live citations</h4>
            <p>Watch which pages get cited by which models, in real time. Iterate on content the way you'd A/B test a landing page.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
