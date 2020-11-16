import React, { useCallback, useContext } from "react";
import { MissingPersonContext } from "../context/MissingPersonContext";
import Accordion from "./Accordion";
import { validateFullRegisterInformation } from "../helpers/Validations";
import swal from "sweetalert";
import { registerMissingPerson } from "./api";
import { useHistory } from "react-router-dom";

const RegisterForm = (props) => {
  const history = useHistory();
  const { name, setName } = useContext(MissingPersonContext);
  const { surname, setSurname } = useContext(MissingPersonContext);
  const { identificationCard, setIdentificationCard } = useContext(
    MissingPersonContext
  );
  const { description, setDescription } = useContext(MissingPersonContext);
  const { location } = useContext(MissingPersonContext);
  const { imageUrl, setImageUrl } = useContext(MissingPersonContext);
  const { contact, setContact } = useContext(MissingPersonContext);
  const { email, setEmail } = useContext(MissingPersonContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendInformation = async () => {
    const information = {
      name,
      surname,
      location,
      identificationCard,
      imageUrl,
      contact,
      email,
      description,
    };
    console.log(information);
    if (
      validateFullRegisterInformation(
        name,
        surname,
        location,
        identificationCard,
        imageUrl,
        contact,
        email,
        description
      )
    ) {
      const information = {
        name,
        surname,
        location,
        identificationCard,
        imageUrl,
        contact,
        email,
        description,
      };
      await registerMissingPerson(information);
      swal(
        "Registro Exitoso",
        "Los administradores revisarán la información antes de hacerla pública en el mapa general",
        "success"
      );
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } else {
      swal(
        "Error",
        "Debes llenar todos los campos del formulario antes de efectuar el registro",
        "error"
      );
    }
  };

  const handleSetAge = useCallback(
    (event) => {
      if (event.target.value < 0) {
        setDescription({ ...description, age: 0 });
      } else {
        setDescription({ ...description, age: parseInt(event.target.value) });
      }
    },
    [description, setDescription]
  );

  const handleSetHeight = useCallback(
    (event) => {
      let height = event.target.value;

      if (height < 0 || height > 272) {
        setDescription({ ...description, height: 0 });
      } else {
        setDescription({ ...description, height: parseInt(height) });
      }
    },
    [description, setDescription]
  );

  return (
    <form className="register-form overlay-form" onSubmit={handleSubmit}>
      <h1 className="text-center text-bold text-light form-title font-poppins pt-3">
        Registro
      </h1>
      <div className="card-body">
        <Accordion title={"Información Básica"}>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins"
              placeholder="Nombre"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins"
              placeholder="Apellido"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins"
              placeholder="Identificación"
              value={identificationCard}
              onChange={(event) => {
                setIdentificationCard(event.target.value);
              }}
            />
          </div>
        </Accordion>
        <Accordion title={"Información de Contacto"}>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins"
              placeholder="Contacto (Teléfono)"
              value={contact}
              onChange={(event) => {
                setContact(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="color register-input font-poppins"
              placeholder="E-mail"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins"
              placeholder="URL Imagen"
              value={imageUrl}
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
            />
          </div>
        </Accordion>
        <Accordion title={"Descripción"}>
          <div className="row">
            <div className="form-group col-12 col-sm-6">
              <label htmlFor="edad" className="text-center text-light w-100 ">
                Edad
              </label>
              <input
                type="number"
                className="color register-input font-poppins "
                placeholder="Edad"
                name="edad"
                id="edad"
                min="0"
                max="120"
                value={description.age}
                onChange={handleSetAge}
                required
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label htmlFor="altura" className="text-center text-light w-100 ">
                Altura
              </label>
              <input
                type="number"
                id="altura"
                name="altura"
                className="color register-input font-poppins "
                placeholder="Altura (cm)"
                value={description.height}
                onChange={handleSetHeight}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <input
                type="text"
                className="color register-input font-poppins "
                placeholder="Color de Piel"
                value={description.skin}
                onChange={(event) =>
                  setDescription({ ...description, skin: event.target.value })
                }
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <input
                type="text"
                className="color register-input font-poppins "
                placeholder="Color de Pelo"
                value={description.hairColour}
                onChange={(event) =>
                  setDescription({
                    ...description,
                    hairColour: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins "
              placeholder="Complexión"
              value={description.complexion}
              onChange={(event) =>
                setDescription({
                  ...description,
                  complexion: event.target.value,
                })
              }
            />
          </div>
          <textarea
            placeholder="Descripción Detallada"
            className="color register-input font-poppins"
            value={description.detailed}
            onChange={(event) =>
              setDescription({
                ...description,
                detailed: event.target.value,
              })
            }
          ></textarea>
        </Accordion>
        <Accordion title={"Ubicación"}>
          <p className="text-center text-light">
            Para llenar estos campos selecciona una ubicación en el mapa. <br />
            Da click en el mapa en la última posición conocida de la persona.
          </p>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins "
              placeholder="País"
              value={location.country}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins "
              placeholder="Ciudad"
              value={location.city}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="color register-input font-poppins "
              placeholder="Barrio"
              value={location.neighborhood}
              disabled
            />
          </div>
          <div className="row">
            <div className="form-group col-12 col-sm-6">
              <label
                htmlFor="latitud"
                className="text-center text-light w-100 "
              >
                Latitud
              </label>
              <input
                type="text"
                className="color register-input font-poppins "
                placeholder="Color de Pelo"
                id="latitud"
                name="latitud"
                value={location.latitude}
                disabled
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label
                htmlFor="longitud"
                className="text-center text-light w-100 "
              >
                Longitud
              </label>
              <input
                type="text"
                id="longitud"
                name="longitud"
                className="color register-input font-poppins "
                placeholder="Color de Pelo"
                value={location.longitude}
                disabled
              />
            </div>
          </div>
        </Accordion>
        <button
          className="btn btn-block btn-light font-poppins"
          onClick={sendInformation}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
