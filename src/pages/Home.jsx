import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Contact from "./Contact";
import HomeServices from "../components/HomeServices";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeServices />
      <HomeGallery />
      <Testimonials />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Home;
