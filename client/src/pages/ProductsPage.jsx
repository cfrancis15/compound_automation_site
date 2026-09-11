// ProductsPage - minimal coming-soon products overview

import { motion } from "framer-motion";
import { CAL_LINK } from "../config.js";
import { ctaButtonHover, ctaButtonTap, solutionCardHover } from "../animations.js";
import usePageMeta from "../hooks/usePageMeta.js";
import ScrollReveal from "../components/ScrollReveal.jsx";

function ProductsPage() {
  usePageMeta(
    "Products | Compound Automation",
    "Compound is developing focused software products built around repetitive workflows and practical business problems."
  );

  return (
    <section
      className="page-hero page-hero-compact section-primary"
      aria-labelledby="products-heading"
    >
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">Products</p>
        </ScrollReveal>
        <ScrollReveal delayMs={80}>
          <h1 className="page-hero-headline" id="products-heading">
            Tools for common business workflows.
          </h1>
        </ScrollReveal>
        <ScrollReveal delayMs={160}>
          <p className="page-hero-body">
            Compound is developing focused software products built around
            repetitive workflows and practical business problems.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <motion.article
            className="surface-card products-card"
            whileHover={solutionCardHover}
          >
            <p className="card-phase-label">Coming soon</p>
            <h2 className="card-heading">New products are in development.</h2>
            <p className="card-body">
              We are building practical tools that make common business workflows
              simpler, faster, and easier to manage.
            </p>
            <motion.a
              href={CAL_LINK}
              className="cta-button card-cta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={ctaButtonHover}
              whileTap={ctaButtonTap}
            >
              Book a Call
            </motion.a>
          </motion.article>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProductsPage;
