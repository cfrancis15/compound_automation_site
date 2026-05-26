// ScrollReveal - fade-in on viewport entry via IntersectionObserver

import { useEffect, useRef, useState } from "react";

function ScrollReveal(props) {
  const children = props.children;
  const className = props.className;
  const delayMs = props.delayMs || 0;
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function setupObserver() {
    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      function handleIntersect(entries) {
        let index = 0;
        for (index = 0; index < entries.length; index = index + 1) {
          const entry = entries[index];
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return function cleanup() {
      observer.unobserve(element);
    };
  }, []);

  let revealClassName = "scroll-reveal";
  if (isVisible) {
    revealClassName = revealClassName + " scroll-reveal-visible";
  }
  if (className) {
    revealClassName = revealClassName + " " + className;
  }

  const inlineStyle = { transitionDelay: delayMs + "ms" };

  return (
    <div ref={elementRef} className={revealClassName} style={inlineStyle}>
      {children}
    </div>
  );
}

export default ScrollReveal;
