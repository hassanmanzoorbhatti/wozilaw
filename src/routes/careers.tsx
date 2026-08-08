import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { PageHero, SiteShell } from "@/components/site/Sections";
import { GhostButton, PrimaryButton } from "@/components/site/SiteUi";
import { FIRM } from "@/lib/site-data";
import careersImg from "../assets/careers-office.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — London Lawyers House" },
      {
        name: "description",
        content:
          "Build your career with London Lawyers House. We welcome talented professionals joining our growing international legal network.",
      },
      { property: "og:title", content: "Careers — London Lawyers House" },
      {
        property: "og:description",
        content: "Opportunities with a growing international legal network based in London.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title={"Build your career with\nLondon Lawyers House."}
        description="We're always interested in hearing from talented professionals who want to contribute to our growing international network."
      />

      <section className="border-b border-clause-border">
        <RevealImage
          src={careersImg}
          alt="A professional team working together in a London office"
          width={1280}
          height={960}
          className="aspect-[4/3] w-full object-cover md:aspect-[21/9]"
        />
      </section>

      <section className="px-4 py-16 md:px-24 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-serif-display font-normal leading-[1.2] text-clause-heading text-[clamp(1.5rem,1rem+2vw,2.125rem)]">
              How to apply
            </h2>
            <p className="mt-5 font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              Send your CV and a short note about the area of law you work in to{" "}
              <a href={`mailto:${FIRM.email}`} className="text-clause-pink hover:opacity-70">
                {FIRM.email}
              </a>
              , or call our London office during opening hours.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href={`mailto:${FIRM.email}?subject=Career%20opportunities`}>
                View Career Opportunities
              </PrimaryButton>
              <GhostButton href={`mailto:${FIRM.email}?subject=CV%20submission`}>
                Submit Your CV
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
