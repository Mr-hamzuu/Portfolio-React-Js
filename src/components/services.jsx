// src/components/Services.jsx
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    title: "Frontend Development",
    description:
      "Building responsive and modern websites with React.js, Tailwind CSS, and Bootstrap.",
  },
  {
    icon: <FaCode className="text-4xl text-green-400" />,
    title: "Single Page Applications",
    description:
      "Developing fast, interactive, and dynamic SPAs with reusable components.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-400" />,
    title: "UI/UX Implementation",
    description:
      "Turning Figma/PSD designs into pixel-perfect, mobile-first responsive websites.",
  },
  {
    icon: <FaCogs className="text-4xl text-yellow-400" />,
    title: "Custom Components",
    description:
      "Reusable UI components such as modals, cards, sliders, and dashboards.",
  },
  {
    icon: <FaSearch className="text-4xl text-purple-400" />,
    title: "Website Optimization",
    description:
      "Improving speed, SEO, and accessibility for better performance.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-red-400" />,
    title: "Maintenance & Support",
    description:
      "Bug fixing, feature updates, and long-term support for existing projects.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay each child
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section
      id="service"
      className="py-16 bg-[#1b2a2f] w-[92%] mx-auto text-white"
    >
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          💼 My Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 bg-[#243b47] rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
