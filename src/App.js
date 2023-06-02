import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Qualifications from "./pages/Qualifications";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function App() {
  const homepage = useRef();
  const projects = useRef();
  const skills = useRef();
  const contactme = useRef();
  const aboutme = useRef();
  const qualifications = useRef();
  const scrollHandler = (eleref) => {
    window.scrollTo({ top: eleref.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div>
      <Toaster />
      <NavBar
        scrollHandler={scrollHandler}
        homepage={homepage}
        aboutme={aboutme}
        projects={projects}
        skills={skills}
        contactme={contactme}
        qualifications={qualifications}
      />
      <HomePage
        homepage={homepage}
        scrollHandler={scrollHandler}
        contactme={contactme}
      />
      <AboutMe aboutme={aboutme} />
      <Skills skills={skills} />
      <Qualifications qualifications={qualifications} />
      <Projects projects={projects} />
      <ContactMe contactme={contactme} />
      <Footer
        scrollHandler={scrollHandler}
        homepage={homepage}
        projects={projects}
        skills={skills}
      />
      <BottomNav
        scrollHandler={scrollHandler}
        homepage={homepage}
        aboutme={aboutme}
        projects={projects}
        skills={skills}
        contactme={contactme}
        qualifications={qualifications}
      />
    </div>
  );
}

export default App;
