import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { socialPosts } from '../content/social-proof.js';
import { IconLinkedIn, IconX } from './icons.jsx';

/*
 * Public posts about AI-search traffic, quoted verbatim and linked to source.
 *
 * The quotes stay in their original language in every locale: translating
 * someone's post and still presenting it as their words would misquote them.
 * Only the section's own chrome is localized.
 */

const PlatformIcon = ({ platform }) =>
  platform === 'linkedin' ? <IconLinkedIn size={16}/> : <IconX size={15}/>;

/** Initials back the photo up, so a failed image never leaves an empty hole. */
function initials(name) {
  return name
    .replace(/^@/, '')
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function Avatar({ post }) {
  const [failed, setFailed] = useState(false);
  if (!post.avatar || failed) {
    return <span className="social-avatar" aria-hidden="true">{initials(post.author)}</span>;
  }
  return (
    <img
      className="social-avatar"
      src={post.avatar}
      // The name sits right beside it, so announcing the photo would repeat it.
      alt=""
      width="38"
      height="38"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
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
                  <Avatar post={post}/>
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
