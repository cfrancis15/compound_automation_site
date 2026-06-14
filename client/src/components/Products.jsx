// Products - standalone tools available today

import { motion } from "framer-motion";
import { portfolioCardHover } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function Products() {
  return (
    <section className="content-section portfolio-section section-alt" id="products">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">PRODUCTS</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">What we&apos;re building.</h2>
        </ScrollReveal>

        <div className="portfolio-cards">
          <ScrollReveal delayMs={240}>
            <motion.article
              className="portfolio-card"
              whileHover={portfolioCardHover}
            >
              <div className="portfolio-card-content">
                <h3 className="card-heading">Deal Screener</h3>
                <p className="portfolio-subtitle">COMING SOON</p>
                <p className="card-body">
                  Automated deal scoring against live comp data. Run bulk searches
                  across groups of zip codes and get a green, yellow, or red signal on
                  every property in seconds. Built for real estate investors and
                  developers who screen volume.
                </p>
                <a href="#contact" className="solution-demo-link">
                  Join the Waitlist
                </a>
              </div>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delayMs={360}>
            <motion.article
              className="portfolio-card"
              whileHover={portfolioCardHover}
            >
              <div className="portfolio-card-content">
                <h3 className="card-heading">More tools in development.</h3>
                <p className="portfolio-subtitle">COMING SOON</p>
                <p className="card-body">
                  Built from real workflows, not assumptions. Join the list to get
                  early access when new tools launch.
                </p>
                <a href="#contact" className="solution-demo-link">
                  Join the Waitlist
                </a>
              </div>
            </motion.article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Products;
