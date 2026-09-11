// HomePage - positioning, service paths, audience, and closing CTA

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { solutionCardHover } from "../animations.js";
import usePageMeta from "../hooks/usePageMeta.js";
import Hero from "../components/Hero.jsx";
import CallToAction from "../components/CallToAction.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

function HomePage() {
  usePageMeta(
    "Compound Automation | Websites, Software, and Digital Growth",
    "Compound Automation builds websites, software, and digital marketing systems that help businesses reach more customers and grow."
  );

  return (
    <>
      <Hero />

      <section
        className="content-section section-alt"
        id="services"
        aria-labelledby="positioning-heading"
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="positioning-heading">
              Better websites. More qualified traffic. More customers.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              We build the digital foundation and growth systems that help
              businesses get found, get trusted, and get chosen.
            </p>
          </ScrollReveal>

          <div className="home-service-grid">
            <ScrollReveal delayMs={160}>
              <motion.article
                className="surface-card home-service-card"
                whileHover={solutionCardHover}
              >
                <h3 className="card-heading">Build</h3>
                <p className="card-body">
                  Websites and software designed around your business, your
                  customers, and the way your team works.
                </p>
                <Link to="/build" className="cta-button-secondary card-cta">
                  Explore Build
                </Link>
              </motion.article>
            </ScrollReveal>

            <ScrollReveal delayMs={240}>
              <motion.article
                className="surface-card home-service-card"
                whileHover={solutionCardHover}
              >
                <h3 className="card-heading">Grow</h3>
                <p className="card-body">
                  Focused digital marketing that helps more people find your
                  business and gives them a reason to buy.
                </p>
                <Link to="/grow" className="cta-button-secondary card-cta">
                  Explore Grow
                </Link>
              </motion.article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        className="content-section section-primary"
        aria-labelledby="audience-heading"
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="audience-heading">
              Built for businesses that are ready to grow.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              We work with SaaS companies, local service businesses, specialty
              retailers, agencies, and other growing teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CallToAction
        heading="Ready to build something better?"
        text="Tell us what you are trying to build, improve, or grow. We will help you determine the right next step."
        sectionClass="section-alt"
      />
    </>
  );
}

export default HomePage;
