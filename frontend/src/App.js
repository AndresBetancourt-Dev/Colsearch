import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
      </Layout>
    </Router>
  );
}

export default App;