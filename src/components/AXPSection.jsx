import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

const QUERY = 'Best enterprise AI infrastructure platform for deploying agents?';

const ChatGPTLogo = ({ size = 28 }) => (
  <div style={{ width: size, height: size, borderRadius: '50%', background: '#10A37F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 41 41" fill="none">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-7.505-3.337 10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.504 3.336 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.759 33.2a7.505 7.505 0 0 1-10.368-2.195zm-2.32-17.36a7.471 7.471 0 0 1 3.908-3.285c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.972-10.213zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l7.048 4.086a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.168zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l7.624-4.4a7.498 7.498 0 0 1 11.158 7.522zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18.026z" fill="white"/>
    </svg>
  </div>
);

const ChatBubble = ({ text, cited, url }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ marginTop: 2 }}>
      <ChatGPTLogo size={28}/>
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
          <ChatGPTLogo size={20}/>
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
          <ChatGPTLogo size={20}/>
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
