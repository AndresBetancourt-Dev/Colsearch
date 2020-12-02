import React from "react";
import { useEffect } from "react";
import { setWindowTop } from "../helpers/Window";
import Button from "../components/Button";
import "./css/Home.css";

const Home = (props) => {
  useEffect(() => {
    setWindowTop();
  }, []);
  return (
    <React.Fragment>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-content">
            <h2
              className="text-center text-white font-poppins text-bold hero-title"
              style={{ fontWeight: 400 }}
            >
              En Colombia al Año desaparecen más de 3000 Personas{" "}
            </h2>
            <Button to="/nosotros" text={"Aprende Más"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
