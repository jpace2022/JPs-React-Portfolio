import React from 'react';
import caregiver from "../../assets/small/CareGiver_Connection.png";
import kickTheBucket from "../../assets/small/Kick_the_Bucket.png";
import MyFirstWebsite from "../../assets/small/My_First_Website.png";
import noteTracker from "../../assets/small/Note_Tracker.png";
import portfolio from "../../assets/small/Portfolio.png";
import PokemonHunter from "../../assets/small/PokemonHunter.png";

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
              <a href='https://caregiver-connection.herokuapp.com/login'>
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
              <a href='https://rachlally.github.io/bucket-list/'>
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
              <a href='https://jpace2022.github.io/my-first-website/'>
                {" "}
                <img
                src={MyFirstWebsite}
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
              <a href='https://jpace2022.github.io/Note-Taker/'>
                {" "}
                <img
                src={noteTracker}
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Note Taker</h4>
              <p>Talk about Note Taker</p>
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
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Portfolio</h4>
              <p>Talk about my first portfolio page.</p>
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
                className={{ width: "100%"}}
                alt=" "
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Professor Oak's Shiny Dex Presentation</h4>
              <p>This was the final project I worked on for the bootcamp!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
