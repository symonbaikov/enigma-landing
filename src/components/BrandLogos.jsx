/* Real logo images — all served from /public/logos/ */

const AI_LOGO_FILES = {
  ChatGPT:   { src: '/logos/openai.svg',      iconSrc: '/logos/openai-icon.svg',      bg: '#10A37F', color: '#10A37F' },
  Perplexity:{ src: '/logos/perplexity.svg',  iconSrc: '/logos/perplexity-icon.svg',  bg: '#1a6464', color: '#1a6464' },
  Claude:    { src: '/logos/claude.svg',       iconSrc: '/logos/claude-icon.svg',      bg: '#D97757', color: '#D97757' },
  Gemini:    { src: '/logos/gemini.svg',       iconSrc: '/logos/gemini-icon.svg',      bg: '#4285F4', color: '#4285F4' },
  Bing:      { src: '/logos/bing.svg',         iconSrc: '/logos/bing-icon.svg',        bg: '#0078D4', color: '#0078D4' },
  DeepSeek:  { src: '/logos/deepseek.svg',     iconSrc: '/logos/deepseek.svg',         bg: '#4D6BFE', color: '#4D6BFE' },
  Grok:      { src: '/logos/grok.svg',         iconSrc: '/logos/grok.svg',             bg: '#111',    color: '#111'    },
};

/* Round avatar badge with icon-only logo on brand-color background — for small sizes */
export function AILogoAvatar({ name, size = 28 }) {
  const cfg = AI_LOGO_FILES[name];
  if (!cfg) return null;
  const padding = size * 0.2;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: cfg.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, overflow: 'hidden',
    }}>
      <img
        src={cfg.iconSrc}
        alt={name}
        style={{ width: size - padding * 2, height: size - padding * 2, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
}

/* Full wordmark logo — for larger display */
export function AILogoWordmark({ name, height = 24 }) {
  const cfg = AI_LOGO_FILES[name];
  if (!cfg) return null;
  return (
    <img src={cfg.src} alt={name} style={{ height, width: 'auto', maxWidth: 160, objectFit: 'contain' }}/>
  );
}

/* Legacy AILogos kept for backwards compat — renders avatar style */
export const AILogos = Object.fromEntries(
  Object.entries(AI_LOGO_FILES).map(([name]) => [
    name,
    ({ size = 24 }) => <AILogoAvatar name={name} size={size}/>,
  ])
);

/* ── Company / customer logos (Ukrainian IT companies) ───────────── */

const COMPANY_LOGO_FILES = {
  Grammarly: { src: '/logos/grammarly_ua.svg', dark: true,  scale: 1,   maxWidth: 130 },
  MacPaw:    { src: '/logos/macpaw_ua.svg',    dark: true,  scale: 1.4, maxWidth: 110 },
  Preply:    { src: '/logos/preply.png',        dark: false, scale: 1.4, maxWidth: 110 },
  Monobank:  { src: '/logos/monobank_ua.svg',  dark: true,  scale: 1.8, maxWidth: 140 },
  Ajax:      { src: '/logos/ajax.png',          dark: false, scale: 1.2, maxWidth: 100 },
  Rozetka:   { src: '/logos/rozetka.png',       dark: false, scale: 1.4, maxWidth: 120 },
};

export function CompanyLogo({ name, height = 22 }) {
  const cfg = COMPANY_LOGO_FILES[name];
  if (!cfg) return null;
  const h = height * (cfg.scale ?? 1);
  return (
    <img
      src={cfg.src}
      alt={name}
      style={{
        height: h,
        width: 'auto',
        maxWidth: cfg.maxWidth ?? 120,
        objectFit: 'contain',
        opacity: 0.75,
        filter: cfg.dark ? 'brightness(0)' : 'none',
      }}
    />
  );
}
