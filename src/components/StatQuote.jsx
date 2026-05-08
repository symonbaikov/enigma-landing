import { Starfield, Aurora } from '../galactic.jsx';
import { Reveal, CountUp } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';

export default function StatQuote() {
  return (
    <section className="dark-section galactic">
      <Starfield density={100}/>
      <Aurora/>
      <div className="container-wide" style={{position: 'relative'}}>
        <div className="stat-quote">
          <Reveal variant="right" className="big-stat">
            <div>
              <div className="num"><CountUp value={412} suffix="%"/></div>
              <div className="desc">increase in brand presence for non-branded prompts</div>
            </div>
            <div className="logo">⟁ stratamesh</div>
          </Reveal>
          <Reveal variant="left" delay={2} className="quote-block">
            <blockquote>
              "More of the buying journey now happens inside an AI answer — not on our site. Enigma made sure high-intent buyers find us, trust us, and pick us in those channels."
            </blockquote>
            <div className="quote-attr">
              <div className="avatar">JD</div>
              <div>
                <div className="name">Jordan Duarte</div>
                <div className="role">Senior Director of Web Strategy &amp; Growth, Stratamesh</div>
              </div>
            </div>
            <button className="btn btn-outline" style={{borderColor: 'rgba(244,239,230,0.4)', color: 'var(--cream)', marginTop: 24}}>
              Read case study <ArrowRight/>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
