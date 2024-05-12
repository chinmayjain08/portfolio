import React from 'react'
import { useState } from 'react';
import './Navigation.css'
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';


function Navigation() {

  return (
    <div className='navigation'>

        <section className="intro">
            <h2 className='name'>Chinmay Jain</h2>
            <h4 className='position'>Software Engineer Intern</h4>
            <p className='tagline'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        </section>

        <section className="nav">
            <a href='#experience' className="navlinks nav-exp"><span className="line"></span> EXPERIENCE</a>
            <a href='#projects' className="navlinks nav-pro"><span className="line"></span> PROJECTS</a>
            <Link to="/about"><a className="navlinks nav-about"><span className="line"></span>  ABOUT </a></Link>
            <Link to="/contact"><a className="navlinks nav-contact"><span className="line"></span> CONTACT</a></Link>
        </section>
        
        <section className="socials">
            <a href='https://www.linkedin.com/in/chinmay-jain-493619147/' className='handle'><ImLinkedin/></a>
            <a href='https://github.com/chinmayjain08/' className='handle'><ImGithub/></a>
            <a href='https://www.instagram.com/iamchinmayjain/' className='handle'><ImInstagram/></a>
            <a href='https://twitter.com/ChinmayJai2228/' className='handle'><FaXTwitter/></a>
            <a href='https://wa.me/9875760411' className='handle'><ImWhatsapp/></a>
        </section>
    </div>
  )
}

export default Navigation