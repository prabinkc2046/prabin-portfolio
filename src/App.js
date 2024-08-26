import React,{useRef, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faCodeBranch, faCloud, faServer, faLock, faTools, faFileCode, faCloudUploadAlt, faBacon, faBox, faCube, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaArrowUp } from 'react-icons/fa'; // Import icon from react-icons

import Navbar from "./components/Navbar";
import "./App.css";
import emailjs from '@emailjs/browser';

function App() {

const form = useRef();
const projectRefs = useRef([]);
const [activeProject, setActiveProject] = useState(null);

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
 
const scrollToTop = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToProject = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveProject(id); // Set the clicked project as active

  }
};


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
 const skills = [
  { name: "Linux", level: 90, icon: "fas fa-linux" },
  { name: "Networking", level: 85, icon: "fas fa-network-wired" },
  { name: "Python", level: 80, icon: "fab fa-python" },
  { name: "Docker", level: 80, icon: "fab fa-docker" },
  { name: "AWS", level: 70, icon: "fab fa-aws" },
  { name: "Bash Scripting", level: 85, icon: "fas fa-terminal" },
  { name: "FastAPI", level: 75, icon: "fas fa-cogs" },
  { name: "TypeScript", level: 70, icon: "fab fa-js-square" },
  { name: "React", level: 75, icon: "fab fa-react" },
  { name: "MongoDB", level: 70, icon: "fas fa-database" },
  { name: "Machine Learning", level: 60, icon: "fas fa-robot" },
  { name: "Encryption", level: 65, icon: "fas fa-lock" },
  { name: "Git", level: 80, icon: "fab fa-git" },
  { name: "MySQL", level: 75, icon: "fas fa-database" },
  { name: "Windows Server", level: 70, icon: "fas fa-windows" },
  { name: "Ansible", level: 50, icon: "fas fa-cogs" },
  { name: "Node.js", level: 70, icon: "fab fa-node" },
  { name: "Django", level: 70, icon: "fab fa-python" },
  { name: "Kubernetes", level: 65, icon: "fas fa-cube" } // Added for Kubernetes expertise
];

  const projects = [
    {
      name: "MongoDB Setup and API Integration",
      description: "Installed and configured MongoDB on Ubuntu Linux, facilitating frontend-backend integration.",
      outcome: "Enhanced data management and application performance.",
      githubLink: "https://github.com/prabinkc2046/graphql-mongoose-mongodb-bookstore",
      icon: faDatabase
    },
    {
      name: "Financial Data Organization Script",
      description: "Developed a Python script to organize financial data into fiscal year and monthly folders.",
      outcome: "Streamlined data management and ensured accurate fiscal year organization.",
      youtubeLink: "https://youtu.be/vrG-Jj0J5Ks",
      githubLink: "https://github.com/prabinkc2046/FinanceYearFolderGenerator",
      icon: faChartLine
    },
    {
      name: "React App Build and Deployment",
      description: "Configured a GitHub Actions workflow to build and deploy a React app to a Linode server.",
      outcome: "Automated deployment process, ensuring up-to-date builds on the server.",
      githubLink: "https://github.com/prabinkc2046/taskmanagerwithReact/tree/main",
      icon: faCodeBranch
    },
    {
      name: "MongoDB and Node.js Setup Script",
      description: "Automated the installation and configuration of MongoDB, Node.js, and Nginx on Ubuntu.",
      outcome: "Streamlined the setup process for a web application with a fully operational backend service.",
      githubLink: "https://github.com/prabinkc2046/express-mongoose-category-api",
      icon: faCloud
    },
    {
      name: "React App Deployment with Nginx and Let's Encrypt",
      description: "Deployed a React app on Ubuntu using Nginx and secured it with Let's Encrypt SSL.",
      outcome: "Successfully deployed and secured a React application on a remote server.",
      githubLink: "https://github.com/prabinkc2046/Deploying-a-React-App-with-Nginx-and-Let-s-Encrypt",
      icon: faServer
    },
    {
      name: "AWS Automation Scripts Repository",
      description: "A collection of scripts to automate AWS resource deployment, including VPC setup and EC2 provisioning.",
      outcome: "Facilitates efficient and automated deployment of AWS resources.",
      youtubeLink: "https://youtu.be/2DtvvvOoql8",
      githubLink: "https://github.com/prabinkc2046/AWS-Automation-Scripts-Repository",
      icon: faLock
    },
    {
      name: "Auto-Scaling Group to Scale Django Application with ELB Health Check",
      description: "Implemented auto-scaling for a Django application using an Auto Scaling Group and Application Load Balancer.",
      outcome: "Ensured seamless scaling of the Django application with automated scaling and load balancing.",
      youtubeLink: "https://youtu.be/qdqGKtvUgAQ?si=gp_JRcxfHaVTUQvB",
      githubLink: "https://github.com/prabinkc2046/Auto-Scaling-Group-to-scale-Django-Application-with-ELB-health-check",
      icon: faTools
    },
    {
      name: "Scalable Architecture: Deploying Django with Network Load Balancer and MySQL",
      description: "Deploying a scalable Django application using Network Load Balancer and MySQL server.",
      outcome: "Achieved a robust, scalable, and secure cloud infrastructure for Django applications.",
      youtubeLink: "https://youtu.be/UK_zi0v8qjI",
      githubLink: "https://github.com/prabinkc2046/Highly-Available-Django-Architecting-with-Network-Load-Balancer-and-MySQL-?tab=readme-ov-file",
      icon: faCube
    },
    {
      name: "Containerized App Scalability with AWS ALB",
      description: "Built and containerized a high-speed application, deployed with Docker, and used AWS ALB for scalability.",
      outcome: "Enhanced scalability and performance of Dockerized FastAPI application with AWS ALB.",
      youtubeLink: "https://youtu.be/KNitmmYJP_c",
      githubLink: "https://github.com/prabinkc2046/Containerized-App-Scalability-with-AWS-ALB-Demo",
      icon: faBacon
    },
    {
      name: "AWS Elastic File System as a Shared Storage Solution for Web Hosting",
      description: "Used AWS EFS to provide shared storage for multiple web servers running Nginx.",
      outcome: "Implemented a scalable shared storage solution using AWS EFS for web servers.",
      youtubeLink: "https://youtu.be/lE_TtPICQZQ",
      githubLink: "https://github.com/prabinkc2046/AWS-Elastic-File-System-Uses-as-the-shared-storage-solution-for-web-hosting",
      icon: faBox
    },
    {
      name: "Useful SysAdmin Scripts",
      description: "A collection of scripts for system administrators to automate common tasks.",
      outcome: "Automated routine sysadmin tasks, enhancing efficiency and simplifying administrative processes.",
      githubLink: "https://github.com/prabinkc2046/Useful-Bash-Script",
      icon: faFileCode
    },
    {
      name: "Web Deployment Script",
      description: "A Bash script for setting up a web project on an Nginx server, including various distributions.",
      outcome: "Simplified web deployment by automating Nginx server setup and code deployment.",
      githubLink: "https://github.com/prabinkc2046/NginxAutomator",
      icon: faCloudUploadAlt
    },
    {
      name: "Django Application Deployment and Automation",
      description: "Covers deployment and automation of Django applications, including Apache load balancing and AWS ALB.",
      outcome: "Streamlined and automated the deployment process for Django applications.",
      youtubeLink: "https://youtu.be/VkGfj6f9TvU",
      githubLink: "https://github.com/prabinkc2046/Django-App-Deployment-with-Apache-Load-Balancer-and-AWS-Application-Load-Balancer",
      icon: faTools
    },
    {
      name: "Modular Web Deployment: Apache, Gunicorn, and Flask",
      description: "Demonstrates a modular deployment approach with Apache, Gunicorn, and Flask, including SSL encryption.",
      outcome: "Achieved a modular deployment architecture for enhanced scalability and resource optimization.",
      youtubeLink: "https://youtu.be/TM8UIQqkGdM",
      githubLink: "https://github.com/prabinkc2046/Modular-Web-deployment-with-Apache-Gunicorn-Flask",
      icon: faBox
    },
    {
      name: "Flask App Deployment with Apache and mod_wsgi",
      description: "Deployed a Flask application with Apache and mod_wsgi, including configuration and WSGI script setup.",
      outcome: "Successfully deployed a Flask application using Apache and mod_wsgi.",
      youtubeLink: "https://youtu.be/nTkgBwa1gLw",
      githubLink: "https://github.com/prabinkc2046/Flask-App-Deployment-with-Apache-and-mod_wsgi",
      icon: faFileCode
    },
    {
      name: "LAMP Stack Web Application Deployment",
      description: "Deploys a web application using the LAMP stack with instructions for Apache, PHP, and MySQL setup.",
      outcome: "Set up a LAMP stack environment for a robust and scalable web application.",
      youtubeLink: "https://youtu.be/P4j46nRF0Nw",
      githubLink: "https://github.com/prabinkc2046/LAMP-stack-Web-Application-Deployment",
      icon: faServer
    },
    {
      name: "MySQL Server Installation and Setup Guide for Ubuntu",
      description: "Step-by-step guide for installing and configuring MySQL server on Ubuntu.",
      outcome: "Configured MySQL server with secure access and performance optimization.",
      githubLink: "https://github.com/prabinkc2046/MySQL-Setup",
      icon: faDatabase
    },
    {
      name: "Deploying a Containerized Application with Ansible",
      description: "Automates deployment of containerized applications using Ansible roles.",
      outcome: "Automated containerized application deployment with Ansible configurations.",
      youtubeLink: "https://www.youtube.com/watch?v=p2m_rcpUMF4",
      githubLink: "https://github.com/prabinkc2046/Deploying-a-Containerized-Application-with-Ansible",
      icon: faBacon
    },
    {
      name: "Ansible Playbook: Package Update, Docker Installation, and Hello-World",
      description: "Automates package updates, Docker installation, and runs a Docker 'hello-world' container.",
      outcome: "Streamlined setup with automated Docker installation and verification.",
      githubLink: "https://github.com/prabinkc2046/install-docker-ansible-demo",
      icon: faBacon
    },
    {
      name: "Ansible Playbook: Install and Uninstall Nginx on Linode Server",
      description: "Automates Nginx installation and removal on Linode servers.",
      outcome: "Simplified Nginx management with automated deployment and removal.",
      githubLink: "https://github.com/prabinkc2046/Nginx-install-uninstall-Ansible-demo",
      icon: faServer
    },
    {
      name: "Kubernetes Learning Journey",
      description: "Documents and showcases Kubernetes concepts and practices.",
      outcome: "Detailed notes on Kubernetes fundamentals and practical applications.",
      githubLink: "https://github.com/prabinkc2046/Kubernetes-Learning-Journey",
      icon: faCube
    },
    {
      name: "Docker Storage Scenario - MySQL Database",
      description: "Demonstrates Docker volume usage for MySQL data persistence.",
      outcome: "Confirmed data retention across container restarts using Docker volumes.",
      githubLink: "https://github.com/prabinkc2046/Docker-Storage-Scenario-MySQL-Database",
      icon: faDatabase
    },
    {
      name: "BashScript-Challenges",
      description: "Solutions for various bash scripting challenges.",
      outcome: "Showcases proficiency in bash scripting with practical task solutions.",
      githubLink: "https://github.com/prabinkc2046/PrabinKC-BashScriptChallengesSolved.",
      icon: faTools
    }
  ];
  


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
   
    <div className="App">
   
      <Navbar />
    
      <section id="personal-info" className="card personal-info fade-in">
        <img
          src="/images/profilePhoto.jpeg"
          alt="Profile"
          className="profile-photo"
        />
        <div className="personal-text">
          <h2>Prabin K C</h2>
          <p>
            I am a passionate system engineer with experience in automation,
            cloud infrastructure, and security best practices.
          </p>
        </div>
      </section>

      <section id="skills" className="card skills fade-in">
        <h3>Technical Skills</h3>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <i className={skill.icon}></i>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
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

    <section id="projects" className="card projects fade-in">
      <h3>Projects</h3>
      <div className="card">
      <nav className="project-navigation">
      <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={`#${project.name.replace(/\s+/g, '-')}`}
                onClick={() => scrollToProject(project.name.replace(/\s+/g, '-'))}
                className={activeProject === project.name.replace(/\s+/g, '-') ? 'active' : ''}
              >
                <FontAwesomeIcon icon={project.icon} size="lg" style={{ marginRight: '8px' }} />

                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            className="project-card"
            id={project.name.replace(/\s+/g, '-')}
            key={project.name}
            ref={el => (projectRefs.current[project.name] = el)}
          >
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p>
              <strong>Outcome:</strong> {project.outcome}
            </p>
            {project.youtubeLink && (
              <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> Watch Demo
              </a>
            )}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </a>
            {/* Back to Top icon within each project card */}
            <div className="back-to-top-card">
              <button className="back-to-top" onClick={scrollToTop}>
                <FaArrowUp /> 
              </button>
            </div>
          </div>
        ))}
      </div>
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
          <p><i className="fas fa-envelope"></i> Email: your-email@example.com</p>
          <p><i className="fas fa-phone"></i> Phone: +1234567890</p>
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
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
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
