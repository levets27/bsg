// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Component Styles
import "./styles/mainSection.css";
import headerImg from "../../images/dividers/header.png";
import footerImg from "../../images/dividers/footer.png";

const MainSection = props => {
  const showTopDivider = props.showTopDivider;
  const showBottomDivider = props.showBottomDivider;
  const cssClasses = `MainSection${props.alt ? " MainSection--alt" : ""}${
    props.fadeIn ? " MainSection--fadeIn" : ""
  }${props.fadeBg ? " MainSection--fadeBg" : ""}`;
  return (
    <section className={cssClasses} id={props.id}>
      {showTopDivider && (
        <img className="MainSection-headerImg" alt="" src={headerImg} />
      )}
      {props.children}
      {showBottomDivider && (
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
