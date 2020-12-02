import React, { useState } from "react";
import { useEffect } from "react";
import { login } from "../components/api";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { setWindowTop } from "../helpers/Window";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";
import "./css/Login.css";
import { useContext } from "react";

const LoginPage = (props) => {
  const { setUserData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(username, password);
    if (response) {
      localStorage.setItem("auth-token", response.data.token);
      setUserData({
        token: response.data.token,
        user: response.data.user,
      });
      swal("Felicidades", "Has ingresado exitosamente al sistema", "success");

      setTimeout(() => {
        history.push("/");
      }, 1000);
    } else {
      swal("Error", "Has ingresado credenciales inválidas", "error");
    }
  };

  useEffect(() => {
    setWindowTop();
  }, []);

  return (
    <div className="login-container">
      <form className="p-3 login-form p-5">
        <h2>
          <strong className="text-light font-poppins">Login</strong>
        </h2>
        <div className="form-group my-4">
          <input
            className="login-input  w-100"
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <input
            className="login-input w-100"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Button type="submit" onClick={handleSubmit} text={"Entrar"} />
      </form>
    </div>
  );
};

export default LoginPage;
