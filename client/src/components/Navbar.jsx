// Navbar - fixed top navigation with anchor links and mobile menu

import { useState, useEffect } from "react";
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

  let navbarClassName = "navbar";
  if (scrolled) {
    navbarClassName = navbarClassName + " navbar-scrolled";
  }

  let navClassName = "navbar-nav";
  if (menuOpen) {
    navClassName = navClassName + " navbar-nav-open";
  }

  return (
    <header className={navbarClassName}>
      <div className="navbar-inner page-container">
        <a
          href="#"
          className="navbar-logo"
          onClick={function goTop(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Compound Automation
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={function toggleMenu() {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        <nav className={navClassName}>
          <a
            href="#problem"
            className="navbar-link"
            onClick={function handleProblem(event) {
              scrollToSection(event, "problem");
            }}
          >
            Problem
          </a>
          <a
            href="#solution"
            className="navbar-link"
            onClick={function handleSolution(event) {
              scrollToSection(event, "solution");
            }}
          >
            Solution
          </a>
          <a
            href="#how-it-works"
            className="navbar-link"
            onClick={function handleHow(event) {
              scrollToSection(event, "how-it-works");
            }}
          >
            How It Works
          </a>
          <a
            href="#portfolio"
            className="navbar-link"
            onClick={function handlePortfolio(event) {
              scrollToSection(event, "portfolio");
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="navbar-link"
            onClick={function handleContact(event) {
              scrollToSection(event, "contact");
            }}
          >
            Contact
          </a>
          <a
            href={CAL_LINK}
            className="navbar-cta-button"
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
