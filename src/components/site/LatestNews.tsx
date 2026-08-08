// News is hidden for launch. Add genuine London Lawyers House articles to
// NEWS_POSTS and flip NEWS_ENABLED to true to activate the section.
import { AnimatedText } from "@/components/motion/AnimatedText";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Ribbon, TextLink } from "./SiteUi";

export type NewsPost = { title: string; date: string; image: string; href?: string };

export const NEWS_POSTS: NewsPost[] = [];

export const NEWS_ENABLED: boolean = false;

export function LatestNews() {
  if (!NEWS_ENABLED || NEWS_POSTS.length === 0) return null;
  return (
    <section className="border-y border-clause-border py-16 md:py-28">
      <Ribbon />
      <div className="mt-10 px-4 md:mt-16 md:px-24">
        <header className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <AnimatedText
            as="h2"
            text="Latest news"
            className="font-serif-display text-clause-heading text-[clamp(1.625rem,1rem+2.7vw,2.5rem)] leading-[1.15]"
          />
          <TextLink>All news</TextLink>
        </header>

        <RevealGroup
          className="mt-10 grid grid-cols-1 gap-y-12 md:mt-14 md:grid-cols-[55fr_45fr] md:gap-x-6 md:gap-y-0"
          stagger={0.15}
        >
          {NEWS_POSTS.map((p) => (
            <RevealItem key={p.title}>
              <a href={p.href ?? "#"} className="group block">
                <RevealImage
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover"
                  hoverScale
                />
                <h3 className="mt-5 font-grotesk text-[17px] font-bold leading-[1.3] text-clause-heading md:mt-6 md:text-[19px]">
                  {p.title}
                </h3>
                <p className="mt-2 font-grotesk text-[14px] text-clause-muted">{p.date}</p>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <Ribbon className="mt-16 md:mt-24" />
    </section>
  );
}
