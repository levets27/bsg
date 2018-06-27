// Framework Imports
import React, { Component, Fragment } from "react";
import diver from "../images/layout/diver-swim.gif";
// Component Styles
import "./styles/backToTop.css";

class BackToTop extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("scroll");
    this.setState({
      visible: true
    });
  };
  goToTop = () => {
    console.log("go back");
  };
  render() {
    return (
      <Fragment>
        {this.props.visible && (
          <button className="BackToTop" onClick={this.goToTop}>
            &#8963;
            <span className="u-accessibleText">Back To Top</span>
            <img src={diver} className="BackToTop-img" alt="" />
          </button>
        )}
      </Fragment>
    );
  }
}

export default BackToTop;
