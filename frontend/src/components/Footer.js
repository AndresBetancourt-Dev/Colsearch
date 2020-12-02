import React from "react";
import "./css/Footer.css";
import logoMedicinaLegal from "../assets/images/medicina-legal-brand.png";
import logoPresidencia from "../assets/images/logo_presidencia.png";
import todosPorUnNuevoPais from "../assets/images/todos-por-nuevo-pais.png";

const Footer = (props) => {
  return (
    <footer className="footer p-5" id="contact">
      <div className="row">
        <div className="col-12 col-md-4 footer-contact my-5  text-white font-poppins">
          <h2 className="my-3">Contacto</h2>

          <ul className="list-unstyled">
            <li>
              <strong>Dirección : </strong>Calle 7A No. 12A-51, Bogotá, Colombia
            </li>
            <li>
              <strong>Teléfonos : </strong>PBX (571) 406 9944 ó (571) 406 9977
            </li>
            <li>
              <strong>Línea Nacional : </strong>018000-914862
            </li>
            <li>
              <strong>Línea Nacional : </strong>018000-113263
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4  text-white font-poppins footer-text">
          Entidades intervinientes en Colsearch:
          <ul>
            <li>
              Las conformantes de la Comisión Nacional de Búsqueda de Personas
              Desaparecidas.
            </li>
            <li>
              {" "}
              Las que cumplen funciones de policía judicial. Las entidades
              autorizadas para el registro de personas reportadas como
              desaparecidas.
            </li>
            <li>
              Las demás que puedan aportar información relativa a la
              identificación de personas y a la investigación del delito de
              desaparición forzada.
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4  footer-entities">
          <h2 className="my-3 font-poppins text-white">Entidades</h2>
          <div className="footer-entities-grid">
            <div className="footer-entity">
              <img
                src={logoPresidencia}
                alt="Logo Presidencia de la República"
              />
            </div>
            <div className="footer-entity">
              <img
                src={todosPorUnNuevoPais}
                alt="Logo Todos por un nuevo país"
              />
            </div>
            <div className="footer-entity">
              <img src={logoMedicinaLegal} alt="Logo Medicina Legal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
