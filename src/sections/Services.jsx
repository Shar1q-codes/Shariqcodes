import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCogs, FaChartPie, FaGamepad } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaReact className="w-10 h-10 mb-4 text-sky-400" />,
    title: "Full-Stack Web Development",
    description: "Building responsive and dynamic web applications from front to back using the MERN stack (MongoDB, Express.js, React, Node.js).",
  },
  {
    icon: <FaCogs className="w-10 h-10 mb-4 text-sky-400" />,
    title: "API Design & Integration",
    description: "Developing robust RESTful APIs and integrating third-party services to extend application functionality and ensure seamless data flow.",
  },
  {
    icon: <FaChartPie className="w-10 h-10 mb-4 text-purple-500" />,
    title: "Data Analysis & Visualization",
    description: "Transforming raw data into actionable insights through cleaning, analysis, and creating compelling visualizations with Python and modern libraries.",
  },
  {
    icon: <FaGamepad className="w-10 h-10 mb-4 text-red-500" />,
    title: "Game Prototyping",
    description: "Bringing game ideas to life with Unity and C#. Focusing on core mechanics, user experience, and creating engaging prototypes for various platforms.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="min-h-[30vh] px-4 sm:px-2 py-16 sm:py-8 w-full flex flex-col items-center"
    >
      <h2 className="text-xl sm:text-lg md:text-2xl font-bold text-sky-300 mb-4 break-words">Services I Offer</h2>
      <hr className="w-16 border-sky-400 mb-12 mx-auto" />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-4xl">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col items-center text-center border-2 border-sky-400/30 hover:shadow-2xl transition-shadow duration-300"
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
