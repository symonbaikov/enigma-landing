import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';

export default function ReviewsSection() {
  const { t, i18n } = useTranslation();
  const reviewsText = i18n.getFixedT('uk', 'translation');
  const items = reviewsText('reviews.items', { returnObjects: true });

  return (
    <section className="reviews">
      <div className="container-wide">
        <Reveal variant="up">
          <div className="col-eye section-eyebrow" style={{ textAlign: 'center' }}>
            {reviewsText('reviews.eyebrow')}
          </div>
        </Reveal>
        <Reveal variant="up" delay={1}>
          <h2 className="h2" style={{ maxWidth: 920, margin: '10px auto 0', textAlign: 'center' }}>
            {reviewsText('reviews.title')}
          </h2>
        </Reveal>

        <div className="reviews-grid">
          {Array.isArray(items) &&
            items.map((item, idx) => (
              <Reveal key={`${item.author}-${idx}`} variant="up-sm" delay={idx + 1}>
                <article className="review-card">
                  <p className="review-quote">“{item.quote}”</p>
                  <div>
                    <div className="review-author">{item.author}</div>
                    <div className="review-meta">
                      {item.role}{item.company ? ` — ${item.company}` : ''}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
