// Framework Imports
import React, { Component, Fragment } from "react";
// import LazyLoad from "react-lazyload";
// Component Styles
import "./styles/galleryItem.css";

class GalleryItem extends Component {
  state = {
    isOpen: false
  };
  openLargeImage = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Fragment>
        <img
          className="GalleryItem-thumbnail"
          src={this.props.thumbnail}
          alt={this.props.title}
          onClick={this.toggleLarge}
        />
        {this.state.showLargeImage && (
          <Fragment>
            <div className="GalleryItem-veil" onClick={this.toggleLarge} />
            <div className="GalleryItem-large">
              <button
                className="GalleryItem-closeBtn"
                onClick={this.toggleLarge}
              >
                X
              </button>
              <img
                className="GalleryItem-largeImg"
                src={this.props.largeImg}
                alt={!this.props.showTitle && this.props.title}
              />
              {this.props.showTitle && (
                <h3 className="GalleryItem-title">{this.props.title}</h3>
              )}
              {this.props.description && (
                <p className="GalleryItem-description">
                  {this.props.description}
                </p>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default GalleryItem;
