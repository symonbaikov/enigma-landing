import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../scroll-anims.jsx';
import { Starfield, Aurora, Nebula } from '../galactic.jsx';
import { ArrowRight } from '../components/icons.jsx';
import { getBlogPosts } from '../content/blog.js';

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const blogPosts = getBlogPosts(i18n.language);

  return (
    <>
      {/* Hero */}
      <section className="page-hero galactic">
        <Starfield density={70}/>
        <Aurora/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="up">
            <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot"/> {t('nav.tiles.aiSearchTrends')}</div>
            <h1 className="page-hero-title">{t('nav.tiles.aiSearchTrends')}</h1>
            <p className="page-hero-desc">{t('nav.tiles.aiSearchTrendsDesc')}</p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 120px' }}>
        <div className="container-wide">
          <div className="article-list">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={(i % 3) + 1} className="article-card">
                <div className="article-date">{p.date}</div>
                <div className="article-body">
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                </div>
                <Link to={`/blog/${p.slug}`} className="article-link">
                  {t('resourcePage.read')} <ArrowRight size={13}/>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section galactic" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Starfield density={60}/>
        <Aurora/>
        <Nebula/>
        <div className="container-wide" style={{ position: 'relative' }}>
          <Reveal variant="blur" as="h2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(48px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 18 }}>
            {t('nav.tiles.aiSearchTrends')}
          </Reveal>
          <p style={{ fontSize: 18, color: 'rgba(244,239,230,0.72)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55 }}>
            {t('nav.tiles.aiSearchTrendsDesc')}
          </p>
          <div className="cta-actions">
            <Link to="/pricing" className="btn btn-cobalt btn-lg">{t('resourcePage.startFreeTrial')} <ArrowRight/></Link>
            <button type="button" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(244,239,230,0.25)', color: 'var(--cream)', borderRadius: 999, padding: '14px 22px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} data-cal-link="symon-baikov" data-cal-namespace="demo" data-cal-config='{"layout":"month_view"}'>{t('resourcePage.bookDemo')}</button>
          </div>
        </div>
      </section>
    </>
  );
}
