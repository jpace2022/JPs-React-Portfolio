import React from 'react';
import { motion } from 'framer-motion';
import profileImage from "../assets/20220521_110433.jpg";

function About() {
  return (
    <motion.section 
      id="about-me" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={profileImage} 
              alt="James Pace" 
              className="rounded-full shadow-lg mx-auto"
              style={{ maxWidth: '250px' }}
            />
          </motion.div>
          <motion.div 
            className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-gray-300">
              Hello, my name is James Pace. Thank you for visiting my portfolio. I am a passionate and dedicated web developer based in Washington state. After a decade in Hospital Administration, I pivoted to technology, driven by a lifelong interest in the field. I recently graduated from a comprehensive 12-week Full Stack Coding Bootcamp, where I honed my skills in modern web development. I am excited to contribute to innovative projects and continue growing in this dynamic industry. Feel free to reach out for any additional information.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
