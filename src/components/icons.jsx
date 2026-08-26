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
