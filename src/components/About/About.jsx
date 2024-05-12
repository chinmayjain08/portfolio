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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis veritatis minima quia doloremque nulla dolore
              nesciunt officia cum, molestias modi, deleniti libero eveniet
              veniam, vel iusto facilis expedita minus!
            </div>
            <div className="ab-para">
              Assumenda odio excepturi possimus reiciendis aperiam repellendus
              unde minus perspiciatis reprehenderit? Debitis, eos neque tempora
              iure dicta quos deserunt sequi ea. Minus nam eum reprehenderit
              sint aspernatur earum fuga ut.
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
