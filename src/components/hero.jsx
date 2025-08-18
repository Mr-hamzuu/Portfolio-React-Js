
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";
import cvFile from "../assets/CV.pdf";

const Hero = () => {
  return (
    <main className="h-auto pb-5 lg:pb-0 lg:h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 gap-10">
        
        {/* Left Side */}
        <motion.div
          className="lg:w-3/5 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl">Hello! I’m</h2>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold font-stardos mt-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Muhammad Hamza Khan
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            A passionate front-end web developer with a strong foundation in
            <span className="text-fuchsia-700 text-shadow-none  font-bold "> C++</span> and
            expertise in crafting responsive, modern UIs with
            <span className="text-orange-400 font-bold text-shadow-none "> React</span>.
          </motion.p>

          <motion.a
            href={cvFile}
            download="Hamza_CV.pdf"
            className="inline-block mt-6 px-6 py-2 resume border  rounded-full text-shadow-none transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Resume
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-2/5 mt-9 sm:mt-0 sm:flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <motion.img
            src={profilePic}
            alt="profile"
            className="w-50 sm:w-72 md:w-80 rounded-full shadow-cyan-500 shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
