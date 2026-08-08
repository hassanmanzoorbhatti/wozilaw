import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Sections";
import { PrimaryButton } from "@/components/site/SiteUi";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — Wozi Law Firm" },
      {
        name: "description",
        content: "This page is coming soon. Book a consultation with Wozi Law Firm to discuss your cross-border legal matter.",
      },
      { property: "og:title", content: "Coming Soon — Wozi Law Firm" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/coming-soon" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/coming-soon" }],
  }),
  component: ComingSoonPage,
});

function ComingSoonPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Wozi Law Firm"
        title={"This page is\ncoming soon."}
        description="We're building this section of the site. In the meantime, book a consultation and our team will be in touch directly."
      />
      <section className="flex justify-center border-t border-clause-border px-4 py-14 md:px-24 md:py-20">
        <PrimaryButton href="/#consultation">Book a Consultation</PrimaryButton>
      </section>
    </SiteShell>
  );
}
