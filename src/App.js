import React, { Component, Fragment } from "react";
import "./app.css";

import Header from "./layout/header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header titleText="Welcome to React" />
        <p className="App-p">This is some new text</p>
      </Fragment>
    );
  }
}

export default App;
