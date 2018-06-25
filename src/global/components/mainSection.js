// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Component Styles
import "./styles/mainSection.css";
import headerImg from "../../images/dividers/header.png";
import footerImg from "../../images/dividers/footer.png";

const MainSection = props => {
  const showDividers = props.alt && props.showDividers;
  return (
    <section
      className={`MainSection${props.alt ? " MainSection--alt" : ""}`}
      id={props.id}
    >
      {showDividers && (
        <img className="MainSection-headerImg" alt="" src={headerImg} />
      )}
      {props.children}
      {showDividers && (
        <img className="MainSection-footerImg" alt="" src={footerImg} />
      )}
    </section>
  );
};

MainSection.defaultProps = {
  alt: false,
  hasDividers: false
};

MainSection.propTypes = {
  alt: PropTypes.bool,
  hasDividers: PropTypes.bool
};

export default MainSection;
