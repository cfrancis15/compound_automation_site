// SiteLayout - marketing header, footer, and scroll reset

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function SiteLayout() {
  const location = useLocation();
  const isLandscaping = location.pathname === "/landscaping";

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
  if (isLandscaping) {
    shellClassName = shellClassName + " theme-landscaping";
  }

  return (
    <div className={shellClassName}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar minimal={isLandscaping} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
