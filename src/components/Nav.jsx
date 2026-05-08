import { useState } from 'react';
import { EnigmaMark, ChevronDown, ArrowRight } from './icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(null);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <a href="#" className="brand">
            <span className="brand-mark"><EnigmaMark size={26} color="#1F1A14"/></span>
            enigma
          </a>
          <div className="nav-links">
            <div className={`nav-item ${open === 'product' ? 'open' : ''}`} onMouseEnter={() => setOpen('product')} onMouseLeave={() => setOpen(null)}>
              <button className="nav-link">Product <ChevronDown/></button>
              <div className="mega mega-tiles">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">Agent Experience</div>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✦</div>
                      <div>
                        <div className="tile-title">AXP <span className="tile-sub">(Agent Experience Platform)</span></div>
                        <div className="tile-desc">Deliver an optimized experience to AI agents.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◐</div>
                      <div>
                        <div className="tile-title">Agent Traffic</div>
                        <div className="tile-desc">Analyze AI website traffic.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#241A35,#6B3FFF)'}}>⌗</div>
                      <div>
                        <div className="tile-title">Site Maps</div>
                        <div className="tile-desc">Understand how AI consumes your site.</div>
                      </div>
                    </a>
                  </div>
                  <div className="mega-col">
                    <div className="mega-group">Monitoring &amp; Insights</div>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#C9A876,#8A4FC9)'}}>⟁</div>
                      <div>
                        <div className="tile-title">Monitoring &amp; Citations</div>
                        <div className="tile-desc">Know how your brand shows up in AI.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⌬</div>
                      <div>
                        <div className="tile-title">Insights</div>
                        <div className="tile-desc">Get actionable tips to grow your AI presence.</div>
                      </div>
                    </a>
                  </div>
                </div>
                <a className="mega-feature" href="#">
                  <div className="feature-title">AI Search Trends</div>
                  <div className="feature-desc">Explore emerging AI search patterns and behaviors.</div>
                  <div className="feature-arrow"><ArrowRight/></div>
                </a>
              </div>
            </div>
            <div className={`nav-item ${open === 'solutions' ? 'open' : ''}`} onMouseEnter={() => setOpen('solutions')} onMouseLeave={() => setOpen(null)}>
              <button className="nav-link">Use cases <ChevronDown/></button>
              <div className="mega mega-tiles mega-sm">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">By industry</div>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>◇</div>
                      <div>
                        <div className="tile-title">B2B SaaS</div>
                        <div className="tile-desc">Win deals decided in AI search.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◈</div>
                      <div>
                        <div className="tile-title">E-commerce</div>
                        <div className="tile-desc">Be recommended by shopping agents.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>◍</div>
                      <div>
                        <div className="tile-title">Agencies</div>
                        <div className="tile-desc">Multi-brand AEO management.</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`nav-item ${open === 'resources' ? 'open' : ''}`} onMouseEnter={() => setOpen('resources')} onMouseLeave={() => setOpen(null)}>
              <button className="nav-link">Resources <ChevronDown/></button>
              <div className="mega mega-tiles mega-sm">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-group">Learn</div>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✎</div>
                      <div>
                        <div className="tile-title">GEO Playbook</div>
                        <div className="tile-desc">Generative Engine Optimization 101.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>⌬</div>
                      <div>
                        <div className="tile-title">Research Lab</div>
                        <div className="tile-desc">How LLMs choose what to cite.</div>
                      </div>
                    </a>
                    <a className="mega-tile" href="#">
                      <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⟳</div>
                      <div>
                        <div className="tile-title">Changelog</div>
                        <div className="tile-desc">New features, every week.</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button className="nav-link">Pricing</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="btn btn-ghost">Sign in</button>
          <button className="btn btn-outline">Start free trial</button>
          <button className="btn btn-dark">Book a demo</button>
        </div>
      </div>
    </nav>
  );
}
