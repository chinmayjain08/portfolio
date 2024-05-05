import React from 'react'
import './experience.css';
import Techskill from '../../Tech/Techskill';

function Experience({ date, title, text, tech }) {
  return (
    <div className='exp'>
        <div className="exp-date">
         {date}
        </div>
        <div className="exp-content">
            <div className="exp-title">
                {title}
            </div>
            <div className="exp-text">
            {text}
            </div>
            <div className="exp-tech">
                <Techskill skills = {tech}/>
            </div>
        </div>
    </div>
  )
}

export default Experience