import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IllustrationIcon } from './Illustrations.jsx';
import { renderText } from '../lib/cite.jsx';

export default function FeatureDrawer({ feature, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!feature) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [feature, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(15,10,30,0.55)',
          backdropFilter: 'blur(4px)',
          opacity: feature ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: feature ? 'auto' : 'none',
        }}
      />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 1001,
        width: 'min(520px, 100vw)',
        background: 'var(--cream, #faf7fc)',
        boxShadow: '-24px 0 80px -16px rgba(91,33,182,0.18)',
        transform: feature ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.38s cubic-bezier(0.32,0,0.12,1)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 20, right: 20, zIndex: 2,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(91,33,182,0.08)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ink, #1f1a14)',
            fontSize: 18, lineHeight: 1,
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(91,33,182,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(91,33,182,0.08)'}
        >
          ×
        </button>

        {feature && (
          <div style={{ padding: '48px 40px 64px' }}>
            <div style={{
              width: 80, height: 80,
              background: 'white',
              borderRadius: 20,
              boxShadow: '0 4px 24px rgba(91,33,182,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 28,
            }}>
              <IllustrationIcon icon={feature.icon} size={52}/>
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500, fontSize: 'clamp(28px,4vw,36px)',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              color: 'var(--ink, #1f1a14)',
              marginBottom: 10,
            }}>{feature.title}</h2>

            <p style={{
              fontSize: 15, color: 'var(--muted, #7a6f65)',
              lineHeight: 1.6, marginBottom: 32,
              borderBottom: '1px solid var(--line, rgba(31,26,20,0.08))',
              paddingBottom: 28,
            }}>{renderText(feature.desc)}</p>

            {(feature.body || []).map((para, i) => (
              <p key={i} style={{
                fontSize: 15, color: 'var(--ink, #1f1a14)',
                lineHeight: 1.75, marginBottom: 18,
                opacity: 0.85,
              }}>{renderText(para)}</p>
            ))}

            {feature.points?.length > 0 && (
              <div style={{
                marginTop: 32,
                background: 'rgba(91,33,182,0.05)',
                borderRadius: 14,
                padding: '20px 24px',
                border: '1px solid rgba(91,33,182,0.1)',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#5B21B6',
                  marginBottom: 14,
                }}>{t('featureDrawer.keyCapabilities')}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {feature.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink, #1f1a14)', lineHeight: 1.5 }}>
                      <span style={{ color: '#5B21B6', flexShrink: 0, marginTop: 2, fontSize: 12 }}>◆</span>
                      <span>{renderText(pt)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginTop: 36 }}>
              <button type="button"
                data-cal-link="symon-baikov"
                data-cal-namespace="demo"
                data-cal-config='{"layout":"month_view"}'
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#5B21B6', color: 'white',
                  border: 'none', cursor: 'pointer',
                  borderRadius: 999, padding: '12px 24px',
                  fontSize: 14, fontWeight: 600,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {t('featureDrawer.bookDemo')}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
