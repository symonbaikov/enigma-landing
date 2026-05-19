import { useTranslation } from 'react-i18next';
import { Starfield, Aurora } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

export default function StatQuote() {
  const { t } = useTranslation();
  return (
    <section className="dark-section galactic" style={{ padding: 'clamp(80px,12vw,140px) 0' }}>
      <Starfield density={100}/>
      <Aurora/>
      <div className="container-wide" style={{ position: 'relative' }}>
        <Reveal variant="up" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(24px,3vw,34px)', lineHeight: 1.4, color: 'var(--cream)', marginBottom: 24 }}>
            {t('statQuote.statement')}
          </p>
          <div style={{ fontSize: 13, color: 'rgba(244,239,230,0.55)' }}>
            {renderText(t('statQuote.source'))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
