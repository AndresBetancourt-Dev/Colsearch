import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Error from "../error/Error";
import AdminPage from "../pages/Admin";

const Admin = () => {
  const { userData } = useContext(UserContext);
  if (userData.user) {
    return <AdminPage />;
  } else {
    return <Error />;
  }
};

export default Admin;
