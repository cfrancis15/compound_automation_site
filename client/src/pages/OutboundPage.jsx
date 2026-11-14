// OutboundPage - sales page for outbound business development

import { useEffect, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { outboundSeo } from "../seo.js";
import {
  outboundFaqs,
  outboundStages,
  outboundSteps,
} from "../data/outbound.js";
import BookCallLink from "../components/BookCallLink.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import LeadForm from "../components/LeadForm.jsx";
import ProcessList from "../components/ProcessList.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

const FORM_SUBJECT = "New lead: Outbound plan request";
const SUBMIT_LABEL = "Get my outbound plan";

function scrollToForm() {
  const target = document.getElementById("outbound-plan");
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
      document.getElementById("outbound-plan"),
      document.getElementById("outbound-plan-bottom"),
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
    <a className="sticky-plan-cta" href="#outbound-plan">
      Get my outbound plan
    </a>
  );
}

function OutboundPage() {
  usePageMeta(outboundSeo);
  const [leadSent, setLeadSent] = useState(false);

  function markSent() {
    setLeadSent(true);
  }

  return (
    <div className="page-outbound">
      <section className="hero-section section-primary" aria-labelledby="outbound-heading">
        <div className="page-container hero-split">
          <div className="hero-copy">
            <h1 className="hero-headline" id="outbound-heading">
              Outbound that books the meeting.
            </h1>
            <p className="hero-subheading">
              We run business development for you, from the first list of
              prospects through a qualified meeting on your calendar.
            </p>
            <ul className="check-list">
              <li>Prospecting, outreach, qualification, and booking</li>
              <li>Companies you want to reach, even if they are not looking yet</li>
              <li>You see the plan before you decide if we run it</li>
            </ul>
          </div>
          <div className="lead-form-anchor" id="outbound-plan">
            <LeadForm
              idPrefix="outbound-hero-lead"
              heading="Get your outbound plan"
              subject={FORM_SUBJECT}
              submitLabel={SUBMIT_LABEL}
              submitted={leadSent}
              onSuccess={markSent}
            />
          </div>
        </div>
      </section>

      <section className="content-section section-alt" aria-labelledby="outbound-problem-heading">
        <div className="page-container narrow-copy">
          <ScrollReveal>
            <h2 className="section-heading" id="outbound-problem-heading">
              Your next customers are not searching for you.
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              Marketing helps people find you when they look. Outbound is the
              other motion. Someone has to find the right companies, start the
              conversation, and book the ones that are a fit. That is the work
              we run.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="content-section section-primary" aria-labelledby="outbound-motion-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="outbound-motion-heading">
              The full motion
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="section-body">
              One plan covers the whole path. It only includes what fits your
              business. No packages.
            </p>
          </ScrollReveal>
          <div className="stage-grid">
            {outboundStages.map(function renderStage(stage) {
              return (
                <article className="surface-card offer-card" key={stage.title}>
                  <h3 className="offer-title">{stage.title}</h3>
                  <p className="card-body">{stage.body}</p>
                </article>
              );
            })}
          </div>
          <div className="section-action">
            <button type="button" className="cta-button" onClick={scrollToForm}>
              Get my outbound plan
            </button>
          </div>
        </div>
      </section>

      <ProcessList
        heading="How it works"
        headingId="outbound-process-heading"
        steps={outboundSteps}
        sectionClass="section-alt"
      />

      <section className="content-section section-primary" aria-labelledby="outbound-why-heading">
        <div className="page-container">
          <ScrollReveal>
            <h2 className="section-heading" id="outbound-why-heading">
              Why Compound
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <ul className="check-list check-list-loose">
              <li>A custom plan, not a one-size package</li>
              <li>You work directly with Connor, based in Boulder County</li>
              <li>Month to month. Stay because it works, not because of a contract.</li>
              <li>You only take the meetings that are worth your time</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <FaqAccordion items={outboundFaqs} headingId="outbound-faq-heading" />

      <section
        className="content-section section-alt final-cta"
        aria-labelledby="outbound-final-heading"
      >
        <div className="page-container">
          <h2 className="section-heading" id="outbound-final-heading">
            See who you should be talking to next.
          </h2>
          <div className="final-cta-form" id="outbound-plan-bottom">
            <LeadForm
              idPrefix="outbound-bottom-lead"
              labelledBy="outbound-final-heading"
              subject={FORM_SUBJECT}
              submitLabel={SUBMIT_LABEL}
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

export default OutboundPage;
