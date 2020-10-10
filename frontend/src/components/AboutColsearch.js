import React from "react";

const AboutColsearch = () => {
  return (
    <div className="about-item about-colsearch text-light">
      <h2 className="about-title font-poppins">Colsearch</h2>
      <div className="about-text font-poppins">
        <h3 className="text-center  font-poppins"> ¿Qué problema soluciona?</h3>

        <div className="p-3 font-poppins">
          Ayuda con la problemática de las personas desaparecidas, para que sus
          seres queridos y amigos puedan saber el último paradero de la persona
          que buscan, la última vez donde fueron vistos y detalles que indiquen
          pistas sobre su paradero a los demás para ayudar en la búsqueda. Hacer
          viral a la persona desaparecida para que sea más fácil localizarla por
          medio de la aplicación e integración con redes sociales.
        </div>

        <h3 className="text-center  font-poppins"> ¿Qué hace?</h3>

        <div className="p-3  font-poppins">
          <ul>
            <li> Búsqueda de personas desaparecidas.</li>
            <li>
              Visualización de información y última posición conocida mediante
              el uso de mapas.
            </li>
            <li> Registro y autenticación de personas desaparecidas.</li>
            <li>Difusión de datos de la persona desaparecida.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutColsearch;
