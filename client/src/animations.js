// animations.js - shared Framer Motion variants and transition settings

export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const sectionRevealViewport = {
  once: true,
  amount: 0.2,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ctaButtonHover = {
  scale: 1.02,
  transition: { duration: 0.3 },
};

export const ctaButtonTap = {
  scale: 0.98,
};

export const portfolioCardHover = {
  y: -4,
  transition: { duration: 0.3 },
};

export const solutionCardHover = {
  y: -4,
  transition: { duration: 0.3 },
};
