import React from "react";
import { JobApiResponse } from "@/services/jobService";
import JobList from "../data-view/JobList";
import { Page } from "../globals";

const JobsDataTextPageContent = ({ jobs }: { jobs: JobApiResponse }) => {
  return (
    <Page className={""} FULL={false}>
      <JobList jobs={jobs} />
    </Page>
  );
};

export default JobsDataTextPageContent;
