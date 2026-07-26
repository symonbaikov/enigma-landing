import { useTranslation } from 'react-i18next';
import { CompanyLogo } from './BrandLogos.jsx';

const COMPANIES = ['Grammarly', 'MacPaw', 'Preply', 'Monobank', 'Ajax', 'Rozetka'];
const SHOW_LOGO_BAR = false;

export default function LogoBar() {
  const { t } = useTranslation();
  if (!SHOW_LOGO_BAR) return null;

  return (
    <section className="logo-bar">
      <div className="container-wide">
        <div className="col-eye section-eyebrow" style={{textAlign: 'center'}}>{t('logoBar.eyebrow')}</div>
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
