import { links } from "./data";
import { IconType } from "react-icons";

export type SectionName =
  | (typeof links)[number]["name"]
  | "Skills"
  | "Experience"
  | "Projects"
  | "Testimonials";

export type ServiceProps = {
  title: string;
  description: string;
  icon: IconType;
};
