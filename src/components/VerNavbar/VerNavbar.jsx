import React from 'react';
import './VerNavbar.css'
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

function VerNavbar() {
  return (
    <div className='ver-navbar'>
        <div className="ver-socials">
            <a href='https://www.linkedin.com/in/chinmay-jain-493619147/' className='handle'><ImLinkedin/></a>
            <a href='https://github.com/chinmayjain08/' className='handle'><ImGithub/></a>
            <a href='https://www.instagram.com/iamchinmayjain/' className='handle'><ImInstagram/></a>
            <a href='https://twitter.com/ChinmayJai2228/' className='handle'><FaXTwitter/></a>
            <a href='https://wa.me/9875760411' className='handle'><ImWhatsapp/></a>
        </div>
        <div className="ver-text">
            <p>LET's DO IT !</p>
        </div>
    </div>
  )
}

export default VerNavbar