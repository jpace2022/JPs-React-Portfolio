import React from 'react';
import { motion } from 'framer-motion';
import caregiver from "../assets/small/CareGiver_Connection.png";
import kickTheBucket from "../assets/small/Kick_the_Bucket.png";
import MyFirstWebsite from "../assets/small/My_First_Website.png";
import noteTracker from "../assets/small/Note_Tracker.png";
import portfolio from "../assets/small/Portfolio.png";
import PokemonHunter from "../assets/small/PokemonHunter.png";

const projects = [
  {
    title: "Professor Oak's Shiny Dex",
    description: "A tool to help you collect Shiny Pokemon, with a fun interface and persistent data via a full backend.",
    image: PokemonHunter,
    link: 'https://shiny-hunter-client.vercel.app/',
    repo: 'https://github.com/jpace2022/shiny-hunter-client'
  },
  {
    title: "CareGiver Connection",
    description: "A ride-sharing app for healthcare professionals to coordinate travel and reduce costs.",
    image: caregiver,
    link: 'https://caregiver-connection.herokuapp.com/login',
    repo: 'https://github.com/jpace2022/CareGiver_Connection'
  },
  {
    title: "Kick the Bucket",
    description: "A bucket list application to track life goals and milestones.",
    image: kickTheBucket,
    link: 'https://rachlally.github.io/bucket-list/',
    repo: 'https://github.com/rachlally/bucket-list'
  },
  {
    title: "Simple Note Taker",
    description: "A clean, functional note-taking application built from scratch.",
    image: noteTracker,
    link: 'https://jpace2022.github.io/Note-Taker/',
    repo: 'https://github.com/jpace2022/Note-Taker'
  },
  {
    title: "My First Website",
    description: "The starting point of my web development journey, showcasing my growth.",
    image: MyFirstWebsite,
    link: 'https://jpace2022.github.io/my-first-website/',
    repo: 'https://github.com/jpace2022/my-first-website'
  },
  {
    title: "Original Portfolio",
    description: "My first portfolio built with just HTML and CSS.",
    image: portfolio,
    link: 'https://jpace2022.github.io/Portfolio/',
    repo: 'https://github.com/jpace2022/Portfolio'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

function Portfolio() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md transition-colors duration-300">
                    View App
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
