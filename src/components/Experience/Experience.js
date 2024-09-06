import React, { useState } from 'react';
import './Experience.css';
import { experience } from '../../CONSTANT';
import ScrollToSomewhere from '../UtilityComponent/ScrollToSomewhere/ScrollToSomewhere';
import ExpandableParagraph from '../UtilityComponent/ExpandableParagraph/ExpandableParagraph';

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState('Software Support Technician');

  // Get unique roles for the navbar, plus 'All'
  const roles = ['All', ...new Set(experience.map(exp => exp.role))];

  // Filter experience based on the selected role
  const filteredExperience = selectedRole === 'All'
    ? experience
    : experience.filter(exp => exp.role === selectedRole);

  return (
    <>
      <div className="card experience">
        <h3 id='experience-title'>Experience</h3>
        
        {/* Navbar for Roles */}
        <nav className="portfolio-section-navbar">
          {roles.map(role => (
            <button
              key={role}
              className={`portfolio-section-nav-item ${selectedRole === role ? 'active' : ''}`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </nav>

        {/* Experience Container */}
        <div className="experience-container">
          {filteredExperience.map(exp => (
            <div className="experience-card box-3d" key={exp.role}>
              <h4>{exp.role}</h4>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <ExpandableParagraph
              text={exp.details}
              wordsCount={10}
              />
            </div>
          ))}
        </div>

        {/* Scroll to top botton. only shows when all is shown */}
        {selectedRole === 'All' && <ScrollToSomewhere label={'Back to Top'} id={'experience-title'}/> }
      </div>
    </>
  );
}
