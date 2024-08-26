import React,{useRef, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faCodeBranch, faCloud, faServer, faLock, faTools, faFileCode, faCloudUploadAlt, faBacon, faBox, faCube, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaArrowUp } from 'react-icons/fa'; // Import icon from react-icons

import Navbar from "./components/Navbar";
import "./App.css";
import emailjs from '@emailjs/browser';


import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {

const form = useRef();

const [formData, setFormData] = useState({
  name:'',
  email:'',
  message:''
 });

 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
 }
 
 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_qfie3ob', 'template_bi5zjw4', form.current, {
    publicKey: 'C372p1m_voPbDxOfy'
  })
  .then((result) => {
    alert('Message sent successfully');
    setFormData({
      name:'',
      email:'',
      message:''
    })
  })
  .catch((error) => {
    alert('Failed to send message');
    console.error('EmailJS error:', error);
  })
  
 }
  const experience = [
    {
      role: "System Engineer",
      company: "TechCorp Solutions",
      duration: "Jan 2021 - Present",
      details: "Responsible for managing cloud infrastructure and automating deployments.",
    },
    {
      role: "Network Administrator",
      company: "NetSecure Inc.",
      duration: "Jun 2018 - Dec 2020",
      details: "Maintained and secured the company's internal network infrastructure.",
    },
    // Add more experiences as needed
  ];

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
      <section id="personal-info" className="card personal-info fade-in">
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
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience" className="card experience fade-in">
        <h3>Experience</h3>
        <div className="experience-container">
          {experience.map((exp) => (
            <div className="experience-card" key={exp.role}>
              <h4>{exp.role}</h4>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p>{exp.details}</p>
            </div>
          ))}
        </div>
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

      <section id="education" className="card education fade-in">
        <h3>Education</h3>
       <div className="education-card-container">
       <div className="education-card">
          <h4>University A</h4>
          <p>Graduated: 2020</p>
          <p>Score: 85%</p>
          <div className="subjects">
            <div className="subject">
              <span className="subject-name">Subject 1:</span>
              <span className="subject-score">90%</span>
            </div>
            <div className="subject">
              <span className="subject-name">Subject 2:</span>
              <span className="subject-score">80%</span>
            </div>
          </div>
        </div>
        <div className="education-card">
          <h4>University B</h4>
          <p>Graduated: 2022</p>
          <p>Score: 88%</p>
          <div className="subjects">
            <div className="subject">
              <span className="subject-name">Subject 1:</span>
              <span className="subject-score">85%</span>
            </div>
            <div className="subject">
              <span className="subject-name">Subject 2:</span>
              <span className="subject-score">90%</span>
            </div>
          </div>
        </div>
       </div>
      </section>

      <section id="contact" className="card contact fade-in">
        <h3>Contact</h3>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> Email: pkmiracle36@gmail.com</p>
          <p><i className="fas fa-phone"></i> Phone: +61473654956</p>
        </div>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section> 
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
