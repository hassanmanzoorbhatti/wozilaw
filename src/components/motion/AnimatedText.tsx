import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { wordContainer, wordVariant } from "@/lib/motion";

type AnimatedTextProps = {
  /** Text to reveal word-by-word. Use "\n" to force a line break. */
  text: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** Trigger immediately (hero) instead of on scroll. */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
  children?: ReactNode;
};

export function AnimatedText({
  text,
  as = "span",
  className = "",
  style,
  immediate = false,
  delay = 0.1,
  stagger = 0.04,
}: AnimatedTextProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.span;
  const lines = text.split("\n");

  return (
    <MotionTag
      className={className}
      style={style}
      variants={wordContainer(stagger, delay)}
      initial="initial"
      {...(immediate
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: { once: true, amount: 0.3 } })}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => (
            <span
              key={`${li}-${wi}`}
              className="inline-block overflow-hidden align-bottom pb-[0.06em]"
            >
              <motion.span variants={wordVariant} className="inline-block">
                {word}
                {"\u00A0"}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
}