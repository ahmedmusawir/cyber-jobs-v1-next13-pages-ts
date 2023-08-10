// ------------------------
// DATA FORMATTER FUNCTION
// ------------------------
import { JobData } from "@/data-layer/job-entities";
import { JobApiResponse } from "@/services/jobService";
import moment from "moment";
import { DependencyList, EffectCallback, useRef, useEffect } from "react";

export const formatDate = (dateString: string) => {
  const formattedDate = moment(dateString).format("MMM D, YYYY");

  console.log(formattedDate);

  return formattedDate;
};

// -------------------------------------------------------------------------------
// USE EFFTER W/ REF TO SKIP THE FIRST LOAD RUN OF THE FILTERS AND SEARCH METHODS
// -------------------------------------------------------------------------------
export const useEffectAfterFirstRender = (
  cb: EffectCallback,
  dependencies: DependencyList
) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return cb();
  }, dependencies);
};

// ---------------------
// SORTING FUNCTIONS
// ---------------------

interface SortProp {
  jobs: JobApiResponse;
  ASC?: boolean;
}

export const sortJobsByDatePosted = ({
  jobs,
  ASC = true,
}: SortProp): JobData[] => {
  const sorted = [...jobs.data];
  sorted.sort(function (job1, job2) {
    if (job1.attributes.datePosted < job2.attributes.datePosted)
      return ASC ? -1 : 1;
    else if (job1.attributes.datePosted > job2.attributes.datePosted)
      return ASC ? 1 : -1;
    else return 0;
  });

  return sorted;
};

export const sortJobsByBaseAnnualSalary = ({
  jobs,
  ASC = true,
}: SortProp): JobData[] => {
  const sorted = [...jobs.data];
  sorted.sort(function (job1, job2) {
    if (job1.attributes.annualSalary < job2.attributes.annualSalary)
      return ASC ? -1 : 1;
    else if (job1.attributes.annualSalary > job2.attributes.annualSalary)
      return ASC ? 1 : -1;
    else return 0;
  });
  return sorted;
};

export const sortJobsByCompanyName = ({ jobs }: SortProp): JobData[] => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs.data];
  sorted.sort(function (job1, job2) {
    if (
      job1.attributes.company.data.attributes.name <
      job2.attributes.company.data.attributes.name
    )
      return -1;
    else if (
      job1.attributes.company.data.attributes.name >
      job2.attributes.company.data.attributes.name
    )
      return 1;
    else return 0;
  });
  return sorted;
};
