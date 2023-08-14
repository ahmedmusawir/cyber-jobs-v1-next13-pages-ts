// export interface JobDataSource {
//   getJobs: () => Promise<JobApiResponse>;
//   getJobSlugs: () => Promise<string[]>;
//   getJobBySlug: (slug: string) => Promise<JobData>;
//   searchJobs: (query: JobSearchQuery) => Promise<JobData[]>;
// }

export interface HomePageData {
  id: number;
  attributes: HomePage;
}

export interface HomePage {
  heroTitle: string;
  heroSlogan: string;
  createdAt: Date;
  updatedAt: Date;
  featuredTestimonial: FeaturedTestimonial;
}

export interface FeaturedTestimonial {
  id: number;
  body: string;
  author: Author;
}

export interface Author {
  id: number;
  name: string;
  handle: string;
  logoUrl: string;
  imageUrl: string;
}
