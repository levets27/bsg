import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "react-app-rewire-styled-components";
import { colors } from "./global/style_vars.js";

const Paragraph = styled.p`
  background: ${colors.primary};
  text: ${colors.white};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Paragraph>This is some new text</Paragraph>
      </div>
    );
  }
}

export default styled(App);
