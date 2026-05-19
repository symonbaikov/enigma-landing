import { useTranslation } from 'react-i18next';
import { Starfield } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { Check } from './icons.jsx';

export default function EnterpriseSection() {
  const { t } = useTranslation();
  const secItems = t('enterprise.security.items', { returnObjects: true });
  const scaleItems = t('enterprise.scale.items', { returnObjects: true });
  const serviceItems = t('enterprise.services.items', { returnObjects: true });

  return (
    <section className="enterprise">
      <Starfield density={80}/>
      <div className="enterprise-grid-bg"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <Reveal variant="blur" as="h2" className="h2" style={{maxWidth: 720}}>
          {t('enterprise.h2')} <span className="lime serif italic">{t('enterprise.h2Highlight')}</span><br/>
          {t('enterprise.h2Line2')}
        </Reveal>
        <div className="enterprise-grid">
          <Reveal variant="up" delay={1} className="ent-col" data-num="01">
            <h4>{t('enterprise.security.title')}</h4>
            <ul>
              {secItems.map((item, i) => <li key={i}><Check/> {item}</li>)}
            </ul>
          </Reveal>
          <Reveal variant="up" delay={2} className="ent-col" data-num="02">
            <h4>{t('enterprise.scale.title')}</h4>
            <ul>
              {scaleItems.map((item, i) => <li key={i}><Check/> {item}</li>)}
            </ul>
          </Reveal>
          <Reveal variant="up" delay={3} className="ent-col" data-num="03">
            <h4>{t('enterprise.services.title')}</h4>
            <ul>
              {serviceItems.map((item, i) => <li key={i}><Check/> {item}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
