/* Shared article/chapter renderer — used by ArticlePage and ChapterPage */
import { Link } from 'react-router-dom';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';

/* ── Charts ─────────────────────────────────────────────────────────── */

function DecayChart() {
  const points = [100, 93, 84, 74, 66, 60, 54, 49, 45, 42, 39, 37];
  const w = 560, h = 200, pad = 40;
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (w - pad * 2));
  const ys = points.map(v => h - pad - ((v - 30) / 75) * (h - pad * 2));
  const d = points.map((_, i) => `${i === 0 ? 'M' : 'L'}${xs[i]},${ys[i]}`).join(' ');
  const fill = `${d} L${xs[xs.length - 1]},${h - pad} L${xs[0]},${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      <defs>
        <linearGradient id="decayFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B3FFF" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#6B3FFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[100, 75, 50].map(v => {
        const y = h - pad - ((v - 30) / 75) * (h - pad * 2);
        return <g key={v}>
          <line x1={pad} y1={y} x2={w - pad} y2={y} stroke="#e5e0d8" strokeWidth="1"/>
          <text x={pad - 6} y={y + 4} fontSize="10" fill="#9e9484" textAnchor="end">{v}%</text>
        </g>;
      })}
      {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((m, i) => (
        <text key={i} x={xs[i]} y={h - 6} fontSize="10" fill="#9e9484" textAnchor="middle">{m}mo</text>
      ))}
      <path d={fill} fill="url(#decayFill)"/>
      <path d={d} fill="none" stroke="#6B3FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {points.map((_, i) => i % 3 === 0 && <circle key={i} cx={xs[i]} cy={ys[i]} r="4" fill="#6B3FFF"/>)}
    </svg>
  );
}

function TokenPositionChart() {
  const bars = [
    { label: '0–20%', pct: 61 }, { label: '20–40%', pct: 22 },
    { label: '40–60%', pct: 10 }, { label: '60–80%', pct: 5 }, { label: '80–100%', pct: 2 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {bars.map(b => (
        <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)', width: 60, flexShrink: 0 }}>{b.label}</span>
          <div style={{ flex: 1, background: '#e8e3da', borderRadius: 4, height: 28, overflow: 'hidden' }}>
            <div style={{ width: `${b.pct}%`, height: '100%', background: b.pct > 30 ? '#6B3FFF' : '#b8a8f0', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{b.pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StructuredVsProseChart() {
  const data = [
    { label: 'Table', s: 31 }, { label: 'FAQ schema', s: 29 },
    { label: 'Bullet list', s: 24 }, { label: 'Fact block', s: 22 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 4 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)' }}><span style={{ width: 12, height: 12, background: '#6B3FFF', borderRadius: 2 }}/> Structured</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)' }}><span style={{ width: 12, height: 12, background: '#d4c8b8', borderRadius: 2 }}/> Prose</span>
      </div>
      {data.map(d => (
        <div key={d.label}>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{d.label}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ width: `${d.s * 2}%`, height: 22, background: '#6B3FFF', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              <span style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>{d.s} citations/1k</span>
            </div>
            <div style={{ width: '20%', height: 22, background: '#d4c8b8', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              <span style={{ fontSize: 11, color: '#6b5f4f', fontWeight: 600 }}>10 citations/1k</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ModelComparisonChart() {
  const models = [
    { name: 'Perplexity', overlap: 47, color: '#1a6464' },
    { name: 'ChatGPT', overlap: 47, color: '#10A37F' },
    { name: 'Claude', overlap: 44, color: '#D97757' },
  ];
  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      {models.map(m => {
        const r = 48, c = 2 * Math.PI * r;
        return (
          <div key={m.name} style={{ textAlign: 'center', minWidth: 120 }}>
            <svg viewBox="0 0 110 110" style={{ width: 110, height: 110 }}>
              <circle cx="55" cy="55" r={r} fill="none" stroke="#e8e3da" strokeWidth="10"/>
              <circle cx="55" cy="55" r={r} fill="none" stroke={m.color} strokeWidth="10"
                strokeDasharray={`${c * m.overlap / 100} ${c}`} strokeLinecap="round" transform="rotate(-90 55 55)"/>
              <text x="55" y="50" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1a1612">{m.overlap}%</text>
              <text x="55" y="67" textAnchor="middle" fontSize="10" fill="#9e9484">overlap</text>
            </svg>
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{m.name}</div>
          </div>
        );
      })}
    </div>
  );
}

function DomainAgeChart() {
  const data = [
    { label: '<1yr', val: 12 }, { label: '1–2yr', val: 18 }, { label: '2–3yr', val: 22 },
    { label: '3–5yr', val: 28 }, { label: '5–10yr', val: 38 }, { label: '10+yr', val: 52 },
  ];
  const max = 55;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 160, paddingBottom: 24 }}>
      {data.map(d => (
        <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#6B3FFF' }}>{d.val}</span>
          <div style={{ width: '100%', height: (d.val / max) * 120, background: 'linear-gradient(180deg, #6B3FFF, #9B7FFF)', borderRadius: '4px 4px 0 0', minHeight: 4 }}/>
          <span style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.2 }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function EntityConfusionChart() {
  const data = [
    { label: 'Common word names', pct: 34 }, { label: 'Shared industry names', pct: 28 },
    { label: 'Abbreviation-based', pct: 21 }, { label: 'Geographic names', pct: 18 },
    { label: 'Unique coined names', pct: 3 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {data.map(d => (
        <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)', width: 180, flexShrink: 0 }}>{d.label}</span>
          <div style={{ flex: 1, background: '#e8e3da', borderRadius: 4, height: 26, overflow: 'hidden' }}>
            <div style={{ width: `${d.pct * 2.5}%`, height: '100%', background: d.pct > 20 ? '#D97757' : '#e8a882', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>{d.pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* GEO Playbook charts */
function GeoVsSeoChart() {
  const data = [
    { label: 'Google Search', v2024: 68, v2026: 51 },
    { label: 'AI Assistants', v2024: 14, v2026: 31 },
    { label: 'Social / Video', v2024: 11, v2026: 12 },
    { label: 'Direct / Other', v2024: 7, v2026: 6 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 4 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)' }}><span style={{ width: 12, height: 12, background: '#d4c8b8', borderRadius: 2 }}/> 2024</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)' }}><span style={{ width: 12, height: 12, background: '#6B3FFF', borderRadius: 2 }}/> 2026</span>
      </div>
      {data.map(d => (
        <div key={d.label}>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{d.label}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ width: `${d.v2024}%`, height: 20, background: '#d4c8b8', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              <span style={{ fontSize: 11, color: '#6b5f4f', fontWeight: 600 }}>{d.v2024}%</span>
            </div>
            <div style={{ width: `${d.v2026}%`, height: 20, background: '#6B3FFF', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              <span style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>{d.v2026}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SignalHierarchyChart() {
  const signals = [
    { label: 'Domain authority (training-time)', val: 92, color: '#6B3FFF' },
    { label: 'Entity graph connections', val: 84, color: '#6B3FFF' },
    { label: 'Content structure (schema)', val: 76, color: '#8B5FFF' },
    { label: 'Content freshness', val: 58, color: '#AB8FFF' },
    { label: 'Keyword relevance', val: 44, color: '#CBBFFF' },
    { label: 'Page word count', val: 18, color: '#E8E3FA' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {signals.map(s => (
        <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)', width: 240, flexShrink: 0 }}>{s.label}</span>
          <div style={{ flex: 1, background: '#e8e3da', borderRadius: 4, height: 24, overflow: 'hidden' }}>
            <div style={{ width: `${s.val}%`, height: '100%', background: s.color, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
              {s.val > 30 && <span style={{ fontSize: 11, fontWeight: 600, color: s.val > 60 ? '#fff' : '#3a2880' }}>{s.val}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentFormatsChart() {
  const data = [
    { label: 'FAQ schema', val: 29 }, { label: 'Comparison table', val: 31 },
    { label: 'Stat block', val: 26 }, { label: 'Definition', val: 22 },
    { label: 'Bullet list', val: 18 }, { label: 'Prose only', val: 10 },
  ];
  const max = 35;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 160, paddingBottom: 28 }}>
      {data.map(d => (
        <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: d.label === 'Prose only' ? '#9e9484' : '#6B3FFF' }}>{d.val}</span>
          <div style={{ width: '100%', height: (d.val / max) * 120, background: d.label === 'Prose only' ? '#d4c8b8' : 'linear-gradient(180deg, #6B3FFF, #9B7FFF)', borderRadius: '4px 4px 0 0', minHeight: 4 }}/>
          <span style={{ fontSize: 9, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.2 }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function PresenceDashboardChart() {
  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'];
  const perplexity = [28, 29, 31, 30, 33, 35, 34, 37, 38, 40, 41, 43];
  const chatgpt = [22, 23, 22, 24, 25, 26, 27, 26, 28, 29, 30, 32];
  const claude = [18, 19, 20, 21, 22, 24, 25, 26, 28, 29, 31, 33];
  const w = 560, h = 180, pad = 36;
  const xs = weeks.map((_, i) => pad + (i / (weeks.length - 1)) * (w - pad * 2));
  const toY = (v) => h - pad - ((v - 15) / 35) * (h - pad * 1.5);
  const path = (pts) => pts.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs[i]},${toY(v)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {[20, 30, 40].map(v => (
        <g key={v}>
          <line x1={pad} y1={toY(v)} x2={w - pad} y2={toY(v)} stroke="#e5e0d8" strokeWidth="1"/>
          <text x={pad - 6} y={toY(v) + 4} fontSize="9" fill="#9e9484" textAnchor="end">{v}%</text>
        </g>
      ))}
      {weeks.map((wk, i) => (
        <text key={i} x={xs[i]} y={h - 4} fontSize="9" fill="#9e9484" textAnchor="middle">{wk}</text>
      ))}
      <path d={path(perplexity)} fill="none" stroke="#1a6464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={path(chatgpt)} fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={path(claude)} fill="none" stroke="#D97757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <g>
        {[['#1a6464','Perplexity'],['#10A37F','ChatGPT'],['#D97757','Claude']].map(([c,n],i) => (
          <g key={n} transform={`translate(${pad + i * 110}, 8)`}>
            <line x1="0" y1="4" x2="16" y2="4" stroke={c} strokeWidth="2"/>
            <text x="20" y="8" fontSize="10" fill="#6b5f4f">{n}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function AxpLiftChart() {
  const data = [
    { label: 'Baseline (standard HTML)', val: 18 },
    { label: '+ Schema markup', val: 28 },
    { label: '+ Structured AXP response', val: 42 },
    { label: '+ FAQ payload', val: 54 },
    { label: '+ Entity block + claims', val: 61 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {data.map((d, i) => (
        <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)', width: 220, flexShrink: 0 }}>{d.label}</span>
          <div style={{ flex: 1, background: '#e8e3da', borderRadius: 4, height: 26, overflow: 'hidden' }}>
            <div style={{ width: `${d.val * 1.5}%`, height: '100%', background: i === 0 ? '#d4c8b8' : `hsl(${255 + i * 5}, ${60 + i * 5}%, ${60 - i * 5}%)`, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, transition: 'width 0.8s ease' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? '#6b5f4f' : '#fff' }}>{d.val}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const CHARTS = {
  decay: DecayChart,
  tokenPosition: TokenPositionChart,
  structuredVsProse: StructuredVsProseChart,
  modelComparison: ModelComparisonChart,
  domainAge: DomainAgeChart,
  entityConfusion: EntityConfusionChart,
  geoVsSeo: GeoVsSeoChart,
  signalHierarchy: SignalHierarchyChart,
  contentFormats: ContentFormatsChart,
  presenceDashboard: PresenceDashboardChart,
  axpLift: AxpLiftChart,
};

/* ── Section renderers ───────────────────────────────────────────────── */

export function renderSection(s, i) {
  switch (s.type) {
    case 'lead':
      return (
        <p key={i} style={{ fontSize: 20, lineHeight: 1.65, color: '#3a3328', fontWeight: 400, marginBottom: 40, maxWidth: 680 }}>
          {s.text}
        </p>
      );
    case 'paragraph':
      return (
        <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: '#4a4238', marginBottom: 28 }}>
          {s.text}
        </p>
      );
    case 'heading':
      return (
        <Reveal key={i} variant="up">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1612', margin: '56px 0 20px' }}>
            {s.text}
          </h2>
        </Reveal>
      );
    case 'finding':
      return (
        <Reveal key={i} variant="up">
          <div style={{ background: '#1a1612', borderRadius: 16, padding: '32px 40px', margin: '40px 0', display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: 1, color: '#f4efe6', letterSpacing: '-0.03em' }}>{s.stat}</div>
              <div style={{ fontSize: 12, color: '#8a7e6e', marginTop: 8, lineHeight: 1.4 }}>{s.statLabel}</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: '#8a7e6e', textTransform: 'uppercase', marginBottom: 8 }}>{s.label}</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#c8bfa8', margin: 0 }}>{s.text}</p>
            </div>
          </div>
        </Reveal>
      );
    case 'chart': {
      const Chart = CHARTS[s.chartType];
      return (
        <Reveal key={i} variant="up">
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12, padding: '32px', margin: '40px 0' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1612', marginBottom: 20 }}>{s.title}</div>
            {Chart && <Chart/>}
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 16, fontStyle: 'italic' }}>{s.caption}</div>
          </div>
        </Reveal>
      );
    }
    case 'list':
      return (
        <Reveal key={i} variant="up">
          <div style={{ margin: '32px 0' }}>
            {s.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: j < s.items.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B3FFF', marginTop: 8, flexShrink: 0 }}/>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1612', marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 15, color: '#6a5f50', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      );
    case 'steps':
      return (
        <Reveal key={i} variant="up">
          <div style={{ margin: '32px 0' }}>
            {s.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: 24, marginBottom: 28 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: '#c8bfa8', lineHeight: 1, minWidth: 32 }}>{item.num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1612', marginBottom: 6 }}>{item.title}</div>
                  <p style={{ fontSize: 15, color: '#6a5f50', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      );
    case 'quote':
      return (
        <Reveal key={i} variant="up">
          <blockquote style={{ borderLeft: '3px solid #6B3FFF', paddingLeft: 28, margin: '40px 0', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.45, fontWeight: 400, color: '#1a1612' }}>
            "{s.text}"
            <cite style={{ display: 'block', fontStyle: 'normal', fontSize: 13, fontFamily: "'Inter', sans-serif", color: 'var(--muted)', marginTop: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>— {s.attr}</cite>
          </blockquote>
        </Reveal>
      );
    default:
      return null;
  }
}

/* ── Shared page layout ──────────────────────────────────────────────── */

export function ContentPageLayout({ item, backPath, backLabel, nextItem, nextPath }) {
  return (
    <>
      <section className="page-hero galactic" style={{ paddingBottom: 80 }}>
        <Starfield density={60}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative', maxWidth: 800 }}>
          <Reveal variant="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <Link to={backPath} style={{ fontSize: 13, color: 'rgba(244,239,230,0.5)', textDecoration: 'none' }}>
                ← {backLabel}
              </Link>
              <span style={{ color: 'rgba(244,239,230,0.2)' }}>·</span>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.5)' }}>{item.eyebrow}</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 20 }}>
              {item.title}
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(244,239,230,0.65)', lineHeight: 1.6, maxWidth: 620, marginBottom: 32 }}>
              {item.subtitle}
            </p>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {item.date && <span style={{ fontSize: 13, color: 'rgba(244,239,230,0.4)' }}>{item.date}</span>}
              {item.date && <span style={{ fontSize: 13, color: 'rgba(244,239,230,0.25)' }}>·</span>}
              <span style={{ fontSize: 13, color: 'rgba(244,239,230,0.4)' }}>{item.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: '72px 0 100px' }}>
        <div className="container-wide" style={{ maxWidth: 720 }}>
          {item.sections.map((s, i) => renderSection(s, i))}
        </div>
      </section>

      {nextItem && (
        <section style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', padding: '60px 0' }}>
          <div className="container-wide" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Next</div>
            <Link to={`${nextPath}/${nextItem.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
              <div>
                {nextItem.num && <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>Chapter {nextItem.num}</div>}
                {nextItem.date && <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>{nextItem.date} · {nextItem.eyebrow}</div>}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(22px, 3vw, 30px)', color: '#1a1612', lineHeight: 1.2, margin: 0 }}>{nextItem.title}</h3>
              </div>
              <ArrowRight size={20} style={{ color: '#6B3FFF', flexShrink: 0 }}/>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
