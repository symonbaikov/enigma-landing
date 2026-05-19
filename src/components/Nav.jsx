import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18nSingleton from '../i18n/index.js';
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

function LangSwitch() {
  const { i18n } = useTranslation();
  const isUk = i18n.language === 'uk';

  const toggle = () => i18nSingleton.changeLanguage(isUk ? 'ru' : 'uk');

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      style={{
        display: 'flex', alignItems: 'center', gap: 0,
        background: 'rgba(31,26,20,0.06)',
        border: '1px solid rgba(31,26,20,0.12)',
        borderRadius: 999,
        padding: '3px 4px',
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.04em',
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      <span style={{
        padding: '3px 8px',
        borderRadius: 999,
        background: isUk ? 'var(--ink, #1f1a14)' : 'transparent',
        color: isUk ? '#fff' : 'var(--muted, #7a6f65)',
        transition: 'background 0.2s, color 0.2s',
      }}>UK</span>
      <span style={{
        padding: '3px 8px',
        borderRadius: 999,
        background: !isUk ? 'var(--ink, #1f1a14)' : 'transparent',
        color: !isUk ? '#fff' : 'var(--muted, #7a6f65)',
        transition: 'background 0.2s, color 0.2s',
      }}>RU</span>
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const close = () => setOpen(null);
  const go = (path) => { close(); navigate(path); };
  const mobileGo = (path) => { setMobileOpen(false); navigate(path); };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/" className="brand" onClick={() => { close(); setMobileOpen(false); }}>
              <img src="/logo_1.png" alt="Enigma" style={{ height: 80, width: 'auto', display: 'block' }}/>
            </Link>
            <div className="nav-links">

              {/* Product */}
              <div className={`nav-item ${open === 'product' ? 'open' : ''}`} onMouseEnter={() => setOpen('product')} onMouseLeave={close}>
                <button className="nav-link">{t('nav.product')} <ChevronDown/></button>
                <div className="mega mega-tiles">
                  <div className="mega-inner">
                  <div className="mega-cols">
                    <div className="mega-col">
                      <div className="mega-group">{t('nav.groups.agentExperience')}</div>
                      <button className="mega-tile" onClick={() => go('/product/axp')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✦</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.axpTitle')} <span className="tile-sub">{t('nav.tiles.axpSub')}</span></div>
                          <div className="tile-desc">{t('nav.tiles.axpDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/product/agent-traffic')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◐</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.agentTraffic')}</div>
                          <div className="tile-desc">{t('nav.tiles.agentTrafficDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/product/site-maps')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#241A35,#6B3FFF)'}}>⌗</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.siteMaps')}</div>
                          <div className="tile-desc">{t('nav.tiles.siteMapsDesc')}</div>
                        </div>
                      </button>
                    </div>
                    <div className="mega-col">
                      <div className="mega-group">{t('nav.groups.monitoringInsights')}</div>
                      <button className="mega-tile" onClick={() => go('/product/monitoring')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#C9A876,#8A4FC9)'}}>⟁</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.monitoringCitations')}</div>
                          <div className="tile-desc">{t('nav.tiles.monitoringDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/product/insights')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⌬</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.insights')}</div>
                          <div className="tile-desc">{t('nav.tiles.insightsDesc')}</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <button className="mega-feature" onClick={() => go('/blog')}>
                    <div className="feature-title">{t('nav.tiles.aiSearchTrends')}</div>
                    <div className="feature-desc">{t('nav.tiles.aiSearchTrendsDesc')}</div>
                    <div className="feature-arrow"><ArrowRight/></div>
                  </button>
                  </div>
                </div>
              </div>

              {/* Use cases */}
              <div className={`nav-item ${open === 'solutions' ? 'open' : ''}`} onMouseEnter={() => setOpen('solutions')} onMouseLeave={close}>
                <button className="nav-link">{t('nav.useCases')} <ChevronDown/></button>
                <div className="mega mega-tiles mega-sm">
                  <div className="mega-inner">
                  <div className="mega-cols">
                    <div className="mega-col">
                      <div className="mega-group">{t('nav.groups.byIndustry')}</div>
                      <button className="mega-tile" onClick={() => go('/solutions/b2b-saas')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>◇</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.b2bSaas')}</div>
                          <div className="tile-desc">{t('nav.tiles.b2bSaasDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/solutions/ecommerce')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◈</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.ecommerce')}</div>
                          <div className="tile-desc">{t('nav.tiles.ecommerceDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/solutions/agencies')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>◍</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.agencies')}</div>
                          <div className="tile-desc">{t('nav.tiles.agenciesDesc')}</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className={`nav-item ${open === 'resources' ? 'open' : ''}`} onMouseEnter={() => setOpen('resources')} onMouseLeave={close}>
                <button className="nav-link">{t('nav.resources')} <ChevronDown/></button>
                <div className="mega mega-tiles mega-sm">
                  <div className="mega-inner">
                  <div className="mega-cols">
                    <div className="mega-col">
                      <div className="mega-group">{t('nav.groups.learn')}</div>
                      <button className="mega-tile" onClick={() => go('/resources/geo-playbook')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✎</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.geoPlaybook')}</div>
                          <div className="tile-desc">{t('nav.tiles.geoPlaybookDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/resources/research-lab')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>⌬</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.researchLab')}</div>
                          <div className="tile-desc">{t('nav.tiles.researchLabDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/resources/aeo-faq')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#5A3A8A,#A87FD0)'}}>❔</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.aeoFaq')}</div>
                          <div className="tile-desc">{t('nav.tiles.aeoFaqDesc')}</div>
                        </div>
                      </button>
                      <button className="mega-tile" onClick={() => go('/resources/changelog')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⟳</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.changelog')}</div>
                          <div className="tile-desc">{t('nav.tiles.changelogDesc')}</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <Link to="/pricing" className="nav-link" style={{ textDecoration: 'none' }} onClick={close}>{t('nav.pricing')}</Link>
            </div>
          </div>

          <div className="nav-right">
            <LangSwitch/>
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/login`} className="btn btn-ghost">{t('nav.signIn')}</a>
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline">{t('nav.startFreeTrial')}</a>
            <button type="button" className="btn btn-dark" data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('nav.bookDemo')}</button>
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
            <div className="mobile-section-label">{t('nav.mobile.product')}</div>
            <button className="mobile-link" onClick={() => mobileGo('/product/axp')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✦</span>AXP
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/agent-traffic')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◐</span>{t('nav.tiles.agentTraffic')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/site-maps')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#241A35,#6B3FFF)'}}>⌗</span>{t('nav.tiles.siteMaps')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/monitoring')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#C9A876,#8A4FC9)'}}>⟁</span>{t('nav.tiles.monitoringCitations')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/product/insights')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⌬</span>{t('nav.tiles.insights')}
            </button>
          </div>

          <div className="mobile-section">
            <div className="mobile-section-label">{t('nav.mobile.useCases')}</div>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/b2b-saas')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>◇</span>{t('nav.tiles.b2bSaas')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/ecommerce')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>◈</span>{t('nav.tiles.ecommerce')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/solutions/agencies')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>◍</span>{t('nav.tiles.agencies')}
            </button>
          </div>

          <div className="mobile-section">
            <div className="mobile-section-label">{t('nav.mobile.resources')}</div>
            <button className="mobile-link" onClick={() => mobileGo('/resources/geo-playbook')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#6B3FFF,#C9A8FF)'}}>✎</span>{t('nav.tiles.geoPlaybook')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/resources/research-lab')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#3A1A55,#7A3FAA)'}}>⌬</span>{t('nav.tiles.researchLab')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/resources/aeo-faq')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#5A3A8A,#A87FD0)'}}>❔</span>{t('nav.tiles.aeoFaq')}
            </button>
            <button className="mobile-link" onClick={() => mobileGo('/resources/changelog')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#8A4FC9,#C9A8FF)'}}>⟳</span>{t('nav.tiles.changelog')}
            </button>
          </div>

          <div className="mobile-section">
            <button className="mobile-link" onClick={() => mobileGo('/pricing')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#C9A876,#6B3FFF)'}}>$</span>{t('nav.pricing')}
            </button>
          </div>

          <div className="mobile-cta">
            <div style={{display:'flex', justifyContent:'center', marginBottom:12}}>
              <LangSwitch/>
            </div>
            <button type="button" className="btn btn-dark" style={{width:'100%', justifyContent:'center'}} data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}' onClick={() => setMobileOpen(false)}>{t('nav.bookDemo')}</button>
            <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline" style={{width:'100%', justifyContent:'center', marginTop:10}}>{t('nav.startFreeTrial')}</a>
          </div>
        </div>
      </div>
    </>
  );
}
