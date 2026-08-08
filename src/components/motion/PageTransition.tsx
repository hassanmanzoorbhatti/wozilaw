import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Route-level mount transition; also covers future route changes via key. */
export function PageTransition({
  children,
  routeKey,
}: {
  children: ReactNode;
  routeKey?: string;
}) {
  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      {children}
    </motion.div>
  );
}