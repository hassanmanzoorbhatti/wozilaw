export const FIRM = {
  name: "Wozi Law Firm",
  legalName: "Wozi Law Firm",
  description:
    "London-headquartered bilingual law firm specialising in cross-border disputes and transactions.",
  founded: "2024",
  location: "London, United Kingdom",
  regulator: "SRA Regulated",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/coming-soon" },
  { label: "About", to: "/coming-soon" },
  { label: "Our People", to: "/coming-soon" },
  { label: "Insights", to: "/coming-soon" },
  { label: "Contact", to: "/coming-soon" },
] as const;

/** Capability badges shown in the statistics row beneath the hero. */
export const CAPABILITIES = [
  { label: "SRA Regulated" },
  { label: "London Based" },
  { label: "Bilingual Counsel" },
  { label: "Cross-Border Expertise" },
] as const;
