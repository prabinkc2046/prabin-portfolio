import React from 'react'
import './PersonalInfo.css'

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
            I am a passionate system engineer with experience in automation,
            cloud infrastructure, and security best practices.
          </p>
        </div>
      </div>
    </>
  )
}
