import { useId } from 'react';

export const EnigmaMark = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="2"/>
    <path d="M16 4 Q22 16 16 28 Q10 16 16 4 Z" fill={color} opacity="0.85"/>
    <circle cx="16" cy="16" r="3" fill={color === '#F4EFE6' ? '#1F1A14' : '#F4EFE6'}/>
  </svg>
);

export const ChevronDown = () => (
  <svg viewBox="0 0 12 12" fill="none">
    <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Check = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Sparkle = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0l1.6 5.4L15 7l-5.4 1.6L8 14l-1.6-5.4L1 7l5.4-1.6z"/>
  </svg>
);

/* Circular language flags for the language menu.
   Russian is the white-blue-white flag, not the state tricolour. */
const FlagCircle = ({ size, children }) => {
  const clip = `flag-${useId()}`; // ids must stay unique when several flags share a page
  return (
  <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
    <defs><clipPath id={clip}><circle cx="30" cy="30" r="30"/></clipPath></defs>
    <g clipPath={`url(#${clip})`}>{children}</g>
    <circle cx="30" cy="30" r="29.25" fill="none" stroke="rgba(31,26,20,0.22)" strokeWidth="1.5"/>
  </svg>
  );
};

export const FlagGB = ({ size = 22 }) => (
  <FlagCircle size={size}>
    <rect width="60" height="60" fill="#012169"/>
    <path d="M0 0l60 60M60 0L0 60" stroke="#fff" strokeWidth="12"/>
    <path d="M0 0l60 60M60 0L0 60" stroke="#C8102E" strokeWidth="5"/>
    <path d="M30 0v60M0 30h60" stroke="#fff" strokeWidth="16"/>
    <path d="M30 0v60M0 30h60" stroke="#C8102E" strokeWidth="9"/>
  </FlagCircle>
);

export const FlagUA = ({ size = 22 }) => (
  <FlagCircle size={size}>
    <rect width="60" height="30" fill="#0057B7"/>
    <rect y="30" width="60" height="30" fill="#FFD700"/>
  </FlagCircle>
);

export const FlagRUFree = ({ size = 22 }) => (
  <FlagCircle size={size}>
    <rect width="60" height="60" fill="#fff"/>
    <rect y="20" width="60" height="20" fill="#0039A6"/>
  </FlagCircle>
);

/* Platform marks. Shared by the quoted-post cards and the founder links so
   the two never drift into different versions of the same logo. */
export const IconX = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.7L5.8 22H2.7l7.6-8.7L1.9 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.7L7.3 3.7H5.5z"/>
  </svg>
);

export const IconLinkedIn = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.96 0-2.26 1.48-2.26 3.01V21h-4z"/>
  </svg>
);

export const IconGitHub = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
  </svg>
);
