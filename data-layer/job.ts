import qs from "qs";
import jobService, { JobApiResponse } from "@/services/jobService";
import { JobData, JobSearchQuery } from "./job-entities";

// GETS ALL JOBS
export const getJobs = async (): Promise<JobApiResponse> => {
  const query = qs.stringify(
    {
      populate: ["company", "company.logo", "company.coverImage", "skillTags"],
    },
    {
      encodeValuesOnly: true,
      arrayFormat: "brackets",
    }
  );

  const response = await jobService.getAll(query);

  return response;
};

// GETS ONLY ALL JOB SLUGS AS AN ARRAY OF STRINGS
export const getJobSlugs = async (): Promise<string[]> => {
  const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

  const response = await jobService.getAll(query);

  const slugs = response.data.map((slug) => slug.attributes.slug);

  return slugs;
};

// export const getJobSlugs = async (): Promise<string[]> => {
//   const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

//   const response = await jobService.get(query);

//   const slugs = response.data.map((slug) => slug.attributes.slug);

//   return slugs;
// };

// GETS SINGLE JOB BY IT'S SLUG
export const getJobBySlug = async (slug: string): Promise<JobData> => {
  const query = qs.stringify(
    {
      populate: ["company", "company.logo", "company.coverImage", "skillTags"],

      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const rawCompany = await jobService.getOneBySlug(query);

  return rawCompany;
};

// JOBS SEARCH AND FILTERS
type StrapiQuery = {
  populate: string[];
  filters: { [key: string]: any };
};

export const searchJobs = async (
  query: JobSearchQuery
): Promise<JobApiResponse> => {
  const strapiQuery: StrapiQuery = {
    populate: ["company", "company.logo", "company.coverImage", "skillTags"],
    filters: {},
  };

  // Add Boolean Query Filters
  if (query.remoteOk) strapiQuery.filters["remoteOk"] = { $eq: true };
  if (query.featured) strapiQuery.filters["featured"] = { $eq: true };

  // Add Inclusion Query Filters
  strapiQuery.filters["jobType"] = { $in: query.jobTypes };

  // Add Range Query Filters
  strapiQuery["filters"]["annualSalary"] = {
    $gte: query.minBaseSalary,
    $lte: query.maxBaseSalary,
  };

  // Add Full Text Search Query
  type BasicFilter = {
    $containsi?: string;
    $eq?: boolean | string;
    $in?: string[];
    $gte?: number;
    $lte?: number;
  };

  type SearchField = {
    [key: string]: string | BasicFilter | NestedSearchField;
  };

  type NestedSearchField = {
    [key: string]: BasicFilter;
  };

  if (query.searchBarText) {
    const searchFields = [
      "title",
      "jobCategory",
      "jobType",
      "jobDescription",
      "aboutYou",
      "jobResponsibilities",
      "remunerationPackage",
      "skillsTags.name",
      "company.name",
      "company.city",
    ];

    strapiQuery["filters"]["$or"] = searchFields.map((field): SearchField => {
      const searchField: SearchField = {};

      if (!field.includes(".")) {
        searchField[field] = { $containsi: query.searchBarText };
      } else {
        const [level1, level2] = field.split(".");
        const nestedSearchField: NestedSearchField = {};
        nestedSearchField[level2] = { $containsi: query.searchBarText };
        searchField[level1] = nestedSearchField;
      }
      return searchField;
    });
  }

  const strapiQueryStr = qs.stringify(strapiQuery, { encodeValuesOnly: true });

  const response = await jobService.getAll(strapiQueryStr);

  return response;
};
