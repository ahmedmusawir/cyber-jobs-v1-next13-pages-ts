import { CompanyApiResponse } from "@/services/companyService";

export interface CompanyDataSource {
  getCompanies: () => Promise<CompanyApiResponse>;
  getCompanySlugs: () => Promise<string[]>;
  getCompanyBySlug: (slug: string) => Promise<CompanyData>;
}

export interface Company {
  name: string;
  slug: string;
  city: string;
  slogan: string;
}

export interface CompanyData {
  id: number;
  attributes: Company;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponseCompanies {
  data: CompanyData[];
  meta: {
    pagination: Pagination;
  };
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
