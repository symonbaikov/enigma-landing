import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Every link points at a page that exists. A footer of dead "#" links wastes
   the crawl depth these columns are for, and tells a visitor the site is a
   mock-up. Entries with no destination yet — careers, security, contact,
   cookies — were removed rather than left hanging. */
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/logo_1.png" alt="Enigma" style={{ height: 80, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}/>
            </Link>
            <p>{t('footer.desc')}</p>
          </div>
          <div className="footer-col">
            <h6>{t('footer.product')}</h6>
            <ul>
              <li><Link to="/product/monitoring">{t('footer.aiVisibility')}</Link></li>
              <li><Link to="/product/insights">{t('footer.citationTracking')}</Link></li>
              <li><Link to="/product/axp">{t('footer.agentExperience')}</Link></li>
              <li><Link to="/blog">{t('footer.searchTrends')}</Link></li>
              <li><Link to="/pricing">{t('footer.pricing')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.solutions')}</h6>
            <ul>
              <li><Link to="/solutions/b2b-saas">{t('footer.forB2BSaas')}</Link></li>
              <li><Link to="/solutions/ecommerce">{t('footer.forEcommerce')}</Link></li>
              <li><Link to="/solutions/agencies">{t('footer.forAgencies')}</Link></li>
              <li><Link to="/pricing">{t('footer.forEnterprise')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.resources')}</h6>
            <ul>
              <li><Link to="/resources/geo-playbook">{t('footer.geoPlaybook')}</Link></li>
              <li><Link to="/resources/research-lab">{t('footer.researchLab')}</Link></li>
              <li><Link to="/blog">{t('footer.blog')}</Link></li>
              <li><Link to="/resources/changelog">{t('footer.changelog')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.company')}</h6>
            <ul>
              <li><Link to="/about">{t('footer.about')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t('footer.copyright')}</div>
          <div style={{display: 'flex', gap: 24}}>
            <Link to="/terms" style={{color: 'var(--muted-2)'}}>{t('footer.terms')}</Link>
            <Link to="/privacy" style={{color: 'var(--muted-2)'}}>{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
