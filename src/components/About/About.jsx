import React from "react";
import HorNavbar from "../HorNavbar/HorNavbar";
import VerNavbar from "../VerNavbar/VerNavbar";
import "./About.css";
import { MdOutlineDoubleArrow } from "react-icons/md";


function About() {
  return (
    <div className="about" id="about">
      <HorNavbar button={"CONTACT"} />
      <VerNavbar />
      <div className="main-about">
        <div className="about-image">
          <img src="/collage.png" alt="" />
        </div>
        <div className="about-text">
          <div className="ab-heading">A Bit About Me <MdOutlineDoubleArrow/></div>
            <div className="ab-para">
              Hello, I am Chinmay Jain, currently in third year of my bachelors in Computer Science Engineering. I am a full stack developer and I build modern and progressive websites and web applications for all purposes, may it be a portfolio website like you are currently going through, a service oriented website to tell the world about what all you can offer or an e-commerce website for your business. 
            </div>
            <div className="ab-para">
              Enough of professional details, now, talking about what else I do. I absolutely love travelling and hanging out with friends. Ice cream is true love for me. Interacting and getting to know people is what I do the most.
            </div>
        </div>
      </div>
      <div className="techStack">
        <div className="skill-intro">
            <div className="techStack-heading">
              <h3>TECH STACK</h3>
            </div>
            <div className="techStack-para">
              <p>Ofcourse tools are needed for craftsmanship</p>
            </div>
        </div>
        <div className="skills">
          <div className="frontend">

          </div>
          <div className="backend">

          </div>
          <div className="tools">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
