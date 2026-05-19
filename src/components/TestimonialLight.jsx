import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

export default function TestimonialLight() {
  const { t } = useTranslation();
  return (
    <section className="testimonial-light">
      <div className="container-wide" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <Reveal variant="up">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.45, color: 'var(--ink)', marginBottom: 20 }}>
            {t('testimonial.statement')}
          </p>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>
            {renderText(t('testimonial.source'))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
