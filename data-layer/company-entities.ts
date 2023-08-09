import { CompanyApiResponse } from "@/services/companyService";
import { JobData } from "./job-entities";

export interface CompanyDataSource {
  getCompanies: () => Promise<CompanyApiResponse>;
  getCompanySlugs: () => Promise<string[]>;
  getCompanyBySlug: (slug: string) => Promise<CompanyData>;
}

export interface Logo {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}
export interface CoverImage {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}
export interface CompanyJobs {
  data: JobData[];
}

export interface Company {
  name: string;
  slug: string;
  city: string;
  slogan: string;
  logo: Logo;
  coverImage: CoverImage;
  jobs?: CompanyJobs;
}

export interface CompanyData {
  id: number;
  attributes: Company;
}

export interface Slug {
  id: number;
  attributes: {
    slug: string;
  };
}

export interface ApiResponseCompanySlugs {
  data: Slug[];
}
