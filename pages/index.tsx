import { Layout } from "@/components/globals";
import { Home } from "@/components/pages";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Home />
    </Layout>
  );
}
