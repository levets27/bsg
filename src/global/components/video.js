import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles/video.css";

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
    const autoplay = this.props.autoplay ? "?autoplay=1" : "";
    let videoEl;
    if (this.state.play) {
      videoEl = (
        <h2 className="Video">
          <iframe
            title={this.props.title}
            className="Video-frame"
            src={`https://www.youtube.com/embed/${this.props.id}${autoplay}`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
        </h2>
      );
    } else {
      videoEl = (
        <button className="Video" onClick={this.playVideo}>
          <h2 className="Video-placeholder">
            <img
              className="Video-placeholderImg"
              src={this.props.placeholderImg}
              alt={this.props.title}
            />
          </h2>
        </button>
      );
    }
    return videoEl;
  }
}

Video.propTypes = {
  videoTitle: PropTypes.string,
  autoplay: PropTypes.bool,
  placeholderImg: PropTypes.node,
  title: PropTypes.string
};

export default Video;
