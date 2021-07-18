import React, { Component } from "react";
import NameTag from "./NameTag/NameTag";
import ViewTime from "./ViewTime/ViewTime";
import FeelOrShare from "./FeelOrShare/FeelOrShare";
class InfoVideo extends Component {
  render() {
    return (
      <div className="w-full pt-2 border-b-2 border-solid border-gray-300">
        <NameTag video={this.props.video} />
        <div className="w-full flex py-1">
          <ViewTime video={this.props.video} />
          <FeelOrShare video={this.props.video} />
        </div>
      </div>
    );
  }
}

export default InfoVideo;
