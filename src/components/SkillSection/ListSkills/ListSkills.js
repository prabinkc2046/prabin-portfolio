import React, { useEffect, useState } from 'react';
import './ListSkills.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { categorizedSkills } from '../../../CONSTANT';
import Skill from '../Skill/Skill';

export default function ListSkills() {
  const [openSkill, setOpenSkill] = useState(null); // State to track which card is open

  // Handler to toggle the open skill card
  const handleSkillClick = (relatedArea) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenSkill(openSkill === relatedArea ? null : relatedArea);
  };

  return (
    <div className="skills card">
      <h3>Technical Skills</h3>
      <div className="skills-area-container">
        {categorizedSkills.map((category) => (
          <Skill
          key={category.relatedArea}
          isOpen={openSkill === category.relatedArea}
          onSkillClick = {() => handleSkillClick(category.relatedArea)}
          category={category}
          setOpenSkill={setOpenSkill}
          />
        ))}
      </div>
    </div>
  );
}
