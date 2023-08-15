import { HomePageApiResponse } from "@/services/homePageService";

export interface HomePageDataSource {
  getHomePage: () => Promise<HomePageApiResponse>;
}

export interface HomePageData {
  id: number;
  attributes: HomePage;
}

export interface HomePage {
  heroTitle: string;
  heroSlogan: string;
  featuredTestimonial: FeaturedTestimonial;
  testimonials: {
    data: TestimonialData[];
  };
}

export interface TestimonialData {
  id: number;
  attributes: Testimonial;
}

export interface Testimonial {
  body: string;
  author: Author;
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
