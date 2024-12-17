import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import "./styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            {/* Display the first image in the images array */}
            <img
              src={project.images[0]} // Access the first image
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`}>
                <button className="view-project-button">View Project</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
