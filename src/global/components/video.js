import React, { Component, Fragment } from "react";
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
    const autoplayParam = this.props.autoplay ? "?autoplay=1" : "";
    const WrapperEl = this.props.showTitle ? "div" : "h2";
    const title = this.props.showTitle && (
      <h2 className="Video-title">{this.props.title}</h2>
    );

    return (
      <Fragment>
        {title}
        {this.state.play ? (
          <WrapperEl className="Video">
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
          <button className="Video" onClick={this.playVideo}>
            <WrapperEl className="Video-placeholder">
              <img
                className="Video-placeholderImg"
                src={this.props.placeholderImg}
                alt={!this.props.showTitle ? this.props.title : ""}
              />
            </WrapperEl>
          </button>
        )}
      </Fragment>
    );
  }
}

Video.propTypes = {
  autoplay: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  placeholderImg: PropTypes.string,
  id: PropTypes.string
};

export default Video;
