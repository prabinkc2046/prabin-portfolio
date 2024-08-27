import React from 'react'
import './Education.css'

export default function Education() {
    const universities = [
        {name:'Tribhuvan University', degree:'Master of Physics', finishedYear: '2016', score:'Distinction', subjects:[{name:'subject 1', score:'90%'}]},
        {name:'Melbourne Institute of Technology', degree: 'Master of Networking', finishedYear: '2019', score:'Distinction', subjects:[{name:'subject 1', score:'90%'}]}
    ]
  return (
    <>
    <div className="card education fade-in">
        <h3>Education</h3>
        <div className="education-card-container">
       
        {universities.map((uni, index) => (
            <div className="education-card">
            
                            <div key={index}>
                                <h4>{uni.name}</h4>
                                <p>{uni.degree}</p>
                                <p>Graduated: {uni.finishedYear}</p>
                                <p>Score: {uni.score}</p>
                            </div>
                            <div key={index} className="subjects">
                            {uni.subjects.map((sub, index) => (
                                
                                <div key={index} className="subject">
                                    <span className="subject-name">{sub.name}:</span>
                                    <span className="subject-score">{sub.score}</span>
                                </div>
                            
        ))}
          </div>
    </div>
            
         ))}
          
        
        
       </div>
      </div>
    </>
  )
}
