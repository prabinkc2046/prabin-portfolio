import React from 'react'
import './Testimony.css'

export default function Testimony() {
    const testimonies = [
        {
          name: "John Doe",
          position: "CTO, TechCorp Solutions",
          testimony: "Prabin is an exceptional engineer with a deep understanding of system automation and cloud infrastructure. His contributions have greatly improved our operations.",
        },
        {
          name: "Jane Smith",
          position: "Manager, NetSecure Inc.",
          testimony: "Prabin's expertise in networking and security has been invaluable to our company. He is highly skilled and very reliable.",
        },
        // Add more testimonies as needed
      ];
      
  return (
   <>
   <div className="card testimony">
        <h3>Testimonies</h3>
        <div className="testimony-container">
          {testimonies.map((testimony, index) => (
            <div className="testimony-card" key={index}>
              <p>"{testimony.testimony}"</p>
              <p><strong>{testimony.name}</strong>, {testimony.position}</p>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}
