import React,{useRef, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faCodeBranch, faCloud, faServer, faLock, faTools, faFileCode, faCloudUploadAlt, faBacon, faBox, faCube, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaArrowUp } from 'react-icons/fa'; // Import icon from react-icons
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';import Navbar from "./components/Navbar";
import "./App.css";


import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
function App() {

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
   <Navbar />
    <div className="App">   

      <section id="personal-info">
          <PersonalInfo />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>


      <section id="projects">
          <Projects />
      </section>

    

      <section id="testimony" className="card testimony fade-in">
        <h3>Testimonies</h3>
        <div className="testimony-container">
          {testimonies.map((testimony, index) => (
            <div className="testimony-card" key={index}>
              <p>"{testimony.testimony}"</p>
              <p><strong>{testimony.name}</strong>, {testimony.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="repositories" className="card repositories fade-in">
        <h3>Code Repositories</h3>
        <p>
          Check out my code repositories on{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          .
        </p>
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
          <Contact />
      </section> 

      <ToastContainer />
    </div>
    <footer className="footer">
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
</footer>

    </>
  );
}

export default App;
