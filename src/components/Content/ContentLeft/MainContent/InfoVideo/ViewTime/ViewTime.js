import React, { Component } from "react";

class ViewTime extends Component {
  render() {
    return (
      <div className="w-1/3 py-1 text-gray-600 text-sm">
        {this.props.video.view} • {this.props.video.time}
      </div>
    );
  }
}

export default ViewTime;
