import React, { Component } from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import { removeTopVideo } from '../actions/index'

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
  }

  handleEnd() {
    console.log("Video Ended");
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

    if(src.length > 0) {
      return (
        <div style={{ margin: 25, textAlign: "center" }}>
          <Youtube
            opts={opts}
            onEnd={this.handleEnd}
            videoId={src[0].link}
          />
        </div>
      );
    }

    return (<p>List is empty</p>);
  }
}

const VideoPlayer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);

export default VideoPlayer;
