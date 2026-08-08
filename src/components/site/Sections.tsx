import { motion } from "motion/react";
import type { ReactNode } from "react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { FIRM, STATS } from "@/lib/site-data";
import { Eyebrow, PrimaryButton, ZigzagPattern } from "./SiteUi";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollDot } from "./SiteUi";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-clause-bg px-2 pb-2 md:p-0">
      <div className="mx-auto min-h-[calc(100vh-0.5rem)] max-w-[1320px] border border-clause-border md:min-h-screen md:border-x md:border-y-0">
        <Navbar />
        <div className="h-16 lg:hidden" aria-hidden="true" />
        {children}
        <FinalCta />
        <Footer />
      </div>
      <ScrollDot />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-clause-border px-4 py-16 md:px-24 md:py-28">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <AnimatedText
        as="h1"
        immediate
        text={title}
        className="mt-5 max-w-[820px] font-serif-display font-normal leading-[1.1] text-clause-heading text-[clamp(2rem,1.1rem+3.6vw,3.5rem)]"
      />
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-[620px] font-grotesk text-[16px] leading-[1.6] text-clause-muted md:text-[18px]">
          {description}
        </p>
      </Reveal>
      <ZigzagPattern className="mt-12 h-[30px] w-full max-w-[420px] md:h-[40px]" />
    </section>
  );
}

export function StatsBand({ items = STATS }: { items?: readonly { number: string; label: string }[] }) {
  return (
    <RevealGroup
      className="grid grid-cols-2 border-t border-clause-border md:grid-cols-4"
      stagger={0.1}
    >
      {items.map((s, i) => (
        <RevealItem
          key={s.label}
          className={`border-clause-border px-5 py-10 text-center md:px-6 md:py-14 ${
            i % 2 === 1 ? "border-l" : ""
          } ${i > 1 ? "border-t md:border-t-0" : ""} ${
            i > 0 ? "md:border-l" : ""
          }`}
        >
          <div className="font-serif-display font-normal leading-[1.05] text-clause-heading text-[clamp(2rem,1.1rem+3.4vw,3.25rem)]">
            {s.number}
          </div>
          <div className="mx-auto mt-3 max-w-[180px] font-grotesk text-[14px] leading-[1.4] text-clause-muted md:text-[15px]">
            {s.label}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function FinalCta() {
  const radialMask =
    "radial-gradient(102% 94% at 48.9% 99.3%, black 0%, transparent 66.9851%)";
  return (
    <section className="relative overflow-hidden border-x border-b border-clause-border bg-clause-ink px-4 py-20 md:px-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(rgba(198,168,117,0.85) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          WebkitMaskImage: radialMask,
          maskImage: radialMask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-clause-sage/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative mx-auto max-w-[620px] text-center">
        <Reveal>
          <p className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.16em] text-clause-sage md:text-[13px]">
            Start a conversation
          </p>
        </Reveal>
        <AnimatedText
          as="h2"
          text={"Your next step starts\nwith clear advice."}
          className="mt-5 font-serif-display font-normal leading-[1.12] text-[#F7F3EE] text-[clamp(1.75rem,1rem+3vw,2.75rem)]"
        />
        <RevealGroup stagger={0.12}>
          <RevealItem>
            <p className="mx-auto mt-5 max-w-[480px] font-grotesk text-[15px] leading-[1.6] text-[#F7F3EE]/75 md:mt-6 md:text-[17px]">
              Tell us briefly about your situation and speak with the Wozi Law Firm team about the next step.
            </p>
          </RevealItem>
          <RevealItem className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:mt-10">
            <PrimaryButton
              href="#contact"
              className="border-[rgba(247,243,238,0.14)] bg-clause-sage !text-clause-ink"
            >
              Book a Consultation
            </PrimaryButton>
            <a
              href={`tel:${FIRM.officeTel}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-[rgba(247,243,238,0.28)] px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-[#F7F3EE] transition-colors duration-300 hover:bg-[rgba(247,243,238,0.08)] md:px-7"
              style={{ borderRadius: "1px" }}
            >
              Call {FIRM.office}
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
