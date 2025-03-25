import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);

  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isopen]);

  useEffect(() => {
    const handlescroll = (e) => {
      if (isopen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [isopen]);

  const handlelinkclick = (e, id) => {
    e.preventDefault();
    setisopen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementposition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetposition = elementposition + offset;

    window.scrollTo({
      top: offsetposition,
      behavior: "smooth",
    });
  };

  const linkvariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950 ">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <img src={logo} alt="ad logo" width={120} height={20} />
              </a>
            </div>
            <div>
              <button
                onClick={() => setisopen(!isopen)}
                type="button"
                className="inline-flex items-center justify-center bg-emerald-950 text-orange-50 p-2 pl-2 cursor-pointer"
              >
                <FaBars className="h-6 w-6 mr-2 lg:mr-7"></FaBars>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isopen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0 }}
            className="fixed inset-0 z-10 flex flex-col space-y-4 bg-emerald-950 px-20 pt-20 text-4xl font-bold uppercase text-emerald-100"
          >
            <button
              onClick={() => setisopen(false)}
              type="button"
              className="absolute right-2 top-2 rounded-full bg-emerald-900 p-2 text-orange-50 lg:right-10 cursor-pointer"
            >
              <FaTimes className="h-8 w-8 " />
            </button>
            {links.map((link, index) => (
              <motion.a
                variants={linkvariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                href={link.id}
                key={link.id}
                onClick={(e) => handlelinkclick(e, link.id)}
                className="transition-colors duration-500 hover:text-orange-500 mb-7 mt-0"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
