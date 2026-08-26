import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { socialPosts } from '../content/social-proof.js';

/*
 * Public posts about AI-search traffic, quoted verbatim and linked to source.
 *
 * The quotes stay in their original language in every locale: translating
 * someone's post and still presenting it as their words would misquote them.
 * Only the section's own chrome is localized.
 */

const PlatformIcon = ({ platform }) =>
  platform === 'linkedin' ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.96 0-2.26 1.48-2.26 3.01V21h-4z"/>
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.7L5.8 22H2.7l7.6-8.7L1.9 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.7L7.3 3.7H5.5z"/>
    </svg>
  );

/** Initials stand in for avatars: profile images cannot be hotlinked reliably. */
function initials(name) {
  return name
    .replace(/^@/, '')
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

export default function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="social-proof">
      <div className="container-wide">
        <Reveal variant="up">
          <div className="col-eye section-eyebrow" style={{ textAlign: 'center' }}>
            {t('socialProof.eyebrow')}
          </div>
        </Reveal>
        <Reveal variant="up" delay={1}>
          <h2 className="h2" style={{ maxWidth: 900, margin: '10px auto 0', textAlign: 'center' }}>
            {t('socialProof.title')}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={2}>
          <p className="social-lead">{t('socialProof.lead')}</p>
        </Reveal>

        <div className="social-grid">
          {socialPosts.map((post, idx) => (
            <Reveal key={post.id} variant="up-sm" delay={(idx % 3) + 1}>
              <a
                className="social-card"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <div className="social-head">
                  <span className="social-avatar" aria-hidden="true">{initials(post.author)}</span>
                  <span className="social-who">
                    <span className="social-author">{post.author}</span>
                    <span className="social-handle">{post.handle} · {post.role}</span>
                  </span>
                  <span className={`social-platform social-platform--${post.platform}`}>
                    <PlatformIcon platform={post.platform}/>
                  </span>
                </div>

                <blockquote className="social-text" cite={post.url}>
                  {post.text}
                  {post.truncated ? ' …' : ''}
                </blockquote>

                <span className="social-foot">
                  <span className="social-date">{post.date}</span>
                  <span className="social-link">{t('socialProof.readPost')} →</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up">
          <p className="social-note">{t('socialProof.note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
