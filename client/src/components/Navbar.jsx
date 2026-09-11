// Navbar - fixed top navigation with route links and mobile menu

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CAL_LINK } from "../config.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(
    function closeOnRouteChange() {
      setMenuOpen(false);
    },
    [location.pathname]
  );

  useEffect(function handleScroll() {
    function onScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  let navbarClassName = "site-navbar";
  if (scrolled) {
    navbarClassName = navbarClassName + " site-navbar-scrolled";
  }

  let navClassName = "site-navbar-nav";
  if (menuOpen) {
    navClassName = navClassName + " site-navbar-nav-open";
  }

  return (
    <header className={navbarClassName}>
      <div className="site-navbar-inner page-container">
        <Link
          to="/"
          className="site-navbar-logo"
          aria-label="Compound Automation home"
          onClick={closeMenu}
        >
          <img
            className="site-navbar-logo-mark"
            src="/logo.png"
            alt=""
            width="32"
            height="32"
          />
          <span className="site-navbar-logo-text">Compound Automation</span>
        </Link>

        <button
          type="button"
          className="site-navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={function toggleMenu() {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="site-navbar-toggle-bar" />
          <span className="site-navbar-toggle-bar" />
          <span className="site-navbar-toggle-bar" />
        </button>

        <nav className={navClassName} aria-label="Primary">
          <NavLink to="/build" className="site-navbar-link" onClick={closeMenu}>
            Build
          </NavLink>
          <NavLink to="/grow" className="site-navbar-link" onClick={closeMenu}>
            Grow
          </NavLink>
          <NavLink
            to="/products"
            className="site-navbar-link"
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <a
            href={CAL_LINK}
            className="site-navbar-cta-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a call with Connor"
            onClick={closeMenu}
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
