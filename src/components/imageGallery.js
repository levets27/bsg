// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/imageGallery.css";
// Component Imports
import ImageGalleryItem from "components/imageGalleryItem";

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
ImageGallery.defaultProps = {
  showModal: false,
  showTitleThumb: false,
  showTitleModal: false
};

export default ImageGallery;
