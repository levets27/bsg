// Framework Imports
import React from "react";
// Style Imports
import "styles/components/button.css";

const Button = props => {
  const { href, onClick, size, type, children, ...other } = props;
  const ButtonEl = href ? "a" : "button";
  return (
    <ButtonEl
      onClick={onClick}
      href={href}
      className={`Button Button-size--${size} Button-color--${type}`}
      {...other}
    >
      {children}
    </ButtonEl>
  );
};

Button.defaultProps = {
  size: "medium",
  type: "primary"
};

export default Button;
