import React, { Component } from "react";
import VideoChild from "./VideoChild/VideoChild";

class ContentRight extends Component {
  onLoadUI = (video) => {
    this.props.onLoadUI(video);
  };
  render() {
    var videoAll = this.props.videos.map((child, index) => {
      return (
        <VideoChild onLoadUI={this.onLoadUI} video={child} key={child.id} />
      );
    });
    return <div className="w-30% px-2">{videoAll}</div>;
  }
}

export default ContentRight;
