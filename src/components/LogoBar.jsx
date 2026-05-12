import { CompanyLogo } from './BrandLogos.jsx';

export default function LogoBar() {
  const companies = ['Stratamesh', 'Voltaic', 'Coreframe', 'Halcyon', 'Northwind', 'Quantle'];
  return (
    <section className="logo-bar">
      <div className="container-wide">
        <div className="col-eye section-eyebrow" style={{textAlign: 'center'}}>TRUSTED BY DATA-DRIVEN TEAMS</div>
        <div className="logo-row">
          {companies.map(n => (
            <div className="logo-cell" key={n}>
              <CompanyLogo name={n} size={16}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
