import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import AboutHeroSection from "../Components/AboutUs/AboutHeroSection";
import WhoWeAreSection from "../Components/AboutUs/WhoAreWe";
import CoreBusinessesSection from "../Components/AboutUs/CoreBusinessesSection";
import StrategySection from "../Components/AboutUs/StrategySection";
import ObjectivesSection from "../Components/AboutUs/ObjectivesSection";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load (replace with API calls later)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <WhoWeAreSection />
      <CoreBusinessesSection />
      <StrategySection />
      <ObjectivesSection />
      <Footer />
    </>
  );
};

export default AboutUs;
