import React, { Component } from "react";
import { connect } from "react-redux";
import { removeVideo } from "../actions";
import Shuffle from "./shuffle";
import Autoplay from "./autoplay";

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

function mapDispatchToProps(dispatch) {
  return {
    removeVideo: (video) => dispatch(removeVideo(video)),
  };
}

class PlayListComponent extends Component {
  constructor(props) {
    super(props);
    this.hanldeClick = this.hanldeClick.bind(this);
  }

  /**
   * 
   * @param {*} id -> id of the video to be deleted
   * 
   * Handling delete video button onClick event to delete video link
   * from the list.
   */
  hanldeClick(id) {
    this.props.removeVideo(id);
  }

  render() {
    const { playlist } = this.props.videos;
    return (
      <div style={{ margin: 25, textAlign: "center" }}>
        <h4>Playlist:</h4>
        <hr />
        <div>
          <Shuffle />
          <Autoplay />
        </div>
        <hr/>
        <ul>
          {playlist.map((el) => (
            <li key={el.id}>
              youtu.be/{el.link}
              <button
                style={{ border: 0, padding: 0, marginLeft: 10 }}
                onClick={() => this.hanldeClick(el.id)}
              >
                <img
                  src="https://icongr.am/entypo/trash.svg?size=20&color=currentColor"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const PlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayListComponent);

export default PlayList;
