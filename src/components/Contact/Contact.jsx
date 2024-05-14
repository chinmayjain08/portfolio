import React from "react";
import HorNavbar from "../HorNavbar/HorNavbar";
import VerNavbar from "../VerNavbar/VerNavbar";
import "./Contact.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

function Contact() {
  return (
    <div className="contact">
      <HorNavbar button={"ABOUT"} />
      <VerNavbar />
      <div className="main-contact">
        <div className="form-data">
          <div className="form-text">
            <div className="contact-head">
              Let's CONNECT <MdOutlineDoubleArrow />
            </div>
            <p className="contact-para">
              Waiting to turn your thoughs to reality.
            </p>
            <p className="contact-para">
              Phone: +91 9875760411
              <p>
                <a
                  href="mailto:developerchinmay08@gmail.com"
                  className="contact-mail"
                >
                  Send email
                </a>
              </p>
            </p>
          </div>
          <section className="socials">
            <a
              href="https://www.linkedin.com/in/chinmay-jain-493619147/"
              className="handle"
            >
              <ImLinkedin />
            </a>
            <a href="https://github.com/chinmayjain08/" className="handle">
              <ImGithub />
            </a>
            <a
              href="https://www.instagram.com/iamchinmayjain/"
              className="handle"
            >
              <ImInstagram />
            </a>
            <a href="https://twitter.com/ChinmayJai2228/" className="handle">
              <FaXTwitter />
            </a>
            <a href="https://wa.me/9875760411" className="handle">
              <ImWhatsapp />
            </a>
          </section>
        </div>
        <div className="form">
          <form action="" className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Contact Number" />
            <input type="email" placeholder="Email Id" />
            <input type="text" placeholder="Message" />
            <button className="contact-button" type="submit">
              {" "}
              SUBMIT{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
