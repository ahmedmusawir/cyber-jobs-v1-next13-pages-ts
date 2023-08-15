import qs from "qs";
import companyService, { CompanyApiResponse } from "../services/companyService";
import { CompanyData } from "./company-entities";

// GETS ALL COMPANIES
export const getCompanies = async (): Promise<CompanyApiResponse> => {
  const query = qs.stringify(
    {
      populate: ["logo", "coverImage", "jobs"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await companyService.getAll(query);

  return response;
};

// GETS ONLY ALL COMPANY SLUGS AS AN ARRAY OF STRINGS
export const getCompanySlugs = async (): Promise<string[]> => {
  const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

  const response = await companyService.getAll(query);

  const slugs = response.data.map((slug) => slug.attributes.slug);

  return slugs;
};

// export const getCompanySlugs = async (): Promise<string[]> => {
//   const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

//   const response = await companyService.get(query);

//   const slugs = response.data.map((slug) => slug.attributes.slug);

//   return slugs;
// };

// GETS SINGLE COMPANY BY IT'S SLUG
export const getCompanyBySlug = async (slug: string): Promise<CompanyData> => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["logo", "coverImage", "jobs"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const rawCompany = await companyService.getOneBySlug(query);

  console.log("RAW COMPANY:", rawCompany);
  return rawCompany;
};
