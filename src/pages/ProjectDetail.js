import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import ModalImage from "react-modal-image"; // Lightbox for zoom
import "./styles/ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) return <div>Project not found!</div>;

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <p className="project-description">{project.details}</p>

      {/* Image Gallery */}
      <div className="project-images-gallery">
        {project.images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <ModalImage
              small={image} // Thumbnail image
              large={image} // Full-size image for zoom
              alt={`Project ${project.title} - ${index + 1}`}
              className="project-gallery-image"
            />
          </div>
        ))}
      </div>

      {/* View Project Button */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-project-button"
        >
          View Project Online
        </a>
      )}

      <Link to="/projects">
        <button className="back-button">Back to Projects</button>
      </Link>
    </div>
  );
};

export default ProjectDetail;
