import React, { Component } from "react";
import VideoShow from "./MainContent/VideoShow";
import InfoVideo from "./MainContent/InfoVideo/InfoVideo";
import DetailVideo from "./MainContent/DetailVideo/DetailVideo";
import Comment from "./MainContent/Comment/Comment";

class ContentLeft extends Component {
  onRegisterChanel = (video) => {
    this.props.onRegisterChanel(video);
  };
  render() {
    return (
      <div className="w-70% pr-4">
        <VideoShow video={this.props.videoMain} />
        <InfoVideo video={this.props.videoMain} />
        <DetailVideo
          onRegisterChanel={this.onRegisterChanel}
          video={this.props.videoMain}
        />
        <Comment video={this.props.videoMain} />
      </div>
    );
  }
}

export default ContentLeft;
