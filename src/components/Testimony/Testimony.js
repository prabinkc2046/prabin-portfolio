import React from 'react'
import './Testimony.css'
import { testimonies } from '../../CONSTANT'

export default function Testimony() {      
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
