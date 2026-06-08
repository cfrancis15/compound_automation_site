// Navbar - fixed top navigation with anchor links and mobile menu

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CAL_LINK } from "../config.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
        <a
          href="#"
          className="site-navbar-logo"
          onClick={function goTop(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            className="site-navbar-logo-mark"
            src="/logo.png"
            alt="Compound Automation"
            width="32"
            height="32"
          />
          <span className="site-navbar-logo-text">Compound Automation</span>
        </a>

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

        <nav className={navClassName}>
          <a
            href="#problem"
            className="site-navbar-link"
            onClick={function handleProblem(event) {
              scrollToSection(event, "problem");
            }}
          >
            Problem
          </a>
          <a
            href="#solution"
            className="site-navbar-link"
            onClick={function handleSolution(event) {
              scrollToSection(event, "solution");
            }}
          >
            Solution
          </a>
          <a
            href="#how-it-works"
            className="site-navbar-link"
            onClick={function handleHow(event) {
              scrollToSection(event, "how-it-works");
            }}
          >
            How It Works
          </a>
          <a
            href="#portfolio"
            className="site-navbar-link"
            onClick={function handlePortfolio(event) {
              scrollToSection(event, "portfolio");
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="site-navbar-link"
            onClick={function handleContact(event) {
              scrollToSection(event, "contact");
            }}
          >
            Contact
          </a>
          <Link to="/demo" className="site-navbar-demo-button">
            View Live Demo
          </Link>
          <a
            href={CAL_LINK}
            className="site-navbar-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
