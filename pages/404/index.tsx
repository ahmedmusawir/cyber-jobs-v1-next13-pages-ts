import { Inter } from "next/font/google";
import styles from "./demo.module.scss";
import PageNotFoundContent from "@/components/page-view/PageNotFoundContent";

const inter = Inter({ subsets: ["latin"] });

export default function NotFoundPage() {
  return <PageNotFoundContent />;
}
