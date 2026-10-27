// Navbar - logo, landscaping link, and booking button. Landscaping page hides the middle link.

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BookCallLink from "./BookCallLink.jsx";

function Navbar(props) {
  const minimal = props.minimal;
  const [scrolled, setScrolled] = useState(false);

  useEffect(function handleScroll() {
    function onScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  let navbarClassName = "site-navbar";
  if (scrolled) {
    navbarClassName = navbarClassName + " site-navbar-scrolled";
  }
  if (minimal) {
    navbarClassName = navbarClassName + " site-navbar-minimal";
  }

  return (
    <header className={navbarClassName}>
      <div className="site-navbar-inner page-container">
        <Link to="/" className="site-navbar-logo" aria-label="Compound Automation home">
          <img
            className="site-navbar-logo-mark"
            src="/logo.png"
            alt=""
            width="32"
            height="32"
          />
          <span className="site-navbar-logo-text">
            <span>Compound</span>
            <span>Automation</span>
          </span>
        </Link>

        <nav className="site-navbar-nav" aria-label="Primary">
          {minimal ? null : (
            <NavLink to="/landscaping" className="site-navbar-link">
              Landscaping
            </NavLink>
          )}
          <BookCallLink className="site-navbar-cta-button">Book a Call</BookCallLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
