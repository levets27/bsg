// Framework Imports
import React, { Component, Fragment } from "react";
import Modal from "./modal";
import Image from "./image";
// Component Styles
import "./styles/galleryItem.css";

class GalleryItem extends Component {
  state = {
    openModal: false
  };

  openModal = (e, isOpen) => {
    if (e.target === e.currentTarget) {
      this.setState({ openModal: isOpen });
    }
  };
  open = e => this.openModal(e, true);
  close = e => this.openModal(e, false);

  render() {
    const { image, showTitleThumb, showTitleLarge } = this.props;

    return (
      <Fragment>
        <button
          className="GalleryItem"
          onClick={this.open}
          style={{ maxWidth: this.props.maxWidth }}
        >
          <img
            className="GalleryItem-thumbnail"
            src={image.thumbnail}
            alt={!showTitleThumb ? image.title : ""}
          />
        </button>
        <Modal isOpen={this.state.openModal} handleClose={this.close}>
          <Image
            className="GalleryItem-content-image"
            src={image.large}
            placeholder={image.thumbnail}
            alt={!showTitleLarge ? image.title : ""}
          />
          {showTitleLarge && (
            <h3 className="GalleryItem-title">{image.title}</h3>
          )}
          {image.description && (
            <p className="GalleryItem-description">{image.description}</p>
          )}
        </Modal>
      </Fragment>
    );
  }
}

export default GalleryItem;
