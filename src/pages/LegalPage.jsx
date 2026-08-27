import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo.jsx';
import { Reveal } from '../scroll-anims.jsx';
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from '../lib/seo.js';

/*
 * Privacy and Terms.
 *
 * Both pages describe what this site actually does today rather than what a
 * template says a SaaS does: the product is pre-launch, the only data it takes
 * is what a visitor types into the waitlist, and analytics runs through
 * PostHog with session recording on. Anything we do not do is not claimed, and
 * anything we do — including the parts a visitor might not expect — is named.
 *
 * This is a factual description written by the team, not legal advice, and it
 * is not a substitute for review by a lawyer before the product launches.
 */

export default function LegalPage({ docKey }) {
  const { t, i18n } = useTranslation();
  const lang = String(i18n.language || 'en').split('-')[0];
  const doc = t(`legal.${docKey}`, { returnObjects: true });
  const path = `/${docKey}`;

  return (
    <>
      <Seo
        title={doc.title}
        description={doc.intro}
        path={path}
        lang={lang}
        schema={[
          buildOrganizationSchema(),
          buildWebsiteSchema({ lang }),
          buildWebPageSchema({ path, title: doc.title, description: doc.intro, lang }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: doc.title, path },
          ], lang),
        ]}
      />

      <section className="legal-page">
        <div className="container-wide">
          <div className="legal-body">
            <Reveal variant="up">
              <h1 className="legal-h1">{doc.title}</h1>
              <p className="legal-updated">{doc.updated}</p>
              <p className="legal-intro">{doc.intro}</p>
            </Reveal>

            {Array.isArray(doc.sections) &&
              doc.sections.map((section) => (
                <Reveal key={section.heading} variant="up-sm">
                  <div className="legal-section">
                    <h2 className="legal-h2">{section.heading}</h2>
                    {Array.isArray(section.body) &&
                      section.body.map((paragraph, idx) => (
                        <p key={idx} className="legal-p">{paragraph}</p>
                      ))}
                    {Array.isArray(section.list) && (
                      <ul className="legal-list">
                        {section.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}

            <Reveal variant="up-sm">
              <p className="legal-contact">
                {doc.contactLabel}{' '}
                <a href="mailto:privacy@enigmavisibility.com">privacy@enigmavisibility.com</a>
              </p>
              <p className="legal-note">{doc.note}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
