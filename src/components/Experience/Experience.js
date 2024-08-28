import React from 'react'
import './Experience.css'

export default function Experience() {
    const experience = [
        {
          role: "Software Support Technician",
          company: "Xacom",
          duration: "June 2021 - June 2022",
          details: "Performed system health checks, generated reports, and developed scripts to automate monitoring and maintenance tasks, ensuring optimal system performance and uptime.",
        },
        {
          role: "Software Support Technician1",
          company: "Xacom",
          duration: "June 2021 - June 2022",
          details: "Performed system health checks, generated reports, and developed scripts to automate monitoring and maintenance tasks, ensuring optimal system performance and uptime.",
        },
        {
          role: "Software Support Technician2",
          company: "Xacom",
          duration: "June 2021 - June 2022",
          details: "Performed system health checks, generated reports, and developed scripts to automate monitoring and maintenance tasks, ensuring optimal system performance and uptime.",
        }

        // Add more experiences as needed
      ];
    
  return (
    <>
    <div className="card experience">
        <h3>Experience</h3>
        <div className="experience-container">
          {experience.map((exp) => (
            <div className="experience-card box-3d" key={exp.role}>
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
