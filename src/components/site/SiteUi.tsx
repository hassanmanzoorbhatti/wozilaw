import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import logo from "../../assets/wozi-logo.svg";

export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const height = size === "sm" ? "h-8 md:h-9" : "h-9 md:h-10";
  return (
    <img
      src={logo}
      alt="Wozi Law Firm"
      className={`block w-auto ${height} ${className}`}
    />
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-grotesk text-[12px] font-semibold uppercase tracking-[0.16em] text-clause-pink md:text-[13px] ${className}`}
    >
      {children}
    </p>
  );
}

const baseButton =
  "group inline-flex min-h-[48px] items-center justify-center gap-3 px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-300 ease-in-out md:px-7";

export function PrimaryButton({
  children,
  href,
  to,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <span className="hidden h-px w-6 bg-clause-onaccent transition-all duration-300 group-hover:w-9 sm:block" />
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </>
  );
  const cls = `${baseButton} border border-clause-border bg-clause-navy text-clause-onaccent hover:opacity-90 ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} style={{ borderRadius: "1px" }}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "/contact"} className={cls} style={{ borderRadius: "1px" }}>
      {inner}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  to,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </>
  );
  const cls = `${baseButton} border border-clause-line text-clause-cream hover:bg-clause-pink/[0.06] ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} style={{ borderRadius: "1px" }}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "/services"} className={cls} style={{ borderRadius: "1px" }}>
      {inner}
    </a>
  );
}

export function TextLink({
  children,
  to,
  href,
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <span className="hidden h-px w-6 bg-clause-pink transition-all duration-300 group-hover:w-9 sm:block" />
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </>
  );
  const cls = `group inline-flex min-h-[44px] items-center gap-3 font-grotesk text-[13px] font-semibold uppercase tracking-[0.08em] text-clause-pink ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={cls}>
      {inner}
    </a>
  );
}

export function ZigzagPattern({ className = "" }: { className?: string }) {
  const columns = [
    { x: 0, w: 46, h: 72 },
    { x: 46, w: 38, h: 104 },
    { x: 84, w: 54, h: 58 },
    { x: 138, w: 42, h: 118 },
    { x: 180, w: 60, h: 80 },
    { x: 240, w: 44, h: 110 },
    { x: 284, w: 50, h: 66 },
    { x: 334, w: 36, h: 96 },
    { x: 370, w: 52, h: 74 },
    { x: 422, w: 38, h: 100 },
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 460 120"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="zig" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 24 L12 0 L24 24"
            stroke="rgba(38,55,47,0.28)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M0 12 L12 -12 L24 12"
            stroke="rgba(38,55,47,0.28)"
            strokeWidth="1.25"
            fill="none"
          />
        </pattern>
        <mask id="skyline">
          <rect width="460" height="120" fill="black" />
          {columns.map((c, i) => {
            const top = 120 - c.h;
            const midx = c.x + c.w / 2;
            const d = `M${c.x} 120 L${c.x} ${top + 6} L${c.x + 6} ${top - 4} L${c.x + 14} ${top + 3} L${midx - 4} ${top - 6} L${midx + 6} ${top + 2} L${c.x + c.w - 12} ${top - 5} L${c.x + c.w - 4} ${top + 4} L${c.x + c.w} ${top - 2} L${c.x + c.w} 120 Z`;
            return <path key={i} d={d} fill="white" />;
          })}
        </mask>
      </defs>
      <rect width="460" height="120" fill="url(#zig)" mask="url(#skyline)" />
    </svg>
  );
}

export function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-6 w-full ${className}`}
      viewBox="0 0 1200 24"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="ribbon-zig" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 24 L12 0 L24 24"
            stroke="rgba(38,55,47,0.24)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M0 12 L12 -12 L24 12"
            stroke="rgba(38,55,47,0.24)"
            strokeWidth="1.25"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="1200" height="24" fill="url(#ribbon-zig)" />
    </svg>
  );
}

export function ScrollDot() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-1/2 z-30 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-clause-pink md:right-5 md:block"
    />
  );
}
