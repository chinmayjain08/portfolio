import React from "react";
import './content.css';
import Experience from "./Experience/Experience";

function Content() {
  return (
    <div className="content">
      <div className="intro">
        <p className="intro-text">
          Back in 2021, I decided to try my hand at creating my own website and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I’ve had the privilege of building
          softwares and web applications for startups, agencies and businesses.
        </p>
        <p className="intro-text">
          My main focus these days is building web applications for our clients
          at Buoyance. I most enjoy building software in the sweet spot where
          design and engineering meet — things that look good but are also built
          well under the hood. In the rest of the time, I collaborate with
          startups working over great ideas.
        </p>
        <p className="intro-text">
          When not at computer, I am usually chilling out with friends, making new connections on socials, or having really good food at any place in the city.
        </p>
      </div>
      <div className="prof-exp">
        <Experience date={"JUNE 2023 - PRESENT"} title={"Full Stack Developer"} text={"Got firsthand experience with project management while managing a team. Concentrated on building user-friendly websites while improving my skillset and doing practical experiments with new technologies"} tech={["React.js", "Team Management", "Tailwind", "Node.js", "Express.js", "MongoDB"]}/>

        <Experience date={"JULY 2023 - SEPTEMBER 2023"} title={"Software Engineer Intern"} text={"•Built an end-to-end SAAS application Rentellar gaining hands on experience of Agile Software Development"} tech={["React.js", "Next.js", "SDLC", "Golang", "MongoDB"]}/>

      </div>
    </div>
  );
}

export default Content;
