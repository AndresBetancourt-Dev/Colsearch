import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./css/Register.css";
import { MissingPersonProvider } from "../context/MissingPersonContext";
import MapRegister from "../components/MapRegister";

const Register = (props) => {
  return (
    <MissingPersonProvider>
      <div className="register">
        <div className="register-item register-form-container">
          <RegisterForm />
        </div>
        <div className="register-item register-map">
          <MapRegister />
        </div>
      </div>
    </MissingPersonProvider>
  );
};

export default Register;
