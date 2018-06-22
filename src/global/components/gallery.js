// Framework Imports
import React, { Component } from "react";
// import LazyLoad from "react-lazyload";
// Component Imports
import GalleryItem from "./galleryItem";
// Component Styles
import "./styles/gallery.css";

class Gallery extends Component {
  static defaultProps = {
    itemMaxWidth: "300px"
  };
  render() {
    return (
      <div
        className="Gallery"
        // style={{ gridTemplateColumns: `repeat(${this.props.columns}, 1fr)` }}
      >
        {this.props.images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            maxWidth={this.props.itemMaxWidth}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
