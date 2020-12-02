import React from "react";
import "./css/About.css";
import { setWindowTop } from "../helpers/Window";
import AboutColsearch from "../components/AboutColsearch";
import AboutMapbox from "../components/AboutMapbox";
import AboutTechnologies from "../components/AboutTechnologies";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    setWindowTop();
  }, []);
  return (
    <React.Fragment>
      <section className="about" id="about">
        <div className="about-container">
          <AboutColsearch />
          <AboutMapbox />
          <AboutTechnologies />
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
