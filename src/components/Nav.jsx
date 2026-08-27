import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { currentLocale, basename, localePath, LOCALE_NAMES } from '../lib/locale.js';
import { EnigmaMark, ChevronDown, ArrowRight, Check, FlagGB, FlagUA, FlagRUFree } from './icons.jsx';
import WaitlistCta from './WaitlistCta.jsx';

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

/* Language menu.
   Switching language is a real navigation to the localized URL, not a state
   change: the locale lives in the path, so the address bar, <html lang>,
   canonical and hreflang can never drift apart. */
/* One width for the trigger and the menu: a narrow button over a wide list
   reads as two unrelated controls. */
const LANG_MENU_WIDTH = 186;

function LangMenu() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  const options = [
    { code: 'en', Flag: FlagGB },
    { code: 'uk', Flag: FlagUA },
    { code: 'ru', Flag: FlagRUFree },
  ];
  const active = options.find(o => o.code === currentLocale) || options[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (!boxRef.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const switchTo = (code) => {
    if (code === currentLocale) { setOpen(false); return; }
    // Keep the reader on the same page in the new language.
    const rest = window.location.pathname.slice(basename === '/' ? 0 : basename.length) || '/';
    window.location.assign(localePath(rest, code) + window.location.search + window.location.hash);
  };

  return (
    <div ref={boxRef} style={{ position: 'relative', flexShrink: 0 }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="lang-trigger"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(31,26,20,0.06)',
          border: '1px solid rgba(31,26,20,0.12)',
          borderRadius: 999,
          padding: '6px 14px 6px 7px',
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.01em',
          color: 'var(--ink, #1f1a14)',
        }}
      >
        <active.Flag size={30}/>
        <span className="lang-trigger-name">{LOCALE_NAMES[active.code]}</span>
        <span style={{ width: 13, height: 13, display: 'block', flexShrink: 0, opacity: 0.55, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <ChevronDown/>
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 60,
            listStyle: 'none', margin: 0, padding: 6,
            width: LANG_MENU_WIDTH,
            boxSizing: 'border-box',
            background: 'var(--paper, #fdfaf5)',
            border: '1px solid rgba(31,26,20,0.12)',
            borderRadius: 14,
            boxShadow: '0 12px 32px rgba(31,26,20,0.14)',
          }}
        >
          {options.map(({ code, Flag }) => {
            const isActive = code === currentLocale;
            return (
              <li key={code}>
                <button
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchTo(code)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                    padding: '8px 8px',
                    background: isActive ? 'rgba(31,26,20,0.06)' : 'transparent',
                    border: 'none', borderRadius: 10,
                    cursor: 'pointer', textAlign: 'left',
                    fontSize: 14, fontWeight: isActive ? 600 : 500,
                    color: 'var(--ink, #1f1a14)',
                  }}
                >
                  <Flag size={30}/>
                  <span style={{ flex: 1 }}>{LOCALE_NAMES[code]}</span>
                  {isActive && <span style={{ width: 14, height: 14, opacity: 0.7 }}><Check/></span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
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
              <img src="/logo_1.png" alt="Enigma" style={{ height: 80, width: 'auto', display: 'block', filter: 'brightness(0) saturate(100%)' }}/>
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
                      <button className="mega-tile" onClick={() => go('/about')}>
                        <div className="tile-icon" style={{background: 'linear-gradient(135deg,#4B2FA8,#C9A876)'}}>◈</div>
                        <div>
                          <div className="tile-title">{t('nav.tiles.about')}</div>
                          <div className="tile-desc">{t('nav.tiles.aboutDesc')}</div>
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
            <LangMenu/>
            <WaitlistCta source="nav_signin" className="btn btn-ghost">{t('nav.signIn')}</WaitlistCta>
            <WaitlistCta source="nav_trial" className="btn btn-outline">{t('nav.startFreeTrial')}</WaitlistCta>
            <WaitlistCta source="nav_demo" className="btn btn-dark">{t('nav.bookDemo')}</WaitlistCta>
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
            <button className="mobile-link" onClick={() => mobileGo('/about')}>
              <span className="mobile-link-icon" style={{background:'linear-gradient(135deg,#4B2FA8,#C9A876)'}}>◈</span>{t('nav.tiles.about')}
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
              <LangMenu/>
            </div>
            <WaitlistCta
              source="nav_demo_mobile"
              className="btn btn-dark"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.bookDemo')}
            </WaitlistCta>
            <WaitlistCta source="nav_trial_mobile" className="btn btn-outline" style={{width:'100%', justifyContent:'center', marginTop:10}} onClick={() => setMobileOpen(false)}>{t('nav.startFreeTrial')}</WaitlistCta>
          </div>
        </div>
      </div>
    </>
  );
}
