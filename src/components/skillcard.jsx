
import React from "react";
import SkillCard from "./card";
import { motion } from "framer-motion";

import { 
  FaReact, 
  FaJsSquare, 
  FaCss3Alt, 
  FaHtml5, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiBootstrap } from "react-icons/si";

const skills = [
  { icon: <FaReact />, skill: "React.js", level: "Advanced" },
  { icon: <FaJsSquare />, skill: "JavaScript (ES6+)", level: "Expert" },
  { icon: <SiTailwindcss />, skill: "Tailwind CSS", level: "Advanced" },
  { icon: <SiBootstrap />, skill: "Bootstrap", level: "Intermediate" },
  { icon: <FaCss3Alt />, skill: "CSS3", level: "Advanced" },
  { icon: <FaHtml5 />, skill: "HTML5", level: "Advanced" },
  { icon: <SiCplusplus />, skill: "C++", level: "Intermediate" },
  { icon: <FaGitAlt />, skill: "Git", level: "Advanced" },
  { icon: <FaGithub />, skill: "GitHub", level: "Advanced" },
];

const SkillsSection = () => {
  return (
    <section className=" mx-auto px-6 md:w-full bg-[#1E2A44] py-16">
      <motion.h1
        className="text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-1 w-[92%] mx-auto  sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCard {...s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
