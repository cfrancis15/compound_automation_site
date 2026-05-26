// Problem - describes manual underwriting pain points

import ScrollReveal from "./ScrollReveal.jsx";

function Problem() {
  return (
    <section className="content-section problem-section section-primary" id="problem">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">THE PROBLEM</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">
            Your team is doing the same work on every deal.
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={240}>
          <p className="section-body">
            Your analysts spend hours pulling comps, populating models, and
            formatting deal memos. Every deal. Same manual process. It&apos;s slow,
            error-prone, and it&apos;s costing you real money.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Problem;
