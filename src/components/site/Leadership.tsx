import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { Eyebrow } from "./SiteUi";
import karenPortrait from "../../assets/wozi-karen-haiye-wang.jpg";
import jinPortrait from "../../assets/wozi-jin-ding.jpg";

type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

const LEADERS: Leader[] = [
  {
    name: "Karen Haiye Wang",
    role: "Co-Founder",
    bio: "Karen co-founded Wozi Law Firm to bring together deep experience across English and Chinese legal systems, guiding businesses and organisations through complex cross-border matters.",
    image: karenPortrait,
    imageAlt: "Karen Haiye Wang, Co-Founder of Wozi Law Firm",
  },
  {
    name: "Jin Ding",
    role: "Lawyer",
    bio: "Jin advises on cross-border disputes and transactions, combining legal precision with an international commercial understanding for Wozi's clients.",
    image: jinPortrait,
    imageAlt: "Jin Ding, Lawyer at Wozi Law Firm",
  },
];

function LeaderRow({ leader, reverse = false }: { leader: Leader; reverse?: boolean }) {
  return (
    <div className="grid grid-cols-1 border-b border-clause-border md:grid-cols-[45fr_55fr] last:border-b-0">
      <div className={reverse ? "md:order-2 md:border-l md:border-clause-border" : "md:border-r md:border-clause-border"}>
        <RevealImage
          src={leader.image}
          alt={leader.imageAlt}
          wrapperClassName="h-full"
          className="aspect-square h-full w-full object-cover object-center"
        />
      </div>
      <div className={`px-4 py-14 md:px-8 md:py-16 ${reverse ? "md:order-1" : ""}`}>
        <Reveal delay={0.1}>
          <p className="font-serif-display text-[22px] leading-[1.2] text-clause-heading md:text-[26px]">
            {leader.name}
          </p>
          <p className="mt-2 font-grotesk text-[14px] uppercase tracking-[0.12em] text-clause-sage">
            {leader.role}
          </p>
          <p className="mt-6 max-w-[520px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
            {leader.bio}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function LeadershipBlock() {
  return (
    <section id="people" className="border-b border-clause-border">
      <div className="border-b border-clause-border px-4 py-14 md:px-8 md:py-16">
        <Reveal>
          <Eyebrow>Our People</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-serif-display font-normal leading-[1.15] text-clause-heading text-[clamp(1.625rem,1rem+2.4vw,2.5rem)]">
            Senior counsel behind every matter.
          </h2>
        </Reveal>
      </div>
      <LeaderRow leader={LEADERS[0]} />
      <LeaderRow leader={LEADERS[1]} reverse />
    </section>
  );
}
