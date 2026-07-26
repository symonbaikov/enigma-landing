/* Mini SVG illustrations for feature/benefit cards */

const V = '#5B21B6'; // violet-600 stroke
const M = '#7C3AED'; // violet-500 primary fill
const L = '#A78BFA'; // violet-300 secondary
const P = '#DDD6FE'; // violet-100 pale
const G = '#EDE9FE'; // violet-50 ghost/bg
const W = '#FFFFFF';
const GD = '#F59E0B'; // gold
const GL = '#FDE68A'; // gold light
const GR = '#34D399'; // green

const s = ({ children, size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

export const Illustrations = {
  // ⚡ Lightning / Speed / Edge
  lightning: ({ size = 40 }) => s({ size, children: <>
    <circle cx="24" cy="24" r="22" fill={G}/>
    <path d="M28 7L12 27h13l-5 14L40 21H27z" fill={M} fillOpacity="0.2"/>
    <path d="M28 7L12 27h13l-5 14L40 21H27z" stroke={V} strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="38" cy="13" r="2.5" fill={GD}/>
    <circle cx="42" cy="20" r="1.5" fill={GD} fillOpacity="0.5"/>
  </> }),

  // 📦 Package / Product content
  package: ({ size = 40 }) => s({ size, children: <>
    <path d="M8 22L24 12L40 22V38L24 46L8 38V22z" fill={P}/>
    <path d="M8 22L24 32L40 22" stroke={L} strokeWidth="1.5"/>
    <path d="M24 32V46" stroke={L} strokeWidth="1.5"/>
    <path d="M8 22L24 12L40 22L24 32z" fill={M} fillOpacity="0.3"/>
    <path d="M16 17L32 27" stroke={W} strokeWidth="1" strokeOpacity="0.6"/>
    <circle cx="24" cy="12" r="3" fill={GD}/>
  </> }),

  // 🏆 Trophy / Category ownership
  trophy: ({ size = 40 }) => s({ size, children: <>
    <path d="M16 8h16v14a8 8 0 01-16 0V8z" fill={GL}/>
    <path d="M16 8h16v14a8 8 0 01-16 0V8z" stroke={GD} strokeWidth="1.5"/>
    <path d="M8 10h8v8c0 3-2 4-4 3a6 6 0 01-4-5.5V10z" fill={GL} stroke={GD} strokeWidth="1.2"/>
    <path d="M40 10h-8v8c0 3 2 4 4 3a6 6 0 004-5.5V10z" fill={GL} stroke={GD} strokeWidth="1.2"/>
    <line x1="24" y1="30" x2="24" y2="36" stroke={GD} strokeWidth="2"/>
    <rect x="16" y="36" width="16" height="5" rx="2.5" fill={GD}/>
    <path d="M21 16 Q24 19 27 16" stroke={GD} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </> }),

  // ⭐ Star / Review & trust
  star: ({ size = 40 }) => s({ size, children: <>
    <path d="M24 5l5 10.2L41 16.8l-8.5 8.3 2 11.9L24 32l-10.5 5 2-11.9L7 16.8l12-1.6z"
      fill={GL} stroke={GD} strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="37" cy="8" r="2" fill={GD} fillOpacity="0.6"/>
    <circle cx="41" cy="15" r="1.5" fill={GD} fillOpacity="0.35"/>
    <circle cx="39" cy="22" r="1" fill={GD} fillOpacity="0.25"/>
  </> }),

  // 🎯 Target / Competitive intelligence
  target: ({ size = 40 }) => s({ size, children: <>
    <circle cx="24" cy="24" r="20" fill={G} stroke={P} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="14" fill="none" stroke={L} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="8" fill={P} stroke={M} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="3" fill={V}/>
    <path d="M36 12l-7 7" stroke={GD} strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 12h-4M36 12v-4" stroke={GD} strokeWidth="1.8" strokeLinecap="round"/>
  </> }),

  // 🔍 Search / Insights
  search: ({ size = 40 }) => s({ size, children: <>
    <circle cx="20" cy="20" r="13" fill={G} stroke={L} strokeWidth="2"/>
    <circle cx="20" cy="20" r="7" fill={P}/>
    <line x1="13" y1="20" x2="27" y2="20" stroke={M} strokeWidth="1.2"/>
    <line x1="20" y1="13" x2="20" y2="27" stroke={M} strokeWidth="1.2"/>
    <line x1="30" y1="30" x2="41" y2="41" stroke={V} strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="2" fill={M}/>
  </> }),

  // 📊 Chart bar / Real-time dashboard
  chartBar: ({ size = 40 }) => s({ size, children: <>
    <rect x="6" y="36" width="36" height="2" rx="1" fill={L} fillOpacity="0.5"/>
    <rect x="6" y="10" width="2" height="28" rx="1" fill={L} fillOpacity="0.5"/>
    <rect x="11" y="25" width="7" height="11" rx="2" fill={P}/>
    <rect x="21" y="17" width="7" height="19" rx="2" fill={L}/>
    <rect x="31" y="9" width="7" height="27" rx="2" fill={M}/>
    <circle cx="14.5" cy="24" r="2.5" fill={V}/>
    <circle cx="24.5" cy="16" r="2.5" fill={V}/>
    <circle cx="34.5" cy="8" r="3" fill={GD}/>
  </> }),

  // 📈 Chart line / Historical trends
  chartLine: ({ size = 40 }) => s({ size, children: <>
    <rect x="6" y="37" width="36" height="2" rx="1" fill={L} fillOpacity="0.5"/>
    <rect x="6" y="9" width="2" height="30" rx="1" fill={L} fillOpacity="0.5"/>
    <path d="M9 33 L18 25 L28 16 L38 8" stroke={M} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 33 L18 25 L28 16 L38 8 L38 37 L9 37z" fill={M} fillOpacity="0.08"/>
    <circle cx="18" cy="25" r="2.5" fill={V}/>
    <circle cx="28" cy="16" r="2.5" fill={V}/>
    <circle cx="38" cy="8" r="3" fill={GD}/>
  </> }),

  // 🔔 Bell / Anomaly detection / Alerts
  bell: ({ size = 40 }) => s({ size, children: <>
    <path d="M24 5c-7.5 0-13 5.5-13 12v9l-3 5h32l-3-5V17C37 10.5 31.5 5 24 5z"
      fill={G} stroke={M} strokeWidth="1.5"/>
    <path d="M21 35a3 3 0 006 0H21z" fill={M}/>
    <path d="M37 22 A8 8 0 0145 30" stroke={GD} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="45" cy="12" r="4.5" fill="#EF4444"/>
    <line x1="45" y1="10" x2="45" y2="13" stroke={W} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="45" cy="15" r="0.8" fill={W}/>
  </> }),

  // 🏁 Flag / Competitor comparison
  flag: ({ size = 40 }) => s({ size, children: <>
    <line x1="10" y1="5" x2="10" y2="45" stroke={V} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 7h26l-7 10 7 11H10V7z" fill={M}/>
    <path d="M10 7L22 17L10 17z" fill={W} fillOpacity="0.15"/>
    <path d="M22 7L36 7L22 17z" fill={W} fillOpacity="0.1"/>
    <line x1="17" y1="7" x2="17" y2="28" stroke={W} strokeWidth="2.5" strokeOpacity="0.25"/>
    <line x1="25" y1="7" x2="25" y2="28" stroke={W} strokeWidth="2.5" strokeOpacity="0.25"/>
  </> }),

  // 🔗 Link / Export & API
  link: ({ size = 40 }) => s({ size, children: <>
    <path d="M20 28a10 10 0 010-14l4-4a10 10 0 0114 14l-2 2"
      stroke={M} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M28 20a10 10 0 010 14l-4 4a10 10 0 01-14-14l2-2"
      stroke={L} strokeWidth="2.5" strokeLinecap="round"/>
  </> }),

  // 🗺️ Map / Visual site map
  map: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="10" width="38" height="30" rx="3" fill={G} stroke={L} strokeWidth="1.5"/>
    <line x1="5" y1="22" x2="43" y2="22" stroke={P} strokeWidth="1"/>
    <line x1="5" y1="30" x2="43" y2="30" stroke={P} strokeWidth="1"/>
    <line x1="18" y1="10" x2="18" y2="40" stroke={P} strokeWidth="1"/>
    <line x1="31" y1="10" x2="31" y2="40" stroke={P} strokeWidth="1"/>
    <path d="M24 11c-3.3 0-6 2.4-6 5.4 0 3.6 6 10.6 6 10.6s6-7 6-10.6C30 13.4 27.3 11 24 11z" fill={M}/>
    <circle cx="24" cy="16.5" r="2.5" fill={W}/>
  </> }),

  // 👁️ Eye / Content visibility scores
  eye: ({ size = 40 }) => s({ size, children: <>
    <path d="M4 24C8 15 15 9 24 9c9 0 16 6 20 15-4 9-11 15-20 15C15 39 8 33 4 24z"
      fill={G} stroke={L} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="8" fill={P} stroke={M} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="4" fill={V}/>
    <circle cx="22" cy="22" r="1.5" fill={W} fillOpacity="0.8"/>
  </> }),

  // 🌡️ Heatmap / Token heatmaps
  heatmap: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="5" width="11" height="11" rx="2" fill={G}/>
    <rect x="19" y="5" width="11" height="11" rx="2" fill={P}/>
    <rect x="33" y="5" width="10" height="11" rx="2" fill={L}/>
    <rect x="5" y="19" width="11" height="11" rx="2" fill={P}/>
    <rect x="19" y="19" width="11" height="11" rx="2" fill={M}/>
    <rect x="33" y="19" width="10" height="11" rx="2" fill={V}/>
    <rect x="5" y="33" width="11" height="10" rx="2" fill={L}/>
    <rect x="19" y="33" width="11" height="10" rx="2" fill={V}/>
    <rect x="33" y="33" width="10" height="10" rx="2" fill="#3B0764"/>
  </> }),

  // 🔀 Flow / Crawl path analysis
  flow: ({ size = 40 }) => s({ size, children: <>
    <circle cx="7" cy="24" r="4.5" fill={M}/>
    <path d="M11.5 24h7" stroke={L} strokeWidth="1.5"/>
    <path d="M18.5 24L27 14M18.5 24L27 34" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="31" cy="14" r="4.5" fill={V}/>
    <circle cx="31" cy="34" r="4.5" fill={P} stroke={M} strokeWidth="1.5"/>
    <path d="M35.5 14h4M35.5 34h4" stroke={L} strokeWidth="1.5"/>
    <circle cx="42" cy="14" r="3" fill={GD}/>
    <circle cx="42" cy="34" r="3" fill={G} stroke={L} strokeWidth="1.5"/>
  </> }),

  // 🧩 Puzzle / Schema coverage
  puzzle: ({ size = 40 }) => s({ size, children: <>
    <path d="M5 5h15v6a4 4 0 000 8V26H5V5z" fill={P} stroke={L} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 5h23v15h-6a4 4 0 000 8h6v15H20V36a4 4 0 010-8V5z"
      fill={M} fillOpacity="0.25" stroke={V} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 26h15a4 4 0 010 8H5V26z" fill={L} fillOpacity="0.5" stroke={M} strokeWidth="1.5" strokeLinejoin="round"/>
  </> }),

  // 🤖 AI / Multi-model monitoring
  ai: ({ size = 40 }) => s({ size, children: <>
    <rect x="7" y="12" width="34" height="26" rx="6" fill={G} stroke={L} strokeWidth="1.5"/>
    <circle cx="17" cy="24" r="4" fill={M} fillOpacity="0.4"/>
    <circle cx="31" cy="24" r="4" fill={M} fillOpacity="0.4"/>
    <circle cx="17" cy="24" r="1.5" fill={V}/>
    <circle cx="31" cy="24" r="1.5" fill={V}/>
    <path d="M17 31 Q24 36 31 31" stroke={V} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <line x1="16" y1="12" x2="16" y2="7" stroke={V} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="6" r="2.5" fill={M}/>
    <line x1="32" y1="12" x2="32" y2="7" stroke={V} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="32" cy="6" r="2.5" fill={M}/>
    <line x1="24" y1="12" x2="24" y2="5" stroke={V} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="4" r="2.5" fill={GD}/>
  </> }),

  // 🔖 Bookmark / Citation tracking
  bookmark: ({ size = 40 }) => s({ size, children: <>
    <path d="M16 4h16a3 3 0 013 3v36l-11-8-11 8V7a3 3 0 013-3z"
      fill={G} stroke={M} strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="19" y1="15" x2="29" y2="15" stroke={M} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19" y1="21" x2="27" y2="21" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 28 Q24 33 29 28" stroke={M} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </> }),

  // 💬 Chat / Sentiment analysis
  chat: ({ size = 40 }) => s({ size, children: <>
    <rect x="4" y="7" width="30" height="22" rx="4" fill={G} stroke={L} strokeWidth="1.5"/>
    <path d="M4 25l8 9v-9" fill={G} stroke={L} strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="11" y1="16" x2="27" y2="16" stroke={M} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="21" x2="22" y2="21" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="37" cy="32" r="7" fill={GR}/>
    <path d="M33.5 32 L36 34.5 L40.5 29.5" stroke={W} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </> }),

  // 👥 Team / Team collaboration
  team: ({ size = 40 }) => s({ size, children: <>
    <circle cx="16" cy="15" r="7" fill={P} stroke={L} strokeWidth="1.5"/>
    <circle cx="32" cy="15" r="7" fill={L} stroke={M} strokeWidth="1.5"/>
    <path d="M4 42c0-8 5.4-14 12-14" stroke={L} strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 42c0-8 5.4-14 12-14s12 6 12 14" stroke={M} strokeWidth="2" strokeLinecap="round"/>
  </> }),

  // 🔌 Plug / Integrations
  plug: ({ size = 40 }) => s({ size, children: <>
    <rect x="14" y="5" width="20" height="23" rx="5" fill={G} stroke={L} strokeWidth="1.5"/>
    <line x1="19" y1="5" x2="19" y2="1" stroke={V} strokeWidth="2" strokeLinecap="round"/>
    <line x1="29" y1="5" x2="29" y2="1" stroke={V} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 21h20a10 10 0 01-10 10A10 10 0 0114 21z" fill={P}/>
    <line x1="24" y1="31" x2="24" y2="43" stroke={V} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="21" cy="15" r="2.5" fill={M}/>
    <circle cx="27" cy="15" r="2.5" fill={M}/>
  </> }),

  // 📄 Document / Structured content
  document: ({ size = 40 }) => s({ size, children: <>
    <path d="M10 4h20l8 8v32H10V4z" fill={G} stroke={L} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M30 4v8h8" stroke={L} strokeWidth="1.5" fill="none"/>
    <rect x="15" y="18" width="18" height="3" rx="1.5" fill={M} fillOpacity="0.5"/>
    <rect x="15" y="24" width="14" height="2" rx="1" fill={L} fillOpacity="0.7"/>
    <rect x="15" y="29" width="16" height="2" rx="1" fill={L} fillOpacity="0.7"/>
    <rect x="15" y="34" width="11" height="2" rx="1" fill={L} fillOpacity="0.5"/>
  </> }),

  // 📡 Signal / Live agent logs
  signal: ({ size = 40 }) => s({ size, children: <>
    <circle cx="24" cy="38" r="3.5" fill={V}/>
    <path d="M15 28a12 12 0 0118 0" stroke={M} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M9 21a21 21 0 0130 0" stroke={L} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M3 14a30 30 0 0142 0" stroke={P} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <line x1="24" y1="28" x2="24" y2="34.5" stroke={V} strokeWidth="1.5"/>
  </> }),

  // 💾 Database / Smart caching
  database: ({ size = 40 }) => s({ size, children: <>
    <ellipse cx="24" cy="11" rx="16" ry="5.5" fill={L}/>
    <path d="M8 11v10c0 3 7.2 5.5 16 5.5S40 24 40 21V11" fill={P} stroke={L} strokeWidth="1.5"/>
    <ellipse cx="24" cy="21" rx="16" ry="5.5" fill={M} fillOpacity="0.35"/>
    <path d="M8 21v10c0 3 7.2 5.5 16 5.5S40 34 40 31V21" fill={G} stroke={L} strokeWidth="1.5"/>
    <ellipse cx="24" cy="31" rx="16" ry="5.5" fill={P} stroke={M} strokeWidth="1.5"/>
    <circle cx="36" cy="11" r="3" fill={GD}/>
  </> }),

  // 🗜 Compress / Token compression
  compress: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="6" width="38" height="8" rx="2" fill={L} fillOpacity="0.4"/>
    <rect x="9" y="18" width="30" height="6" rx="2" fill={M} fillOpacity="0.5"/>
    <rect x="14" y="28" width="20" height="5" rx="2" fill={V} fillOpacity="0.6"/>
    <rect x="18" y="37" width="12" height="5" rx="2" fill="#3B0764"/>
    <path d="M3 5l4 5-4 5" stroke={GD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45 5l-4 5 4 5" stroke={GD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </> }),

  // 🗂️ Folders / Multi-brand dashboard
  folders: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="20" width="24" height="20" rx="2" fill={P} stroke={L} strokeWidth="1.5"/>
    <path d="M5 22h24" stroke={L} strokeWidth="1"/>
    <path d="M5 20L9 15h8l4 5" fill={G} stroke={L} strokeWidth="1.2"/>
    <rect x="13" y="14" width="24" height="20" rx="2" fill={L} stroke={M} strokeWidth="1.5"/>
    <path d="M13 16h24" stroke={M} strokeWidth="1"/>
    <path d="M13 14L17 9h7l4 5" fill={P} stroke={M} strokeWidth="1.2"/>
    <rect x="21" y="8" width="22" height="18" rx="2" fill={M} fillOpacity="0.3" stroke={V} strokeWidth="1.5"/>
    <path d="M21 10h22" stroke={V} strokeWidth="1"/>
    <path d="M21 8L25 3h6l4 5" fill={L} stroke={V} strokeWidth="1.2"/>
  </> }),

  // 🏷️ Tag / White-label reports
  tag: ({ size = 40 }) => s({ size, children: <>
    <path d="M6 6h19l17 18-20 18L6 28V6z" fill={G} stroke={M} strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="3.5" fill={M}/>
    <line x1="20" y1="26" x2="32" y2="26" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="31" x2="29" y2="31" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
  </> }),

  // 💼 Briefcase / Reseller pricing
  briefcase: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="18" width="38" height="24" rx="4" fill={P} stroke={L} strokeWidth="1.5"/>
    <line x1="5" y1="28" x2="43" y2="28" stroke={L} strokeWidth="1"/>
    <rect x="18" y="25" width="12" height="7" rx="2.5" fill={M}/>
    <path d="M18 16h-3a4 4 0 00-4 4v1h26v-1a4 4 0 00-4-4h-3" stroke={V} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M18 16v-5h12v5" stroke={V} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
  </> }),

  // 📰 Report / Weekly briefing
  report: ({ size = 40 }) => s({ size, children: <>
    <rect x="5" y="4" width="38" height="40" rx="3" fill={G} stroke={L} strokeWidth="1.5"/>
    <rect x="11" y="12" width="26" height="11" rx="2" fill={P}/>
    <rect x="11" y="27" width="11" height="11" rx="2" fill={M} fillOpacity="0.25"/>
    <polyline points="13,35 16,29 20,33 24,26" stroke={V} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="26" y1="29" x2="35" y2="29" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="33" x2="33" y2="33" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="37" x2="31" y2="37" stroke={L} strokeWidth="1.5" strokeLinecap="round"/>
  </> }),

  // 💰 ROI / Revenue tracking
  roi: ({ size = 40 }) => s({ size, children: <>
    <circle cx="19" cy="29" r="14" fill={GL} stroke={GD} strokeWidth="1.5"/>
    <path d="M19 20v2M19 36v2" stroke={GD} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 25c0-3 2-4 5-4s5 1.5 5 4-2 4-5 4-5 2-5 4.5 2 4.5 5 4.5 5-1 5-3.5"
      stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M27 16l6-7 6 7" stroke={GR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="33" y1="9" x2="33" y2="25" stroke={GR} strokeWidth="2" strokeLinecap="round"/>
  </> }),

  // 🔬 A/B test / Agent testing
  abtest: ({ size = 40 }) => s({ size, children: <>
    <rect x="4" y="10" width="18" height="28" rx="3" fill={P} stroke={L} strokeWidth="1.5"/>
    <rect x="26" y="10" width="18" height="28" rx="3" fill={M} fillOpacity="0.2" stroke={V} strokeWidth="1.5"/>
    <path d="M10 30V18l4 7 4-7v12" stroke={V} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 18h6c1.7 0 3 1 3 2.5S37.7 23 36 23h-6m0 7h7c1.7 0 3-1 3-2.5S38.7 30 37 30h-7V18"
      stroke={V} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="24" x2="26" y2="24" stroke={M} strokeWidth="1.5" strokeLinecap="round"/>
  </> }),
};

