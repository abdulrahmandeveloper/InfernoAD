import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";

import Testimonia from "./components/Testimonia";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />

      <Testimonia />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
