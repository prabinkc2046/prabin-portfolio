import React, { useEffect, useState } from 'react';
import './Skills.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import useVisibility from '../../hooks/useVisibility';
import { skills } from '../../CONSTANT';

export default function Skills() {
  

  const [loaded, setLoaded] = useState(false);
  const [isVisibleSkills, refSkills] = useVisibility(0.1);

  useEffect(() => {
    setLoaded(true); // Trigger the animation once the component mounts
  }, []);

  useEffect(() => {
    if(refSkills.current){
      if(isVisibleSkills){
        setLoaded(true)
      }else{
        setLoaded(false)
      }
    }
  },[isVisibleSkills])
  
  return (
    <div ref={refSkills} className="card skills fade-in">
      <h3>Technical Skills</h3>
      <div className="skills-container">
        {skills.map((skill) => (
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
    </div>
  );
}
