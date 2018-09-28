// Framework Imports
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/imageGalleryItem.css";
// Component Imports
import Modal from "components/modal";
import Image from "components/image";

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
    const { image, showTitleThumb, showTitleModal, showModal } = this.props;

    const ItemEl = image.href ? "a" : "button";
    const thumbnail = image.thumbnail ? image.thumbnail : image.src;
    const imgAlt = image.title ? image.title : "Screenshot";
    const thumbAlt = showModal
      ? "Enlarge Screenshot"
      : showTitleThumb
        ? imgAlt
        : "";

    return (
      <Fragment>
        <ItemEl
          className="ImageGalleryItem"
          href={image.href}
          onClick={showModal ? this.open : null}
        >
          <img
            className="ImageGalleryItem-thumbnail"
            src={thumbnail}
            alt={thumbAlt}
          />
          {showTitleThumb && (
            <p className="ImageGalleryItem-title">{image.title}</p>
          )}
        </ItemEl>
        {showModal && (
          <Modal
            isOpen={this.state.openModal}
            handleClose={this.close}
            type="image"
          >
            <Image
              className="ImageGalleryItem-modal-image"
              src={image.src}
              placeholder={thumbnail}
              alt={!showTitleModal ? imgAlt : ""}
            />
            {(image.description || (image.showTitleModal && image.title)) && (
              <div className="Modal-inner-description">
                {showTitleModal && <h3>{image.title}</h3>}
                {image.description && <p>{image.description}</p>}
              </div>
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

export default ImageGalleryItem;
