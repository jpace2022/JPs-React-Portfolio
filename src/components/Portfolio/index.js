import React, { useState } from 'react';
import caregiver from "../assets/small/CareGiver Connection Home Page.png";
import kickTheBucket from "../assets/small/Kick the Bucket Homepage.png";
import myFirstWebsite from "../assets/small/CareGiver Connection Home Page.png";
import noteTracker from "../assets/small/CareGiver Connection Home Page.png";
import portfolio from "../assets/small/CareGiver Connection Home Page.png";
import snowboardQuiz from "../assets/small/CareGiver Connection Home Page.png";

function Portfolio() {
  return (
    <div>
      <section>
        <div className='flex-row'>
          <h2 className='section-title secondary-border'></h2>
        </div>
        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#Caregiver Connection'>
                {" "}
                <img
                src={caregiver}
                className={{ width: "100%"}}
                alt="Hospital building "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>CareGiver Connection</h4>
              <p>Talk about CareGiver Connection</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#KickTheBucket'>
                {" "}
                <img
                src={kickTheBucket}
                className={{ width: "100%"}}
                alt="Website"
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Kick the Bucket Bucketlist</h4>
              <p>Talk about Bucket list</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#MyFirstWebsite'>
                {" "}
                <img
                src={myFirstWebsite}
                className={{ width: "100%"}}
                alt="MyFirstWebsite "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>MyFirstWebsite</h4>
              <p>Talk about MyFirstWebsite</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#'>
                {" "}
                <img
                src={noteTracker}
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>CareGiver Connection</h4>
              <p>Talk about CareGiver Connection</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#'>
                {" "}
                <img
                src={portfolio}
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>CareGiver Connection</h4>
              <p>Talk about CareGiver Connection</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='#'>
                {" "}
                <img
                src={snowboardQuiz}
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>CareGiver Connection</h4>
              <p>Talk about CareGiver Connection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
