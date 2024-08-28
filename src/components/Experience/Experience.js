import React from 'react'
import './Experience.css'
import { experience } from '../../CONSTANT'

export default function Experience() {
     
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
