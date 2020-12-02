import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Error from "../error/Error";
import LoginPage from "../pages/Login";

const Login = (props) => {
  const { userData } = useContext(UserContext);
  if (!userData.user) {
    return <LoginPage />;
  } else {
    return <Error errorMessage="Usted ya ha sido autenticado." />;
  }
};

export default Login;
