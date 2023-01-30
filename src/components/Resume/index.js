import React from 'react';
import myResume from "../../assets/files/James Pace Resume V3.docx";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";


function Resume() {
  return (
    <div>
    <section id="welcome-section" className="download-intro">
      <div className="flex-row">
        <h2 className='section-title primary-border'>My Resume</h2>
        </div>
        <div className='flex-row'>
          <div className='download-info'>
            <div className='download-text'>
              <a href={ myResume } className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Check out What I have learned!
              </p>
        </div>
      </div>
    </div>
  </section>
  {/*// this is resume language */} 
  <section id="home-page-body" className='resume-body'>
    <div className='acticle column1'>
      <p className='column-title'>Front-End Tech</p>
      <p className='column-text'>
        <ul>
          <li className='logo'>
            <MdFoundation />
          </li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>GIT</li>
        </ul>
      </p>
    </div>

  <div className='article column2'>
      {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48X48.PNG"></P> */}

      <p className='column-title'>Back-End Tech</p>
      <p className='column-text'>
        <ul>
          <li className='logo'>
            <GrTechnology />
          </li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
        </p>
      </div>
      <div className='article column3'>
      {/* <p><img src="./assets/images/streamline-icon-soft-drink-glass-ice@48X48.PNG"></P> */}

      <p className='column-title'>Performance Tech</p>
      <p className='column-text'>
        <ul>
          <li className='logo'>
            <GrDocumentPerformance />
          </li>
          <li>NoSQL</li>
          <li>(PWA)</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Mongoose</li>
          <li>MERN</li>
        </ul>
        </p>
      </div>
   </section>
  </div>
  );
}

export default Resume;
