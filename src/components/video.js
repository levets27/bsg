// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
// Style Imports
import "styles/components/video.css";
// Image Imports
import playBtn from "images/video/play-btn.svg";
// Component Imports
import Image from "components/image";

class Video extends Component {
  state = {
    play: false
  };
  playVideo = () => {
    this.setState({
      play: true
    });
  };
  render() {
    const autoplayParam = this.props.autoplay ? "?autoplay=1" : "";
    const WrapperEl = this.props.showTitle ? "div" : "h2";
    const title = this.props.showTitle && (
      <h2 className="Video-title">{this.props.title}</h2>
    );

    return (
      <section className="Video">
        {title}
        {this.state.play ? (
          <WrapperEl className="Video-wrapper">
            <iframe
              title={this.props.title}
              className="Video-frame"
              src={`https://www.youtube.com/embed/${
                this.props.id
              }${autoplayParam}`}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            />
          </WrapperEl>
        ) : (
          <button className="Video-wrapper" onClick={this.playVideo}>
            <WrapperEl className="Video-placeholder">
              <Image
                className="Video-placeholderImg"
                src={this.props.previewImage}
                placeholder={this.props.placeholderImage}
                alt={!this.props.showTitle ? this.props.title : ""}
              />
              <img className="Video-playBtn" src={playBtn} alt="Play Video" />
            </WrapperEl>
          </button>
        )}
      </section>
    );
  }
}

Video.propTypes = {
  autoplay: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  previewImage: PropTypes.string,
  id: PropTypes.string
};

export default Video;
