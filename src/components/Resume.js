import React from 'react';
import { motion } from 'framer-motion';
import myResume from "../assets/files/James Pace Resume PDF V2.pdf";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiGraphql, SiApollographql, SiExpress, SiMysql, SiJquery, SiBootstrap } from 'react-icons/si';

const skills = {
  "Front-End": [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  ],
  "Back-End": [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MySQL & Sequelize", icon: <SiMysql className="text-blue-400" /> },
    { name: "MongoDB & Mongoose", icon: <SiMongodb className="text-green-600" /> },
  ],
  "APIs & Other": [
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Apollo", icon: <SiApollographql className="text-indigo-500" /> },
    { name: "REST APIs", icon: <FaDatabase className="text-red-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ]
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Resume() {
  return (
    <motion.section
      id="resume"
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Skills & Resume</h2>
        
        <div className="text-center mb-12">
          <a
            href={myResume}
            download
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Download My Resume
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category}</h3>
              <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {skillList.map(skill => (
                  <motion.li key={skill.name} className="flex items-center text-lg" variants={itemVariants}>
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Resume;
