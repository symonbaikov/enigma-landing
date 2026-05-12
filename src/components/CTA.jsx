import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

export default function CTA() {
  return (
    <section className="cta galactic cta-galactic">
      <Starfield density={80}/>
      <Aurora/>
      <Nebula/>
      <div className="grid-bg"/>
      <div className="stardust-light"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="eyebrow"><span className="dot"/> Ready in 30 seconds</div>
        <Reveal variant="blur" as="h2">Get started in <span className="serif italic">seconds</span>.</Reveal>
        <p className="lede" style={{margin: '0 auto 36px'}}>
          Run an AI visibility audit on your site, or schedule a working session with our team.
        </p>
        <div className="cta-actions">
          <button className="btn btn-dark btn-lg">Book a demo <ArrowRight/></button>
          <a href={`${import.meta.env.VITE_PLATFORM_URL || 'http://localhost:3000'}/signup`} className="btn btn-outline btn-lg">Run free audit</a>
        </div>
      </div>
    </section>
  );
}
