// CallToAction - final contact section with Cal.com and email

import { motion } from "framer-motion";
import { CAL_LINK } from "../config.js";
import { ctaButtonHover, ctaButtonTap } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function CallToAction() {
  return (
    <section className="content-section contact-section section-primary" id="contact">
      <div className="page-container contact-content">
        <ScrollReveal>
          <h2 className="section-heading contact-heading">
            Ready to cut the busywork?
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <p className="section-body contact-subheading">
            Tell us what your team does every day. We will tell you what we can
            automate and what it costs. Thirty minutes, no commitment.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <motion.a
            href={CAL_LINK}
            className="cta-button contact-cta-button"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={ctaButtonHover}
            whileTap={ctaButtonTap}
          >
            Book a Discovery Call
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delayMs={360}>
          <p className="contact-email-line">
            Or email me directly:{" "}
            <a className="contact-email-link" href="mailto:connor@compoundautomation.dev">
              connor@compoundautomation.dev
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CallToAction;
