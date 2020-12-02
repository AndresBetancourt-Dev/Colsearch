import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { API_URL } from "./components/api";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import MapSearch from "./components/MapSearch";
import Login from "./auth/Login";
import Error from "./error/Error";
import Admin from "./auth/Admin";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoginStatus = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const response = await Axios.post(`${API_URL}users/validToken`, null, {
        headers: { "x-auth-token": token },
      });
      if (response.data) {
        const { data } = await Axios.get(`${API_URL}users/getUser`, {
          headers: { "x-auth-token": token },
        });

        setUserData({ token, user: data });
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/nosotros" component={About} />
            <Route exact path="/mapa" component={MapSearch} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route component={Error} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
