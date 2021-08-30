import React from "react";

import clas from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={clas.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >{props.children}
    </button>
  );
};

export default Button;
