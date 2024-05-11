import React from "react";
import details from "./project-details";
import SingleProject from "./SingleProject/SingleProject";

function Project() {
  return (
    <>
      {details.map((project, i) => {
        return <SingleProject title={project.title} text={project.text} image={project.image} link={project.link} key={i}/>;
      })}
    </>
  );
}

export default Project;
