import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

class PlayListComponent extends Component {
  render() {
    const { playlist } = this.props.videos;
    return (
      <div style={{ margin: 25, textAlign: "center" }}>
        <h4>PlayList:</h4>
        <ul>
          {playlist.map((el) => (
            <li key={el.id}>youtu.be/{el.link}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const PlayList = connect(mapStateToProps)(PlayListComponent);

export default PlayList;
