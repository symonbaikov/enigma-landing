import { useTranslation } from 'react-i18next';
import { Starfield, Aurora } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

export default function StatQuote() {
  const { t } = useTranslation();
  return (
    <section className="dark-section galactic stat-quote-compact">
      <Starfield density={100}/>
      <Aurora/>
      <div className="container-wide stat-quote-compact-inner">
        <Reveal variant="up" className="stat-quote-compact-copy">
          <p className="stat-quote-statement">
            {t('statQuote.statement')}
          </p>
          <div className="stat-quote-source">
            {renderText(t('statQuote.source'))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
