import React, { Component } from "react";
import { connect } from "react-redux";
import { addVideo } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addVideo: (video) => dispatch(addVideo(video)),
  };
}

class AddVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { link } = this.state;
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const validLink = link.trim().match(regex);
    if (validLink && validLink[0] === link.trim()) {
      this.props.addVideo(validLink[1]);
      this.setState({ link: "" });
    } else {
      alert("Link not valid");
    }
  }

  render() {
    return (
      <div style={{ margin: 25, textAlign: "center" }}>
        <input
          onChange={this.handleChange}
          id="link"
          type="text"
          value={this.state.link}
        />
        <button onClick={this.handleClick} style={{ marginLeft: 10 }}>
          Add
        </button>
      </div>
    );
  }
}

const AddVideo = connect(null, mapDispatchToProps)(AddVideoComponent);

export default AddVideo;
