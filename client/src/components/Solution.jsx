// Solution - two service offerings in a single bordered container

import ScrollReveal from "./ScrollReveal.jsx";

function Solution() {
  return (
    <section className="content-section solution-section section-alt" id="solution">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">SERVICES</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">What we build.</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <div className="solution-phases">
            <article className="solution-phase">
              <p className="card-phase-label">PRODUCTIZED SERVICE</p>
              <h3 className="card-heading">Underwriting Automation</h3>
              <p className="card-body">
                We build your data pipeline from intake to output. Messy seller
                financials, comps data, platform exports — structured and flowing
                into your underwriting model automatically. Branded deal memos
                generated on the other side.
              </p>
              <p className="solution-phase-footnote price-mono">From $7,000</p>
            </article>

            <article className="solution-phase">
              <p className="card-phase-label">CUSTOM BUILDS</p>
              <h3 className="card-heading">CRE Workflow Engineering</h3>
              <p className="card-body">
                Bespoke automation for the rest of your operation. Pipeline
                tracking, portfolio reporting, investor communications, comp
                databases — whatever is eating your team&apos;s hours, we scope it
                and build it.
              </p>
              <p className="solution-phase-footnote">Scoped per engagement</p>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solution;
