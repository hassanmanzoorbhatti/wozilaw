import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Languages, Compass, Award, Users } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { RevealImage } from "@/components/motion/RevealImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { HERO_DELAY } from "@/lib/motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LeadershipBlock } from "@/components/site/Leadership";
import { FinalCta, StatsBand } from "@/components/site/Sections";
import { Eyebrow, PrimaryButton, GhostButton, Ribbon, ScrollDot, TextLink } from "@/components/site/SiteUi";
import { PRIMARY_SERVICES, type Service } from "@/lib/services";
import heroImage from "../assets/wozi-hero.jpg";
import aboutImage from "../assets/wozi-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wozi Law Firm — Where language, law and strategy align" },
      {
        name: "description",
        content:
          "Wozi Law Firm is a London-headquartered practice advising businesses and organisations on complex cross-border disputes and transactions.",
      },
      {
        property: "og:title",
        content: "Wozi Law Firm — Where language, law and strategy align",
      },
      {
        property: "og:description",
        content:
          "Wozi Law Firm is a London-headquartered practice advising businesses and organisations on complex cross-border disputes and transactions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[52fr_48fr]">
      <div className="md:order-2 md:border-l md:border-clause-border">
        <RevealImage
          src={heroImage}
          alt="Wozi Law Firm — London office"
          width={1200}
          height={1440}
          wrapperClassName="h-full w-full"
          className="aspect-[1/1.2] w-full object-cover object-[center_28%]"
        />
      </div>

      <div className="flex flex-col justify-center px-4 py-12 md:order-1 md:px-12 md:py-20">
        <Reveal immediate delay={HERO_DELAY - 0.1}>
          <Eyebrow>London-Headquartered · Bilingual Legal Counsel</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h1"
          immediate
          delay={HERO_DELAY}
          text={"Where language, law\nand strategy align."}
          className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[30px] md:text-[clamp(1.75rem,0.8rem+2.2vw,2.375rem)]"
        />

        <RevealGroup immediate delay={HERO_DELAY + 0.35} stagger={0.12}>
          <RevealItem>
            <p
              className="mt-5 font-grotesk text-[15px] leading-[1.6] text-clause-muted md:mt-6 md:text-[17px]"
              style={{ maxWidth: "440px" }}
            >
              Wozi Law Firm is a London-headquartered practice advising businesses and
              organisations on complex cross-border disputes and transactions.
            </p>
          </RevealItem>
          <RevealItem className="mt-10 md:mt-14">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4">
              <PrimaryButton href="#consultation" className="whitespace-nowrap">
                Book a Consultation
              </PrimaryButton>
              <GhostButton href="#expertise" className="whitespace-nowrap">
                Explore Expertise
              </GhostButton>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function AboutWozi() {
  return (
    <section className="border-t border-clause-border">
      <div className="grid grid-cols-1 md:grid-cols-[48fr_52fr]">
        <div className="px-4 py-14 md:border-r md:border-clause-border md:px-16 md:py-24">
          <Reveal>
            <Eyebrow>About Wozi</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Built for matters where\nborders meet business."}
            className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.6vw,2.5rem)]"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[460px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              Founded by senior bilingual lawyers with experience across English and Chinese
              legal systems, Wozi combines legal precision with international commercial
              understanding.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8">
              <TextLink to="/coming-soon">Discover Wozi</TextLink>
            </div>
          </Reveal>
        </div>

        <div>
          <RevealImage
            src={aboutImage}
            alt="Wozi Law Firm — about overview"
            width={1100}
            height={1375}
            wrapperClassName="h-full"
            className="h-full w-full object-cover"
            hoverScale
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <RevealImage
          src={service.image!}
          alt={service.name}
          wrapperClassName="h-full w-full"
          className="h-full w-full object-cover"
          hoverScale
        />
        <div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-clause-bg md:h-12 md:w-12">
          <ArrowUpRight className="h-4 w-4 text-clause-pink" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-clause-sage">
          {service.number}
        </span>
        <h3 className="mt-3 font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[24px]">
          {service.name}
        </h3>
        <p className="mt-3 font-grotesk text-[15px] leading-[1.6] text-clause-muted md:text-[16px]">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border border-clause-border px-2.5 py-1 font-grotesk text-[11px] uppercase tracking-[0.06em] text-clause-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-t border-clause-border">
      <div className="border-b border-clause-border px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[680px] md:text-center">
          <Reveal>
            <Eyebrow>Expertise</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Strategic legal support across\ncomplex international matters."}
            className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,3rem)]"
          />
        </div>
      </div>

      <div className="border-b border-clause-border md:px-8">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8" stagger={0.12}>
          {PRIMARY_SERVICES.map((s) => (
            <RevealItem
              key={s.name}
              className="h-full border-b border-clause-border md:border-x md:border-b-0 md:border-clause-border"
            >
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const APPROACH = [
  {
    icon: Languages,
    title: "Bilingual Perspective",
    body: "Legal understanding that moves fluently between English and Chinese context.",
  },
  {
    icon: Compass,
    title: "Strategic Thinking",
    body: "Advice framed around commercial outcomes, not just legal positions.",
  },
  {
    icon: Award,
    title: "Senior Experience",
    body: "Matters led directly by senior, bilingual qualified lawyers.",
  },
  {
    icon: Users,
    title: "Client Focus",
    body: "Responsive counsel built around each client's cross-border priorities.",
  },
];

function OurApproach() {
  return (
    <section className="border-t border-b border-clause-border bg-clause-ink px-4 py-16 md:px-24 md:py-28">
      <div className="text-center">
        <Reveal>
          <p className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.16em] text-clause-sage md:text-[13px]">
            Our Approach
          </p>
        </Reveal>
        <AnimatedText
          as="h2"
          text="Legal insight built around international understanding."
          className="mt-5 font-serif-display font-normal leading-[1.15] text-[#F8F6F2] text-[clamp(1.625rem,1rem+2.7vw,2.5rem)]"
        />
      </div>

      <RevealGroup
        className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-10"
        stagger={0.12}
      >
        {APPROACH.map(({ icon: Icon, title, body }, i) => (
          <RevealItem
            key={title}
            className="flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[rgba(248,246,242,0.18)] bg-[rgba(248,246,242,0.04)] md:h-16 md:w-16">
              <span className="font-grotesk text-[11px] font-semibold text-clause-sage md:hidden">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="hidden h-6 w-6 text-clause-sage md:block" strokeWidth={1.5} />
            </div>
            <div className="md:mt-6">
              <span className="hidden font-grotesk text-[12px] font-semibold tracking-[0.14em] text-clause-sage md:inline-block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif-display text-[19px] leading-[1.3] text-[#F8F6F2] md:mt-2 md:text-[21px]">
                {title}
              </h3>
              <p className="mt-2 max-w-[260px] font-grotesk text-[15px] leading-[1.6] text-[#F8F6F2]/70 md:mx-auto">
                {body}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-clause-bg px-2 pb-2 md:p-0">
      <div className="mx-auto min-h-[calc(100vh-0.5rem)] max-w-[1320px] border border-clause-border md:min-h-screen md:border-x md:border-y-0">
        <Navbar />
        <div className="h-16 lg:hidden" aria-hidden="true" />

        <Hero />
        <StatsBand />
        <Ribbon className="h-8 border-t border-clause-border" />
        <AboutWozi />
        <Expertise />
        <OurApproach />
        <LeadershipBlock />
        <FinalCta />
        <Footer />
      </div>
      <ScrollDot />
    </div>
  );
}
