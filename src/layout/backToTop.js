// Framework Imports
import React, { Component } from "react";
// Style Imports
import "styles/layout/backToTop.css";
// Image Imports
import diver from "images/layout/diver-swim.gif";

class BackToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      show: false,
      fadeClass: ""
    };
  }

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

  transitionEnd = () => {
    if (!this.props.visible) {
      // Remove the node on transition end when the visible prop is false
      this.setState({
        show: false
      });
    }
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  };

  render() {
    return (
      this.state.show && (
        <nav className="BackToTop-wrap">
          <button
            className={`BackToTop ${this.state.fadeClass}`}
            onClick={this.scrollToTop}
          >
            &#8963;
            <span className="u-accessibleText">Back To Top</span>
            <img src={diver} className="BackToTop-image" alt="" />
          </button>
        </nav>
      )
    );
  }
}

BackToTop.defaultProps = {
  scrollStepInPx: 80,
  delayInMs: 16.66,
  scrollTarget: window,
  visible: false
};

export default BackToTop;
