// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/modal.css";
// Component Imports
import Portal from "components/portal";

class Modal extends Component {
  render() {
    return (
      <Portal isOpen={this.props.isOpen}>
        <div className={`Modal Modal--${this.props.type}`} onClick={this.props.handleClose}>
          <button className="Modal-close" onClick={this.props.handleClose}>
            Close
          </button>
          <div
            className="Modal-inner"
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
