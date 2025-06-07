import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ThirdSection from "./sections/ThirdSection";
import SecondSection from "./sections/SecondSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Projects from "./components/ProjectSection/Projects";
import Nakosam from "./components/AboutSection/AboutMe";
import ContactMe from "./components/ContactSection/ContactMe";


import "./styles/style.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smooth: true, // Enable smooth scrolling
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection/>
      <EducationSection/>
      <SkillsSection/>
      <Projects/>
      <Nakosam/>
    
    </div>
  );
}

export default App;
