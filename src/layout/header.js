// Framework Imports
import React from "react";
// Styles
import "./styles/header.css";
// Components
import Logo from "../global/components/logo";
import NavBar from "./navBar";

const Header = props => {
  return (
    <header className="Header">
      <div className="Header-logoWrap">
        <Logo />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
