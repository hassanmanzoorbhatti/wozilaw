import { createFileRoute } from "@tanstack/react-router";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PageHero, SiteShell } from "@/components/site/Sections";
import { Eyebrow } from "@/components/site/SiteUi";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { FIRM } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Consultations — London Lawyers House" },
      {
        name: "description",
        content:
          "Contact London Lawyers House at 915 High Road, London N12 8QJ. Call 020 8343 6000 or email Info@llhuk.com to book a consultation.",
      },
      { property: "og:title", content: "Contact — London Lawyers House" },
      {
        property: "og:description",
        content: "Speak with our team about your legal matter. London office, N12 8QJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: FIRM.name,
          legalName: FIRM.legalName,
          telephone: FIRM.office,
          email: FIRM.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "915 High Road",
            addressLocality: "London",
            postalCode: "N12 8QJ",
            addressCountry: "GB",
          },
          openingHours: "Mo-Fr 10:00-17:00",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-clause-border py-7">
      <Eyebrow className="!text-clause-muted">{label}</Eyebrow>
      <div className="mt-3 font-grotesk text-[17px] leading-[1.6] text-clause-cream md:text-[19px]">
        {children}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title={"Speak with our team about\nyour legal matter."}
        description="Tell us briefly how we can help and our team will guide you through the next step."
      />

      <section className="grid grid-cols-1 border-t border-clause-border md:grid-cols-[56fr_44fr]">
        <div className="px-4 py-12 md:border-r md:border-clause-border md:px-16 md:py-16">
          <ConsultationForm />
        </div>

        <div className="px-4 py-12 md:px-16 md:py-16">
          <RevealGroup stagger={0.08}>
            <RevealItem>
              <Row label="Main Office">
                <address className="not-italic">
                  {FIRM.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </Row>
            </RevealItem>
            <RevealItem>
              <Row label="Office">
                <a href={`tel:${FIRM.officeTel}`} className="hover:opacity-70">
                  {FIRM.office}
                </a>
              </Row>
            </RevealItem>
            <RevealItem>
              <Row label="Mobile">
                <a href={`tel:${FIRM.mobileTel}`} className="hover:opacity-70">
                  {FIRM.mobile}
                </a>
              </Row>
            </RevealItem>
            <RevealItem>
              <Row label="Email">
                <a href={`mailto:${FIRM.email}`} className="break-all hover:opacity-70">
                  {FIRM.email}
                </a>
              </Row>
            </RevealItem>
          </RevealGroup>

          <Reveal className="mt-10">
            <Eyebrow>Opening Hours</Eyebrow>
          </Reveal>
          <RevealGroup className="mt-6" stagger={0.08}>
            {FIRM.hours.map((h) => (
              <RevealItem key={h.day}>
                <div className="flex items-baseline justify-between gap-4 border-b border-clause-border py-4">
                  <span className="font-grotesk text-[15px] text-clause-cream md:text-[16px]">
                    {h.day}
                  </span>
                  <span className="font-grotesk text-[15px] text-clause-muted md:text-[16px]">
                    {h.time}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2}>
            <p className="mt-8 font-grotesk text-[15px] leading-[1.7] text-clause-muted">
              Consultations are arranged by phone or email. Please include a short summary of your
              matter so we can direct it to the right professional.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
