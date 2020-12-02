import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import swal from "sweetalert";
import "./css/LoginToggle.css";

const LoginToggle = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    swal(
      "Te has desconectado correctamente!",
      "Para volver a ingresar digita nuevamente tus credenciales",
      "success"
    );
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };
  return (
    <div className="login-toggle">
      {userData.user ? (
        <>
          <button className="btn text-light font-poppins" onClick={logout}>
            Logout
          </button>
          <Link to="/admin" className="btn text-light font-poppins">
            Admin
          </Link>
        </>
      ) : (
        <Link to="/login" className="btn text-light font-poppins">
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginToggle;
