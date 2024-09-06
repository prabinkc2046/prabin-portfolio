import React from 'react'
import './PersonalInfo.css'
import { profileIntro } from '../../CONSTANT'
import ExpandableParagraph from '../UtilityComponent/ExpandableParagraph/ExpandableParagraph'
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
          {/* <p>
            {profileIntro}
          </p> */}

          <ExpandableParagraph 
          text={profileIntro}
          wordsCount={5}
          />
        </div>
      </div>
    </>
  )
}
