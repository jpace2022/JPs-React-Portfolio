import React from 'react';
import profileImage from "../../assets/JP_headshot.jpg"

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        </div>
        <div className='flex-row'>
          <div class="intro-info">
            <div class="intro-img">
              <img src={profileImage} style={{ width: "100% "}} alt="profile" />
              </div>
        <p>
        Thank you for coming to my Portfolio Page. It is still a work in progress but I love to see it keep getting better. 
        </p>
        </div>
      </div>
    </section>
  );
}

export default About;
