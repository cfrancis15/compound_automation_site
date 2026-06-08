import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/** Return the nav link class based on whether the route is active. */
function getNavLinkClass(isActive) {
  let linkClass = "nav-link";

  if (isActive) {
    linkClass = "nav-link active";
  }

  return linkClass;
}

/**
 * Top navigation bar shared across all pages.
 * On mobile, links collapse behind a hamburger menu.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  let menuClass = "navbar-links";

  if (menuOpen) {
    menuClass = "navbar-links open";
  }

  let toggleLabel = "Open menu";

  if (menuOpen) {
    toggleLabel = "Close menu";
  }

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-brand">
          <NavLink to="/demo" className="navbar-title-link" onClick={closeMenu}>
            <h1 className="navbar-title">Deal Screener Demo</h1>
          </NavLink>
          <p className="navbar-subtitle">
            Automated Deal Screening for Real Estate Investors
          </p>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={toggleLabel}
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
      </div>

      <nav className={menuClass}>
        <NavLink
          to="/demo"
          end
          className={({ isActive }) => getNavLinkClass(isActive)}
          onClick={closeMenu}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/demo/screens"
          className={({ isActive }) => getNavLinkClass(isActive)}
          onClick={closeMenu}
        >
          Screens
        </NavLink>
        <Link to="/" className="nav-link nav-link-home" onClick={closeMenu}>
          ← Back to Site
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
