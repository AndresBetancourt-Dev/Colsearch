import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginToggle from "./LoginToggle";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
      <LoginToggle />
    </React.Fragment>
  );
};

export default Layout;
