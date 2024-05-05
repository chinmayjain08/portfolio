import React from 'react'
import './techskill.css'

function Techskill({ skills }) {
  return (
    <div className='skills'>
        {
            skills.map((skill, i) => {
                return(
                    <div className="skill" key={i}>
                        {skill}
                    </div>
                );
            })
        }
    </div>
  )
}

export default Techskill