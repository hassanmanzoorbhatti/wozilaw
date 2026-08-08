import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { Ribbon, Wordmark } from "./SiteUi";

const SERVICE_LINKS = [
  "Cross-Border Disputes",
  "Cross-Border Transactions",
  "Bilingual Legal Advisory",
  "Visas & Settlement",
  "Citizenship & Human Rights",
  "Appeals & Reviews",
];

const COMPANY_LINKS = [
  "About Wozi",
  "Our People",
  "Success Stories",
  "News & Insights",
  "Careers",
  "Fees",
];

const LEGAL_LINKS = [
  "Privacy Statement",
  "Cookie Policy",
  "Terms & Conditions",
  "Legal Notice",
  "Complaints Procedure",
];

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
  icon: typeof Phone;
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
    <footer id="contact" className="scroll-mt-20 border-x border-clause-border bg-clause-bg">
      <div className="px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[300px] font-grotesk text-[15px] leading-[1.6] text-clause-muted">
              {FIRM.description}
            </p>
            <div className="mt-7 border-l border-clause-sage pl-4">
              <p className="font-grotesk text-[11px] font-semibold uppercase tracking-[0.14em] text-clause-muted">
                SRA Regulated
              </p>
              <p className="mt-1 font-serif-display text-[18px] text-clause-heading">
                Reference {FIRM.sra}
              </p>
            </div>
          </div>

          <div>
            <ColumnHeading>Expertise</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <Link
                    to="/coming-soon"
                    className="font-grotesk text-[15px] text-clause-cream transition-opacity hover:opacity-70"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Firm</ColumnHeading>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    to="/coming-soon"
                    className="font-grotesk text-[15px] text-clause-cream transition-opacity hover:opacity-70"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ColumnHeading>Legal</ColumnHeading>
              <ul className="mt-5 space-y-3">
                {LEGAL_LINKS.map((item) => (
                  <li key={item}>
                    <Link
                      to="/coming-soon"
                      className="font-grotesk text-[15px] text-clause-cream/70 transition-opacity hover:opacity-70"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <div className="mt-5 flex flex-col gap-4">
              <ContactRow icon={MapPin}>
                <address className="not-italic">
                  {FIRM.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </ContactRow>
              <ContactRow icon={Phone}>
                <a href={`tel:${FIRM.officeTel}`} className="hover:opacity-70">
                  {FIRM.office}
                </a>
              </ContactRow>
              <ContactRow icon={Smartphone}>
                <a href={`tel:${FIRM.mobileTel}`} className="hover:opacity-70">
                  {FIRM.mobile}
                </a>
              </ContactRow>
              <ContactRow icon={Mail}>
                <a href={`mailto:${FIRM.email}`} className="break-all hover:opacity-70">
                  {FIRM.email}
                </a>
              </ContactRow>
              <ContactRow icon={Clock}>
                Monday–Friday
                <br />
                9:00 AM–5:00 PM
              </ContactRow>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-clause-border px-4 py-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <p className="max-w-[920px] font-grotesk text-[12px] leading-[1.7] text-clause-muted">
            © {FIRM.legalName}. All rights reserved. Authorised and regulated by the Solicitors Regulation Authority, SRA practice reference {FIRM.sra}. Registered in England and Wales under company number {FIRM.companyNumber}.
          </p>
          <p className="shrink-0 font-grotesk text-[12px] text-clause-muted">
            Designed with <span aria-label="love">❤️</span> by{" "}
            <a
              href="mailto:hassanmanzoorbhatti@gmail.com"
              className="text-clause-heading underline decoration-clause-border underline-offset-4 transition-opacity hover:opacity-65"
            >
              Hassan Manzoor
            </a>
          </p>
        </div>
      </div>
      <Ribbon className="h-12" />
    </footer>
  );
}
