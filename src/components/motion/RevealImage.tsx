import { motion } from "motion/react";
import { imageReveal, inViewOnce } from "@/lib/motion";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  /** Extra hover scale on the inner image (used inside cards). */
  hoverScale?: boolean;
  draggable?: boolean;
  ariaHidden?: boolean;
};

export function RevealImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  style,
  width,
  height,
  hoverScale = false,
  draggable,
  ariaHidden,
}: RevealImageProps) {
  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        draggable={draggable}
        aria-hidden={ariaHidden}
        className={className}
        style={style}
        variants={imageReveal}
        initial="initial"
        whileInView="animate"
        viewport={inViewOnce}
        {...(hoverScale
          ? {
              whileHover: {
                scale: 1.05,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
              },
            }
          : {})}
      />
    </div>
  );
}