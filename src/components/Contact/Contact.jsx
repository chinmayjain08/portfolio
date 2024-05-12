import React from 'react'
import HorNavbar from '../HorNavbar/HorNavbar'
import VerNavbar from '../VerNavbar/VerNavbar'
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <HorNavbar button={"ABOUT"}/>
        <VerNavbar/>
    </div>
  )
}

export default Contact