import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import './styles/common.css';

// Import your components
import Navbar from "./components/Layout/Navbar/Navbar";
import ListSkills from "./components/SkillSection/ListSkills/ListSkills";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Repository from "./components/Repository/Repository";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Layout/Footer/Footer";
// Import VisibilitySensor from react-visibility-sensor
import VisibilitySensor from 'react-visibility-sensor';
import ProjectList from "./components/ProjectSection/ProjectList/ProjectList";
function App() {
 
  return (
  
    <>
      <Navbar />
      <div className="App">   
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="personal-info">
              <PersonalInfo />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="skills">
              <ListSkills />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="experience">
              <Experience />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="projects">
              <ProjectList />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="repositories">
              <Repository />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="education">
              <Education />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="testimony">
              <Testimony />
            </section>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <section className={`${isVisible ? 'fade-in-up' : ''}`} id="contact">
              <Contact />
            </section>
          )}
        </VisibilitySensor>

        <ToastContainer />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
