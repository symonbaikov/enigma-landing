import { useTranslation } from 'react-i18next';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { Sparkle } from './icons.jsx';

export default function ProblemSection() {
  const { t } = useTranslation();
  return (
    <section className="dark-section problem galactic">
      <Starfield density={120}/>
      <Aurora/>
      <Nebula/>
      <div className="container-wide" style={{position: 'relative'}}>
        <Reveal variant="blur" as="h2" className="h2">
          {t('problem.h2Line1')}<br/>
          <span className="serif italic" style={{color: '#C9A8FF'}}>{t('problem.h2Highlight')}</span>
        </Reveal>
        <Reveal variant="up" delay={2} as="p" className="lede" style={{margin: '22px auto 56px'}}>
          {t('problem.lead')}
        </Reveal>
        <Reveal variant="up-sm" delay={3}>
          <div className="problem-pill">
            <Sparkle size={12}/> {t('problem.pill')}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
