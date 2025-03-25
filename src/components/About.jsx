import React from "react";
import { about } from "../constants";
import { motion } from "motion/react";

const About = () => {
  const imagevariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 px-6 pt-5 md:pt-0"
      id="about"
    >
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        About us
      </h2>
      <div className="mb-10 flex items-center justify-center gap-4">
        {about.profileImages.map((Image, index) => (
          <motion.img
            variants={imagevariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Image.delay }}
            src={Image.src}
            alt={Image.alt}
            key={index}
            className="w-1/4 rounded-3xl shadow-lg"
          />
        ))}
      </div>
      <p className="mb-8 max-w-4xl text-center text-xl lg:text-4xl">
        {about.aboutUsText}
      </p>
    </section>
  );
};

export default About;
