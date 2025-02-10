import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
