// ------------------------
// DATA FORMATTER FUNCTION
// ------------------------
import { TestimonialData } from "@/data-layer/home-page-entities";
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

// --------------------------------------------------------------------------
// FILLING UP 3 COLUMNS WITH TESTIMONIALS ON HOME PAGE W/ FOLLOWING FUNCTIONS
// --------------------------------------------------------------------------

export const getTestimonialsSet_1 = (testimonials: TestimonialData[]) => {
  return testimonials.filter((_, index) => index % 3 === 0);
};

export const getTestimonialsSet_2 = (testimonials: TestimonialData[]) => {
  return testimonials.filter((_, index) => index % 3 === 1);
};

export const getTestimonialsSet_3 = (testimonials: TestimonialData[]) => {
  return testimonials.filter((_, index) => index % 3 === 2);
};

// --------------------------------------------------------------------
// SET TESTIMONIALS IN 4 COLUMNS: DO NOT DELETE THE FOLLOWING FUNCTIONS
// --------------------------------------------------------------------

// export const setFourColTestimonialsArray = (
//   testimonialsArray: TestimonialData[]
// ): TestimonialData[][][] => {
//   const numCols = 4;
//   const organizedTestimonials: TestimonialData[][][] = Array.from(
//     { length: numCols },
//     () => []
//   );

//   testimonialsArray.forEach((testimonial, index) => {
//     const colIndex = index % numCols;
//     organizedTestimonials[colIndex].push([testimonial]);
//   });

//   return organizedTestimonials;
// };

// export const setFourColTestimonialsArray = (
//   testimonialsArray: TestimonialData[]
// ) => {
//   const numCols = 4;
//   const organizedTestimonials: TestimonialData[][] = Array.from(
//     { length: numCols },
//     () => []
//   );

//   testimonialsArray.forEach((testimonial, index) => {
//     const colIndex = index % numCols;
//     organizedTestimonials[colIndex].push(testimonial);
//   });

//   return organizedTestimonials;
// };
