import qs from "qs";
import companyService, { CompanyApiResponse } from "../services/companyService";
import { ApiResponseCompanySlugs, CompanyData } from "./company-entities";

export const getCompanies = async (): Promise<CompanyApiResponse> => {
  const response = await companyService.getAll();

  return response;
};

// export const getCompanySlugs = async (): Promise<CompanyApiResponse> => {
export const getCompanySlugs = async (): Promise<string[]> => {
  const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

  const response = await companyService.get(query);

  // console.log("COMPANY SLUGS", response);

  const slugs = response.data.map((slug) => slug.attributes.slug);

  return slugs;
};

export const getCompanyBySlug = async (slug: string): Promise<CompanyData> => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["logo", "coverImage"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const rawCompany = await companyService.getOneBySlug(query);

  console.log("RAW COMPANY:", rawCompany);
  return rawCompany;
};
