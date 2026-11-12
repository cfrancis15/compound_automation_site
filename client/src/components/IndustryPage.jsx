// IndustryPage - shared sales funnel for one local trade

import { useEffect, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import {
  growthPlanItems,
  heroBullets,
  industryFaqs,
  industrySteps,
  whyCompound,
} from "../data/industryShared.js";
import BookCallLink from "./BookCallLink.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import LeadForm from "./LeadForm.jsx";
import ProcessList from "./ProcessList.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

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

function IndustryPage(props) {
  const page = props.page;
  const seo = props.seo;
  usePageMeta(seo);
  const [leadSent, setLeadSent] = useState(false);

  function markSent() {
    setLeadSent(true);
  }

  return (
    <div className={"page-" + page.id}>
      <section className="hero-section section-primary" aria-labelledby={page.id + "-heading"}>
        <div className="page-container hero-split">
          <div className="hero-copy">
            <h1 className="hero-headline" id={page.id + "-heading"}>
              {page.h1}
            </h1>
            <p className="hero-subheading">{page.sub}</p>
            <ul className="check-list">
              {heroBullets.map(function renderBullet(bullet) {
                return <li key={bullet}>{bullet}</li>;
              })}
            </ul>
          </div>
          <div className="lead-form-anchor" id="growth-plan">
            <LeadForm
              idPrefix={page.id + "-hero-lead"}
              heading="Get your free growth plan"
              submitted={leadSent}
              onSuccess={markSent}
            />
          </div>
        </div>
      </section>

      <section className="content-section section-alt" aria-labelledby={page.id + "-problem-heading"}>
        <div className="page-container narrow-copy">
          <ScrollReveal>
            <h2 className="section-heading" id={page.id + "-problem-heading"}>
              {page.problemHeading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">{page.problemBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="content-section section-primary"
        aria-labelledby={page.id + "-plan-heading"}
      >
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id={page.id + "-plan-heading"}>
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

      <section className="content-section section-alt" aria-labelledby={page.id + "-offer-heading"}>
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id={page.id + "-offer-heading"}>
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
            {page.offers.map(function renderOffer(item) {
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
        headingId={page.id + "-process-heading"}
        steps={industrySteps}
        sectionClass="section-primary"
      />

      <section className="content-section section-alt" aria-labelledby={page.id + "-why-heading"}>
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id={page.id + "-why-heading"}>
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

      <FaqAccordion items={industryFaqs} headingId={page.id + "-faq-heading"} />

      <section
        className="content-section section-alt final-cta"
        aria-labelledby={page.id + "-final-heading"}
      >
        <div className="page-container">
          <h2 className="section-heading" id={page.id + "-final-heading"}>
            {page.finalHeading}
          </h2>
          <div className="final-cta-form" id="growth-plan-bottom">
            <LeadForm
              idPrefix={page.id + "-bottom-lead"}
              labelledBy={page.id + "-final-heading"}
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

export default IndustryPage;
