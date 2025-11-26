"use client";
import Nav from "@/components/common/Navbar/Nav";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </>
  );
};

export default HomePage;
