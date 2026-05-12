/* SVG inline logo marks for AI brands and real customer companies */

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
  DeepSeek: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#003BA6"/>
      <ellipse cx="12" cy="13" rx="5.5" ry="4" stroke="#4FACF7" strokeWidth="1.3" fill="none"/>
      <path d="M6.5 11C7.5 8.5 10 7 12 7s4.5 1.5 5.5 4" stroke="#4FACF7" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="14.5" cy="10.5" r="1" fill="#4FACF7"/>
    </svg>
  ),
  Grok: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#111"/>
      <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

/* Real company logos for the logo bar */
export const RealLogos = {
  Vercel: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel">
      <path d="M12 1.608 24 22.392H0Z"/>
    </svg>
  ),
  Notion: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Notion">
      <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94C.967 76.827 0 74.497 0 71.773V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M61.35.227L6.017 4.314C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.894.036 68.147-.357 61.35.227zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887L41.736 48.833v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327V38.724l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z" fill="#000"/>
    </svg>
  ),
  Figma: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
      <path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/>
      <path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/>
      <path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/>
      <path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" fill="#ff7262"/>
      <path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/>
    </svg>
  ),
  Linear: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Linear">
      <circle cx="50" cy="50" r="50" fill="#5E6AD2"/>
      <path d="M21 68.5S26.5 93 49.5 93zM64.5 91.5q5-.5 8.5-1.5L22 40q-1 3-1.5 8.5zM25.5 31q2-3.5 4.5-6L85 79.5q-2.5 2.5-5.5 4.5zM80 77A52 52 0 1 0 23 20z" fill="white"/>
    </svg>
  ),
  Stripe: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Stripe">
      <path d="M5 10.2c0-.8.7-1.1 1.8-1.1 1.6 0 3.6.5 5.2 1.4V6.3C10.3 5.6 8.6 5.3 7 5.3 3.4 5.3 1 7.2 1 10.4c0 5 6.9 4.2 6.9 6.4 0 1-.8 1.3-2 1.3-1.7 0-4-.8-5.7-1.8V20c1.9.9 3.9 1.3 5.7 1.3C9.2 21.3 12 19.4 12 16c0-5.3-7-4.4-7-5.8zm17.4-8.5-5.1 1.1v4.5l-4.1.9v3.5l4.1-.9v6.4c0 3 1.7 4.2 4.2 4.2 1.4 0 3-.4 3.7-.8v-3.7c-.7.3-4.1 1.3-4.1-1.5V10.8h4.1V7.3h-4.1V1.7zm7.7 5.9-5.3 1.1v12.9h5.3V7.6zm0-1.6-5.3 1.1V4l5.3-1.1v3.1zm9.7 1.3c-1.1 0-2 .7-2.4.9L37.3 7l-5 1.2v12.4h5.3V11.5c.7-.7 2.5-1.1 3.4-.3V7.3zm4-4.2-5 1.1v3.5l5-1.1V3.1zM44 7.6h5.3V20H44V7.6z" fill="#635BFF"/>
    </svg>
  ),
  Loom: ({ size = 20 }) => (
    <svg height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Loom">
      <path d="M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z"/>
    </svg>
  ),
};

const REAL_COMPANY_NAMES = {
  Vercel: 'Vercel',
  Notion: 'Notion',
  Figma: 'Figma',
  Linear: 'Linear',
  Stripe: 'Stripe',
  Loom: 'Loom',
};

const LOGO_COLORS = {
  Vercel: '#000000',
  Notion: '#000000',
  Figma: null, // multicolor, no override
  Linear: null, // has its own purple
  Stripe: null, // has its own indigo
  Loom: '#625DF5',
};

export function CompanyLogo({ name, size = 18 }) {
  const LogoMark = RealLogos[name];
  if (LogoMark) {
    const color = LOGO_COLORS[name];
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, opacity: 0.75, color: color || 'inherit' }}>
        <LogoMark size={size + 4}/>
        <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: size, fontWeight: 600, color: '#4a4a5a', letterSpacing: '-0.01em' }}>{name}</span>
      </span>
    );
  }
  return null;
}
