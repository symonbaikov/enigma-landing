import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnigmaMark, ChevronDown, ArrowRight } from './icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const close = () => setOpen(null);
  const go = (path) => { close(); navigate(path); };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand" onClick={close}>
            <span className="brand-mark"><EnigmaMark size={26} color="#1F1A14"/></span>
            enigma
          </Link>
          <div className="nav-links">

            {/* Product */}
            <div className={`nav-item ${open === 'product' ? 'open' : ''}`} onMouseEnter={() => setOpen('product')} onMouseLeave={close}>
              <button className="nav-link">Product <ChevronDown/></button>
              <div className="mega mega-tiles">
                <div className="mega-inner">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">Agent Experience</div>
                    <button className="mega-tile" onClick={() => go('/product/axp')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✦</div>
                      <div>
                        <div className="tile-title">AXP <span className="tile-sub">(Agent Experience Platform)</span></div>
                        <div className="tile-desc">Deliver an optimized experience to AI agents.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/product/agent-traffic')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◐</div>
                      <div>
                        <div className="tile-title">Agent Traffic</div>
                        <div className="tile-desc">Analyze AI website traffic.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/product/site-maps')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#241A35,#6B3FFF)'}}>⌗</div>
                      <div>
                        <div className="tile-title">Site Maps</div>
                        <div className="tile-desc">Understand how AI consumes your site.</div>
                      </div>
                    </button>
                  </div>
                  <div className="mega-col">
                    <div className="mega-group">Monitoring &amp; Insights</div>
                    <button className="mega-tile" onClick={() => go('/product/monitoring')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#C9A876,#8A4FC9)'}}>⟁</div>
                      <div>
                        <div className="tile-title">Monitoring &amp; Citations</div>
                        <div className="tile-desc">Know how your brand shows up in AI.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/product/insights')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⌬</div>
                      <div>
                        <div className="tile-title">Insights</div>
                        <div className="tile-desc">Get actionable tips to grow your AI presence.</div>
                      </div>
                    </button>
                  </div>
                </div>
                <button className="mega-feature" onClick={() => go('/resources/changelog')}>
                  <div className="feature-title">AI Search Trends</div>
                  <div className="feature-desc">Explore emerging AI search patterns and behaviors.</div>
                  <div className="feature-arrow"><ArrowRight/></div>
                </button>
                </div>
              </div>
            </div>

            {/* Use cases */}
            <div className={`nav-item ${open === 'solutions' ? 'open' : ''}`} onMouseEnter={() => setOpen('solutions')} onMouseLeave={close}>
              <button className="nav-link">Use cases <ChevronDown/></button>
              <div className="mega mega-tiles mega-sm">
                <div className="mega-inner">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">By industry</div>
                    <button className="mega-tile" onClick={() => go('/solutions/b2b-saas')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>◇</div>
                      <div>
                        <div className="tile-title">B2B SaaS</div>
                        <div className="tile-desc">Win deals decided in AI search.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/solutions/ecommerce')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◈</div>
                      <div>
                        <div className="tile-title">E-commerce</div>
                        <div className="tile-desc">Be recommended by shopping agents.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/solutions/agencies')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>◍</div>
                      <div>
                        <div className="tile-title">Agencies</div>
                        <div className="tile-desc">Multi-brand AEO management.</div>
                      </div>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className={`nav-item ${open === 'resources' ? 'open' : ''}`} onMouseEnter={() => setOpen('resources')} onMouseLeave={close}>
              <button className="nav-link">Resources <ChevronDown/></button>
              <div className="mega mega-tiles mega-sm">
                <div className="mega-inner">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">Learn</div>
                    <button className="mega-tile" onClick={() => go('/resources/geo-playbook')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✎</div>
                      <div>
                        <div className="tile-title">GEO Playbook</div>
                        <div className="tile-desc">Generative Engine Optimization 101.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/resources/research-lab')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>⌬</div>
                      <div>
                        <div className="tile-title">Research Lab</div>
                        <div className="tile-desc">How LLMs choose what to cite.</div>
                      </div>
                    </button>
                    <button className="mega-tile" onClick={() => go('/resources/changelog')}>
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⟳</div>
                      <div>
                        <div className="tile-title">Changelog</div>
                        <div className="tile-desc">New features, every week.</div>
                      </div>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="nav-link" style={{ textDecoration: 'none' }} onClick={close}>Pricing</Link>
          </div>
        </div>

        <div className="nav-right">
          <button className="btn btn-ghost">Sign in</button>
          <button className="btn btn-outline">Start free trial</button>
          <Link to="/pricing" className="btn btn-dark" onClick={close}>Book a demo</Link>
        </div>
      </div>
    </nav>
  );
}
