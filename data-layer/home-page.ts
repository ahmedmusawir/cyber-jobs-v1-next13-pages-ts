import qs from "qs";
import homePageService, {
  HomePageApiResponse,
} from "@/services/homePageService";

// GETS ALL HOME PAGE CONTNET
export const getHomePage = async (): Promise<HomePageApiResponse> => {
  const query = qs.stringify(
    {
      populate: [
        "featuredTestimonial",
        "featuredTestimonial.author",
        "testimonials",
        "testimonials.author",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  // Response is a single object
  const response = await homePageService.get(query);

  return response;
};
