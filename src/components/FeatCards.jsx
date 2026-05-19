import { useTranslation } from 'react-i18next';
import { ArrowRight } from './icons.jsx';

function CitationIllustration() {
  return (
    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 130, display: 'block'}}>
      <rect width="200" height="130" rx="12" fill="url(#cit-bg)"/>
      <defs>
        <linearGradient id="cit-bg" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a0e2e"/>
          <stop offset="100%" stopColor="#2d1a4a"/>
        </linearGradient>
        <linearGradient id="cit-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4efe6" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#f4efe6" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect x="72" y="28" width="56" height="72" rx="6" fill="url(#cit-card)" stroke="rgba(244,239,230,0.2)" strokeWidth="1"/>
      <rect x="80" y="38" width="34" height="3" rx="1.5" fill="rgba(244,239,230,0.5)"/>
      <rect x="80" y="46" width="28" height="2" rx="1" fill="rgba(244,239,230,0.25)"/>
      <rect x="80" y="52" width="32" height="2" rx="1" fill="rgba(244,239,230,0.25)"/>
      <rect x="80" y="58" width="20" height="2" rx="1" fill="rgba(244,239,230,0.25)"/>
      <rect x="80" y="66" width="30" height="8" rx="3" fill="rgba(107,63,255,0.35)" stroke="rgba(107,63,255,0.6)" strokeWidth="0.8"/>
      <rect x="83" y="69" width="20" height="2" rx="1" fill="rgba(107,63,255,0.9)"/>
      <rect x="80" y="79" width="24" height="2" rx="1" fill="rgba(244,239,230,0.2)"/>
      <rect x="80" y="85" width="18" height="2" rx="1" fill="rgba(244,239,230,0.2)"/>
      <circle cx="22" cy="50" r="14" fill="rgba(107,63,255,0.15)" stroke="rgba(107,63,255,0.5)" strokeWidth="1"/>
      <text x="22" y="46" textAnchor="middle" fontSize="7" fill="rgba(244,239,230,0.7)" fontFamily="sans-serif">GPT</text>
      <path d="M17 52 Q14 52 12 52" stroke="rgba(107,63,255,0.4)" strokeWidth="0.8"/>
      <path d="M17 54 Q14 55 12 56" stroke="rgba(107,63,255,0.4)" strokeWidth="0.8"/>
      <circle cx="10" cy="52" r="2" fill="rgba(107,63,255,0.6)"/>
      <circle cx="10" cy="56" r="2" fill="rgba(107,63,255,0.4)"/>
      <path d="M36 50 Q52 50 72 64" stroke="rgba(107,63,255,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
      <circle cx="54" cy="54" r="2" fill="rgba(107,63,255,0.8)"/>
      <circle cx="178" cy="45" r="14" fill="rgba(209,120,87,0.15)" stroke="rgba(209,120,87,0.5)" strokeWidth="1"/>
      <text x="178" y="41" textAnchor="middle" fontSize="6.5" fill="rgba(244,239,230,0.7)" fontFamily="sans-serif">Perp-</text>
      <text x="178" y="50" textAnchor="middle" fontSize="6.5" fill="rgba(244,239,230,0.7)" fontFamily="sans-serif">lexity</text>
      <path d="M164 45 Q148 50 128 66" stroke="rgba(209,120,87,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
      <circle cx="146" cy="56" r="2" fill="rgba(209,120,87,0.8)"/>
      <circle cx="100" cy="118" r="10" fill="rgba(26,188,254,0.15)" stroke="rgba(26,188,254,0.4)" strokeWidth="1"/>
      <text x="100" y="121" textAnchor="middle" fontSize="6.5" fill="rgba(244,239,230,0.7)" fontFamily="sans-serif">Claude</text>
      <path d="M100 108 L100 100" stroke="rgba(26,188,254,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
      <circle cx="100" cy="103" r="2" fill="rgba(26,188,254,0.7)"/>
      <rect x="104" y="62" width="22" height="10" rx="5" fill="rgba(107,63,255,0.9)"/>
      <text x="115" y="70" textAnchor="middle" fontSize="6" fill="white" fontFamily="sans-serif" fontWeight="600">cit.</text>
      <circle cx="155" cy="20" r="1.5" fill="rgba(244,239,230,0.15)"/>
      <circle cx="40" cy="100" r="1.5" fill="rgba(244,239,230,0.15)"/>
      <circle cx="185" cy="110" r="1" fill="rgba(244,239,230,0.1)"/>
    </svg>
  );
}

