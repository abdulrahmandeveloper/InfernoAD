import React from "react";
import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import { IoArrowForward } from "react-icons/io5";
import heroimage from "../assets/hero-image.png";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for better performance
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve
      }
    }
  };

  return (
    <section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50 pt-16 md:pt-0">
      <div className="w-full p-8 md:w-1/2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-4 flex space-x-2"
        >
          <motion.img
            variants={item}
            custom={0}
            src={image1}
            alt="prof"
            className="h-12 w-12 rounded-full border border-orange-50"
          />
          <motion.img
            variants={item}
            custom={1}
            src={image2}
            alt="prof 2"
            className="h-12 w-12 rounded-full border border-orange-50"
          />
          <motion.img
            variants={item}
            custom={2}
            src={image3}
            alt="prof 2"
            className="h-12 w-12 rounded-full border border-orange-50"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3
          }}
          className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
        >
          We create impactful ads that{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-orange-500"
          >
            elevate your Brand.
          </motion.span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex mt-8 items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800"
        >
          <span>Know more</span>
          <IoArrowForward />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.4
        }}
        className="w-full md:w-1/2 lg:p-5 lg:mt-11"
      >
        <img
          src={heroimage}
          alt=""
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;