import { Starfield } from '../galactic.jsx';
import { Reveal } from '../scroll-anims.jsx';
import { Check } from './icons.jsx';

export default function EnterpriseSection() {
  return (
    <section className="enterprise">
      <Starfield density={80}/>
      <div className="enterprise-grid-bg"/>
      <div className="container-wide" style={{position: 'relative'}}>
        <Reveal variant="blur" as="h2" className="h2" style={{maxWidth: 720}}>
          Built for <span className="lime serif italic">enterprise</span><br/>
          from the start
        </Reveal>
        <div className="enterprise-grid">
          <Reveal variant="up" delay={1} className="ent-col" data-num="01">
            <h4>Security</h4>
            <ul>
              <li><Check/> SOC 2 Type II</li>
              <li><Check/> Role-based access</li>
              <li><Check/> SAML &amp; OAuth SSO</li>
              <li><Check/> Data residency (US/EU)</li>
            </ul>
          </Reveal>
          <Reveal variant="up" delay={2} className="ent-col" data-num="02">
            <h4>Scale</h4>
            <ul>
              <li><Check/> Deployed globally</li>
              <li><Check/> 8M+ citations weekly</li>
              <li><Check/> 1.8M+ prompts weekly</li>
              <li><Check/> 99.99% uptime SLA</li>
            </ul>
          </Reveal>
          <Reveal variant="up" delay={3} className="ent-col" data-num="03">
            <h4>Services</h4>
            <ul>
              <li><Check/> Forward-deployed engineers</li>
              <li><Check/> White-glove onboarding</li>
              <li><Check/> Data API integrations</li>
              <li><Check/> 24/7 priority support</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
