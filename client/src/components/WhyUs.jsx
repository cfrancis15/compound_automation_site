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
          I worked as an analyst at a national CRE brokerage. Pulled comps, built models, formatted memos. Same work, every deal. I got tired of doing it by hand, so I started writing code to do it for me. Compound Automation exists because I've sat in your analyst's chair and I know exactly where the workflow breaks.
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
