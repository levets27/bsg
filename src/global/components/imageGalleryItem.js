// Framework Imports
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Modal from "./modal";
import Image from "./image";
// Component Styles
import "./styles/imageGalleryItem.css";

class ImageGalleryItem extends Component {
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
    // todo - add error if image.src doesn't exist
    const {
      image,
      maxItemWidth,
      showTitleThumb,
      showTitleModal,
      showModal
    } = this.props;

    const ItemEl = image.href === null ? "button" : "a";
    const thumbnail = image.thumbnail ? image.thumbnail : image.src;

    return (
      <Fragment>
        <ItemEl
          className="ImageGalleryItem"
          href={image.href}
          onClick={showModal ? this.open : null}
          style={{
            maxWidth: maxItemWidth
          }}
        >
          <img
            className="ImageGalleryItem-thumbnail"
            src={thumbnail}
            alt={!showTitleThumb ? image.title : ""}
          />
          {showTitleThumb && (
            <p className="ImageGalleryItem-title">{image.title}</p>
          )}
        </ItemEl>
        {this.showModal && (
          <Modal isOpen={this.state.openModal} handleClose={this.close}>
            <Image
              className="ImageGalleryItem-modal-image"
              src={image.src}
              placeholder={thumbnail}
              alt={!showTitleModal ? image.title : ""}
            />
            {showTitleModal && (
              <h3 className="ImageGalleryItem-modal-title">{image.title}</h3>
            )}
            {image.description && (
              <p className="ImageGalleryItem-modal-description">
                {image.description}
              </p>
            )}
          </Modal>
        )}
      </Fragment>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  maxItemWidth: PropTypes.string,
  showModal: PropTypes.bool,
  showTitleThumb: PropTypes.bool,
  showTitleModal: PropTypes.bool
};

ImageGalleryItem.defaultProps = {
  maxItemWidth: "300px"
};

export default ImageGalleryItem;
