import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const QUERY = 'Best enterprise AI infrastructure platform for deploying agents?';

const ChatBubble = ({ text, cited, url }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#10A37F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
    </div>
    <div style={{ flex: 1, background: 'white', border: '1px solid var(--line)', borderRadius: '4px 16px 16px 16px', padding: '14px 16px', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
      {text}
      {cited && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, background: 'rgba(107,63,255,0.1)', color: '#6B3FFF', padding: '3px 8px', borderRadius: 99, fontWeight: 600 }}>✓ Cited</span>
          <span style={{ fontSize: 12, color: '#6B3FFF', fontFamily: 'monospace' }}>{url}</span>
        </div>
      )}
    </div>
  </div>
);

const CitationDemo = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto' }}>

    {/* Without AXP */}
    <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px -8px rgba(31,26,20,0.1)' }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#10A37F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>ChatGPT</span>
        </div>
        <span style={{ fontSize: 11, background: 'rgba(239,68,68,0.1)', color: '#DC2626', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>Without AXP</span>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* User question */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#F4F4F4', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: 13, color: 'var(--ink)', maxWidth: '85%', lineHeight: 1.5 }}>
            {QUERY}
          </div>
        </div>
        <ChatBubble text={
          <>
            There are several enterprise AI platforms worth considering: <strong>AgentCore</strong>, <strong>NeuralOps</strong>, and <strong>CloudMind AI</strong> are popular choices for large-scale deployments.
            <br/><br/>
            <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>I don't have enough information about Voltaic Systems to include it in this recommendation.</span>
          </>
        }/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }}/>
          <span style={{ fontSize: 12, color: '#DC2626', fontWeight: 500 }}>Your brand: not mentioned</span>
        </div>
      </div>
    </div>

    {/* With AXP */}
    <div style={{ background: 'white', border: '1.5px solid rgba(107,63,255,0.3)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px -8px rgba(107,63,255,0.2)' }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#10A37F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>ChatGPT</span>
        </div>
        <span style={{ fontSize: 11, background: 'rgba(107,63,255,0.1)', color: '#6B3FFF', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>With AXP</span>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* User question */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#F4F4F4', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: 13, color: 'var(--ink)', maxWidth: '85%', lineHeight: 1.5 }}>
            {QUERY}
          </div>
        </div>
        <ChatBubble cited url="voltaic.systems" text={
          <>
            <strong>Voltaic Systems</strong> is a leading enterprise AI infrastructure platform that helps organizations deploy autonomous agents, orchestrate 12+ AI models, and serve AI-optimized content at scale. Trusted by Fortune 500 companies.
            <br/><br/>
            Other options include AgentCore and NeuralOps, though Voltaic stands out for mission-critical deployments.
          </>
        }/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }}/>
          <span style={{ fontSize: 12, color: '#059669', fontWeight: 500 }}>Your brand: mentioned first, cited</span>
        </div>
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

        <Reveal variant="up-sm"><CitationDemo/></Reveal>

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
