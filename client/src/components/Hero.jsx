// Hero - full-viewport intro with cursor glow and primary actions

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CAL_LINK } from "../config.js";
import { ctaButtonHover, ctaButtonTap } from "../animations.js";
import ScrollReveal from "./ScrollReveal.jsx";

function Hero() {
  const heroRef = useRef(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [cursorGlowEnabled, setCursorGlowEnabled] = useState(false);

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
        const offsetX = event.clientX - bounds.left;
        const offsetY = event.clientY - bounds.top;
        setGlowPosition({ x: offsetX, y: offsetY });
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
    <section className="hero-section section-primary" id="hero" ref={heroRef}>
      {cursorGlowEnabled && (
        <div className="hero-cursor-glow" style={glowStyle} aria-hidden="true" />
      )}

      <div className="hero-layout">
        <div className="hero-main">
          <div className="page-container hero-content">
            <ScrollReveal>
              <p className="section-label">Compound Automation</p>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <h1 className="hero-headline">
                Build a better digital foundation.
                <br />
                Grow what comes next.
              </h1>
            </ScrollReveal>
            <ScrollReveal delayMs={160}>
              <p className="hero-subheading">
                Compound builds websites, software, and digital marketing systems
                for businesses that want to look better, reach more customers,
                and grow.
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={240}>
              <div className="hero-actions">
                <motion.a
                  href={CAL_LINK}
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a call with Connor"
                  whileHover={ctaButtonHover}
                  whileTap={ctaButtonTap}
                >
                  Book a Call
                </motion.a>
                <a href="#services" className="cta-button-secondary">
                  Explore Services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
