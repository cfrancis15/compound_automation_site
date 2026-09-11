// SiteLayout - shared marketing header, footer, and scroll reset

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function SiteLayout() {
  const location = useLocation();

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

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default SiteLayout;
