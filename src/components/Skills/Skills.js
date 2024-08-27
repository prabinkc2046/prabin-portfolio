import React from 'react'
import './Skills.css'
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export default function Skills() {
    const skills = [
        { name: "Linux", level: 90, icon: "fas fa-linux" },
        { name: "Networking", level: 85, icon: "fas fa-network-wired" },
        { name: "Python", level: 80, icon: "fab fa-python" },
        { name: "Docker", level: 80, icon: "fab fa-docker" },
        { name: "AWS", level: 70, icon: "fab fa-aws" },
        { name: "Bash Scripting", level: 85, icon: "fas fa-terminal" },
        { name: "FastAPI", level: 75, icon: "fas fa-cogs" },
        { name: "TypeScript", level: 70, icon: "fab fa-js-square" },
        { name: "React", level: 75, icon: "fab fa-react" },
        { name: "MongoDB", level: 70, icon: "fas fa-database" },
        { name: "Machine Learning", level: 60, icon: "fas fa-robot" },
        { name: "Encryption", level: 65, icon: "fas fa-lock" },
        { name: "Git", level: 80, icon: "fab fa-git" },
        { name: "MySQL", level: 75, icon: "fas fa-database" },
        { name: "Windows Server", level: 70, icon: "fas fa-windows" },
        { name: "Ansible", level: 50, icon: "fas fa-cogs" },
        { name: "Node.js", level: 70, icon: "fab fa-node" },
        { name: "Django", level: 70, icon: "fab fa-python" },
        { name: "Kubernetes", level: 65, icon: "fas fa-cube" } // Added for Kubernetes expertise
      ];
      
  return (
    <>
    <div className="card skills fade-in">
        <h3>Technical Skills</h3>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <i className={skill.icon}></i>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
