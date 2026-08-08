import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Eyebrow, TextLink } from "./SiteUi";
import zahraPortrait from "../../assets/zahra.jpg";

export function LeadershipBlock() {
  return (
    <section className="grid grid-cols-1 border-b border-clause-border md:grid-cols-[45fr_55fr]">
      <div className="md:border-r md:border-clause-border">
        <RevealImage
          src={zahraPortrait}
          alt="Karen Haiye Wang, Co-Founder at Wozi Law Firm"
          wrapperClassName="h-full"
          className="aspect-square h-full w-full object-cover object-top md:object-center"
        />
      </div>
      <div className="px-4 py-14 md:px-8 md:py-20">
        <Reveal>
          <Eyebrow>Founder & Principal Solicitor</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.4vw,2.5rem)]">
            Meet Karen Haiye Wang
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 border-t border-clause-border pt-8">
            <p className="font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[26px]">
              Karen Haiye Wang
            </p>
            <p className="mt-2 font-grotesk text-[14px] uppercase tracking-[0.12em] text-clause-sage">
              Founder · Director · Principal Solicitor
            </p>
            <p className="mt-6 max-w-[540px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
              Karen Haiye Wang brings more than a decade of specialist immigration experience to Wozi Law Firm.
              Her practice combines technical expertise, strategic judgment and a personal
              understanding of the immigration journey.
            </p>
            <div className="mt-8">
              <TextLink to="/coming-soon">Meet Karen Haiye Wang</TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
