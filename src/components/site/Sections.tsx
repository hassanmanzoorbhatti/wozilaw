import type { ReactNode } from "react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CAPABILITIES } from "@/lib/site-data";
import { Eyebrow, PrimaryButton, GhostButton, ZigzagPattern } from "./SiteUi";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollDot } from "./SiteUi";
import ctaImage from "../../assets/wozi-cta-bg.jpg";

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

export function StatsBand({ items = CAPABILITIES }: { items?: readonly { label: string }[] }) {
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
          <div className="font-serif-display font-normal leading-[1.2] text-clause-heading text-[clamp(1.05rem,0.85rem+1vw,1.4rem)]">
            {s.label}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function FinalCta() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden border-x border-b border-clause-border bg-clause-ink px-4 py-20 md:px-24 md:py-32"
    >
      <img
        src={ctaImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,34,53,0.92) 0%, rgba(16,34,53,0.88) 60%, rgba(16,34,53,0.96) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-clause-sage/40"
      />

      <div className="relative mx-auto max-w-[620px] text-center">
        <Reveal>
          <p className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.16em] text-clause-sage md:text-[13px]">
            Need legal support?
          </p>
        </Reveal>
        <AnimatedText
          as="h2"
          text={"Discuss your cross-border\nlegal matter with Wozi."}
          className="mt-5 font-serif-display font-normal leading-[1.12] text-[#F8F6F2] text-[clamp(1.75rem,1rem+3vw,2.75rem)]"
        />
        <RevealGroup stagger={0.12}>
          <RevealItem>
            <p className="mx-auto mt-5 max-w-[480px] font-grotesk text-[15px] leading-[1.6] text-[#F8F6F2]/75 md:mt-6 md:text-[17px]">
              Tell us briefly how we can help and our team will guide you through the next step.
            </p>
          </RevealItem>
          <RevealItem className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:mt-10">
            <PrimaryButton
              href="/coming-soon"
              className="border-clause-sage bg-clause-sage !text-clause-ink"
            >
              Book a Consultation
            </PrimaryButton>
            <GhostButton
              href="/coming-soon"
              className="border-[rgba(248,246,242,0.28)] !text-[#F8F6F2] hover:bg-[rgba(248,246,242,0.08)]"
            >
              Contact Our Team
            </GhostButton>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
