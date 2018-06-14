// Framework Imports
import React, { Component, Fragment } from "react";
// Component Styles
import "./app.css";
// Component Imports
import Header from "./layout/header";
import Hero from "./global/components/hero";
import Button from "./global/components/button";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header titleText="Welcome to React" />
        <Hero image="../assets/hero/dos-hero-main.png">
          <Button type="primary" href="#trailer">
            Watch Trailer
          </Button>
        </Hero>
      </Fragment>
    );
  }
}

export default App;
