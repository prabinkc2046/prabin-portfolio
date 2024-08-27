import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Repository from "./components/Repository/Repository";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";

function App() {

  

  return (
    <>
   
    <div className="App">   
    <Navbar />
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

      <section id="testimony">
        <Testimony />
      </section>

      <section id="repositories" >
       <Repository />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
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
