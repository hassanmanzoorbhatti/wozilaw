import { Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { Ribbon, Wordmark } from "./SiteUi";

const EXPERTISE_LINKS = [
  "Cross-Border Disputes",
  "Cross-Border Transactions",
  "Bilingual Advisory",
];

const FIRM_LINKS = [
  { label: "About", to: "/coming-soon" },
  { label: "Our People", to: "/coming-soon" },
  { label: "Insights", to: "/coming-soon" },
  { label: "Careers", to: "/coming-soon" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Legal Notice"];

function ColumnHeading({ children }: { children: string }) {
  return (
    <h4 className="font-grotesk text-[12px] font-semibold uppercase tracking-[0.14em] text-clause-muted">
      {children}
    </h4>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-[3px] h-4 w-4 shrink-0 text-clause-sage" strokeWidth={1.75} />
      <div className="min-w-0 font-grotesk text-[15px] leading-[1.7] text-clause-cream">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-x border-clause-border bg-clause-bg">
      <div className="px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[300px] font-grotesk text-[15px] leading-[1.6] text-clause-muted">
              {FIRM.description}
            </p>
          </div>

          <div>
            <ColumnHeading>Expertise</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {EXPERTISE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="/#expertise"
                    className="font-grotesk text-[15px] text-clause-cream transition-opacity hover:opacity-70"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Firm</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {FIRM_LINKS.map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.to}
                    className="font-grotesk text-[15px] text-clause-cream transition-opacity hover:opacity-70"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <div className="mt-5 flex flex-col gap-4">
              <ContactRow icon={MapPin}>{FIRM.location}</ContactRow>
              <ContactRow icon={ShieldCheck}>{FIRM.regulator}</ContactRow>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-clause-border px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="font-grotesk text-[13px] text-clause-muted">
          © {new Date().getFullYear()} {FIRM.legalName}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <li key={l}>
              <Link
                to="/coming-soon"
                className="font-grotesk text-[13px] text-clause-muted transition-opacity hover:opacity-70"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Ribbon className="h-12" />
    </footer>
  );
}
