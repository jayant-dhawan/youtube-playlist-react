import React, { Component } from "react";
import { connect } from "react-redux";
import { autoplay } from "../actions";

const mapStateToProps = (state) => {
  return { autoplay: state.videos.autoplay };
};

function mapDispatchToProps(dispatch) {
  return {
    changeAutoplay: (video) => dispatch(autoplay(video)),
  };
}

class AutoplayComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * 
   * Handling Autoplay On/Off buttton onClick event to turn
   * Autoplay feature on and off.
   */
  handleClick() {
    this.props.changeAutoplay();
  }

  render() {
    let autoplay = this.props.autoplay;
    return (
      <div>
        <button onClick={this.handleClick}>
          <span>AutoPlay: {autoplay? 'ON' : 'OFF'}</span>
        </button>
      </div>
    );
  }
}

const Autoplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoplayComponent);

export default Autoplay;
