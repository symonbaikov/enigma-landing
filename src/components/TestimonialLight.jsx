import { Reveal, CountUp } from '../scroll-anims.jsx';
import { CompanyLogo } from './BrandLogos.jsx';

export default function TestimonialLight() {
  return (
    <section className="testimonial-light">
      <div className="container-wide" style={{display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center', justifyContent: 'center', maxWidth: 900, margin: '0 auto'}}>
        <Reveal variant="right">
          <blockquote>
            "Enigma turned AI search into the <strong>most efficient acquisition channel</strong> we have. We're seeing <em>4.2x growth</em> in qualified pipeline since adopting it."
          </blockquote>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <div className="avatar" style={{background: 'linear-gradient(135deg, #c08060, #604030)'}}>DV</div>
            <div>
              <div style={{fontSize: 14, fontWeight: 500}}>Daniela Volkov</div>
              <div style={{fontSize: 13, color: 'var(--muted)'}}>VP Demand Generation, Linear</div>
            </div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={2} className="accent-stat">
          <div className="num"><CountUp value={4.2} suffix="×"/></div>
          <div className="desc">growth in new paying customers</div>
          <div className="brand-tag"><CompanyLogo name="Linear" height={18}/></div>
        </Reveal>
      </div>
    </section>
  );
}
