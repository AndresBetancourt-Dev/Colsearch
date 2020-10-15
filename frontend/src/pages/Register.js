import React from "react";
import "./css/Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "",
        identification: "",
        description: "",
      },
    };
  }

  render() {
    return (
      <>
        <div className="register">
          <div className="register-item">
            <form className="register-form overlay-form">
              <div className="card-body">
                <div className="form-group">
                  <h1 className="text-center text-bold text-light form-title font-poppins">
                    Registro
                  </h1>
                  <div className="d-flex justify-content-center"></div>
                  <input
                    type="text "
                    className="color py-2 register-input mt-4 font-poppins my-3"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="color py-2 register-input font-poppins my-3"
                    placeholder="Identificación"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="color py-2 register-input font-poppins my-3"
                    placeholder="Descripción"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="color py-2 register-input font-poppins my-3"
                    placeholder="Ubicación"
                  />
                </div>
                <button className="btn btn-block btn-light font-poppins">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="register-item">
            <img src="./images/mapa.png" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Register;
