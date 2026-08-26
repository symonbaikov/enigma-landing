import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import ProblemSection from '../components/ProblemSection.jsx';
import HomeGeoSection from '../components/HomeGeoSection.jsx';
import OwnershipStories from '../components/OwnershipStories.jsx';
import AXPSection from '../components/AXPSection.jsx';
import MonitoringSection from '../components/MonitoringSection.jsx';
import TrendsSection from '../components/TrendsSection.jsx';
import EnterpriseSection from '../components/EnterpriseSection.jsx';
import TestimonialLight from '../components/TestimonialLight.jsx';
import LogoBar from '../components/LogoBar.jsx';
import FeatCards from '../components/FeatCards.jsx';
import ReviewsSection from '../components/ReviewsSection.jsx';
import CTA from '../components/CTA.jsx';
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from '../lib/seo.js';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = String(i18n.language || 'en').split('-')[0];
  const faq = t('homeSeo.faq', { returnObjects: true });

  return (
    <>
      <Seo
        title={t('hero.h1Line1') + ' ' + t('hero.h1Highlight')}
        description={t('hero.lead')}
        path="/"
        lang={lang}
        schema={[
          buildOrganizationSchema(),
          buildWebsiteSchema({ lang }),
          buildWebPageSchema({ path: '/', title: t('hero.h1Highlight'), description: t('hero.lead'), lang }),
          buildFaqSchema(faq),
        ]}
      />
      <Hero/>
      <ProblemSection/>
      <HomeGeoSection/>
      <OwnershipStories/>
      <AXPSection/>
      <MonitoringSection/>
      <TrendsSection/>
      <EnterpriseSection/>
      <TestimonialLight/>
      <LogoBar/>
      <FeatCards/>
      <ReviewsSection/>
      <CTA/>
    </>
  );
}
