// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Styles
import "./styles/hero.css";

const Hero = props => {
  const image = props.fullscreen ? (
    <div
      className="Hero-image Hero-image--fullscreen"
      style={{ backgroundImage: `url('${props.image}')` }}
    />
  ) : (
    <img className="Hero-image" src={props.image} alt="" />
  );
  return (
    <div
      className={`Hero ${
        props.fullscreen ? "Hero--fullscreen" : "Hero--banner"
      }`}
      style={{ height: props.fullscreen ? null : props.height && props.height }}
    >
      {image}
      {props.children && <div className="Hero-content">{props.children}</div>}
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  fullscreen: PropTypes.bool,
  height: PropTypes.string
};

export default Hero;
