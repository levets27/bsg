// Framework Imports
import React, { Component } from "react";
// Style Imports
import "styles/layout/backToTop.css";
// Image Imports
import diver from "images/layout/diver-swim.gif";

class BackToTop extends Component {
  state = {
    show: false,
    fadeClass: ""
  };
  componentWillReceiveProps(newProps) {
    // Check for the visible props
    if (!newProps.visible) return this.updateStyle(false); // Call outro animation when mounted prop is false
    this.setState({
      // Remount the node when the visible prop is true
      show: true
    });
    this.updateStyle(true); // Call the intro animation
  }
  updateStyle = shouldShow => {
    // Add styles for mount/unmount animation
    const fadeClass = shouldShow ? "fadeIn" : "fadeOut";
    this.setState({
      fadeClass: fadeClass
    });
  };

  transitionEnd() {
    if (!this.props.visible) {
      // Remove the node on transition end when the visible prop is false
      this.setState({
        show: false
      });
    }
  }
  goToTop = () => {
    console.log("go back");
  };
  render() {
    return (
      this.state.show && (
        <button
          className={`BackToTop ${this.state.fadeClass}`}
          onClick={this.goToTop}
        >
          &#8963;
          <span className="u-accessibleText">Back To Top</span>
          <img src={diver} className="BackToTop-image" alt="" />
        </button>
      )
    );
  }
}

export default BackToTop;
