import React from 'react'
import './Navigation.css'
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineHorizontalRule } from "react-icons/md";



function Navigation() {

  return (
    <div className='navigation'>

        <section className="intro">
            <h2 className='name'>Chinmay Jain</h2>
            <h4 className='position'>Software Engineer Intern</h4>
            <p className='tagline'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        </section>

        <section className="nav">
            <p className="navlinks nav-about"><span className='line'></span> ABOUT</p>
            <p className="navlinks nav-exp"><span className='line'></span> EXPERIENCE</p>
            <p className="navlinks nav-pro"><span className='line'></span> PROJECTS</p>
        </section>

        <section className="socials">
            <span><ImLinkedin/></span>
            <span><ImInstagram/></span>
            <span><ImGithub/></span>
            <span><FaXTwitter/></span>
            <span><ImWhatsapp/></span>
        </section>
    </div>
  )
}

export default Navigation