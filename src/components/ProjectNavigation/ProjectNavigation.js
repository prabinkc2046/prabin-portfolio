import React, { useState } from 'react';
import './ProjectNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase, faChartLine, faCodeBranch, faCloud, faServer, faLock, faTools, faFileCode, faCloudUploadAlt, faBacon, faBox, faCube
} from '@fortawesome/free-solid-svg-icons';


export default function ProjectNavigation({ projects, setExpandedProjectIndex}) {



  const handleProjectClick = (index) => {
    setExpandedProjectIndex(index);
  };

  

  return (
    <div className="card project-nav-container">
      <h3>Projects</h3>
      <nav className="project-navigation">
        <ul>
          {projects.map((project, index) => (
            <li
              onClick={() => handleProjectClick(index)}
              id={`project-${index}`}
              key={index}
              className="project-item"
            >
              <a>
                <FontAwesomeIcon icon={project.icon} size="lg" style={{ marginRight: '8px' }} />
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
