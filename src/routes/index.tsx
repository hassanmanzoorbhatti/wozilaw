import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessagesSquare, ShieldCheck, LifeBuoy } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { RevealImage } from "@/components/motion/RevealImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { HERO_DELAY } from "@/lib/motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LeadershipBlock } from "@/components/site/Leadership";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta, StatsBand } from "@/components/site/Sections";
import { Eyebrow, PrimaryButton, Ribbon, ScrollDot, TextLink } from "@/components/site/SiteUi";
import { HERO_STATS, NETWORK_LOCATIONS } from "@/lib/site-data";
import { PRIMARY_SERVICES, type Service } from "@/lib/services";
const IMG={
 logo:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786168138286_zo2ybvw.svg",
 hero:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786167993139_y8e16sf.jpg",
 about:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786167995915_gdo775a.jpg",
 disputes:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786167997771_j6lzj2f.jpg",
 transactions:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786167999311_r4m0ba0.jpg",
 advisory:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786168000474_ruu1fdz.jpg",
 karen:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786168001695_hh4umea.jpg",
 jin:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786168070635_ka1inub.jpg",
 cta:"https://nejyjogwbbubeqkrgqat.supabase.co/storage/v1/object/public/claudedrop-images/uploads/1786168002553_5s9uhds.jpg"
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wozi Law Firm — Cross-Border Legal Counsel" },
      {
        name: "description",
        content:
          "London-headquartered bilingual legal counsel for cross-border disputes and transactions.",
      },
      { property: "og:title", content: "Wozi Law Firm — Cross-Border Legal Counsel" },
      {
        property: "og:description",
        content:
          "Specialist immigration and family law advice delivered with clarity, precision and personal understanding.",
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
          src={IMG.hero}
          alt="Professional immigration solicitor in a London office"
          width={1536}
          height={1024}
          wrapperClassName="w-full md:h-[650px]"
          className="aspect-[1/1.2] w-full object-cover object-[center_25%] md:h-[650px] md:aspect-auto"
        />
      </div>

      <div className="flex flex-col justify-center px-4 py-12 md:order-1 md:px-12 md:py-20">
        <Reveal immediate delay={HERO_DELAY - 0.1}>
          <Eyebrow>LONDON-HEADQUARTERED · BILINGUAL LEGAL COUNSEL</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h1"
          immediate
          delay={HERO_DELAY}
          text={"Where language, law and strategy align."}
          className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[30px] md:text-[clamp(1.75rem,0.8rem+2.2vw,2.375rem)]"
        />

        <RevealGroup immediate delay={HERO_DELAY + 0.35} stagger={0.12}>
          <RevealItem>
            <p
              className="mt-5 font-grotesk text-[15px] leading-[1.6] text-clause-muted md:mt-6 md:text-[17px]"
              style={{ maxWidth: "470px" }}
            >
              Specialist immigration and family law advice for individuals, families and businesses,
              delivered with clarity, precision and a deeply personal understanding of what is at stake.
            </p>
          </RevealItem>
          <RevealItem className="mt-10 md:mt-14">
            <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-7">
              <PrimaryButton href="#contact" className="whitespace-nowrap">
                Book a Consultation
              </PrimaryButton>
              <div className="flex items-center sm:border-l sm:border-clause-border sm:pl-7">
                <div>
                  <p className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.13em] text-clause-sage">
                    SRA Regulated
                  </p>
                  <p className="mt-1.5 font-grotesk text-[13px] leading-[1.4] text-clause-muted">
                    Practice reference 8014879
                  </p>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function HeroStats() {
  return (
    <RevealGroup
      className="grid grid-cols-1 border-t border-clause-border sm:grid-cols-3"
      stagger={0.12}
    >
      {HERO_STATS.map((s, i) => (
        <RevealItem
          key={s.label}
          className={`border-clause-border px-5 py-9 text-center sm:py-14 ${
            i > 0 ? "border-t sm:border-l sm:border-t-0" : ""
          }`}
        >
          <div className="font-serif-display font-normal leading-[1.05] text-clause-heading text-[clamp(2.1rem,1.1rem+3.5vw,3.4rem)]">
            {s.number}
          </div>
          <div className="mx-auto mt-3 max-w-[220px] font-grotesk text-[14px] leading-[1.4] text-clause-muted md:text-[15px]">
            {s.label}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function Introduction() {
  return (
    <section className="border-t border-clause-border px-4 py-16 md:px-24 md:py-28">
      <div className="mx-auto max-w-[860px] text-center">
        <Reveal>
          <Eyebrow>About Wozi Law</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h2"
          text="Built for matters where borders meet business."
          stagger={0.02}
          className="mt-6 font-serif-display font-normal text-clause-heading text-[clamp(1.5rem,0.95rem+2.4vw,2.5rem)] leading-[1.25]"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[680px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[17px]">
            Alcyone Law provides specialist immigration and family law advice from London. The firm
            combines careful legal analysis with clear communication and a personal understanding of
            the individuals, families and businesses behind every matter.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-8 flex justify-center">
            <TextLink to="/coming-soon">About Wozi Law</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExpertiseStrip() {
  return (
    <section className="border-t border-clause-border px-4 py-12 md:px-8 md:py-24">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
        <p className="max-w-[520px] font-serif-display text-[19px] leading-[1.35] text-clause-cream md:text-[22px]">
          Focused legal support for life, family and business across borders.
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:gap-x-10 md:gap-y-5 md:text-right">
          {NETWORK_LOCATIONS.map((item) => (
            <span
              key={item}
              className="font-grotesk text-[12px] uppercase tracking-[0.12em] text-clause-muted md:text-[13px]"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to="/coming-soon" className="group flex h-full flex-col" aria-label={service.name}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <RevealImage
          src={service.image!}
          alt={service.name}
          wrapperClassName="h-full w-full"
          className="h-full w-full object-cover"
          hoverScale
        />
        <div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-clause-bg md:h-12 md:w-12">
          <ArrowUpRight
            className="h-4 w-4 text-clause-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
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
      </div>
    </Link>
  );
}

function Services() {
  return (
    <section className="border-t border-clause-border">
      <div className="border-b border-clause-border px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[680px] md:text-center">
          <Reveal>
            <Eyebrow>Our Expertise</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Specialist advice for\nlife across borders."}
            className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,3rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 font-grotesk text-[16px] leading-[1.6] text-clause-muted md:text-[17px]">
              Focused expertise in UK immigration and family law, tailored to individuals, families
              and businesses.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-clause-border md:px-8">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8" stagger={0.12}>
          {PRIMARY_SERVICES.map((service) => (
            <RevealItem
              key={service.name}
              className="h-full border-b border-clause-border md:border-x md:border-b-0 md:border-clause-border"
            >
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="border-b border-clause-border px-4 py-10 md:px-24 md:py-14">
        <div className="flex justify-center">
          <PrimaryButton to="/coming-soon" className="w-full sm:w-auto">
            View All Services
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

const APPROACH = [
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    body: "Straightforward legal guidance without unnecessary complexity or uncertainty.",
  },
  {
    icon: ShieldCheck,
    title: "Strategic Preparation",
    body: "Each matter is considered carefully, with risks anticipated and the next steps clearly planned.",
  },
  {
    icon: LifeBuoy,
    title: "Personal Support",
    body: "Advice shaped around the person, family or business behind the legal issue.",
  },
];

function Approach() {
  return (
    <section className="px-4 py-16 md:px-24 md:py-28">
      <div className="text-center">
        <Reveal>
          <Eyebrow>Our Approach</Eyebrow>
        </Reveal>
        <AnimatedText
          as="h2"
          text="Clear thinking when the path feels uncertain."
          className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.7vw,2.5rem)]"
        />
      </div>

      <RevealGroup
        className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-14"
        stagger={0.12}
      >
        {APPROACH.map(({ icon: Icon, title, body }) => (
          <RevealItem
            key={title}
            className="flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-clause-border bg-clause-surface md:h-16 md:w-16">
              <Icon className="h-5 w-5 text-clause-sage md:h-6 md:w-6" strokeWidth={1.5} />
            </div>
            <div className="md:mt-6">
              <h3 className="font-serif-display text-[19px] leading-[1.3] text-clause-heading md:text-[21px]">
                {title}
              </h3>
              <p className="mt-2 max-w-[300px] font-grotesk text-[15px] leading-[1.6] text-clause-muted md:mx-auto">
                {body}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

const STORIES = [
  {
    number: "01",
    category: "Family Immigration",
    title: "Reuniting a family after 20 years apart",
    description: "A complex immigration history navigated to help a family move forward together.",
    image: IMG.disputes,
  },
  {
    number: "02",
    category: "Business Immigration",
    title: "From refusal to sponsor licence approval",
    description: "Strategic support for a growing business following an earlier sponsor licence refusal.",
    image: IMG.transactions,
  },
  {
    number: "03",
    category: "Visitor Immigration",
    title: "Supporting a family during bereavement",
    description: "A visitor immigration matter approached carefully after previous refusals.",
    image: IMG.advisory,
  },
] as const;

function SuccessStories() {
  return (
    <section className="border-t border-clause-border">
      <div className="border-b border-clause-border px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[680px] md:text-center">
          <Reveal>
            <Eyebrow>Success Stories</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Outcomes that changed\nwhat came next."}
            className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,3rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 font-grotesk text-[16px] leading-[1.6] text-clause-muted md:text-[17px]">
              A selection of matters illustrating the careful preparation and strategic thinking behind Alcyone Law's work.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-clause-border md:px-8">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8" stagger={0.12}>
          {STORIES.map((story) => (
            <RevealItem
              key={story.title}
              className="h-full border-b border-clause-border md:border-x md:border-b-0 md:border-clause-border"
            >
              <Link to="/coming-soon" className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <RevealImage
                    src={story.image}
                    alt={story.title}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover"
                    hoverScale
                  />
                  <div className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center bg-clause-bg md:h-12 md:w-12">
                    <ArrowUpRight
                      className="h-4 w-4 text-clause-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <span className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-clause-sage">
                    {story.number} · {story.category}
                  </span>
                  <h3 className="mt-3 font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[24px]">
                    {story.title}
                  </h3>
                  <p className="mt-3 font-grotesk text-[15px] leading-[1.6] text-clause-muted md:text-[16px]">
                    {story.description}
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="border-b border-clause-border px-4 py-10 md:px-24 md:py-14">
        <div className="flex justify-center">
          <TextLink to="/coming-soon">View Success Stories</TextLink>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-t border-clause-border">
      <div className="grid grid-cols-1 md:grid-cols-[52fr_48fr]">
        <div className="px-4 py-14 md:border-r md:border-clause-border md:pl-8 md:pr-16 md:py-24">
          <Reveal>
            <Eyebrow>Focused Practice</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Specialist experience.\nPersonal perspective."}
            className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.6vw,2.5rem)]"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[470px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              Alcyone Law focuses on immigration and family matters from its London practice. The firm's approach combines specialist knowledge, strategic preparation and an understanding of how legal decisions affect real lives.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8">
              <TextLink to="/coming-soon">Meet our people</TextLink>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2">
          <RevealImage
            src={IMG.about}
            alt="Central London architecture"
            width={1024}
            height={1280}
            wrapperClassName="h-full"
            className="h-full w-full object-cover"
            hoverScale
          />
          <RevealImage
            src={IMG.cta}
            alt="London professional district at evening"
            width={1600}
            height={900}
            wrapperClassName="h-full border-l border-clause-border"
            className="h-full w-full object-cover"
            hoverScale
          />
        </div>
      </div>

      <StatsBand />
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
        <HeroStats />
        <Ribbon className="h-8 border-t border-clause-border" />
        <Introduction />
        <ExpertiseStrip />
        <Services />
        <Approach />
        <SuccessStories />
        <ExperienceSection />
        <LeadershipBlock />
        <Testimonials />
        <FinalCta />
        <Footer />
      </div>
      <ScrollDot />
    </div>
  );
}
