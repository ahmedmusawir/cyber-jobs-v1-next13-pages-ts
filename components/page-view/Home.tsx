import { Container } from "../ui-ux";
import Hero from "../ui-ux/Hero";
import Testimonials from "../ui-ux/Testimonial";

const Home = () => {
  return (
    <Container FULL className="">
      <Hero />
      <Testimonials />
    </Container>
  );
};

export default Home;
