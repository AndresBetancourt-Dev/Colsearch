import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import MapSearch from "./components/MapSearch";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/map" component={MapSearch} />
        <Route exact path="/register" component={Register} />
      </Layout>
    </Router>
  );
}

export default App;
