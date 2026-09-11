// CallToAction - closing section with Cal.com booking link

import { motion } from "framer-motion";
import { CAL_LINK } from "../config.js";
import { ctaButtonHover, ctaButtonTap } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function CallToAction(props) {
  const heading = props.heading;
  const text = props.text;
  const sectionClass = props.sectionClass || "section-primary";

  return (
    <section className={"content-section contact-section " + sectionClass}>
      <div className="page-container contact-content">
        <ScrollReveal>
          <h2 className="section-heading contact-heading">{heading}</h2>
        </ScrollReveal>
        <ScrollReveal delayMs={80}>
          <p className="section-body contact-subheading">{text}</p>
        </ScrollReveal>
        <ScrollReveal delayMs={160}>
          <motion.a
            href={CAL_LINK}
            className="cta-button contact-cta-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a call with Connor"
            whileHover={ctaButtonHover}
            whileTap={ctaButtonTap}
          >
            Book a Call
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CallToAction;
