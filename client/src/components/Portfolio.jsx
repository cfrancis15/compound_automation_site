// Portfolio - showcases two CRE automation tools with screenshots

import { motion } from "framer-motion";
import financialAnalysisImage from "../assets/financial-analysis-streamliner.png";
import rentCompsImage from "../assets/rent-comps-manager.png";
import { portfolioCardHover } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function Portfolio() {
  return (
    <section className="content-section portfolio-section section-primary" id="portfolio">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">EXAMPLES</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">Built for CRE.</h2>
        </ScrollReveal>

        <div className="portfolio-cards">
          <ScrollReveal delayMs={240}>
            <motion.article
              className="portfolio-card"
              whileHover={portfolioCardHover}
            >
              <img
                className="portfolio-image"
                src={financialAnalysisImage}
                alt="Financial Analysis Streamliner expense categorization dashboard"
              />
              <div className="portfolio-card-content">
                <h3 className="card-heading">Financial Analysis Streamliner</h3>
                <p className="portfolio-subtitle">CRE Underwriting Tool</p>
                <p className="card-body">
                  Drag-and-drop expense categorization and underwriting automation.
                  Structures messy seller financials into clean, exportable models.
                </p>
              </div>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delayMs={360}>
            <motion.article
              className="portfolio-card"
              whileHover={portfolioCardHover}
            >
              <img
                className="portfolio-image"
                src={rentCompsImage}
                alt="Self-Storage Rent Comps Manager with Yardi Radius import"
              />
              <div className="portfolio-card-content">
                <h3 className="card-heading">Self-Storage Rent Comps Manager</h3>
                <p className="portfolio-subtitle">CRE Automation Tool</p>
                <p className="card-body">
                  Pulls Yardi Radius export data, maps it to a master comp template,
                  and generates timestamped rent comp reports in one click.
                </p>
              </div>
            </motion.article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
