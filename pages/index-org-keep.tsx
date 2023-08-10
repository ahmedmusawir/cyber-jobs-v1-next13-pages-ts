import { Page } from "@/components/globals";
import { Box, Row } from "@/components/ui-ux";
import datasource from "@/data-layer";
import { CompanyData } from "@/data-layer/company-entities";
import { CompanyApiResponse } from "@/services/companyService";
import { Inter } from "next/font/google";
import Head from "next/head";

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
  console.log("CompanyApiResponse - HomePage:", companies);
  return (
    <>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">
            This is a starting point for ... Next.js 13 (no App router){" "}
          </h1>
          <Box>
            <h2>Company Names (w/ New Pattern): </h2>
            {companies &&
              companies.data.map((company: CompanyData) => (
                <div key={company.attributes.slug}>
                  <li>Name: {company.attributes.name}</li>
                  <li>
                    Logo Image: {company.attributes.logo.data.attributes.url}
                  </li>
                  <li>
                    Cover Image:{" "}
                    {company.attributes.coverImage.data.attributes.url}
                  </li>
                  <li>Slogan: {company.attributes.slogan}</li>
                  <li>City: {company.attributes.city}</li>
                  <li>Slug: {company.attributes.slug}</li>
                </div>
              ))}
          </Box>
          <Box>
            <h2>Meta: Pagination </h2>
            Page Size:
            {companies && companies.meta.pagination.pageSize}
          </Box>
        </Row>
      </Page>
    </>
  );
}
