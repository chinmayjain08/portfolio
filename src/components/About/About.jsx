import React from "react";
import HorNavbar from "../HorNavbar/HorNavbar";
import VerNavbar from "../VerNavbar/VerNavbar";
import "./About.css";
import { MdOutlineDoubleArrow } from "react-icons/md";

import { FaReact } from "react-icons/fa";
import { SiGoland, SiNextdotjs, SiQlik } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaFigma, FaGolang, FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";

import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";


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
        <div className="stack-skills">
          <div className="frontend">
            <p className="f-head">FRONTEND</p>
            <span className="react">
              <FaReact/>
            </span>
            <span className="next">
              <SiNextdotjs/>
            </span>
            <span className="tailwind">
              <SiTailwindcss/>
            </span>
            <span className="bootstrap">
              <FaBootstrap/>
            </span>
            <span className="html">
              <FaHtml5/>
            </span>
            <span className="css">
              <FaCss3Alt/>
            </span>
          </div>
          <div className="backend">
          <p className="b-head">BACKEND</p>
            <span className="node">
              <FaNode/>
            </span>
            <span className="express">
              <SiExpress/>
            </span>
            <span className="mongo">
              <SiMongodb/>
            </span>
            <span className="postgre">
              <BiLogoPostgresql/>
            </span>
            <span className="sql">
              <PiFileSql/>
            </span>
            <span className="golang">
              <FaGolang/>
            </span>
          </div>
          <div className="tools">
          <p className="t-head">TOOLS</p>
          <span className="vs">
              <VscVscode/>
            </span>
            <span className="git">
              <FaGitAlt/>
            </span>
            <span className="github">
              <FaGithub/>
            </span>
            <span className="figma">
              <IoLogoFigma/>
            </span>
            <span className="canva">
              <SiCanva/>
            </span>
            <span className="vercel">
              <IoLogoVercel/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
