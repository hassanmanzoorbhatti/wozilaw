import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, inViewOnce, staggerParent } from "@/lib/motion";

/** Fade-up a block when it scrolls into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="initial"
      transition={{ delay }}
      {...(immediate
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: inViewOnce })}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="initial"
      {...(immediate
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: inViewOnce })}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}