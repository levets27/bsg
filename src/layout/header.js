// Framework Imports
import React from "react";
// Style Imports
import "styles/layout/header.css";
// ComponentI Imports
import Logo from "components/logo";
import NavBar from "layout/navBar";

const Header = props => {
  return (
    <header className="Header">
      <div className="Header-logoWrap">
        <Logo />
      </div>
      {props.showNav && <NavBar />}
    </header>
  );
};

export default Header;
