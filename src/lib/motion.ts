import type { Transition, Variants } from "motion/react";

/** Shared easing / transition tokens for the whole site. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;
export const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1] as const;

export const premiumSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const smoothReveal: Transition = {
  type: "tween",
  ease: [...EASE_OUT_EXPO],
  duration: 1.2,
};

export const snappyHover: Transition = {
  type: "tween",
  ease: [...EASE_OUT_CUBIC],
  duration: 0.4,
};

/** Delay applied to hero content so it lands just after the preloader lifts. */
export const HERO_DELAY = 0.9;

/** Word-by-word heading reveal. */
export const wordContainer = (stagger = 0.04, delay = 0.1): Variants => ({
  initial: {},
  animate: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const wordVariant: Variants = {
  initial: { y: "110%", opacity: 0, rotateZ: 2 },
  animate: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: { type: "tween", ease: [...EASE_OUT_EXPO], duration: 1 },
  },
};

/** Generic fade-up used for paragraphs, cards, rows. */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: [...EASE_OUT_EXPO], duration: 0.9 },
  },
};

export const staggerParent = (stagger = 0.1, delay = 0): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Image "settle" reveal: zoomed + faded -> resting. */
export const imageReveal: Variants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", ease: [...EASE_OUT_EXPO], duration: 1.5 },
  },
};

export const inViewOnce = { once: true, amount: 0.2 } as const;