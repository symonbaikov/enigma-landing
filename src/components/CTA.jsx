import { useTranslation } from 'react-i18next';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="cta galactic cta-galactic">
      <Starfield density={80}/>
      <Aurora/>
      <Nebula/>
      <div className="grid-bg"/>
      <div className="stardust-light"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="eyebrow"><span className="dot"/> {t('cta.eyebrow')}</div>
        <Reveal variant="blur" as="h2">
          {t('cta.h2')}
        </Reveal>
        <p className="lede" style={{margin: '0 auto 36px'}}>{t('cta.desc')}</p>
        <div className="cta-actions">
          <button className="btn btn-dark btn-lg" data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('cta.bookDemo')} <ArrowRight/></button>
          <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline btn-lg">{t('cta.runFreeAudit')}</a>
        </div>
      </div>
    </section>
  );
}
