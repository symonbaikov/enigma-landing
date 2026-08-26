import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { track, EVENTS } from '../lib/analytics.js';

/**
 * Shown instead of sign-up and checkout while the product is pre-launch.
 *
 * The click that opened this is already recorded by the caller, so a visitor who
 * closes without leaving an email still counts. This only adds the second,
 * stronger signal.
 *
 * Rendered into document.body: `position: fixed` resolves against the nearest
 * ancestor carrying a transform, filter or backdrop-filter, and the CTAs that
 * open this sit inside exactly such ancestors — the nav has a backdrop blur and
 * the sections animate on transforms. Left in place, the dialog centres itself
 * inside the header instead of the viewport.
 */
export default function WaitlistModal({ open, onClose, source, plan }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Let the open transition start before stealing focus.
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  // Reset for the next opening, but only once the modal is closed so the
  // success message does not vanish while it is still on screen.
  useEffect(() => {
    if (open) return;
    const resetTimer = setTimeout(() => { setSent(false); setEmail(''); }, 300);
    return () => clearTimeout(resetTimer);
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    track(EVENTS.waitlistSubmitted, { email: value, source, plan });
    setSent(true);
  };

  if (!open) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(15,10,30,0.55)', backdropFilter: 'blur(4px)',
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        style={{
          position: 'fixed', zIndex: 1001,
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'min(480px, calc(100vw - 32px))',
          maxHeight: 'calc(100vh - 32px)', overflowY: 'auto',
          background: 'var(--cream, #faf7fc)', borderRadius: 20,
          boxShadow: '0 32px 80px -16px rgba(91,33,182,0.28)',
          padding: '36px 32px 32px',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('waitlist.close')}
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 34, height: 34, borderRadius: 99, cursor: 'pointer',
            border: 'none', background: 'rgba(31,26,20,0.06)',
            fontSize: 18, lineHeight: 1, color: 'var(--muted)',
          }}
        >
          ×
        </button>

        {sent ? (
          <>
            <h2 id="waitlist-title" style={{ fontSize: 24, margin: '0 0 12px', lineHeight: 1.25 }}>
              {t('waitlist.doneTitle')}
            </h2>
            <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>
              {t('waitlist.doneBody')}
            </p>
          </>
        ) : (
          <>
            <h2 id="waitlist-title" style={{ fontSize: 24, margin: '0 0 12px', lineHeight: 1.25 }}>
              {t('waitlist.title')}
            </h2>
            <p style={{ margin: '0 0 22px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {t('waitlist.body')}
            </p>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                ref={inputRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('waitlist.emailPlaceholder')}
                aria-label={t('waitlist.emailPlaceholder')}
                style={{
                  width: '100%', padding: '13px 16px', fontSize: 16,
                  borderRadius: 12, border: '1px solid var(--line, #d9cfe4)',
                  background: 'white', color: 'var(--ink)',
                }}
              />
              <button type="submit" className="btn btn-cobalt btn-lg" style={{ justifyContent: 'center' }}>
                {t('waitlist.submit')}
              </button>
            </form>
            <p style={{ margin: '14px 0 0', fontSize: 13, color: 'var(--muted)' }}>
              {t('waitlist.privacy')}
            </p>
          </>
        )}
      </div>
    </>,
    document.body,
  );
}
