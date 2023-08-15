import { Container } from "../ui-ux";
import Hero from "../ui-ux/Hero";
import Testimonials from "../ui-ux/Testimonial";
import { HomePageData } from "@/data-layer/home-page-entities";

interface Props {
  homePageContent: HomePageData;
}

const Home = ({ homePageContent }: Props) => {
  const title = homePageContent?.attributes?.heroTitle;
  const slogan = homePageContent?.attributes?.heroSlogan;
  const featuredTestimonial = homePageContent?.attributes?.featuredTestimonial;
  const testimonialsArray = homePageContent?.attributes?.testimonials.data;

  return (
    <Container FULL className="">
      <Hero title={title} slogan={slogan} />
      <Testimonials
        featuredTestimonial={featuredTestimonial}
        testimonials={testimonialsArray}
      />
    </Container>
  );
};

export default Home;
