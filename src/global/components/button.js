// Framework Imports
import React from "react";
// Styles
import "./styles/button.css";

const Button = props => {
  const ButtonEl = this.props.href ? "a" : "button";
  return (
    <ButtonEl onClick={this.props.onClick} href={this.props.href}>
      {this.props.children}
    </ButtonEl>
  );
};

export default Button;
