import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { PageHero, SiteShell, StatsBand } from "@/components/site/Sections";
import { Eyebrow } from "@/components/site/SiteUi";
import { NETWORK_LOCATIONS } from "@/lib/site-data";
import londonImg from "../assets/london-architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — London Lawyers House" },
      {
        name: "description",
        content:
          "London Lawyers House provides legal consultancy and support to individuals and businesses across the UK and internationally.",
      },
      { property: "og:title", content: "About — London Lawyers House" },
      {
        property: "og:description",
        content:
          "Legal support built around people, businesses and real-world outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About London Lawyers House"
        title={"Legal support built around\npeople, businesses and\nreal-world outcomes."}
        description="London Lawyers House provides professional legal consultancy and support to individuals and businesses across the United Kingdom and internationally."
      />

      <section className="grid grid-cols-1 border-b border-clause-border md:grid-cols-[45fr_55fr]">
        <div className="md:border-r md:border-clause-border">
          <RevealImage
            src={londonImg}
            alt="A London professional building facade"
            width={1024}
            height={1280}
            wrapperClassName="h-full"
            className="aspect-[4/5] h-full w-full object-cover md:aspect-auto"
          />
        </div>
        <div className="px-4 py-14 md:px-16 md:py-20">
          <Eyebrow>Our Network</Eyebrow>
          <p className="mt-6 font-grotesk text-[16px] leading-[1.7] text-clause-cream md:text-[18px]">
            Our network brings together experienced legal professionals covering matters ranging
            from property and financial disputes to immigration, family and criminal law.
          </p>
          <p className="mt-5 font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
            We work with clients in the United Kingdom and internationally, coordinating support
            across offices so a matter can be progressed wherever it needs attention.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {NETWORK_LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="font-grotesk text-[14px] uppercase tracking-[0.12em] text-clause-muted"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <AnimatedText
            as="h2"
            text="Clear communication, practical solutions and professional support."
            stagger={0.02}
            className="font-serif-display font-normal leading-[1.3] text-clause-cream text-[clamp(1.375rem,0.95rem+2vw,2rem)]"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              Every matter is handled with the same principles: straightforward guidance, advice
              focused on protecting client interests, and responsive assistance at every stage.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
