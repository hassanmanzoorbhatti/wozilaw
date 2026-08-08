import { createFileRoute } from "@tanstack/react-router";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { PageHero, SiteShell } from "@/components/site/Sections";
import { ALL_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Legal Services — London Lawyers House" },
      {
        name: "description",
        content:
          "Immigration, property, criminal defence, family, financial claims and business dispute support from London Lawyers House.",
      },
      { property: "og:title", content: "Legal Services — London Lawyers House" },
      {
        property: "og:description",
        content:
          "Clear advice, practical support and committed representation across a broad range of legal matters.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Services"
        title={"Legal expertise for\nlife's important matters."}
        description="Clear advice, practical support and committed representation across a broad range of legal matters."
      />

      <section>
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2" stagger={0.1}>
          {ALL_SERVICES.map((s, i) => (
            <RevealItem
              key={s.name}
              className={`border-b border-clause-border p-6 md:p-10 ${
                i % 2 === 1 ? "md:border-l" : ""
              }`}
            >
              {s.image ? (
                <RevealImage
                  src={s.image}
                  alt={s.name}
                  className="mb-7 aspect-[16/10] w-full object-cover"
                  hoverScale
                />
              ) : null}
              <div className="font-grotesk text-[13px] font-semibold tracking-[0.14em] text-clause-sage">
                {s.number}
              </div>
              <h2 className="mt-3 font-serif-display text-[24px] leading-[1.2] text-clause-heading md:text-[28px]">
                {s.name}
              </h2>
              <p className="mt-3 max-w-[460px] font-grotesk text-[15px] leading-[1.6] text-clause-muted md:text-[16px]">
                {s.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <AnimatedText
            as="h2"
            text="Not sure which area your matter falls under?"
            className="font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.5rem,1rem+2.2vw,2.25rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 font-grotesk text-[16px] leading-[1.6] text-clause-muted md:text-[17px]">
              Our team will review your circumstances and direct you to the right support.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
