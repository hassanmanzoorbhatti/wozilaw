import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Minimal spring-followed dot cursor; desktop pointers only. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const spring = { damping: 25, stiffness: 200, mass: 0.5 } as const;
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setHovering(
        !!target?.closest?.("a, button, [role='button'], input, textarea, select"),
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-clause-pink md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        scale: hovering ? 2.8 : 1,
        opacity: visible ? (hovering ? 0.35 : 0.7) : 0,
      }}
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
    />
  );
}