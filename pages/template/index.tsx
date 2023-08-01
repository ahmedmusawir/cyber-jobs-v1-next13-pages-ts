import { Inter } from "next/font/google";
import { Template } from "@/components/pages";

const inter = Inter({ subsets: ["latin"] });

export default function TemplatePage() {
  return <Template />;
}
