import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./SiteUi";

export type Testimonial = {
  quote: string;
  label: string;
};

// Presentation copy for the redesign concept. Replace with approved/verbatim
// client quotations before publishing the final production website.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Professional, clear and reassuring from the very beginning. I always understood what the next step would be.",
    label: "Immigration client",
  },
  {
    quote: "A thoughtful approach that made a difficult process feel manageable, with careful guidance throughout.",
    label: "Family law client",
  },
  {
    quote: "Strategic advice, excellent communication and genuine care throughout the matter.",
    label: "Immigration client",
  },
  {
    quote: "The advice was practical and easy to understand, and every question was handled with patience and professionalism.",
    label: "Private immigration client",
  },
  {
    quote: "We felt listened to, supported and properly prepared at every stage of the process.",
    label: "Business immigration client",
  },
];

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex min-h-[250px] w-[300px] shrink-0 flex-col justify-between border-x border-clause-border bg-clause-surface p-6 sm:w-[340px] md:min-h-[270px] md:w-[380px] md:p-8">
      <div>
        <div
          className="font-grotesk text-[13px] tracking-[0.16em] text-clause-sage"
          aria-label="5 star review"
        >
          ★★★★★
        </div>
        <p className="mt-6 font-serif-display text-[20px] leading-[1.45] text-clause-heading md:text-[22px]">
          “{t.quote}”
        </p>
      </div>
      <div className="mt-8 border-t border-clause-border pt-5">
        <p className="font-grotesk text-[11px] font-semibold uppercase tracking-[0.14em] text-clause-muted">
          Alcyone Law client
        </p>
        <p className="mt-1 font-grotesk text-[13px] text-clause-muted">{t.label}</p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-clause-border">
      <div className="border-b border-clause-border px-4 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-[680px] md:text-center">
          <Reveal>
            <Eyebrow>Client Words</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text={"Trusted through life's\nmost important moments."}
            className="mt-5 font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,3rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 font-grotesk text-[15px] leading-[1.6] text-clause-muted md:text-[17px]">
              A client-focused practice built around clear advice, careful preparation and personal support.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="overflow-hidden border-b border-clause-border py-8 md:py-10">
        <div className="testimonial-marquee-mask w-full overflow-hidden">
          <div className="testimonial-marquee-track flex w-max">
            <div className="flex shrink-0 gap-5 pr-5 md:gap-8 md:pr-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <ReviewCard key={`first-${testimonial.label}-${index}`} t={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 gap-5 pr-5 md:gap-8 md:pr-8" aria-hidden="true">
              {TESTIMONIALS.map((testimonial, index) => (
                <ReviewCard key={`second-${testimonial.label}-${index}`} t={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
