// Testimonials are disabled until genuine client reviews are supplied.
// Add real entries to TESTIMONIALS and flip TESTIMONIALS_ENABLED to true.
import { AnimatedText } from "@/components/motion/AnimatedText";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [];

export const TESTIMONIALS_ENABLED: boolean = false;

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="border border-clause-border p-6" style={{ borderRadius: "1px" }}>
      <p className="font-grotesk text-[15px] leading-[1.6] text-clause-heading">“{t.quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : null}
        <div className="min-w-0">
          <div className="font-grotesk text-[15px] font-medium text-clause-heading">{t.name}</div>
          <div className="font-grotesk text-[14px] text-clause-muted">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  if (!TESTIMONIALS_ENABLED || TESTIMONIALS.length === 0) return null;
  return (
    <section className="border-t border-clause-border px-4 py-16 md:px-24 md:py-24">
      <AnimatedText
        as="h2"
        text="What our clients say"
        className="font-serif-display font-normal leading-[1.12] text-clause-heading text-[clamp(1.75rem,1rem+3vw,2.75rem)]"
      />
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <ReviewCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
