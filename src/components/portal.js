// Framework Imports
import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default class Portal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  };
  static defaultProps = { isOpen: false };

  constructor(props) {
    super(props);

    this.portalTarget = document.getElementById("modal-root");
  }

  render() {
    if (this.props.isOpen) {
      if (typeof window !== "undefined" && this.portalTarget !== null) {
        return createPortal(this.props.children, this.portalTarget);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
