
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import profilepic from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 w-[92%] mx-auto bg-[#1b2a2f] text-white"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#2f4f4f]"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={profilepic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">👨‍💻 About Me</h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I’m <span className="text-blue-400 font-semibold">Muhammad Hamza Khan</span>, 
            a passionate <span className="text-green-400">Frontend Developer</span> with strong expertise 
            in creating modern, responsive, and visually appealing web applications. 
            I specialize in crafting pixel-perfect UIs and transforming ideas into 
            fully functional digital experiences using <span className="text-blue-400">React.js</span>, 
            <span className="text-green-400"> Tailwind CSS</span>, and other cutting-edge technologies.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            With a focus on clean, maintainable code and seamless user experiences, 
            I thrive on solving problems and building applications that make a real 
            impact. I enjoy working on projects that challenge me, helping me grow 
            both technically and creatively. My mission is to deliver scalable, 
            efficient, and user-friendly solutions that blend functionality with design.
          </p>

          {/* Quick Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">⚡ My Core Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">⚛️ React.js</span>
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">🎨 Tailwind CSS</span>
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">💻 JavaScript</span>
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">🌐 HTML5 / CSS3</span>
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">⚡ Bootstrap</span>
              <span className="px-4 py-2 bg-[#243b47] rounded-lg text-center shadow">🖥️ C++ with OOP</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/hamzuu6971/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition"
            >
              <FaLinkedin fill="gray" className="hover:fill-white" size={24} /> LinkedIn
            </a>
            <a
              href="https://github.com/Mr-hamzuu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition"
            >
              <FaGithub size={24} /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
