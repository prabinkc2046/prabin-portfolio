import React from 'react'
import './Repository.css'

export default function Repository() {
  return (
    <>
    <div className="card repositories ">
        <h3>Code Repositories</h3>
        <p>
          Check out my code repositories on{" "}
          <a
            href="https://github.com/prabinkc2046?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          .
        </p>
      </div>
    </>
  )
}
