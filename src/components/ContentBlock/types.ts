import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  image: string;
  content: string;
  content2?: string;
  cloudIcons?: {
    path: string;
    url: string;
  }[];
  github?: {
    title: string;
    link: string;
  };
  skills?: {
    title: string;
    content: string;
  }[];
  section?: {
    title: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        scrollto: string;
      }
    | {
        title: string;
        color: string;
        scrollto: string; 
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
