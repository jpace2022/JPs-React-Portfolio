import React from 'react';
import caregiver from "../assets/small/CareGiver_Connection.png";
import kickTheBucket from "../assets/small/Kick_the_Bucket.png";
import MyFirstWebsite from "../assets/small/My_First_Website.png";
import noteTracker from "../assets/small/Note_Tracker.png";
import portfolio from "../assets/small/Portfolio.png";
import PokemonHunter from "../assets/small/PokemonHunter.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className='jobs'>
        <div className='flex-row'>
          <h2 className='section-title secondary-border'>Projects</h2>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://caregiver-connection.herokuapp.com/login'>
                {" "}
                <img
                src={caregiver}
                className="my-2"
                style={{ width: "100%"}}
                alt="Hospital building "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>CareGiver Connection</h4>
              <p>CareGiver Connection is intended to be used by healthcare professional who are trying to get to work and also save money in the process, by utilizing other coworker traveling in the same direction so reduce tavel costs. </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://rachlally.github.io/bucket-list/'>
                {" "}
                <img
                src={kickTheBucket}
                className="my-2"
                style={{ width: "100%"}}
                alt="Website"
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Kick the Bucket Bucketlist</h4>
              <p>This was a way for people to keep track of activities that they would like to complete by certain milestones of life. </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://jpace2022.github.io/my-first-website/'>
                {" "}
                <img
                src={MyFirstWebsite}
                className="my-2"
                style={{ width: "100%"}}
                alt="MyFirstWebsite "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>MyFirstWebsite</h4>
              <p>As the label suggests this was my first website and it showcases just how far I have come since I began this jouney of web developement. </p>
            </div>
          </div>
        </div> 

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://jpace2022.github.io/Note-Taker/'>
                {" "}
                <img
                src={noteTracker}
                className="my-2"
                style={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Note Taker</h4>
              <p>This is just a simple note track that I was able to build from scratch. Nothing fancy but a fully functional app. </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://jpace2022.github.io/Portfolio/'>
                {" "}
                <img
                src={portfolio}
                className="my-2"
                style={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Portfolio</h4>
              <p>Here is my first portfolio page that was made with just HTML and CSS.</p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://shiny-hunter-client.vercel.app/'>
                {" "}
                <img
                src={PokemonHunter}
                className="my-2"
                style={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Professor Oak's Shiny Dex Presentation</h4>
              <p>This was the final project I worked on for the bootcamp! It will help you collect Shiny Pokemon. It has a great look and some fun features to use. It has a fully functioning backend to that has persistant data.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
