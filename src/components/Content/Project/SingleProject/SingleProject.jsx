import React from "react";
import "./SingleProject.css";

function SingleProject({ title, text, image, link}) {
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
        <div className="pro-link">
          <a href={link}>Veiw Project</a>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
