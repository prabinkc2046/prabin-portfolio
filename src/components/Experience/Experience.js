import React from 'react'
import './Experience.css'

export default function Experience() {
    const experience = [
        {
          role: "System Engineer",
          company: "TechCorp Solutions",
          duration: "Jan 2021 - Present",
          details: "Responsible for managing cloud infrastructure and automating deployments.",
        },
        {
          role: "Network Administrator",
          company: "NetSecure Inc.",
          duration: "Jun 2018 - Dec 2020",
          details: "Maintained and secured the company's internal network infrastructure.",
        },
        // Add more experiences as needed
      ];
    
  return (
    <>
    <div className="card experience">
        <h3>Experience</h3>
        <div className="experience-container">
          {experience.map((exp) => (
            <div className="experience-card" key={exp.role}>
              <h4>{exp.role}</h4>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p>{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
