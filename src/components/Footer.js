import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <VscGithubAlt />,
    link: 'https://github.com/jpace2022'
  },
  {
    icon: <AiOutlineLinkedin />,
    link: 'https://www.linkedin.com/in/jamespace2022/'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/jpace1104/'
  }
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} James Pace. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
