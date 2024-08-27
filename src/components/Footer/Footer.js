import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
   
    <div className="footer">
    <p>&copy; 2024 Prabin K C. All rights reserved.</p>
    <div className="social-links">
        <a href="https://www.linkedin.com/in/prabin-kc/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/prabinkc2046?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.youtube.com/channel/UCutEp4mFX4UZBvZw0BO44IQ" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> CodeMindsTV
        </a>
    </div>
    <div className="quick-links">
        <a href="#personal-info">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#testimony">Testimonies</a>
        <a href="#repositories">Repositories</a>
        <a href="#education">Education</a>
    </div>
</div>
  
  )
}
