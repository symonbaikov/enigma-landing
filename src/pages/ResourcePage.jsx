import { useContent } from '../hooks/useContent.js';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { Link } from 'react-router-dom';

function ChapterList({ chapters }) {
  return (
    <div className="chapter-list">
      {chapters.map((ch, i) => (
        <Reveal key={i} variant="up" delay={(i % 3) + 1} className="chapter-card">
          <div className="chapter-num">{ch.num}</div>
          <div>
            <h3>{ch.title}</h3>
            <p>{ch.desc}</p>
          </div>
          <div className="chapter-arrow"><ArrowRight size={16}/></div>
        </Reveal>
      ))}
    </div>
  );
}

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((a, i) => (
        <Reveal key={i} variant="up" delay={1} className="article-card">
          <div className="article-date">{a.date}</div>
          <div className="article-body">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
          <a href="#" className="article-link">Read <ArrowRight size={13}/></a>
        </Reveal>
      ))}
    </div>
  );
}

function ChangelogList({ updates }) {
  const tagColors = { New: 'var(--cobalt)', Improved: 'var(--rust)', Fixed: '#4CAF50' };
  return (
    <div className="changelog-list">
      {updates.map((u, i) => (
        <Reveal key={i} variant="up" delay={1} className="changelog-item">
          <div className="changelog-meta">
            <span className="changelog-date">{u.date}</span>
            <span className="changelog-tag" style={{ background: tagColors[u.tag] || 'var(--muted)' }}>{u.tag}</span>
          </div>
          <div className="changelog-body">
            <h3>{u.title}</h3>
            <p>{u.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function ResourcePage({ slug, eyebrow, hero_title, hero_desc, chapters, articles, updates, cta_title, cta_desc }) {
  const c = useContent(slug, { eyebrow, hero_title, hero_desc, chapters, articles, updates, cta_title, cta_desc });
  const titleLines = c.hero_title.split('\n');

  return (
    <>
      {/* Hero */}
      <section className="page-hero galactic">
        <Starfield density={70}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="up">
            <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot"/> {c.eyebrow}</div>
            <h1 className="page-hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i < titleLines.length - 1 ? <br/> : ''}</span>
              ))}
            </h1>
            <p className="page-hero-desc">{c.hero_desc}</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 120px' }}>
        <div className="container-wide">
          {c.chapters && <ChapterList chapters={c.chapters}/>}
          {c.articles && <ArticleList articles={c.articles}/>}
          {c.updates && <ChangelogList updates={c.updates}/>}
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section galactic" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 18 }}>{c.cta_title}</Reveal>
          <p style={{ fontSize: 17, color: 'var(--muted-2)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55 }}>{c.cta_desc}</p>
          <div className="cta-actions">
            <Link to="/pricing" className="btn btn-cobalt btn-lg">Start free trial <ArrowRight/></Link>
            <a href="#" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', cursor: 'pointer' }}>Book a demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