function MonitoringIllustration() {
  const { t } = useTranslation();
  const weeks = [22, 26, 24, 29, 31, 28, 34, 36, 33, 39, 41, 44];
  const comp =  [18, 20, 19, 22, 21, 23, 22, 24, 25, 23, 26, 25];
  const W = 200, H = 130, px = 16, py = 18, iW = W - px * 2, iH = 62;
  const toX = i => px + (i / (weeks.length - 1)) * iW;
  const toY = v => py + iH - ((v - 14) / 34) * iH;
  const line = (pts) => pts.map((v, i) => `${i===0?'M':'L'}${toX(i)},${toY(v)}`).join(' ');
  const area = (pts, base) => `${line(pts)} L${toX(pts.length-1)},${base} L${toX(0)},${base} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: H, display: 'block'}}>
      <rect width={W} height={H} rx="12" fill="url(#mon-bg)"/>
      <defs>
        <linearGradient id="mon-bg" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d1f1a"/>
          <stop offset="100%" stopColor="#1a2e28"/>
        </linearGradient>
        <linearGradient id="mon-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10A37F" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#10A37F" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="mon-fill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B3FFF" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#6B3FFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[25, 35, 45].map(v => (
        <line key={v} x1={px} y1={toY(v)} x2={W-px} y2={toY(v)} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      ))}
      <path d={area(weeks, py + iH)} fill="url(#mon-fill)"/>
      <path d={area(comp,  py + iH)} fill="url(#mon-fill2)"/>
      <path d={line(weeks)} stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={line(comp)}  stroke="#6B3FFF"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2"/>
      <circle cx={toX(weeks.length-1)} cy={toY(weeks[weeks.length-1])} r="3.5" fill="#10A37F" stroke="#0d1f1a" strokeWidth="1.5"/>
      <circle cx={toX(comp.length-1)}  cy={toY(comp[comp.length-1])}  r="3"   fill="#6B3FFF"  stroke="#0d1f1a" strokeWidth="1.5"/>
      <circle cx={px} cy={py + iH + 14} r="3" fill="#10A37F"/>
      <text x={px + 7} y={py + iH + 18} fontSize="7.5" fill="rgba(244,239,230,0.6)" fontFamily="sans-serif">{t('mock.yourBrand')}</text>
      <line x1={px + 58} y1={py + iH + 14} x2={px + 68} y2={py + iH + 14} stroke="#6B3FFF" strokeWidth="1.5" strokeDasharray="3 2"/>
      <text x={px + 72} y={py + iH + 18} fontSize="7.5" fill="rgba(244,239,230,0.6)" fontFamily="sans-serif">{t('mock.competitors')}</text>
      <rect x={W - 52} y={8} width={44} height={18} rx={9} fill="rgba(16,163,127,0.2)" stroke="rgba(16,163,127,0.5)" strokeWidth="0.8"/>
      <text x={W - 30} y={20} textAnchor="middle" fontSize="8" fill="#10A37F" fontFamily="sans-serif" fontWeight="700">↑ 44%</text>
      <circle cx="15" cy="12" r="1.2" fill="rgba(244,239,230,0.12)"/>
      <circle cx="170" cy="115" r="1.2" fill="rgba(244,239,230,0.1)"/>
    </svg>
  );
}

export default function FeatCards() {
  const { t } = useTranslation();
  return (
    <section className="feat-cards" style={{display: 'block', padding: '40px 0 100px'}}>
      <div className="container-wide" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22}}>
        <div className="feat-press">
          <div>
            <div className="eye">{t('featCards.asFeatureIn')}</div>
            <div className="source">{t('featCards.source')}</div>
          </div>
          <p>{t('featCards.sourceDesc')}</p>
        </div>
        <div className="feat-q">
          <div className="illus-tile"><CitationIllustration/></div>
          <div>
            <h4>{t('featCards.card1.title')}</h4>
            <p>{t('featCards.card1.desc')}</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </div>
        <div className="feat-q">
          <div className="illus-tile"><MonitoringIllustration/></div>
          <div>
            <h4>{t('featCards.card2.title')}</h4>
            <p>{t('featCards.card2.desc')}</p>
          </div>
          <div className="arrow"><ArrowRight/></div>
        </div>
      </div>
    </section>
  );
}
