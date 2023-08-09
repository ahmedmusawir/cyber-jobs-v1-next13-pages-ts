import Head from "next/head";
import React from "react";
import { Row, Page } from "../ui-ux";
import { CompanyData } from "@/data-layer/company-entities";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import JobList from "../data-view/JobList";
import CompanyJobList from "../data-view/CompanyJobList";

interface Props {
  company: CompanyData;
}

const CompanyDetailsContent = ({ company }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL;

  return (
    <>
      <Head>
        <title>Company Details Page</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <div className="relative isolate">
          <div className="bg-black/70 px-6 py-24 sm:py-16 lg:px-8">
            <img
              src={baseUrl + company.attributes.coverImage.data.attributes.url}
              alt={company.attributes.name}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="mx-auto max-w-2xl text-center  backgroundImage relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {company.attributes.name}
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                {company.attributes.city}
              </p>
              <img
                className="h-[100px] w-[100px] flex-shrink-0 rounded-full bg-gray-300 mx-auto mb-5 absolute bottom-[-135px] left-0 right-0 z-1000"
                src={baseUrl + company.attributes.logo.data.attributes.url}
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          href="/jobs"
          className="pt-5 pb-2 rounded-full bg-white px-2.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Back To Job Board
        </Link>
        <div className="mt-16">
          <div className="strapiMarkdownRichText">
            <ReactMarkdown>{company.attributes.slogan}</ReactMarkdown>
          </div>

          <h2 className="mb-10">Available Jobs:</h2>
          <CompanyJobList jobs={company.attributes.jobs?.data} />
        </div>
      </Page>
    </>
  );
};

export default CompanyDetailsContent;
