// HomePage - local service businesses, with industry pages added from the list below

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { homeSeo } from "../seo.js";
import BookCallLink from "../components/BookCallLink.jsx";
import LeadForm from "../components/LeadForm.jsx";
import ProcessList from "../components/ProcessList.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

const services = [
  {
    title: "Get found",
    body: "Show up first when customers search Google or ask AI for a business like yours.",
  },
  {
    title: "Get calls",
    body: "Ads and landing pages that turn searches into phone calls and quote requests.",
  },
  {
    title: "Win the job",
    body: "A fast, credible website that makes customers pick you over the next guy.",
  },
];

// Add an object here to feature another industry on the homepage.
const industries = [
  {
    name: "Landscaping",
    summary: "More booked jobs for landscaping and lawn care companies.",
    href: "/landscaping",
    linkText: "See how it works",
  },
];

const steps = [
  {
    number: "01",
    title: "Free growth plan",
    body: "We look at your business, your market, and your competitors, and show you exactly where the jobs are.",
  },
  {
    number: "02",
    title: "Custom proposal",
    body: "You get a plan built around your goals with a clear monthly quote. No packages, nothing you don't need.",
  },
  {
    number: "03",
    title: "We run it",
    body: "We build and manage everything, with simple monthly reporting. Month to month, no long contracts.",
  },
];

function HomePage() {
  const location = useLocation();
  const heroRef = useRef(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [cursorGlowEnabled, setCursorGlowEnabled] = useState(false);
  usePageMeta(homeSeo);

  useEffect(function detectPointerDevice() {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice = "ontouchstart" in window;
    if (hasFinePointer && !isTouchDevice) {
      setCursorGlowEnabled(true);
    }
  }, []);

  useEffect(
    function trackMouse() {
      if (!cursorGlowEnabled) {
        return undefined;
      }

      function handleMouseMove(event) {
        const heroElement = heroRef.current;
        if (!heroElement) {
          return;
        }

        const bounds = heroElement.getBoundingClientRect();
        setGlowPosition({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
        });
      }

      window.addEventListener("mousemove", handleMouseMove);

      return function cleanup() {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    [cursorGlowEnabled]
  );

  let glowStyle = {};
  if (cursorGlowEnabled) {
    glowStyle = {
      left: glowPosition.x + "px",
      top: glowPosition.y + "px",
    };
  }

  return (
    <>
      <section
        className="hero-section home-hero section-primary"
        aria-labelledby="home-heading"
        ref={heroRef}
      >
        {cursorGlowEnabled && (
          <div className="hero-cursor-glow" style={glowStyle} aria-hidden="true" />
        )}
        <div className="page-container hero-content">
          <h1 className="hero-headline" id="home-heading">
            More customers for local service businesses.
          </h1>
          <p className="hero-subheading">
            We dig into your business, your market, and your competitors, then
            build and run a marketing plan around what will actually bring in
            jobs.
          </p>
          <div className="hero-actions">
            <a href="#home-growth-plan" className="cta-button">
              Get a free growth plan
            </a>
            <BookCallLink className="cta-button-secondary">Book a call</BookCallLink>
          </div>
        </div>
      </section>

      <section className="content-section section-alt" aria-labelledby="services-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="services-heading">
              What we do
            </h2>
          </ScrollReveal>
          <div className="service-grid">
            {services.map(function renderService(service, index) {
              return (
                <ScrollReveal key={service.title} delayMs={index * 80}>
                  <article className="surface-card service-card">
                    <h3 className="card-heading">{service.title}</h3>
                    <p className="card-body">{service.body}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="content-section section-primary"
        aria-labelledby="industries-heading"
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="industries-heading">
              Industries we specialize in
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              We focus on a few industries so we know how their customers
              actually find and choose a business.
            </p>
          </ScrollReveal>
          <div className="industry-grid">
            {industries.map(function renderIndustry(industry) {
              return (
                <ScrollReveal key={industry.href}>
                  <article className="surface-card service-card">
                    <h3 className="card-heading">{industry.name}</h3>
                    <p className="card-body">{industry.summary}</p>
                    <Link
                      to={industry.href + location.search}
                      className="text-link card-cta"
                    >
                      {industry.linkText} <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessList
        heading="How it works"
        headingId="home-process-heading"
        steps={steps}
        sectionClass="section-alt"
      />

      <section className="content-section section-primary" aria-labelledby="about-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="about-heading">
              About
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <div className="about-copy">
              <p className="section-body">
                When someone looks for a landscaper, a plumber, or the shop
                down the street, the name they see first gets the job. My job
                is to make sure that name is yours.
              </p>
              <p className="section-body">
                I'm Connor Francis, based in Boulder County, Colorado. You
                work directly with me. I build your strategy and stay your
                point of contact, with a team of specialists behind me
                handling search, ads, websites, and content.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="content-section contact-section section-alt"
        aria-labelledby="closing-cta-heading"
      >
        <div className="page-container contact-content">
          <ScrollReveal>
            <h2 className="section-heading contact-heading" id="closing-cta-heading">
              Find out where your next customers are coming from.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <div className="final-cta-form" id="home-growth-plan">
              <LeadForm
                idPrefix="home-lead"
                labelledBy="closing-cta-heading"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default HomePage;
