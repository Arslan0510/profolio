import React from "react";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <>
      <Hero />
      <div className='mt-20 space-y-32'>
        <Projects />
        <Skills />
        {/* <Testimonials />  */}
      </div>
      {/* <CTA />  */}
    </>
  );
};

export default Home;
