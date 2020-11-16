import React, { useState, useRef } from "react";

import "./css/Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight * 3}px`
    );
  }

  return (
    <div className="accordion__section font-poppins">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
      </button>
      <div
        ref={content}
        style={{
          maxHeight: `${setHeight}`,
          padding: setActive === "active" ? "5em 0" : "0px",
        }}
        className="accordion__content px-5"
      >
        {props.children}
      </div>
    </div>
  );
}

export default Accordion;
