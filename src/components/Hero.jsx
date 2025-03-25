import React from "react";
import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import { IoArrowForward } from "react-icons/io5";
import heroimage from "../assets/hero-image.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center   bg-emerald-950 text-orange-50 pt-16 md:pt-0">
      <div className="w-full p-8 md:w-1/2">
        <div className="mb-4 flex space-x-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src={image1}
            alt="prof"
            className="h-12 w-12 rounded-full border-1 border-orange-50 "
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src={image2}
            alt="prof 2"
            className="h-12 w-12 rounded-full border-1 border-orange-50 "
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            src={image3}
            alt="prof 2"
            className="h-12 w-12 rounded-full border-1 border-orange-50 "
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
        >
          We create impactful ads that{" "}
          <span className="text-orange-500"> elevate your Brand.</span>
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex mt-8 items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800 cursor-pointer"
        >
          <span>Know more</span>
          <IoArrowForward />
        </motion.button>
      </div>

      <div className="w-full md:w-1/2 lg:p-5 lg:mt-11">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2 }}
          src={heroimage}
          alt=""
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
