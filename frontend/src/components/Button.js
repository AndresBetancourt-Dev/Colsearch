import React from "react";
import { Link } from "react-router-dom";
import "./css/Button.css";

const Button = ({ text, to, onClick, inverted, ...rest }) => {
  if (!to) {
    return (
      <button
        className={`btn w-100 font-poppins ${
          inverted ? "button-inverted" : "button"
        } `}
        onClick={onClick}
        {...rest}
      >
        {text}
      </button>
    );
  }
  return (
    <Link to={to} className="btn w-100 font-poppins button" {...rest}>
      {text}
    </Link>
  );
};

export default Button;
