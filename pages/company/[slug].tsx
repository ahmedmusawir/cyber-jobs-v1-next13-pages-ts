import { CompanyDetailsContent } from "@/components/page-view";
import Spinner from "@/components/ui-ux/Spinner";
import datasource from "@/data-layer";
import { CompanyData } from "@/data-layer/company-entities";
import { GetStaticPropsContext } from "next";
import React from "react";

interface Props {
  company: CompanyData;
}

const CompanyDetailsPage = ({ company }: Props) => {
  if (!company) return <Spinner />;

  return (
    <div>
      <CompanyDetailsContent company={company} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const slugs = await datasource.getCompanySlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug as string;
  const company = await datasource.getCompanyBySlug(slug);

  console.log("Company Data: Static Props", company);

  if (!company) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      company,
    },
    revalidate: 5,
  };
};

export default CompanyDetailsPage;
