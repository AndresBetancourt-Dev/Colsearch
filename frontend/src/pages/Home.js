import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-content">
            <h2 className="text-center text-white font-poppins hero-title display-4">
              En Colombia al Año desaparecen más de 3000 Personas{" "}
            </h2>
            <p className="text-white hero-text font-lato"></p>
            <Link
              to="/about"
              className="btn w-100 bg-light font-lato text-bold"
            >
              {" "}
              Aprende más{" "}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
