import { Company } from "./company-entities";

export interface JobSearchQuery {
  remoteOk?: boolean;
  featured?: boolean;
  jobTypes?: string[];
  searchBarText?: string;
  minBaseSalary?: number;
  maxBaseSalary?: number;
}

export interface JobDataSource {
  getJobs: () => Promise<ApiResponseJobs>;
  getJobSlugs: () => Promise<ApiResponseJobSlugs>;
  getJobBySlug: (slug: string) => Promise<JobData>;
  searchJobs: (query: JobSearchQuery) => Promise<JobData[]>;
}

export interface Job {
  title: string;
  slug: string;
  remoteOk: boolean;
  annualSalary: number;
  datePosted: Date;
  jobType: string;
  jobDescription: string;
  jobCategory: string;
  featured: boolean;
  company: Company;
}

export interface JobData {
  id: number;
  attributes: Job;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponseJobs {
  data: JobData[];
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

export interface ApiResponseJobSlugs {
  data: Slug[];
}
