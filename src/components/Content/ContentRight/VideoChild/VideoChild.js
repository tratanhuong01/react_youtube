import React, { Component } from "react";

class VideoChild extends Component {
  componentWillMount() {
    this.setState({
      video: this.props.video,
    });
  }
  onLoadUI = () => {
    this.props.onLoadUI(this.state.video);
  };
  render() {
    return (
      <div
        onClick={this.onLoadUI}
        className="w-full ml-2 flex py-2 cursor-pointer"
      >
        <div className="w-5/12 pr-3 pt-2">
          <img src={process.env.PUBLIC_URL + this.props.video.url} alt="" />
        </div>
        <div className="w-7/12">
          <p className="font-bold text-sm">{this.props.video.name}</p>
          <div className="text-gray-600">
            <p className="text-sm">
              {this.props.video.poster} <i className="bx bxs-check-circle"></i>
            </p>
            <p className="text-sm">
              {this.props.video.view} * {this.props.video.time}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoChild;
