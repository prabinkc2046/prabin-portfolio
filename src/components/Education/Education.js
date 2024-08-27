import React from 'react'
import './Education.css'

export default function Education() {
    const universities = [
        {name:'Tribhuvan University', degree:'Master of Physics', finishedYear: '2016', score:'Distinction', subjects:[{name:'subject 1', score:'90%'}]},
        {name:'Melbourne Institute of Technology', degree: 'Master of Networking', finishedYear: '2019', score:'Distinction', subjects:[{name:'subject 1', score:'90%'}]}
    ]
  return (
    <>
    <div className="card education">
        <h3>Education</h3>
        <div className="education-card-container">
       
        {universities.map((uni) => (
            <div key={uni.name} className="education-card">
            
                            <div >
                                <h4>{uni.name}</h4>
                                <p>{uni.degree}</p>
                                <p>Graduated: {uni.finishedYear}</p>
                                <p>Score: {uni.score}</p>
                            </div>
                            <div className="subjects">
                            {uni.subjects.map((sub) => (
                                
                                <div key={sub.name} className="subject">
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
