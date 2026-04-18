import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  image: string;
  content: string;
  content2?: string;
  markup?: String[];
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
