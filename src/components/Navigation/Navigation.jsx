import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>

        <section className="intro">
            <h2 className='name'>Chinmay Jain</h2>
            <h4 className='position'>Software Engineer Intern</h4>
            <p className='tagline'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        </section>

        <section className="nav">
            <p className="navlinks">ABOUT</p>
            <p className="navlinks">EXPERIENCE</p>
            <p className="navlinks">PROJECTS</p>
        </section>

        <section className="socials">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </section>
    </div>
  )
}

export default Navigation