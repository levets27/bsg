// Framework Imports
import React, { Fragment } from "react";
// Styles
import "./styles/hero.css";

const Hero = props => {
  return (
    <Fragment>
      <div
        className="Hero"
        style={{ backgroundImage: "url('" + props.image + "')" }}
      />
      {props.children && (
        <div className="Hero-content">
          <div className="Hero-content-inner">{props.children}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Hero;
