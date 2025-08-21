import React from "react";
import Hero from "./hero";
import Services from "./services";
import SkillsSection from "./skillcard";
import About from "./about";
import Contact from "./contact";
import ScrollToTop from "./scrollbar";
const Home = () => {
  return (
    <div>
      <div className="background mt-19  sm:mt-0">
        <div className="backdrop-blur-xl">
          <Hero />
        </div>
      </div>
      <SkillsSection />
      <Services/>
      <About/>
      <Contact background="black"/>
      <ScrollToTop/>
    </div>
  );
};

export default Home;
