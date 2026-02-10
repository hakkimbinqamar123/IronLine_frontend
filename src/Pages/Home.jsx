import { useEffect, useState } from "react";

import AboutSection from "../Components/AboutSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import StatsSection from "../Components/StatsSection";
import OurBusinessSection from "../Components/OurBusinessSection";
import SustainabilitySection from "../Components/SustainabilitySection";
import ArticlesSection from "../Components/ArticlesSection";
import NewsSection from "../Components/NewsSection";
import Loader from "../Components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <OurBusinessSection />
      <SustainabilitySection />
      <ArticlesSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Home;
