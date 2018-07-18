// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/contentPanel.css";

const ContentPanel = props => {
  return (
    <div className="ContentPanel">
      <img
        className="ContentPanel-image"
        src={props.image}
        alt={props.imageAlt}
      />
      <div className="ContentPanel-content">{props.children}</div>
    </div>
  );
};
ContentPanel.propTypes = {
  image: PropTypes.node.isRequired,
  imageAlt: PropTypes.string
};
ContentPanel.defaultProps = {
  imageAlt: ""
};

export default ContentPanel;