/* Emoji → illustration key mapping */
const EMOJI_MAP = {
  '⚡': 'lightning',
  '🗜': 'compress',
  '📄': 'document',
  '🔬': 'abtest',
  '📡': 'signal',
  '💾': 'database',
  '📊': 'chartBar',
  '📈': 'chartLine',
  '🔍': 'search',
  '🔔': 'bell',
  '🏁': 'flag',
  '🔗': 'link',
  '🗺️': 'map',
  '👁️': 'eye',
  '🌡️': 'heatmap',
  '🔀': 'flow',
  '🧩': 'puzzle',
  '🏆': 'trophy',
  '🤖': 'ai',
  '🔖': 'bookmark',
  '💬': 'chat',
  '🎯': 'target',
  '📰': 'report',
  '💰': 'roi',
  '👥': 'team',
  '🔌': 'plug',
  '📦': 'package',
  '⭐': 'star',
  '🗂️': 'folders',
  '🏷️': 'tag',
  '💼': 'briefcase',
};

export function IllustrationIcon({ icon, size = 40 }) {
  const key = EMOJI_MAP[icon];
  const Comp = key ? Illustrations[key] : null;
  if (!Comp) return <span style={{ fontSize: size * 0.6 }}>{icon}</span>;
  return <Comp size={size}/>;
}
