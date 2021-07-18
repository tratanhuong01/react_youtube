import React, { Component } from "react";

class NameTag extends Component {
  render() {
    return (
      <div>
        <p className="text-blue-500 text-sm">{this.props.video.tag}</p>
        <p className="text-xl py-1">{this.props.video.name}</p>
      </div>
    );
  }
}

export default NameTag;
