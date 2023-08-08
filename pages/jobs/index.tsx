import JobsPageContent from "@/components/page-view/JobsPageContent";
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

const JobsPage = ({ jobs }: { jobs: JobApiResponse }) => {
  return <JobsPageContent jobs={jobs} />;
};

export default JobsPage;
