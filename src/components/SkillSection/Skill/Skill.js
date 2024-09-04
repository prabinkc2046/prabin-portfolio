import React, { useEffect, useRef, useState } from 'react';
import './Skill.css';
import VisibilitySensor from 'react-visibility-sensor';
import { categorizedSkills } from '../../../CONSTANT';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function Skill({ category, isOpen, onSkillClick, setOpenSkill }) {
    const [loaded, setLoaded] = useState(false);
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600); // Check if the screen width is less than 600px

    const skillCategoryAtIndex0 = categorizedSkills[0]['relatedArea'];

    const categoryRef = useRef(null);
    const skillRef = useRef(null);

    // Function to handle window resize event
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 600); // Update isMobile state based on screen width
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleVisibilityChange = (isVisible, ref) => {
      if (ref === 'skill') {
          setLoaded(isVisible);
      } else if (ref === 'category') {
          setCategoryVisible(isVisible);
      }
  };

    useEffect(() => {
        setLoaded(true); // Trigger the animation once the component mounts
    }, []);

    useEffect(() => {
      if (categoryVisible) {
          const skillCategory = categoryRef.current.textContent.toLowerCase(); // Normalize case

          // Use includes to check if skillCategory contains any part of the skillCategoryAtIndex0
          if (skillCategory.includes(skillCategoryAtIndex0.toLowerCase())) {
              setOpenSkill(skillCategoryAtIndex0);
          }
      }
  }, [categoryVisible, setOpenSkill]); // Add setOpenSkill to dependencies

    return (
            <div
                className={`skills-card box-3d ${isOpen ? 'open' : ''}`}
                key={category.relatedArea}
                onClick={isMobile ? onSkillClick : undefined} // Apply click handler only for mobile
                ref={skillRef}
            >
                <VisibilitySensor  onChange={(isVisible) => handleVisibilityChange(isVisible, 'category')} partialVisibility>
                    <h4 ref={categoryRef} className="skills-category">
                        {category.relatedArea}
                    </h4>
                </VisibilitySensor>
               
                <VisibilitySensor onChange={(isVisible) => handleVisibilityChange(isVisible,'skill')} partialVisibility>
                <div className="skills-container">
                    {category.skills.map((skill) => (
                          <div className="skill" key={skill.name}>
                            <i className={skill.icon}></i>
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-bar">
                                <div
                                    className={`skill-level ${loaded ? 'loaded' : ''}`}
                                    style={{ width: `${loaded ? skill.level : 0}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
              </div>
                </VisibilitySensor>

                </div>
            
       
    );
}

