import React, { Component } from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import { removeTopVideo } from "../actions/index";

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

function mapDispatchToProps(dispatch) {
  return {
    removeTopVideo: (video) => dispatch(removeTopVideo(video)),
  };
}

class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      autoplay: false,
    };
  }

  handleChange(event) {
    if (event.target.getPlayerState() === -1 && this.props.videos.autoplay)
      event.target.playVideo();
  }

  handleEnd() {
    this.props.removeTopVideo();
  }

  render() {
    const opts = {
      height: "240",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const src = this.props.videos.playlist;

    if (src.length > 0) {
      return (
        <div style={{ margin: 25, textAlign: "center" }}>
          <Youtube
            opts={opts}
            onStateChange={this.handleChange}
            onEnd={this.handleEnd}
            videoId={src[0].link}
          />
        </div>
      );
    }

    return <h5 style={{ textAlign: "center" }}>List is empty</h5>;
  }
}

const VideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayerComponent);

export default VideoPlayer;
