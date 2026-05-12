/* SVG inline logo marks for AI brands and customer companies */

export const AILogos = {
  ChatGPT: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#10A37F"/>
      <path d="M12 6C9.5 6 7.5 7.8 7.5 10c0 .7.2 1.4.5 2L6 14.5C5.4 15.6 6.2 17 7.5 17H10c.5.6 1.2 1 2 1s1.5-.4 2-1h2.5c1.3 0 2.1-1.4 1.5-2.5L16 12c.3-.6.5-1.3.5-2C16.5 7.8 14.5 6 12 6z" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="9.5" cy="10.5" r="1" fill="white"/>
      <circle cx="14.5" cy="10.5" r="1" fill="white"/>
      <path d="M9.5 13.5c.7.8 4.5.8 5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Perplexity: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#1B1B2F"/>
      <path d="M12 4L7 8v4l5 4 5-4V8L12 4z" stroke="#20B2AA" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
      <path d="M7 8l5 4 5-4" stroke="#20B2AA" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M12 12v8" stroke="#20B2AA" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Claude: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#D97757"/>
      <path d="M8 16l2.5-8h3L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M9.2 13h5.6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Gemini: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#4285F4"/>
      <path d="M12 5C12 5 10 9.5 10 12s2 7 2 7 2-4.5 2-7-2-7-2-7z" fill="white" opacity="0.9"/>
      <path d="M5 12c0 0 4.5-2 7-2s7 2 7 2-4.5 2-7 2-7-2-7-2z" fill="white"/>
    </svg>
  ),
  Bing: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#0078D4"/>
      <path d="M8 6v12l3-1.5 5-3-3-2.5 3-1.5L8 6z" fill="white"/>
    </svg>
  ),
};

/* Fictional company wordmark logos for the logo bar */
const COMPANY_COLORS = {
  Stratamesh:  '#6B3FFF',
  Voltaic:     '#3A7BD5',
  Coreframe:   '#2D8B5E',
  Halcyon:     '#8A4FC9',
  Northwind:   '#C9533A',
  Quantle:     '#3A9BC9',
  Streamline:  '#6B3FFF',
  Northvault:  '#3A7BD5',
  Crestline:   '#2D8B5E',
};

export function CompanyLogo({ name, size = 18 }) {
  const color = COMPANY_COLORS[name] || '#6B3FFF';
  const letter = name[0];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
      <span style={{
        width: size + 4, height: size + 4,
        borderRadius: 6,
        background: color + '18',
        border: `1px solid ${color}33`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.65, fontWeight: 700, color,
        flexShrink: 0,
        fontFamily: 'inherit',
      }}>{letter}</span>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: size, color: 'var(--muted)', opacity: 0.75 }}>{name}</span>
    </span>
  );
}
