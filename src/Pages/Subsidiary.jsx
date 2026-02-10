import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import SubsidiariesHeroSection from "../Components/OurSubsidiary/SubsidiariesHeroSection";
import IntegratedPlatformSection from "../Components/OurSubsidiary/IntegratedPlatformSection";
import SubsidiariesGridSection from "../Components/OurSubsidiary/SubsidiariesGridSection";
import SubsidiariesCTASection from "../Components/OurSubsidiary/SubsidiariesCTASection";

const Subsidiary = () => {
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
      <SubsidiariesHeroSection />
      <IntegratedPlatformSection />
      <SubsidiariesGridSection />
      <SubsidiariesCTASection />
      <Footer />
    </>
  );
};

export default Subsidiary;
