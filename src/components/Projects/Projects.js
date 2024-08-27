import React,{useRef, useState} from 'react'
import { faDatabase, faChartLine, faCodeBranch, faCloud, faServer, faLock, faTools, faFileCode, faCloudUploadAlt, faBacon, faBox, faCube, faCogs } from '@fortawesome/free-solid-svg-icons';
import './Projects.css'
import ProjectNavigation from '../ProjectNavigation/ProjectNavigation';
import { FaArrowUp } from 'react-icons/fa'; // Import icon from react-icons

export default function Projects() {
    const projectRefs = useRef([]);
    const [activeProject, setActiveProject] = useState(null);
    const scrollToTop = () => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      };
      const scrollToProject = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
          setActiveProject(id); // Set the clicked project as active
      
        }
      };
    
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

  return (
    <>
    <div className="card projects fade-in">
      <h3>Projects</h3>
     
      <ProjectNavigation projects={projects} activeProject={activeProject} scrollToProject={scrollToProject}/>
    
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
    </div>

    </>
  )
}
