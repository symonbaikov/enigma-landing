import { ScrollProgress } from './scroll-anims.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import AXPSection from './components/AXPSection.jsx';
import StatQuote from './components/StatQuote.jsx';
import MonitoringSection from './components/MonitoringSection.jsx';
import TrendsSection from './components/TrendsSection.jsx';
import EnterpriseSection from './components/EnterpriseSection.jsx';
import TestimonialLight from './components/TestimonialLight.jsx';
import LogoBar from './components/LogoBar.jsx';
import FeatCards from './components/FeatCards.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <ScrollProgress/>
      <Nav/>
      <Hero/>
      <ProblemSection/>
      <AXPSection/>
      <StatQuote/>
      <MonitoringSection/>
      <TrendsSection/>
      <EnterpriseSection/>
      <TestimonialLight/>
      <LogoBar/>
      <FeatCards/>
      <CTA/>
      <Footer/>
    </>
  );
}
