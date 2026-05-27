// HowItWorks - three-step process with shared bordered layout

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
          <h2 className="section-heading">How it starts.</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={240}>
          <div className="process-steps">
            <article className="process-step">
              <p className="step-number">01</p>
              <h3 className="step-heading">Discovery Call</h3>
              <p className="step-body">
                Tell us what your team does on every deal. We will tell you what we
                can automate and what it costs. No commitment.
              </p>
              <p className="step-price">Free</p>
              <p className="step-note">30 minutes, no commitment</p>
            </article>

            <article className="process-step">
              <p className="step-number">02</p>
              <h3 className="step-heading">Build &amp; Deploy</h3>
              <p className="step-body">
                We build your automation, plug it into your existing tools, and
                train your team. You are up and running within weeks.
              </p>
              <p className="step-price">2-6 weeks</p>
              <p className="step-note">Depending on scope</p>
            </article>

            <article className="process-step">
              <p className="step-number">03</p>
              <h3 className="step-heading">Maintain &amp; Iterate</h3>
              <p className="step-body">
                Your automation stays running and keeps getting better. We handle
                hosting, bug fixes, and data source updates. When you need new
                features or workflows, we build those too.
              </p>
              <p className="step-price price-mono">$300/month</p>
              <p className="step-note">Feature additions: $50/hr</p>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default HowItWorks;
