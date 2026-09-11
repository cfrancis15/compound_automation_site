// ProcessList - numbered process steps used on Build and Grow

import ScrollReveal from "./ScrollReveal.jsx";

function ProcessList(props) {
  const heading = props.heading;
  const headingId = props.headingId;
  const steps = props.steps;
  const sectionClass = props.sectionClass || "section-primary";
  const showHeading = props.showHeading !== false;

  return (
    <section
      className={"content-section " + sectionClass}
      aria-labelledby={headingId}
    >
      <div className="page-container">
        {showHeading ? (
          <ScrollReveal>
            <h2 className="section-heading" id={headingId}>
              {heading}
            </h2>
          </ScrollReveal>
        ) : (
          <h2 className="visually-hidden" id={headingId}>
            {heading}
          </h2>
        )}

        <ScrollReveal delayMs={80}>
          <ol className="process-list">
            {steps.map(function renderStep(step) {
              return (
                <li className="process-item" key={step.number}>
                  <p className="process-number">{step.number}</p>
                  <div className="process-copy">
                    <h3 className="process-heading">{step.title}</h3>
                    <p className="process-body">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProcessList;
