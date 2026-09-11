// BuildPage - websites, software, and automation services

import usePageMeta from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import ServiceAreas from "../components/ServiceAreas.jsx";
import ProcessList from "../components/ProcessList.jsx";
import CallToAction from "../components/CallToAction.jsx";

const buildAreas = [
  {
    title: "Websites",
    body: "Professional, responsive websites that clarify your offer, establish credibility, and turn visitors into inquiries, signups, or sales.",
  },
  {
    title: "Software",
    body: "Web applications, internal tools, dashboards, and custom systems built around your business.",
  },
  {
    title: "Automation and Integrations",
    body: "Connected workflows that reduce repetitive work and help your existing tools work better together.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    body: "We learn what you are trying to accomplish and where the current process breaks down.",
  },
  {
    number: "02",
    title: "Plan",
    body: "We define the scope, priorities, timeline, and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    body: "We design and develop the website or software around the intended outcome.",
  },
  {
    number: "04",
    title: "Launch",
    body: "We deploy the project, connect the necessary tools, and make sure everything works as expected.",
  },
  {
    number: "05",
    title: "Improve",
    body: "We can continue supporting the system with updates, development, and growth work.",
  },
];

function BuildPage() {
  usePageMeta(
    "Build | Compound Automation",
    "Compound builds websites, software, and automation systems around the way your business works."
  );

  return (
    <>
      <PageHero
        eyebrow="Build"
        heading="Websites and software built for the way your business works."
        headingId="build-heading"
        text="Compound builds the digital foundation businesses use to explain what they offer, serve customers, and operate more effectively."
      />
      <ServiceAreas
        heading="Build services"
        headingId="build-services-heading"
        areas={buildAreas}
      />
      <ProcessList
        heading="From idea to launch."
        headingId="build-process-heading"
        steps={buildSteps}
      />
      <CallToAction
        heading="Have a website or software project in mind?"
        text="Tell us what you are trying to build. We will help you determine the right approach and next step."
        sectionClass="section-alt"
      />
    </>
  );
}

export default BuildPage;
