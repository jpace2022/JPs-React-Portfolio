import React from 'react';
import profileImage from "../../assets/20220521_110433.jpg"

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
        Hello, my name is James Pace. Thank you for coming to my Portfolio Page. It is still a work in progress but I love to see it keep getting better. I am 39 years old and live in Washington state. I have been working in Hospital Administration for the past 10 years. Recently I needed to make a change and since I have always been interested in technology I thought that I would try web developement. I have recently completed a 12-week Full Stack Coding Bootcamp. I am looking forward to improving my skills in this great new field. Feel free to reach out to me for any additional information. 
        </p>
        </div>
      </div>
    </section>
  );
}

export default About;
