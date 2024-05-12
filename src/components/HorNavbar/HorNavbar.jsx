import React from 'react';
import './HorNavbar.css';
import { Link } from 'react-router-dom';
import Home from '../Content/Home/Home';

function HorNavbar({ button }) {
  return (
    <div className='hor-navbar'>
        <div className='nav-name'>
            <Link to="/">CHINMAY JAIN</Link>
        </div>
        <div className="nav-buttons">
        <div className="nav-button">
            <Link to="/">HOME</Link>
        </div>
        <div className="nav-button">
            <Link to={`/${button.toLowerCase()}`}>{button}</Link>
        </div>
        </div>
        
    </div>
  )
}

export default HorNavbar