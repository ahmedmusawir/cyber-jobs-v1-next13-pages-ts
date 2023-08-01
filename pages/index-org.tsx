import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/globals";
import datasource from "@/data-layer";
import { Company, CompanyData } from "@/data-layer/company-entities";
import { CompanyApiResponse } from "@/services/companyService";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const companies: CompanyApiResponse = await datasource.getCompanies();

  // console.log("Companies at HomePage:", companies);

  const companyData = companies.data; // This will be of type CompanyData[].
  const companyMeta = companies.meta; // This will be of type { pagination: Pagination }.

  // Can even destructure data and meta properties:
  const { data, meta } = companies;

  return {
    props: {
      companies,
    },
    revalidate: 5,
  };
};

export default function HomePage({
  companies,
}: {
  companies: CompanyApiResponse;
}) {
  return (
    <Layout>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">
            This is a starting point for ... Next.js 13 (no App router){" "}
          </h1>
          <Box>
            <h2>Company Names (w/ New Pattern): </h2>
            {companies &&
              companies.data.map((company: CompanyData) => (
                <li key={company.attributes.slug}>{company.attributes.name}</li>
              ))}
          </Box>
          <Box>
            <h2>Meta: Pagination </h2>
            Page Size:
            {companies && companies.meta.pagination.pageSize}
          </Box>
        </Row>
      </Container>
    </Layout>
  );
}
