import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroSectionBottom from "../components/HeroSectionBottom";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import TopBanner from "../components/TopBanner";

const HomePage = () => {
  return (
    <>
      <TopBanner />
      <HeroSection />
      <HeroSectionBottom />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default HomePage;
