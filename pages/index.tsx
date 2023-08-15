import { Layout } from "@/components/globals";
import { Home } from "@/components/page-view";
import datasource from "@/data-layer";
import { HomePageData } from "@/data-layer/home-page-entities";
import { HomePageApiResponse } from "@/services/homePageService";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const HomePage = ({ homePageContent }: { homePageContent: HomePageData }) => {
  return (
    <Layout>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Home homePageContent={homePageContent} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const home: HomePageApiResponse = await datasource.getHomePage();

  // console.log("Companies at HomePage:", companies);

  const homePageContent = home.data; // This will be of type HomePageData

  return {
    props: {
      homePageContent,
    },
    revalidate: 5,
  };
};

export default HomePage;
