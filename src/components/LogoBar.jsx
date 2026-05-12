import { CompanyLogo } from './BrandLogos.jsx';

const COMPANIES = ['Vercel', 'Notion', 'Figma', 'Linear', 'Stripe', 'Loom'];

export default function LogoBar() {
  return (
    <section className="logo-bar">
      <div className="container-wide">
        <div className="col-eye section-eyebrow" style={{textAlign: 'center'}}>TRUSTED BY DATA-DRIVEN TEAMS</div>
        <div className="logo-row">
          {COMPANIES.map(n => (
            <div className="logo-cell" key={n}>
              <CompanyLogo name={n} height={20}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
