import React, { Component } from "react";
import AddVideo from "./addVideo";
import PlayList from "./playList";
import VideoPlayer from './videoPlayer';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="eight columns">
          <AddVideo />
          <VideoPlayer />
        </div>
        <div className='four columns'>
          <PlayList />
        </div>
      </div>
    );
  }
}

export default Main;
