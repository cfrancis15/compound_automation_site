// SiteLayout - marketing header, footer, and scroll reset

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { funnelThemes } from "../data/industries.js";

function SiteLayout() {
  const location = useLocation();
  const funnelTheme = funnelThemes[location.pathname] || "";
  const isMinimal =
    Boolean(funnelTheme) || location.pathname === "/outbound";

  useEffect(
    function resetScroll() {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace("#", ""));
        if (target) {
          target.scrollIntoView();
          return;
        }
      }

      window.scrollTo(0, 0);
    },
    [location.pathname, location.hash]
  );

  let shellClassName = "site-shell";
  if (isMinimal) {
    shellClassName = shellClassName + " funnel-page";
  }
  if (funnelTheme) {
    shellClassName = shellClassName + " " + funnelTheme;
  }

  return (
    <div className={shellClassName}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar minimal={isMinimal} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
