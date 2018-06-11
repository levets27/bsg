import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { colors, spacing } from "./global/style_vars.js";

import Header from "./layout/header.js";

const Paragraph = styled.p`
  background: ${colors.primary};
  color: ${colors.white};
  padding: ${spacing.md} ${spacing.xl};
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header titleText="Welcome to React" />
        <Paragraph>This is some new text</Paragraph>
      </Fragment>
    );
  }
}

export default App;
