// Framework Imports
import React, { Component, Fragment } from "react";
// import LazyLoad from "react-lazyload";
// Component Imports
import GalleryItem from "./galleryItem";
// Component Styles
import "./styles/gallery.css";
// Images
import dosHeroImg from "./images/dos-hero.png";
import dosLogo from "./images/dos-logo-color.png";
import dosVidPlaceholder from "./images/dos-video-placeholder.png";

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        {this.props.images.map(image => {
          return <GalleryItem image={image} />;
        })}
      </div>
    );
  }
}

export default Gallery;
