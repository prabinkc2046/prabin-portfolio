import React from 'react'
import './Testimony.css'

export default function Testimony() {
    const testimonies = [
        {
          name: "Tom Morley",
          position: "General Manager, Xacom",
          testimony: "Prabin is a kind and generous individual, whose indefatigable positivity was an asset to our workplace. He is passionate about finding novel solutions to systemic challenges and is always eager to learn and explore new technologies.",
        },
        {
          name:"Minol Pamosha",
          position:"RPA Engineer, Accario Global",
          testimony:"I had the pleasure of working with Prabin on an automated script project, and I am incredibly impressed with his expertise in Python. Prabin's technical skills are top-notch, and he demonstrated a deep understanding of automation processes. He was not only efficient in coding but also proactive in troubleshooting and optimizing the script to meet my needs perfectly. Prabin's professionalism, attention to detail, and ability to deliver quality work on time make him an excellent choice for any Python-related project. I highly recommend Prabin for his exceptional skills and dedication to his work."
        },
        {
          name:"Claudinei Pereira de Sousa",
          position:"Xacom",
          testimony:"I have the chance to work alongside Prabin, and what a pleasure to work with. Great contribution to my workloads, always providing good insights and eager to help and lean from experience. I am sure your success is already part of your professional journey. Hope to collaborate with you in other jobs again soon!"
        }
      
        // Add more testimonies as needed
      ];
      
  return (
   <>
   <div className="card testimony">
        <h3>Testimonies</h3>
        <div className="testimony-container">
          {testimonies.map((testimony, index) => (
            <div className="testimony-card box-3d" key={index}>
              <p>"{testimony.testimony}"</p>
              <p><strong>{testimony.name}</strong>, {testimony.position}</p>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}
