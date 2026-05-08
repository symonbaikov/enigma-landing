import { useState } from 'react';
import { Starfield, Aurora } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight, Check } from './icons.jsx';

const FloatingChip = ({ pos, text, v }) => (
  <div style={{
    position: 'absolute', ...pos,
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    borderRadius: 999, padding: '6px 12px',
    fontSize: 11, fontFamily: "'EB Garamond', serif",
    color: '#1F1A14',
    boxShadow: '0 6px 20px -6px rgba(0,0,0,0.25)',
    display: 'flex', alignItems: 'center', gap: 8,
    animation: 'pulse 3s ease-in-out infinite',
  }}>
    <span style={{
      width: 6, height: 6, borderRadius: 999,
      background: v === 'cited' ? '#6B3FFF' : '#aaa'
    }}/>
    {text} <span style={{opacity: 0.5, marginLeft: 4}}>{v}</span>
  </div>
);

const HeroVisual = () => (
  <div className="browser float-medium">
    <div className="browser-bar">
      <div className="dots"><span/><span/><span/></div>
      <div className="url-pill">app.enigma.ai/audit</div>
      <div style={{width: 40}}/>
    </div>
    <div className="hero-visual">
      <Starfield density={60} big={true}/>
      <Aurora variant="hero"/>
      <div className="hero-card">
        <div className="label">⏵ Live</div>
        <h3>The <span className="serif italic">future</span> of AI search</h3>
        <button className="pill-btn">
          Analyze <ArrowRight/>
        </button>
      </div>
      <FloatingChip pos={{top: '14%', left: '6%'}} text="Perplexity" v="cited"/>
      <FloatingChip pos={{top: '8%', right: '8%'}} text="ChatGPT" v="cited"/>
      <FloatingChip pos={{bottom: '18%', left: '8%'}} text="Claude" v="missed"/>
      <FloatingChip pos={{bottom: '10%', right: '12%'}} text="Gemini" v="cited"/>
    </div>
  </div>
);

export default function Hero() {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setScanning(true);
    setTimeout(() => setScanning(false), 2200);
  };
  return (
    <section className="hero">
      <div className="grid-bg"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="hero-grid">
          <Reveal variant="up">
            <div className="eyebrow"><span className="dot"/> AI search visibility · GEO/AEO platform</div>
            <h1>
              Humans don't search.<br/>
              <span className="it">AI answers</span> for them.
            </h1>
            <p className="lead">
              Enigma audits how your brand appears across ChatGPT, Perplexity, Claude, and Gemini — then engineers your site to be the source AI cites.
            </p>
            <form className="url-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter your website URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
              <button type="submit" className="btn btn-cobalt">
                {scanning ? 'Scanning…' : 'Run AI visibility audit'}
                {!scanning && <ArrowRight/>}
              </button>
            </form>
            <div className="hero-checks">
              <span><Check/> Results in 30 seconds</span>
              <span><Check/> No credit card required</span>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={2}><HeroVisual/></Reveal>
        </div>
      </div>
    </section>
  );
}
