import privateImg from "../assets/service-private.jpg";
import businessImg from "../assets/wozi-service-business.jpg";
import familyImg from "../assets/wozi-service-family.jpg";
import storyVisitor from "../assets/story-visitor.jpg";
import storyFamily from "../assets/story-family.jpg";
import storyBusiness from "../assets/story-business.jpg";

export type Service = {
  number: string;
  name: string;
  description: string;
  image?: string;
};

export const PRIMARY_SERVICES: Service[] = [
  {
    number: "01",
    name: "Cross-Border Disputes",
    description:
      "Clear advice on visas, settlement, citizenship and complex personal immigration matters.",
    image: privateImg,
  },
  {
    number: "02",
    name: "Cross-Border Transactions",
    description:
      "Strategic immigration support for businesses, entrepreneurs, sponsors and professionals.",
    image: businessImg,
  },
  {
    number: "03",
    name: "Bilingual Legal Advisory",
    description:
      "Sensitive, considered guidance for divorce, separation, child arrangements and family matters.",
    image: familyImg,
  },
];

export const ADDITIONAL_SERVICES: Service[] = [
  {
    number: "04",
    name: "Visas & Settlement",
    description:
      "Practical support with UK visa routes, extensions, indefinite leave to remain and settlement planning.",
    image: storyVisitor,
  },
  {
    number: "05",
    name: "Citizenship & Human Rights",
    description:
      "Careful guidance on British citizenship, nationality, asylum and human-rights based applications.",
    image: storyFamily,
  },
  {
    number: "06",
    name: "Appeals & Reviews",
    description:
      "Strategic preparation for refused applications, administrative reviews and immigration challenges.",
    image: storyBusiness,
  },
];

export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES, ...ADDITIONAL_SERVICES];
