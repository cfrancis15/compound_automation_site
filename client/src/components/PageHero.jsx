// PageHero - inner-page intro with eyebrow, headline, and supporting text

import ScrollReveal from "./ScrollReveal.jsx";

function PageHero(props) {
  const eyebrow = props.eyebrow;
  const heading = props.heading;
  const headingId = props.headingId;
  const text = props.text;
  const compact = props.compact;

  let sectionClassName = "page-hero section-primary";
  if (compact) {
    sectionClassName = sectionClassName + " page-hero-compact";
  }

  return (
    <section className={sectionClassName} aria-labelledby={headingId}>
      <div className="page-container">
        <ScrollReveal>
          <p className="section-label">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal delayMs={80}>
          <h1 className="page-hero-headline" id={headingId}>
            {heading}
          </h1>
        </ScrollReveal>
        <ScrollReveal delayMs={160}>
          <p className="page-hero-body">{text}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default PageHero;
