import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { renderText, sourceId } from '../lib/cite.jsx';

const asArray = (value) => Array.isArray(value) ? value : [];

export default function HomeGeoSection() {
  const { t } = useTranslation();
  const summary = asArray(t('homeSeo.summary', { returnObjects: true }));
  const rows = asArray(t('homeSeo.comparison.rows', { returnObjects: true }));
  const faq = asArray(t('homeSeo.faq', { returnObjects: true }));
  const sources = asArray(t('homeSeo.sources', { returnObjects: true }));

  return (
    <section className="home-geo-section">
      <div className="container-wide">
        <Reveal variant="up" as="div" className="section-label">{t('homeSeo.eyebrow')}</Reveal>
        <Reveal variant="up" as="h2" className="h2 home-geo-title">{t('homeSeo.title')}</Reveal>
        <Reveal variant="up-sm" as="p" className="home-geo-lead">{renderText(t('homeSeo.lead'))}</Reveal>

        <div className="home-geo-grid">
          <Reveal variant="up" className="home-answer-block">
            <h3>{t('homeSeo.definitionTitle')}</h3>
            <p>{renderText(t('homeSeo.definition'))}</p>
            <ul>
              {summary.map((item) => <li key={item}>{renderText(item)}</li>)}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={1} className="home-comparison">
            <div className="home-comparison-head">
              <span>{t('homeSeo.comparison.label')}</span>
              <strong>{t('homeSeo.comparison.title')}</strong>
            </div>
            <div className="home-comparison-table">
              {rows.map((row) => (
                <div className="home-comparison-row" key={row.signal}>
                  <span>{row.signal}</span>
                  <strong>{row.seo}</strong>
                  <em>{row.geo}</em>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="home-faq-grid">
          {faq.map((qa, index) => (
            <Reveal variant="up" delay={(index % 4) + 1} className="home-faq-item" key={qa.q}>
              <h3>{qa.q}</h3>
              <p>{renderText(qa.a)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="home-sources">
          <div className="section-label">{t('homeSeo.sourcesLabel')}</div>
          {sources.map((source) => (
            <div className="home-source-row" id={sourceId(source.title)} key={source.title}>
              <strong>{source.title}</strong>
              <span>{renderText(source.desc)}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
