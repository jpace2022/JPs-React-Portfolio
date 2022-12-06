import React from 'react';
import profileImage from "../../assets/JP Headshot.jpg"

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
       <h1 id='about' className='section-title primary-border'>
        About me
        </h1>
        </div>
        <div className='flex-row'>
          <div class="intro-info">
            <div class="intro-img">
              <img src={profileImage} style={{ width: "100% "}} alt="profile" />
              </div>
        <p>
        Write about me here. 
        </p>
        </div>
      </div>
    </section>
  );
}

export default About;
