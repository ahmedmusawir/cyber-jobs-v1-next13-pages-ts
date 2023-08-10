import { JobApiResponse } from "@/services/jobService";
import { CompanyData } from "./company-entities";

export interface JobSearchQuery {
  remoteOk?: boolean;
  featured?: boolean;
  jobTypes?: string[];
  searchBarText?: string;
  minBaseSalary?: number;
  maxBaseSalary?: number;
}

export interface JobDataSource {
  getJobs: () => Promise<JobApiResponse>;
  getJobSlugs: () => Promise<string[]>;
  getJobBySlug: (slug: string) => Promise<JobData>;
  searchJobs: (query: JobSearchQuery) => Promise<JobApiResponse>;
}

// export interface JobDataSource {
//   getJobs: () => Promise<JobApiResponse>;
//   getJobSlugs: () => Promise<string[]>;
//   getJobBySlug: (slug: string) => Promise<JobData>;
//   searchJobs: (query: JobSearchQuery) => Promise<JobData[]>;
// }

export interface JobCompanyData {
  data: CompanyData;
}

export interface JobSkill {
  id: number;
  attributes: {
    name: string;
  };
}
export interface JobSkillArray {
  data: JobSkill[];
}

export interface Job {
  title: string;
  slug: string;
  remoteOk: boolean;
  annualSalary: number;
  datePosted: string;
  jobType: string;
  jobDescription: string;
  jobCategory: string;
  featured: boolean;
  company: JobCompanyData;
  skillTags: JobSkillArray;
}

export interface JobData {
  id: number;
  attributes: Job;
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
