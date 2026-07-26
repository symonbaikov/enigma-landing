import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

export default function TestimonialLight() {
  const { t } = useTranslation();
  return (
    <section className="testimonial-light">
      <div className="container-wide testimonial-light-inner">
        <Reveal variant="up" className="testimonial-light-copy">
          <p className="testimonial-light-statement">
            {t('testimonial.statement')}
          </p>
          <div className="testimonial-light-source">
            {renderText(t('testimonial.source'))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
