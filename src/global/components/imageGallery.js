// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Component Imports
import ImageGalleryItem from "./imageGalleryItem";
// Component Styles
import "./styles/imageGallery.css";

class ImageGallery extends Component {
  render() {
    return (
      <div className="ImageGallery">
        {this.props.images.map((image, index) => (
          <ImageGalleryItem
            key={index}
            image={image}
            maxItemWidth={this.props.maxItemWidth}
            showModal={this.props.showModal}
            showTitleThumb={this.props.showTitleThumb}
            showTitleModal={this.props.showTitleModal}
          />
        ))}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  maxItemWidth: PropTypes.string,
  showModal: PropTypes.bool,
  showTitleThumb: PropTypes.bool,
  showTitleModal: PropTypes.bool
};

export default ImageGallery;
