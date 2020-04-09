import React from "react";
import "./Wrapper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../section/About";
import Projects from "../section/Projects";
import ContactInfo from "../section/ContactInfo";
import "../section/section.css";
import "../../App.css";
import Skills from "../section/Skills";
import Education from "../section/Education";
import Work from "../section/Work";

function Wrapper() {
  return (
    <div className="container sections-wrapper">
      <div className="row">
        <div className="primary col-lg-8 col-12">
          <About />
          <Projects />
        </div>
        <div className="secondary col-lg-4 col-12">
          <Skills />
          <Education />
          <Work />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
