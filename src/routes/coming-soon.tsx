import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, ScrollDot } from "@/components/site/SiteUi";

export const Route = createFileRoute("/coming-soon")({ component: ComingSoon });

function ComingSoon() {
  return (
    <div className="min-h-screen bg-clause-bg px-2 pb-2 md:p-0">
      <div className="mx-auto min-h-[calc(100vh-0.5rem)] max-w-[1320px] border border-clause-border md:min-h-screen md:border-x md:border-y-0">
        <Navbar />
        <div className="h-16 lg:hidden" aria-hidden="true" />
        <main className="flex min-h-[68vh] items-center justify-center border-b border-clause-border px-4 py-20 md:px-24 md:py-28">
          <div className="max-w-[720px] text-center">
            <Eyebrow>Wozi Law Firm</Eyebrow>
            <h1 className="mt-6 font-serif-display text-[38px] font-normal leading-[1.08] text-clause-heading md:text-[56px]">
              This page is coming soon.
            </h1>
            <p className="mx-auto mt-6 max-w-[540px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[17px]">
              This concept currently focuses on the Wozi Law Firm landing page. Additional pages can be developed using the same framed layout and design system.
            </p>
            <Link
              to="/"
              className="mt-9 inline-flex min-h-[48px] items-center gap-3 border border-clause-border bg-clause-pink px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-onaccent"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
      <ScrollDot />
    </div>
  );
}
