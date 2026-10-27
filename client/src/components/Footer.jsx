// Footer - company, location, email, booking link, and year

import BookCallLink from "./BookCallLink.jsx";
import { CONTACT_EMAIL } from "../seo.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <ul className="footer-meta">
          <li>Compound Automation</li>
          <li>Boulder County, Colorado</li>
          <li>
            <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <BookCallLink className="footer-link">Book a call</BookCallLink>
          </li>
          <li>© 2026</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
