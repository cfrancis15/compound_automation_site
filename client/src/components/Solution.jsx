// Solution - three product tiers in a shared bordered grid

import ScrollReveal from "./ScrollReveal.jsx";

function Solution() {
  return (
    <section className="content-section solution-section section-alt" id="solution">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">WHAT WE BUILD</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">Three ways forward.</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <div className="solution-phases">
            <article className="solution-phase">
              <p className="card-phase-label">ENTRY POINT</p>
              <h3 className="card-heading">Comps Automator</h3>
              <p className="card-body">
                A standalone tool that pulls your comparable sales/rent data from your
                sources, structures it, and outputs formatted comps. One
                workflow, one pain point, delivered fast.
              </p>
              <div className="solution-tier-price">
                <p className="solution-tier-price-value price-mono">$2,000</p>
                <p className="solution-tier-price-note">Delivered in 2 weeks</p>
              </div>
            </article>

            <article className="solution-phase">
              <p className="card-phase-label">CORE PACKAGE</p>
              <h3 className="card-heading">Underwriting Automation</h3>
              <p className="card-body">
              The full pipeline. We structure your messy data inputs,
                auto-populate your underwriting model, and generate branded deal
                memos on the back end. Your analysts evaluate deals instead of
                entering data.
              </p>
              <div className="solution-tier-price">
                <p className="solution-tier-price-value price-mono">$7,000+</p>
                <p className="solution-tier-price-note">Scoped to your workflow</p>
              </div>
            </article>

            <article className="solution-phase">
              <p className="card-phase-label">CUSTOM BUILD</p>
              <h3 className="card-heading">Workflow Engineering</h3>
              <p className="card-body">
                Bespoke automation for the rest of your operation. Pipeline
                tracking, portfolio reporting, investor communications, deal
                screening. Whatever is eating your team&apos;s hours, we scope it
                and build it.
              </p>
              <div className="solution-tier-price">
                <p className="solution-tier-price-value price-mono">
                  Quoted per project
                </p>
                <p className="solution-tier-price-note">Free scoping call</p>
              </div>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solution;
