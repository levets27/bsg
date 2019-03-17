// Framework Imports
import React from "react";
// Style Imports
import "styles/layout/navBar.css";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li className="NavBar-item">
          <button type="button" className="NavBar-item-link">DoS Trailer</button>
        </li>
        <li className="NavBar-item">
          <button type="button" className="NavBar-item-link">More Games</button>
          <ul className="NavBar-dropdown">
            <li className="NavBar-dropdown-item">Ball Bounce Blast</li>
            <li className="NavBar-dropdown-item">Ballistick</li>
            <li className="NavBar-dropdown-item">John Q Averageman</li>
          </ul>
        </li>
        <li className="NavBar-item">
          <button type="button" className="NavBar-item-link">Meet The Team</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
