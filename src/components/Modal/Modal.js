import React from 'react'
import './Modal.css';

export default function Modal({projects, setExpandedProjectIndex, expandedProjectIndex}) {
    const closeModal = () => {
        setExpandedProjectIndex(null);
      };
  return (
    <>
    {expandedProjectIndex !== null && (
        <div className="modal">
          <div className="project-card">
            <span className="close" onClick={closeModal}>&times;</span>
            <h4>{projects[expandedProjectIndex].name}</h4>
            <p>{projects[expandedProjectIndex].description}</p>
            <p>
              <strong>Outcome:</strong> {projects[expandedProjectIndex].outcome}
            </p>
            <div className="links">
              {projects[expandedProjectIndex].youtubeLink && (
                <a href={projects[expandedProjectIndex].youtubeLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i> Watch Demo
                </a>
              )}
              <a href={projects[expandedProjectIndex].githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
