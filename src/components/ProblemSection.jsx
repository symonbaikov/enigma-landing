import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { Sparkle } from './icons.jsx';

export default function ProblemSection() {
  return (
    <section className="dark-section problem galactic">
      <Starfield density={120}/>
      <Aurora/>
      <Nebula/>
      <div className="container-wide" style={{position: 'relative'}}>
        <Reveal variant="blur" as="h2" className="h2">
          Web traffic may fade.<br/>
          <span className="serif italic" style={{color: '#C9A8FF'}}>Revenue doesn't have to.</span>
        </Reveal>
        <Reveal variant="up" delay={2} as="p" className="lede" style={{margin: '22px auto 56px'}}>
          As AI agents research and recommend products on behalf of humans, your brand has to be found, trusted, and cited — or it's invisible.
        </Reveal>
        <Reveal variant="up-sm" delay={3}>
          <div className="problem-pill">
            <Sparkle size={12}/> The new front door is an AI answer
          </div>
        </Reveal>
      </div>
    </section>
  );
}
