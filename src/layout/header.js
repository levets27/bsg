import React from "react";
import { colors, spacing } from "../global/style_vars.js";
import logo from "../assets/logo/BSG_bar_white.svg";
import styled from "styled-components";

const HeaderEl = styled.header`
  padding: ${spacing.lg};
  background: ${colors.black};
  color: ${colors.white};
  text-align: center;
`;
const Logo = styled.img`
  height: 80px;
`;
const Header = props => {
  return (
    <HeaderEl>
      <Logo src={logo} alt="logo" />
      <h1 className="App-title">{props.titleText}</h1>
    </HeaderEl>
  );
};

export default Header;
