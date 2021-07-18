import React, { Component } from "react";
import ProcessVideo from "./ProcessVideo/ProcessVideo";
class VideoShow extends Component {
  render() {
    return (
      <div className="w-full pt-4 relative">
        <img
          className="w-full h-32rem object-cover"
          src={process.env.PUBLIC_URL + this.props.video.url}
          alt=""
        />
        <ProcessVideo />
      </div>
    );
  }
}

export default VideoShow;
