import { EnigmaMark } from './icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="brand">
              <span className="brand-mark"><EnigmaMark size={26} color="#F4EFE6"/></span>
              enigma
            </a>
            <p>The GEO/AEO platform that gets your brand cited, recommended, and chosen by AI agents.</p>
          </div>
          <div className="footer-col">
            <h6>Product</h6>
            <ul>
              <li><a href="#">AI Visibility</a></li>
              <li><a href="#">Citation Tracking</a></li>
              <li><a href="#">Agent Experience</a></li>
              <li><a href="#">Search Trends</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Solutions</h6>
            <ul>
              <li><a href="#">For B2B SaaS</a></li>
              <li><a href="#">For E-commerce</a></li>
              <li><a href="#">For Agencies</a></li>
              <li><a href="#">For Enterprise</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Resources</h6>
            <ul>
              <li><a href="#">GEO Playbook</a></li>
              <li><a href="#">Research Lab</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Enigma Labs Inc. — All rights reserved.</div>
          <div style={{display: 'flex', gap: 24}}>
            <a href="#" style={{color: 'var(--muted-2)'}}>Terms</a>
            <a href="#" style={{color: 'var(--muted-2)'}}>Privacy</a>
            <a href="#" style={{color: 'var(--muted-2)'}}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
