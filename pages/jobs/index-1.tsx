import { Jobs } from "@/components/page-view";
import JobsDataTextPageContent from "@/components/page-view/JobsDataTextPageContent";
import datasource from "@/data-layer";
import { JobApiResponse } from "@/services/jobService";
import React from "react";

export const getStaticProps = async () => {
  const jobs: JobApiResponse = await datasource.getJobs();

  // console.log("Companies at HomePage:", companies);

  const companyData = jobs.data; // This will be of type CompanyData[].
  const companyMeta = jobs.meta; // This will be of type { pagination: Pagination }.

  // Can even destructure data and meta properties:
  const { data, meta } = jobs;

  return {
    props: {
      jobs,
    },
    revalidate: 5,
  };
};

const JobsDataTextPage = ({ jobs }: { jobs: JobApiResponse }) => {
  return <JobsDataTextPageContent jobs={jobs} />;
};

export default JobsDataTextPage;
