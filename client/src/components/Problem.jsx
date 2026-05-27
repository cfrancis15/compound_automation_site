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
          <h2 className="section-heading">Same work. Every deal.</h2>
        </ScrollReveal>
        <ScrollReveal delayMs={240}>
          <p className="section-body">
            Your analysts pull comps, populate models, and format deal memos by
            hand. Every deal. Same manual process. It&apos;s slow, it&apos;s error-prone,
            and the hours add up fast.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Problem;
