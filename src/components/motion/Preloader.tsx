import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_IN_OUT_QUART } from "@/lib/motion";

/** Full-screen mask that lifts away once the first paint settles. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // Hard timeout: the overlay can never trap the page.
    const t = setTimeout(() => setDone(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-clause-bg"
          initial={{ y: "0%", opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.8, ease: [...EASE_IN_OUT_QUART] },
          }}
        >
          <motion.span
            className="font-serif-display text-[20px] leading-none tracking-[0.02em] text-clause-heading md:text-[28px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            London Lawyers House
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}