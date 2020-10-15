import React from "react";
import "./css/About.css";

import AboutColsearch from "../components/AboutColsearch";
import AboutMapbox from "../components/AboutMapbox";
import AboutTechnologies from "../components/AboutTechnologies";

const About = () => {
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
