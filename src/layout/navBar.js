// Framework Imports
import React from "react";
import "./styles/navBar.css";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li className="NavBar-item">
          <a className="NavBar-item-link">DoS Trailer</a>
        </li>
        <li className="NavBar-item">
          <a className="NavBar-item-link">More Games</a>
          <ul className="NavBar-dropdown">
            <li className="NavBar-dropdown-item">Ball Bounce Blast</li>
            <li className="NavBar-dropdown-item">Ballistick</li>
            <li className="NavBar-dropdown-item">John Q Averageman</li>
          </ul>
        </li>
        <li className="NavBar-item">
          <a className="NavBar-item-link">Meet The Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
