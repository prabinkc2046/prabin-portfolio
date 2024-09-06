import React, { useEffect, useState } from 'react';
import './Skill.css';

export default function Skill({ skillGroup, isOpen }) {
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
        setLoaded(true); // Trigger the animation once the component mounts
    }, []);

    
    return (
            <div
                className={`skills-card box-3d ${isOpen ? 'open' : ''}`}
                key={skillGroup.relatedArea}
                
            >
                    <h4 className="skills-category">
                        {skillGroup.relatedArea}
                    </h4>
               
                <div className="skills-container">
                    {skillGroup.skills.map((skill) => (
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
