import { Link } from 'react-router-dom';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from '../components/icons.jsx';

export default function NotFound() {
  return (
    <section className="dark-section galactic" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Starfield density={100}/>
      <Aurora/>
      <Nebula/>
      <div className="container-wide" style={{ position: 'relative' }}>
        <Reveal variant="up">
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(100px,15vw,180px)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.04em', color: 'var(--cream)', opacity: 0.15, marginBottom: 32 }}>404</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, color: 'var(--cream)', marginBottom: 20, letterSpacing: '-0.02em' }}>
            Page not <em>found.</em>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted-2)', maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.55 }}>
            This page doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-cobalt btn-lg">Back to home <ArrowRight/></Link>
            <Link to="/pricing" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.2)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>View pricing</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
