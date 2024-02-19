import React from "react";

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>
        Deployed Link: <a href={deployedLink}>{deployedLink}</a>
      </p>
      <p>
        GitHub Repository: <a href={githubLink}>{githubLink}</a>
      </p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Project;
