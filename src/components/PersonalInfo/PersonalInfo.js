import React from 'react'
import './PersonalInfo.css'
import { profileIntro } from '../../CONSTANT'
export default function PersonalInfo() {
  return (
    <>
    <div className="card personal-info fade-in">
        <div className="profile-photo-container">
        <img
          className="profile-photo"
        />
        </div>
        <div className="personal-text">
          <h2>Prabin K C</h2>
          <p>
            {profileIntro}
          </p>
        </div>
      </div>
    </>
  )
}
