import React from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import CategorySection from "../components/sections/CategorySection";
import PartnerSection from "../components/sections/PartnerSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <PartnerSection />
      <ContactSection />
    </>
  );
};

export default Home;
