import React, {useState} from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import './styles/common.css';
import { projects } from "./CONSTANT";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Skills from "./components/Skills/Skills";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Repository from "./components/Repository/Repository";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import useVisibility from "./hooks/useVisibility";
import ProjectNavigation from "./components/ProjectNavigation/ProjectNavigation";
import Modal from "./components/Modal/Modal";

function App() {
  const [isVisiblePersonalInfo, refPersonalInfo] = useVisibility(0.1);
  const [isVisibleSkills, refSkills] = useVisibility(0.1);
  const [isVisibleExperience, refExperience] = useVisibility(0.1);
  const [isVisibleProjects, refProjects] = useVisibility(0.1);
  const [isVisibleTestimony, refTestimony] = useVisibility(0.1);
  const [isVisibleRepositories, refRepositories] = useVisibility(0.1);
  const [isVisibleEducation, refEducation] = useVisibility(0.1);
  const [isVisibleContact, refContact] = useVisibility(0.1);

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);


  return (
    <div>
      <Navbar />
      <div className="App">   
        <section ref={refPersonalInfo} id="personal-info" className={`${isVisiblePersonalInfo ? 'fade-in-up' : ''}`}>
          <PersonalInfo />
        </section>

        <section ref={refSkills} id="skills" className={`${isVisibleSkills ? 'fade-in-up' : ''}`}>
          <Skills />
        </section>

        <section ref={refExperience} id="experience" className={`${isVisibleExperience ? 'fade-in-up' : ''}`}>
          <Experience />
        </section>

        <section ref={refProjects} id="projects" className={`${isVisibleProjects ? 'fade-in-up' : ''}`}>
          <ProjectNavigation projects={projects} expandedProjectIndex={expandedProjectIndex} setExpandedProjectIndex={setExpandedProjectIndex}/>
          <Modal projects={projects} expandedProjectIndex={expandedProjectIndex} setExpandedProjectIndex={setExpandedProjectIndex}/>
        </section>

        <section ref={refRepositories} id="repositories" className={`${isVisibleRepositories ? 'fade-in-up' : ''}`}>
          <Repository />
        </section>

        <section ref={refEducation} id="education" className={`${isVisibleEducation ? 'fade-in-up' : ''}`}>
          <Education />
        </section>

        <section ref={refTestimony} id="testimony" className={`${isVisibleTestimony ? 'fade-in-up' : ''}`}>
          <Testimony />
        </section>

        <section ref={refContact} id="contact" className={`${isVisibleContact ? 'fade-in-up' : ''}`}>
          <Contact />
        </section> 

        <ToastContainer />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
