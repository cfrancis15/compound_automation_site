// Solution - custom software and products offerings

import ScrollReveal from "./ScrollReveal.jsx";

function Solution() {
  return (
    <section className="content-section solution-section section-alt" id="services">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">WHAT WE BUILD</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">Two ways we help.</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <div className="solution-columns">
            <div className="solution-column">
              <p className="section-label">CUSTOM SOFTWARE</p>
              <p className="section-body">
                We scope, build, and deploy tools built around your specific workflow.
                Not a generic SaaS you have to adapt to, rather software that works the way
                your team already works. One-time project or ongoing partnership.
              </p>
            </div>

            <div className="solution-column">
              <p className="section-label">PRODUCTS</p>
              <p className="section-body">
                Standalone tools built for common real estate workflows. No scoping
                call, no implementation work. Plug in and go. New tools launching
                throughout 2026.
              </p>
              <a href="#products" className="solution-demo-link">
                View Products
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solution;
