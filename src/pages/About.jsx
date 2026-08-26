import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo.jsx';
import CTA from '../components/CTA.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { Check } from '../components/icons.jsx';
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from '../lib/seo.js';
import { localePath } from '../lib/locale.js';

/*
 * About page.
 *
 * The claims here are the ones a buyer checks hardest, so each is stated at
 * the size it can be defended: the agency figure is client revenue, not our
 * revenue, and the agency is unnamed on purpose. The founder's profiles are
 * linked and carried into Person/sameAs, which is what makes an authorship
 * claim verifiable rather than decorative.
 */

const PROFILES = [
  { id: 'linkedin', url: 'https://www.linkedin.com/in/symonbaikov', label: 'LinkedIn' },
  { id: 'x', url: 'https://x.com/SymonBaikov', label: 'X' },
  { id: 'github', url: 'https://github.com/symonbaikov', label: 'GitHub' },
];

const FOUNDER_PHOTO = '/team/founder.jpg';

function FounderPhoto({ name }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="founder-photo founder-photo--fallback" aria-hidden="true">
        {name.split(' ').slice(0, 2).map((p) => p[0]).join('')}
      </div>
    );
  }
  return (
    <img
      className="founder-photo"
      src={FOUNDER_PHOTO}
      alt={name}
      width="320"
      height="320"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = String(i18n.language || 'en').split('-')[0];
  const points = t('about.points', { returnObjects: true });
  const bio = t('about.founder.bio', { returnObjects: true });
  const steps = t('about.how.steps', { returnObjects: true });
  const name = t('about.founder.name');

  const personSchema = {
    '@type': 'Person',
    '@id': absoluteUrl('/about#founder'),
    name,
    jobTitle: t('about.founder.role'),
    description: Array.isArray(bio) ? bio[0] : undefined,
    image: absoluteUrl(FOUNDER_PHOTO),
    url: absoluteUrl(localePath('/about', lang)),
    worksFor: { '@id': absoluteUrl('/#organization') },
    sameAs: PROFILES.map((p) => p.url),
    knowsAbout: [
      'Generative Engine Optimization',
      'Answer Engine Optimization',
      'Search engine optimization',
      'AI search visibility',
    ],
  };

  return (
    <>
      <Seo
        title={t('about.seoTitle')}
        description={t('about.seoDesc')}
        path="/about"
        lang={lang}
        schema={[
          buildOrganizationSchema(),
          buildWebsiteSchema({ lang }),
          buildWebPageSchema({
            path: '/about',
            title: t('about.seoTitle'),
            description: t('about.seoDesc'),
            lang,
            type: 'AboutPage',
          }),
          personSchema,
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: t('about.seoTitle'), path: '/about' },
          ], lang),
        ]}
      />

      <section className="about-intro">
        <div className="container-wide">
          <div className="about-intro-grid">
            <Reveal variant="up">
              <div className="about-logo-card">
                <img
                  src="/logo_1.png"
                  alt="Enigma"
                  className="about-logo"
                  width="240"
                  height="60"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <div className="about-intro-copy">
              <Reveal variant="up">
                <div className="col-eye section-eyebrow">{t('about.eyebrow')}</div>
              </Reveal>
              <Reveal variant="up" delay={1}>
                <h1 className="about-h1">{t('about.title')}</h1>
              </Reveal>

              <ul className="about-points">
                {Array.isArray(points) &&
                  points.map((point, idx) => (
                    <Reveal key={point.title} variant="up-sm" delay={idx + 1}>
                      <li>
                        <span className="about-check" aria-hidden="true"><Check/></span>
                        <span>
                          <strong>{point.title}</strong> {point.desc}
                        </span>
                      </li>
                    </Reveal>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container-wide">
          <Reveal variant="up">
            <div className="mission-card">
              <h2 className="mission-title">{t('about.mission.title')}</h2>
              <p className="mission-body">{t('about.mission.body')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-founder">
        <div className="container-wide">
          <div className="founder-grid">
            <Reveal variant="up">
              <FounderPhoto name={name}/>
            </Reveal>

            <div>
              <Reveal variant="up">
                <div className="col-eye section-eyebrow">{t('about.founder.eyebrow')}</div>
              </Reveal>
              <Reveal variant="up" delay={1}>
                <h2 className="h2 founder-name">{name}</h2>
                <p className="founder-role">{t('about.founder.role')}</p>
              </Reveal>

              {Array.isArray(bio) &&
                bio.map((paragraph, idx) => (
                  <Reveal key={idx} variant="up-sm" delay={idx + 2}>
                    <p className="founder-bio">{paragraph}</p>
                  </Reveal>
                ))}

              <Reveal variant="up-sm" delay={4}>
                <div className="founder-links">
                  {PROFILES.map((profile) => (
                    <a
                      key={profile.id}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                    >
                      {profile.label} →
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="about-how">
        <div className="container-wide">
          <Reveal variant="up">
            <h2 className="h2 how-title">{t('about.how.title')}</h2>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <p className="how-lead">{t('about.how.lead')}</p>
          </Reveal>

          <div className="how-grid">
            {Array.isArray(steps) &&
              steps.map((step, idx) => (
                <Reveal key={step.num} variant="up-sm" delay={(idx % 2) + 1}>
                  <article className="how-step">
                    <span className="how-num" aria-hidden="true">{step.num}</span>
                    <div>
                      <h3 className="how-step-title">{step.title}</h3>
                      <p className="how-step-desc">{step.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <CTA/>
    </>
  );
}
