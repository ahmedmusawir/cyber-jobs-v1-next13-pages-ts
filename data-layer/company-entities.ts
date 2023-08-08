import { CompanyApiResponse } from "@/services/companyService";

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

export interface Company {
  name: string;
  slug: string;
  city: string;
  slogan: string;
  logo: Logo;
  coverImage: CoverImage;
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
