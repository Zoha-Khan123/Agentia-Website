import { BookOpenText, Brain, CodeXml, Earth } from "lucide-react";
import { ComponentType } from "react";

export interface poweredDataType {
    icon:ComponentType<React.SVGProps<SVGSVGElement>>,
    heading:string,
    para:string,
    background:string,
}
export const poweredData:poweredDataType[] = [
  {
    icon: Brain,
    heading: "Neural Networks",
    para: "Advance neural architectures for complex decision making",
    background:"bg-red-500",
  },
  {
    icon:BookOpenText,
    heading: "Neural Networks",
    para: "Advance neural architectures for complex decision making",
    background:"bg-green-500",
  },
  {
    icon:CodeXml,
    heading: "Neural Networks",
    para: "Advance neural architectures for complex decision making",
    background:"bg-yellow-500",
  },
  {
    icon:Earth,
    heading: "Neural Networks",
    para: "Advance neural architectures for complex decision making",
    background:"bg-gray-500",
  },
];
