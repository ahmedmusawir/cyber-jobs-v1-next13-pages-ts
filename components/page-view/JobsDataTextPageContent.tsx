import React from "react";
import { Page } from "../ui-ux";
import { JobApiResponse } from "@/services/jobService";
import JobList from "../data-view/JobList";

const JobsDataTextPageContent = ({ jobs }: { jobs: JobApiResponse }) => {
  return (
    <Page className={""} FULL={false}>
      <JobList jobs={jobs} />
    </Page>
  );
};

export default JobsDataTextPageContent;
