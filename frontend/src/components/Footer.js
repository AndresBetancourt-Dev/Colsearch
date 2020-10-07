import React from "react";
import "./css/Footer.css";
import {Link} from "react-router-dom";


const Footer = (props) => {
    return (
        <footer class="footer p-5" id="contact">

        <div class="row">
        <div class="col-12 col-md-4 footer-contact my-5  text-white font-poppins">
         <h2 class="my-3">Contacto</h2>

             <ul class="list-unstyled">
          <li><strong>Dirección : </strong>Calle 7A No. 12A-51, Bogotá, Colombia</li>
          <li><strong>Teléfonos : </strong>PBX (571) 406 9944 ó (571) 406 9977
          </li>
          <li><strong>Línea Nacional : </strong>018000-914862</li>
          <li><strong>Línea Nacional : </strong>018000-113263</li>
         </ul>
        </div>
            <div class="col-12 col-md-4  text-white font-poppins footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repudiandae quas? Pariatur commodi, voluptas quod
            iure eaque vel repellendus ullam excepturi consequuntur voluptates totam, optio odio corporis laboriosam
            molestias officiis.
         </div>

         <div class="col-12 col-md-4  footer-entities">
         <h2 class="my-3 font-poppins text-white">Entidades</h2>
         <div class="footer-entities-grid">
         

         </div>
         
         </div>
    </div>

            

       

        </footer>
    
    
    
    
    )   
    }


export default Footer;