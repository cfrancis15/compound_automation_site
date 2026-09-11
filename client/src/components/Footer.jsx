// Footer - brand, section links, and contact details

import { Link } from "react-router-dom";
import { CAL_LINK } from "../config.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Compound Automation</p>
          <p className="footer-tagline">
            Websites, software, and digital marketing systems for growing
            businesses.
          </p>
          <p className="footer-copyright">© 2026 Compound Automation</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link className="footer-link" to="/build">
            Build
          </Link>
          <Link className="footer-link" to="/grow">
            Grow
          </Link>
          <Link className="footer-link" to="/products">
            Products
          </Link>
          <a
            className="footer-link"
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a call with Connor"
          >
            Book a Call
          </a>
        </nav>

        <div className="footer-details">
          <p className="footer-line">
            <a
              className="footer-link"
              href="mailto:connor@compoundautomation.dev"
            >
              connor@compoundautomation.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
