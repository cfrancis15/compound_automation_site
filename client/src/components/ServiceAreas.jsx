// ServiceAreas - three-up service cards for Build and Grow pages

import { motion } from "framer-motion";
import { solutionCardHover } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function ServiceAreas(props) {
  const areas = props.areas;
  const headingId = props.headingId;
  const sectionClass = props.sectionClass || "section-alt";

  return (
    <section
      className={"content-section " + sectionClass}
      aria-labelledby={headingId}
    >
      <div className="page-container">
        <h2 className="visually-hidden" id={headingId}>
          {props.heading}
        </h2>
        <div className="service-grid">
          {areas.map(function renderArea(area, index) {
            return (
              <ScrollReveal key={area.title} delayMs={index * 80}>
                <motion.article
                  className="surface-card service-card"
                  whileHover={solutionCardHover}
                >
                  <h3 className="card-heading">{area.title}</h3>
                  <p className="card-body">{area.body}</p>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
