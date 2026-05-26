// HowItWorks - three-step process with pricing

import ScrollReveal from "./ScrollReveal.jsx";

function HowItWorks() {
  return (
    <section
      className="content-section how-it-works-section section-alt"
      id="how-it-works"
    >
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">HOW IT WORKS</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">Three steps to automation.</h2>
        </ScrollReveal>

        <div className="steps-row">
          <ScrollReveal delayMs={240}>
            <article className="step-card">
              <p className="step-number">01</p>
              <h3 className="step-heading">Discovery Call</h3>
              <p className="step-body">
                We learn your workflow, your data sources, and your pain points.
              </p>
              <p className="step-price">Free</p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={360}>
            <article className="step-card">
              <p className="step-number">02</p>
              <h3 className="step-heading">Discovery Audit</h3>
              <p className="step-body">
                We map your entire underwriting process, inventory your data, and
                scope the automation build. You get a written proposal.
              </p>
              <p className="step-price price-mono">$499</p>
            </article>
          </ScrollReveal>

          <ScrollReveal delayMs={480}>
            <article className="step-card">
              <p className="step-number">03</p>
              <h3 className="step-heading">Build &amp; Deploy</h3>
              <p className="step-body">
                We build your automation, integrate it with your existing tools,
                and deploy it. Your team is trained and running within weeks.
              </p>
              <p className="step-price price-mono">$7,000</p>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={600}>
          <p className="how-it-works-note">
            Ongoing hosting and support:{" "}
            <span className="price-mono">$300/month</span>. Feature additions:{" "}
            <span className="price-mono">$50/hour</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default HowItWorks;
