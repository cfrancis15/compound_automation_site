// LandscapingPage - single-purpose funnel for landscaping company owners

import { useEffect, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { landscapingSeo } from "../seo.js";
import {
  growthPlanItems,
  heroBullets,
  landscapingFaqs,
  landscapingSteps,
  offerItems,
  whyCompound,
} from "../data/landscaping.js";
import BookCallLink from "../components/BookCallLink.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import LeadForm from "../components/LeadForm.jsx";
import ProcessList from "../components/ProcessList.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

function scrollToForm() {
  const target = document.getElementById("growth-plan");
  if (!target) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

function StickyPlanCta(props) {
  const leadSent = props.leadSent;
  const [formInView, setFormInView] = useState(true);

  useEffect(function watchForms() {
    const nodes = [
      document.getElementById("growth-plan"),
      document.getElementById("growth-plan-bottom"),
    ].filter(function keepNode(node) {
      return node;
    });

    if (nodes.length === 0) {
      return undefined;
    }

    const visible = new Set();
    const observer = new IntersectionObserver(
      function onIntersect(entries) {
        entries.forEach(function trackEntry(entry) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        setFormInView(visible.size > 0);
      },
      { threshold: 0 }
    );

    nodes.forEach(function observeNode(node) {
      observer.observe(node);
    });

    return function cleanup() {
      observer.disconnect();
    };
  }, []);

  if (leadSent || formInView) {
    return null;
  }

  return (
    <a className="sticky-plan-cta" href="#growth-plan">
      Get my free growth plan
    </a>
  );
}

function LandscapingPage() {
  usePageMeta(landscapingSeo);
  const [leadSent, setLeadSent] = useState(false);

  function markSent() {
    setLeadSent(true);
  }

  return (
    <div className="page-landscaping">
      <section className="hero-section section-primary" aria-labelledby="landscaping-heading">
        <div className="page-container hero-split">
          <div className="hero-copy">
            <h1 className="hero-headline" id="landscaping-heading">
              More booked jobs for your landscaping company.
            </h1>
            <p className="hero-subheading">
              Get a free growth plan that shows exactly how to get Google and
              AI to recommend you first.
            </p>
            <ul className="check-list">
              {heroBullets.map(function renderBullet(bullet) {
                return <li key={bullet}>{bullet}</li>;
              })}
            </ul>
          </div>
          <div className="lead-form-anchor" id="growth-plan">
            <LeadForm
              idPrefix="hero-lead"
              heading="Get your free growth plan"
              submitted={leadSent}
              onSuccess={markSent}
            />
          </div>
        </div>
      </section>

      <section className="content-section section-alt" aria-labelledby="problem-heading">
        <div className="page-container narrow-copy">
          <ScrollReveal>
            <h2 className="section-heading" id="problem-heading">
              Homeowners pick from the top three.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              When someone needs a landscaper, they search Google or ask
              ChatGPT and call one of the first few names they see. If that's
              not you, those jobs go to a competitor, even if your work is
              better.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="content-section section-primary"
        aria-labelledby="plan-contents-heading"
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="plan-contents-heading">
              What's in your free growth plan
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <ul className="check-list check-list-loose">
              {growthPlanItems.map(function renderItem(item) {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="content-section section-alt" aria-labelledby="offer-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="offer-heading">
              What we can build for you
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              Your plan only includes what fits your business. Depending on your
              goals, that can include:
            </p>
          </ScrollReveal>
          <div className="offer-grid">
            {offerItems.map(function renderOffer(item) {
              return (
                <article className="surface-card offer-card" key={item.title}>
                  <h3 className="offer-title">{item.title}</h3>
                  <p className="card-body">{item.body}</p>
                </article>
              );
            })}
          </div>
          <div className="section-action">
            <button type="button" className="cta-button" onClick={scrollToForm}>
              Get my free growth plan
            </button>
          </div>
        </div>
      </section>

      <ProcessList
        heading="How it works"
        headingId="landscaping-process-heading"
        steps={landscapingSteps}
        sectionClass="section-primary"
      />

      <section className="content-section section-alt" aria-labelledby="why-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="why-heading">
              Why Compound
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <ul className="check-list check-list-loose">
              {whyCompound.map(function renderReason(reason) {
                return <li key={reason}>{reason}</li>;
              })}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <FaqAccordion items={landscapingFaqs} headingId="faq-heading" />

      <section
        className="content-section section-alt final-cta"
        aria-labelledby="final-cta-heading"
      >
        <div className="page-container">
          <h2 className="section-heading" id="final-cta-heading">
            See where your next 20 jobs are coming from.
          </h2>
          <div className="final-cta-form" id="growth-plan-bottom">
            <LeadForm
              idPrefix="bottom-lead"
              labelledBy="final-cta-heading"
              submitted={leadSent}
              onSuccess={markSent}
            />
          </div>
          <p className="final-talk">
            Prefer to talk?{" "}
            <BookCallLink className="inline-link">Book a call</BookCallLink>
          </p>
        </div>
      </section>

      <StickyPlanCta leadSent={leadSent} />
    </div>
  );
}

export default LandscapingPage;
