// Hero - full-viewport intro with metadata bar and cursor glow

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

  useEffect(function trackMouse() {
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
  }, [cursorGlowEnabled]);

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
              <h1 className="hero-headline">We build software for real estate businesses.</h1>
            </ScrollReveal>
            <ScrollReveal delayMs={120}>
              <p className="hero-subheading">
                Custom tools and automation for the workflows eating your team&apos;s
                time. Built by someone who&apos;s worked the job.
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={240}>
              <motion.a
                href={CAL_LINK}
                className="cta-button hero-cta-button"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={ctaButtonHover}
                whileTap={ctaButtonTap}
              >
                Book a Discovery Call
              </motion.a>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="hero-metadata-bar" delayMs={150}>
          <div className="page-container hero-metadata-inner">
            <div className="metadata-item">
              <p className="metadata-label">Focus</p>
              <p className="metadata-value">Real Estate</p>
            </div>
            <div className="metadata-item">
              <p className="metadata-label">Based in</p>
              <p className="metadata-value">Denver, CO</p>
            </div>
            <div className="metadata-item">
              <p className="metadata-label">Projects from</p>
              <p className="metadata-value price-mono">$1,500</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;
