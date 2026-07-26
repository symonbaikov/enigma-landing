import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

export default function OwnershipStories({ compact = false }) {
  const { t } = useTranslation();
  const stories = asArray(t('ownershipStories.items', { returnObjects: true }));
  const method = asArray(t('ownershipStories.method', { returnObjects: true }));

  if (!stories.length) return null;

  return (
    <section className={`ownership-stories ${compact ? 'ownership-stories-compact' : ''}`}>
      <div className="container-wide">
        <Reveal variant="up" as="div" className="section-label">
          {t('ownershipStories.eyebrow')}
        </Reveal>
        <div className="ownership-head">
          <Reveal variant="up" as="h2" className="h2">
            {t('ownershipStories.title')}
          </Reveal>
          <Reveal variant="up-sm" as="p">
            {renderText(t('ownershipStories.lead'))}
          </Reveal>
        </div>

        <Reveal variant="up" className="ownership-definition">
          <strong>{t('ownershipStories.definitionTitle')}</strong>
          <p>{renderText(t('ownershipStories.definition'))}</p>
        </Reveal>

        <div className="ownership-grid">
          {stories.map((story, index) => (
            <Reveal key={story.title} variant="up" delay={(index % 4) + 1}>
              <article className="ownership-card">
                <div className="ownership-kicker">{story.kicker}</div>
                <h3>{story.title}</h3>
                <p>{renderText(story.story)}</p>
                <dl className="ownership-card-facts">
                  <div>
                    <dt>{t('ownershipStories.evidenceLabel')}</dt>
                    <dd>{renderText(story.evidence)}</dd>
                  </div>
                  <div>
                    <dt>{t('ownershipStories.actionLabel')}</dt>
                    <dd>{renderText(story.action)}</dd>
                  </div>
                  <div>
                    <dt>{t('ownershipStories.limitLabel')}</dt>
                    <dd>{renderText(story.limit)}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        {method.length > 0 && (
          <Reveal variant="up" className="ownership-method">
            <div>
              <span className="ownership-method-label">{t('ownershipStories.methodLabel')}</span>
              <strong>{t('ownershipStories.methodTitle')}</strong>
            </div>
            <div className="ownership-method-grid">
              {method.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <p>{renderText(item.value)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
