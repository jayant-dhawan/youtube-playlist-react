import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    shuffle: (video) => dispatch(shuffle(video)),
  };
}

class ShuffleComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.shuffle();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <img
            style={{ verticalAlign: 'middle', margin: 5 }}
            src="https://icongr.am/entypo/shuffle.svg?size=15&color=currentColor"
            alt="shuffle"
          />
          <span style={{ verticalAlign: 'middle', margin: 5 }}>Shuffle</span>
        </button>
      </div>
    );
  }
}

const Shuffle = connect(null, mapDispatchToProps)(ShuffleComponent);

export default Shuffle;
