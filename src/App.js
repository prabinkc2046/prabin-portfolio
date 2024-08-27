import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Repository from "./components/Repository/Repository";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {

  

  return (
    <>
    <Navbar />
    <div className="App animate-up">   
      <section id="personal-info">
          <PersonalInfo />
      </section>

      <section id="skills" className="animate-up">
        <Skills />
      </section>

      <section id="experience" className="animate-up">
        <Experience />
      </section>

      <section id="projects" className="animate-up">
          <Projects />
      </section>

      <section id="testimony" className="animate-up">
        <Testimony />
      </section>

      <section id="repositories" className="animate-up" >
       <Repository />
      </section>

      <section id="education" className="animate-up">
        <Education />
      </section>

      <section id="contact" className="animate-up">
          <Contact />
      </section> 

      <ToastContainer />
    </div>

    <footer>
      <Footer />
    </footer>

    </>
  );
}

export default App;
