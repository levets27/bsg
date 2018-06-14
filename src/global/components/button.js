// Framework Imports
import React from "react";
// Styles
import "./styles/button.css";

const Button = props => {
  const ButtonEl = props.href ? "a" : "button";
  return (
    <ButtonEl
      onClick={props.onClick}
      href={props.href}
      className={`Button Button-size--${props.size} Button-color--${
        props.type
      }`}
    >
      {props.children}
    </ButtonEl>
  );
};

Button.defaultProps = {
  size: "medium",
  type: "primary"
};

export default Button;
