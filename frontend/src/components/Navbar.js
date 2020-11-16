import React from "react";
import "./css/Navbar.css";
import colsearchLogo from "../assets/images/colsearch-logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="container-fluid header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark font-poppins">
          <Link className="navbar-brand" to="/">
            {" "}
            <img
              src={colsearchLogo}
              alt="Colsearch Logo"
              width="75px"
              height="50px"
            />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link " to="/about">
                Nosotros
              </Link>
              <Link className="nav-item nav-link" to="/map">
                Mapa
              </Link>
              <Link className="nav-item nav-link" to="/register">
                Registro
              </Link>
              <a className="nav-item nav-link" href="#contact">
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
