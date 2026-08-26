import { useTranslation } from 'react-i18next';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';
import WaitlistCta from './WaitlistCta.jsx';

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
          <WaitlistCta source="home_cta_demo" className="btn btn-dark btn-lg">{t('cta.bookDemo')} <ArrowRight/></WaitlistCta>
          <WaitlistCta source="home_cta_audit" className="btn btn-outline btn-lg">{t('cta.runFreeAudit')}</WaitlistCta>
        </div>
      </div>
    </section>
  );
}
