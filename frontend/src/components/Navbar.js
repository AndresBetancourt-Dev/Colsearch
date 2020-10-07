import React from "react";
import "./css/Navbar.css";
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
<header class="container-fluid header">
<div class="container">
<nav class="navbar navbar-expand-lg navbar-dark font-poppins">
<a class="navbar-brand" href="index.html"> <img src="./images/colsearch-new-logo.png" alt="Colsearch Logo"
              width="75px" height="50px"/> </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link active" href="#header">Home<span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link " href="#about">Nosotros</a>
              <a class="nav-item nav-link" href="../Mapa/index.html">Mapa</a>
              <a class="nav-item nav-link" href="../Registro/index.html">Registro</a>
              <a class="nav-item nav-link" href="#contact">Contacto</a>
            </div>
          </div>
         </nav>
      </div>

  </header>
  );
}

export default Navbar;