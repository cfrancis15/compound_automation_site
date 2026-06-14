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
                You walk us through your workflow. We tell you exactly what we can
                build and what it costs. No commitment.
              </p>
              <p className="step-price">Free</p>
              <p className="step-note">30 minutes, no commitment</p>
            </article>

            <article className="process-step">
              <p className="step-number">02</p>
              <h3 className="step-heading">Build and Deploy</h3>
              <p className="step-body">
                We build your tool, integrate it into your existing stack, and train
                your team. You are up and running within weeks.
              </p>
              <p className="step-price">2-6 weeks</p>
              <p className="step-note">Depending on scope</p>
            </article>

            <article className="process-step">
              <p className="step-number">03</p>
              <h3 className="step-heading">Maintain and Iterate</h3>
              <p className="step-body">
                Your tool stays running and keeps getting better. We handle hosting,
                bug fixes, and data updates. New workflows get added when you need
                them.
              </p>
              <p className="step-price price-mono">$300/month</p>
              <p className="step-note">
                Retainer optional. Feature additions billed separately.
              </p>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default HowItWorks;
