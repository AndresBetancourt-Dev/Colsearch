import React from "react";
import "./css/Error.css";
import colsearchLogo from "../assets/images/colsearch-logo.png";
import Button from "../components/Button";
import { useEffect } from "react";

const Error = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="text-light error">
      <div className="error-content">
        <div className="error-image">
          <img src={colsearchLogo} alt="Colsearch Logo" />
        </div>
        <div className="error-message">
          {props.errorMessage || "¡Ups! Lo sentimos, esta página no existe."}
        </div>
        <Button to="/" text={"Home"} />
      </div>
    </div>
  );
};

export default Error;
