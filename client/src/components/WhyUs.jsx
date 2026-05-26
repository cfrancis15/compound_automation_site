// WhyUs - founder story with signature block

import ScrollReveal from "./ScrollReveal.jsx";

function WhyUs() {
  return (
    <section className="content-section why-us-section section-primary" id="why-us">
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">WHY COMPOUND</p>
        </ScrollReveal>
        <ScrollReveal delayMs={120}>
          <h2 className="section-heading">Built by someone who&apos;s done the job.</h2>
        </ScrollReveal>
        <ScrollReveal delayMs={240}>
          <p className="section-body why-us-body">
            I spent time as an analyst at a national CRE brokerage. I&apos;ve pulled
            the comps, built the models, formatted the memos. I built automation
            tools on the job because I got tired of doing it by hand. Compound
            Automation exists because I know exactly where your workflow breaks,
            and I know how to fix it.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={360}>
          <div className="why-us-signature">
            <span className="signature-line" aria-hidden="true" />
            <p className="signature-name">Connor Francis</p>
            <p className="signature-role">Founder</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default WhyUs;
