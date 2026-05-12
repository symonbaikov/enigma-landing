import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnigmaMark, ChevronDown, ArrowRight } from './icons.jsx';

function BurgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <line x1="3" y1={open ? "11" : "5"}  x2="19" y2={open ? "11" : "5"}  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        style={{ transform: open ? 'rotate(45deg)' : 'none', transformOrigin: '11px 11px', transition: 'all 0.25s' }}/>
      <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: 'opacity 0.2s' }}/>
      <line x1="3" y1={open ? "11" : "17"} x2="19" y2={open ? "11" : "17"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        style={{ transform: open ? 'rotate(-45deg)' : 'none', transformOrigin: '11px 11px', transition: 'all 0.25s' }}/>
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const close = () => setOpen(null);
  const go = (path) => { close(); navigate(path); };
  const mobileGo = (path) => { setMobileOpen(false); navigate(path); };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/" className="brand" onClick={() => { close(); setMobileOpen(false); }}>
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
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/login`} className="btn btn-ghost">Sign in</a>
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline">Start free trial</a>
            <Link to="/pricing" className="btn btn-dark" onClick={close}>Book a demo</Link>
            <button className="burger-btn" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
              <BurgerIcon open={mobileOpen}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}/>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="mobile-section">
            <div className="mobile-section-label">Product</div>
            <button className="mobile-link" onClick={() => mobileGo('/product/axp')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✦</span>AXP
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/agent-traffic')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◐</span>Agent Traffic
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/site-maps')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#241A35,#6B3FFF)'}}>⌗</span>Site Maps
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/monitoring')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#C9A876,#8A4FC9)'}}>⟁</span>Monitoring
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/insights')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⌬</span>Insights
            </button>
          </div>

          <div className="mobile-section">
            <div className="mobile-section-label">Use cases</div>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/b2b-saas')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>◇</span>B2B SaaS
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/ecommerce')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◈</span>E-commerce
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/agencies')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>◍</span>Agencies
            </button>
          </div>

          <div className="mobile-section">
            <div className="mobile-section-label">Resources</div>
            <button className="mobile-link" onClick={() => mobileGo('/resources/geo-playbook')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✎</span>GEO Playbook
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/resources/research-lab')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>⌬</span>Research Lab
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/resources/changelog')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⟳</span>Changelog
            </button>
          </div>

          <div className="mobile-section">
            <button className="mobile-link" onClick={() => mobileGo('/pricing')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#C9A876,#6B3FFF)'}}>$</span>Pricing
            </button>
          </div>

          <div className="mobile-cta">
            <button className="btn btn-dark" style={{width:'100%', justifyContent:'center'}}>Book a demo</button>
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline" style={{width:'100%', justifyContent:'center', marginTop:10}}>Start free trial</a>
          </div>
        </div>
      </div>
    </>
  );
}
