import qs from "qs";
import jobService, { JobApiResponse } from "@/services/jobService";
import { JobData } from "./job-entities";

// GETS ALL JOBS
export const getJobs = async (): Promise<JobApiResponse> => {
  const query = qs.stringify(
    {
      "populate[company][populate][0]": "logo,coverImage",
      populate: "skillTags",
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

  const response = await jobService.get(query);

  const slugs = response.data.map((slug) => slug.attributes.slug);

  return slugs;
};

// GETS SINGLE JOB BY IT'S SLUG
export const getJobBySlug = async (slug: string): Promise<JobData> => {
  const query = qs.stringify(
    {
      "populate[company][populate][0]": "logo,coverImage",
      populate: "skillTags",

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
