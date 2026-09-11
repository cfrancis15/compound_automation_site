// GrowPage - search, paid traffic, and conversion services

import usePageMeta from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import ServiceAreas from "../components/ServiceAreas.jsx";
import ProcessList from "../components/ProcessList.jsx";
import CallToAction from "../components/CallToAction.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

const growAreas = [
  {
    title: "Search Visibility",
    body: "Improve how your business appears in search through SEO, local search improvements, and useful website content.",
  },
  {
    title: "Paid Traffic",
    body: "Create focused advertising campaigns designed to generate qualified visits, inquiries, signups, or sales.",
  },
  {
    title: "Conversion Improvement",
    body: "Improve pages, offers, forms, and calls to action so more visitors take the next step.",
  },
];

const growSteps = [
  {
    number: "01",
    title: "Review",
    body: "Understand the current website, traffic sources, and conversion path.",
  },
  {
    number: "02",
    title: "Prioritize",
    body: "Identify the highest-impact opportunities.",
  },
  {
    number: "03",
    title: "Execute",
    body: "Implement improvements across search, advertising, content, and conversion.",
  },
  {
    number: "04",
    title: "Measure",
    body: "Review results and determine what to improve next.",
  },
];

function GrowPage() {
  usePageMeta(
    "Grow | Compound Automation",
    "Compound helps businesses improve online visibility, attract qualified traffic, and turn more visitors into customers."
  );

  return (
    <>
      <PageHero
        eyebrow="Grow"
        heading="Get more people to your website—and give them a reason to buy."
        headingId="grow-heading"
        text="Compound helps businesses improve their online visibility, attract qualified traffic, and turn more visitors into customers through focused digital marketing."
      />
      <ServiceAreas
        heading="Grow services"
        headingId="grow-services-heading"
        areas={growAreas}
      />

      <section
        className="content-section section-primary"
        aria-labelledby="traffic-heading"
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="traffic-heading">
              Traffic is only the first step.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              More visitors do not automatically create more sales. Your website
              needs to communicate clearly, build trust, make the next step
              obvious, and give you a way to measure what happens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ProcessList
        heading="Growth process"
        headingId="grow-process-heading"
        steps={growSteps}
        sectionClass="section-alt"
        showHeading={false}
      />
      <CallToAction
        heading="Want more qualified traffic and sales?"
        text="Let’s look at where your digital presence is working, where it is losing opportunities, and what to improve first."
        sectionClass="section-primary"
      />
    </>
  );
}

export default GrowPage;
