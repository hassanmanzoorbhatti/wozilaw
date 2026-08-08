import disputesImg from "../assets/wozi-service-disputes.jpg";
import transactionsImg from "../assets/wozi-service-transactions.jpg";
import bilingualImg from "../assets/wozi-service-bilingual.jpg";

export type Service = {
  number: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
};

export const PRIMARY_SERVICES: Service[] = [
  {
    number: "01",
    name: "Cross-Border Disputes",
    description:
      "Strategic legal support for complex disputes involving international businesses and commercial interests.",
    tags: ["Commercial Disputes", "International Matters", "Strategic Advice"],
    image: disputesImg,
  },
  {
    number: "02",
    name: "Cross-Border Transactions",
    description:
      "Commercial legal guidance for transactions requiring coordination between different legal systems.",
    tags: ["Transactions", "Corporate Matters", "Business Advisory"],
    image: transactionsImg,
  },
  {
    number: "03",
    name: "Bilingual Legal Advisory",
    description:
      "English and Chinese legal understanding supporting sophisticated international matters.",
    tags: ["English Law", "Chinese Context", "Cross-Border Support"],
    image: bilingualImg,
  },
];

export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES];
