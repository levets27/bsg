// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import Portal from "./portal";
// Component Styles
import "./styles/modal.css";

class Modal extends Component {
  render() {
    return (
      <Portal isOpen={this.props.isOpen}>
        <div className="Modal-veil" onClick={this.props.handleClose}>
          <button className="Modal-close" onClick={this.props.handleClose}>
            Close
          </button>
          <div
            className={`Modal-content ${this.props.hasBackground &&
              "has-background"}`}
          >
            {this.props.children}
          </div>
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool
};
Modal.defaultProps = {
  isOpen: false,
  handleClose() {}
};

export default Modal;
