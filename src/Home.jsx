import React from "react";
import { Hero, About, Experience, Tech, Works, Baqat, Feedbacks, Contact, StarsCanvas, Navbar } from "./components";

const HomePage = () => {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <Baqat />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default HomePage;