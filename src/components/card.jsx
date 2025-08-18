// src/components/SkillCards.tsx
import { motion } from "framer-motion"

// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ icon, skill, level }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-3  hover:shadow-cyan-400 transition-shadow duration-300">
      <div className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{skill}</h3>
      <p className="text-sm text-gray-300">{level}</p>
    </div>
  );
};

export default SkillCard;

