import Footer from "../components/Footer";
import LagosBarHero from "../components/LagosBarHero";
import LagosBarSectionOne from "../components/LagosBarSectionOne";
import LagosBarSectionTwo from "../components/LagosBarSectionTwo";

const LagosBar = () => {
  return (
    <>
      <LagosBarHero />
      <div className="lagosbar_bg">
        <LagosBarSectionOne />
        <LagosBarSectionTwo />
      </div>
      <Footer />
    </>
  );
};

export default LagosBar;
