// Framework Imports
import React, { Component, Fragment } from "react";
import { Typing } from "react-typing";
// Style Imports
import "styles/components/typedContent.css";

class TypedContent extends Component {
  state = {
    removeCursor: false
  };
  handleOnDone = () => {
    if (this.props.removeCursor) {
      this.setState({ removeCursor: true });
    }
    this.props.onDone();
  };
  render() {
    return (
      <Fragment>
        {this.props.play && (
          <div
            className={`TypedContent ${
              this.state.removeCursor ? "TypedContent--removeCursor" : ""
            }`}
          >
            {this.props.play && (
              <Typing keyDelay={50} onDone={this.handleOnDone}>
                {this.props.children}
              </Typing>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}
TypedContent.defaultProps = {
  onDone: () => {}
};
export default TypedContent;
