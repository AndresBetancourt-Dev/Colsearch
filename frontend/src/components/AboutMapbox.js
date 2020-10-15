import React from "react";
import mapboxMap from "../assets/images/mapa.jpg";

const AboutMapbox = () => {
  return (
    <div className="about-item about-mapbox text-light">
      <div className="about-mapbox-content">
        <h2 className="about-title font-poppins">Mapbox</h2>
        <p className="about-text font-poppins">
          Mapbox permite agregar funciones de ubicación como mapas y navegación.
        </p>
      </div>
      <div className="about-mapbox-image">
        <img src={mapboxMap} alt="Mapbox" />
      </div>
    </div>
  );
};

export default AboutMapbox;
