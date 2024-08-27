import React from 'react'
import './ProjectNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectNavigation({projects, activeProject, scrollToProject}) {
  return (
    <>
    <div className="card">
      <nav className="project-navigation">
      <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={`#${project.name.replace(/\s+/g, '-')}`}
                onClick={() => scrollToProject(project.name.replace(/\s+/g, '-'))}
                className={activeProject === project.name.replace(/\s+/g, '-') ? 'active' : ''}
              >
                <FontAwesomeIcon icon={project.icon} size="lg" style={{ marginRight: '8px' }} />

                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </>
  )
}
