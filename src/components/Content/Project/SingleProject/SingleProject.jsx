import React from "react";
import "./SingleProject.css";
import { FaLink } from "react-icons/fa";
import Techskill from "../../../Tech/Techskill";


function SingleProject({ title, text, image, link, tech}) {
  return (
    <div className="pro">
      <div className="pro-image">
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="pro-content">
        <div className="pro-heading">{title}</div>
        <div className="pro-text">{text}</div>
        <div className="pro-skills">
          <Techskill skills={tech} />
        </div>
        <div className="pro-link">
          <a href={link}> <FaLink/> Veiw Project</a>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
