// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Styles
import "./styles/hero.css";

const Hero = props => {
  return (
    <div
      className="Hero"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    >
      {props.children}
    </div>
  );
};

Hero.defaultProps = {
  image: null
};

// todo - add .isRequired
Hero.propTypes = {
  image: PropTypes.string
};

export default Hero;
