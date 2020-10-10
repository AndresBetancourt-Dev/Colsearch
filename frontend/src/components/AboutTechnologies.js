import React from "react";

import reactLogo from "../assets/images/react.png";
import nodeJSLogo from "../assets/images/nodejs.png";
import expressLogo from "../assets/images/express.png";
import mongoDBLogo from "../assets/images/mongodb.png";

const AboutTechnologies = () => {
  return (
    <div className="about-item about-technologies text-light">
      <h2 className="about-title font-poppins">Tecnologías</h2>
      <div className="about-text font-poppins">
        Esta app esta construida en su totalidad usando el Lenguaje de
        Programación Javascript.
        <ul>
          <li className="about-text font-poppins"> MongoDB</li>
          <li className="about-text font-poppins"> React.js </li>
          <li className="about-text font-poppins">Node.js</li>
          <li className="about-text font-poppins">Express.js </li>
        </ul>
      </div>
      <div className="about-tech-stack">
        <div className="about-tech-image">
          <img src={mongoDBLogo} alt="MongoDB" />
        </div>
        <div className="about-tech-image">
          <img src={expressLogo} alt="Express.js" />
        </div>
        <div className="about-tech-image">
          <img src={reactLogo} alt="React.js" id="react" />
        </div>
        <div className="about-tech-image">
          <img src={nodeJSLogo} alt="Node.js" />
        </div>
      </div>
    </div>
  );
};

export default AboutTechnologies;
