// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/hero.css";
// Component Imports
import Image from "components/image";

class Hero extends Component {
  render() {
    return (
      <div
        className={`Hero ${
          this.props.fullscreen ? "Hero--fullscreen" : "Hero--banner"
        }`}
      >
        <Image src={this.props.imageSrc} placeholder={this.props.placeholder} />
        {this.props.children && (
          <div className="Hero-content">{this.props.children}</div>
        )}
      </div>
    );
  }
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullscreen: PropTypes.bool
};

Hero.defaultProps = {
  fullscreen: false
};

export default Hero;
