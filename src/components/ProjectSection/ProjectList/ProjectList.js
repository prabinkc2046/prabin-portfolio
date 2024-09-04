import React, { useState } from 'react';
import './ProjectList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Modal from '../../Modal/Modal';
import { projects } from '../../../CONSTANT';

export default function ProjectList() {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState('Linux');
  const [animationKey, setAnimationKey] = useState(0); // New state for animation key

  const skills = [
    "All",
    "API Development",
    "Web FrameWorks",
    "Web Deployment",
    "Web Servers",
    "Linux",
    "DBMS",  
    "Python",
    "CI/CD",
    "Node.js",
    "AWS", 
    "Ansible",
    "Docker",  
    "Kubernetes",
    "Scripting",
  ];
  
  const handleProjectClick = (index) => {
    setExpandedProjectIndex(index);
  };

  const closeModal = () => {
    setExpandedProjectIndex(null);
  };

  const handleSkillChange = (skill) => {
    setSelectedSkill(skill);
    setExpandedProjectIndex(null); // Close any open project details
    setAnimationKey((prevKey) => prevKey + 1); // Update animation key to restart animation
  };

  // Filter projects based on the selected skill
  const filteredProjects = selectedSkill === 'All'
    ? projects
    : projects.filter((project) => Array.isArray(project.skills) && project.skills.includes(selectedSkill));

  // Get the number of filtered projects
  const projectCount = filteredProjects.length;

  return (
    <>
      <div className="card project-nav-container">
        <h3>Projects</h3>
        {/* Navbar for Skills */}
        <nav className="skills-navigation">
          <ul>
            {skills.map((skill, index) => (
              <li
                key={index}
                onClick={() => handleSkillChange(skill)}
                className={`skill-item ${selectedSkill === skill ? 'active' : ''}`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </nav>

        {/* Display project count with animation */}
        <p className='project-count'>
          Showing <span className='count'>{projectCount}</span> project{projectCount !== 1 ? 's' : ''}
          <span key={animationKey} className='dots'></span> {/* Apply animation key here */}
        </p>

        {/* Project List */}
        <nav className="project-navigation" key={selectedSkill}>
          <ul>
            {filteredProjects.map((project, index) => (
              <li
                onClick={() => handleProjectClick(index)}
                id={`project-${index}`}
                key={index}
                className="project-item"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.5}s forwards`
                }}
              >
               
                  <FontAwesomeIcon 
                  className='project-icon' 
                  icon={project.icon} size="lg" 
                  style={{ marginRight: '8px' }} 
                  />
                  {project.name}
                
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Modal for Project Details */}
      <Modal
        content={
          <ProjectDetails projects={filteredProjects} expandedProjectIndex={expandedProjectIndex} />
        }
        isVisible={expandedProjectIndex !== null}
        onClose={closeModal}
      />
    </>
  );
}
