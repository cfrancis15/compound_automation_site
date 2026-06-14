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
          <h2 className="section-heading">Your team is doing the same work every day.</h2>
        </ScrollReveal>
        <ScrollReveal delayMs={240}>
          <p className="section-body">
          Every deal means another round of comp pulls, model updates, and formatted reports. Every property under management means another spreadsheet, another approval chain, another manual process. The work is predictable. It shouldn't require your best people to do it by hand.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Problem;
