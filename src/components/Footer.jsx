import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="brand">
              <img src="/logo_1.png" alt="Enigma" style={{ height: 80, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}/>
            </a>
            <p>{t('footer.desc')}</p>
          </div>
          <div className="footer-col">
            <h6>{t('footer.product')}</h6>
            <ul>
              <li><a href="#">{t('footer.aiVisibility')}</a></li>
              <li><a href="#">{t('footer.citationTracking')}</a></li>
              <li><a href="#">{t('footer.agentExperience')}</a></li>
              <li><a href="#">{t('footer.searchTrends')}</a></li>
              <li><a href="#">{t('footer.pricing')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.solutions')}</h6>
            <ul>
              <li><a href="#">{t('footer.forB2BSaas')}</a></li>
              <li><a href="#">{t('footer.forEcommerce')}</a></li>
              <li><a href="#">{t('footer.forAgencies')}</a></li>
              <li><a href="#">{t('footer.forEnterprise')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.resources')}</h6>
            <ul>
              <li><a href="#">{t('footer.geoPlaybook')}</a></li>
              <li><a href="#">{t('footer.researchLab')}</a></li>
              <li><a href="#">{t('footer.blog')}</a></li>
              <li><a href="#">{t('footer.changelog')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>{t('footer.company')}</h6>
            <ul>
              <li><a href="#">{t('footer.about')}</a></li>
              <li><a href="#">{t('footer.careers')}</a></li>
              <li><a href="#">{t('footer.security')}</a></li>
              <li><a href="#">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t('footer.copyright')}</div>
          <div style={{display: 'flex', gap: 24}}>
            <a href="#" style={{color: 'var(--muted-2)'}}>{t('footer.terms')}</a>
            <a href="#" style={{color: 'var(--muted-2)'}}>{t('footer.privacy')}</a>
            <a href="#" style={{color: 'var(--muted-2)'}}>{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
