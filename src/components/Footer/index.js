import React from 'react';
import { VscGithubAlt} from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {

  return (
    <footer>
      <h2>James Pace</h2>
      <p>
        <ul>
          <a href='https://github.com/jpace2022'>
            <li className='logo'>
              <VscGithubAlt />
            </li>
          </a>
          <a href='www.linkedin.com/in/jamespace2022/'>
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href='https://www.instagram.com/jpace1104/'>
            <li className='logo'>
              <FaInstagram/>
            </li>
          </a>
        </ul>
      </p>
    </footer>
  )
}

export default Footer;
