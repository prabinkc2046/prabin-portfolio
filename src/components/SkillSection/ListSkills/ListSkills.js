import React, { useEffect, useState } from 'react';
import './ListSkills.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { categorizedSkills, defaultSkillArea } from '../../../CONSTANT';
import Skill from '../Skill/Skill';
import ScrollToTop from '../../UtilityComponent/ScrollToSomewhere/ScrollToSomewhere';
import ScrollToSomewhere from '../../UtilityComponent/ScrollToSomewhere/ScrollToSomewhere';

export default function ListSkills() {
  const [selectedArea, setSelectedArea] = useState(defaultSkillArea);

  // Get unique skill area
  const skillArea = ['All', ...new Set(categorizedSkills.map(area => area.relatedArea))];

  // Filter skill area based on the selected skill area
  const filteredSkillArea = selectedArea === 'All' ? categorizedSkills : categorizedSkills.filter(area => area.relatedArea === selectedArea)
  
  return (
    <div className="skills card">
      <h3 id='technical-skills-title'>Technical Skills</h3>

      {/* Navbar for skill area */}
      <nav className='portfolio-section-navbar'>
        {skillArea.map(area => (
          <button
          key={area}
          className={`portfolio-section-nav-item ${selectedArea === area ? 'active' : ''}`}
          onClick={() => setSelectedArea(area)}
          >
            {area}
          </button>
        ))}
      </nav>
      <div className="skills-area-container">
        {filteredSkillArea.map((skillGroup) => (
          <Skill
          key={skillGroup.relatedArea}
          isOpen={selectedArea === 'All' || selectedArea === skillGroup.relatedArea}
          skillGroup={skillGroup}
          />
        ))}
      </div>
      

    {/* Show go to top button only when All skills is selected */}
    {selectedArea === 'All' &&  <ScrollToSomewhere label={'Back to Top'} id={'technical-skills-title'}/>}
    </div>
  );
}