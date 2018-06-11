// Framework Imports
import React from "react";
// Styles
import "./styles/header.scss";
// Assets
import logo from "../assets/logo/BSG_bar_white.svg";
// Components
import NavBar from "./navBar";

const Header = props => {
  return (
    <header className="Header">
      <div className="LogoWrap">
        <img className="Logo" src={logo} alt="Bomb Shelter Games" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
