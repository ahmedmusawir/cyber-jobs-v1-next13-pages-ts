import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Page } from "@/components/globals";
import ContactUs from "@/components/ui-ux/ContactUs";
import OurOffice from "@/components/ui-ux/OurOffice";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Page className={""} FULL={false}>
        <ContactUs />
        <OurOffice />
      </Page>
    </>
  );
}
