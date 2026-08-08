import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell, StatsBand } from "@/components/site/Sections";
import { LeadershipBlock } from "@/components/site/Leadership";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — London Lawyers House" },
      {
        name: "description",
        content:
          "Meet the leadership of London Lawyers House Ltd, including Managing Director Farhad Fattahi, and our international legal network.",
      },
      { property: "og:title", content: "Our Team — London Lawyers House" },
      {
        property: "og:description",
        content: "Leadership and legal professionals across our UK and international network.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Team"
        title={"An international network of\nlegal professionals."}
        description="London Lawyers House brings together experienced legal professionals across the United Kingdom and internationally, coordinated from our London office."
      />
      <LeadershipBlock />
      <StatsBand />
      <section className="px-4 py-16 md:px-24 md:py-20">
        <p className="mx-auto max-w-[620px] text-center font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
          Individual professional profiles will be published here as they are confirmed. For
          matter-specific enquiries, contact our London office and we will direct you to the right
          professional.
        </p>
      </section>
    </SiteShell>
  );
}
