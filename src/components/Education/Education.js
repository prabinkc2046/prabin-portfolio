import React from 'react'
import './Education.css'

export default function Education() {
    const universities = [
        {name:'Tribhuvan University', degree:'Master of Physics', finishedYear: '2016', score:'Distinction', subjects:[{name:'Solid State Physics', score:'89%'},{name:'Mathematical Physics', score:'75%'}]},
        {name:'Melbourne Institute of Technology', degree: 'Master of Networking', finishedYear: '2019', score:'Distinction', subjects:[{name:'Advanced Network Design', score:'HD'}, {name:'Cyber Security and Analytics', score:'D'}, {name:'Fundamentals of Operating Systems and Programming', score:'HD'}, {name:'Data and Information Management', score:'HD'}, {name:'Network Management in Organisations', score:'HD'}, {name:'Overview of Network Security', score:'HD'}]}
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
                            <div className="subjects box-3d">
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
