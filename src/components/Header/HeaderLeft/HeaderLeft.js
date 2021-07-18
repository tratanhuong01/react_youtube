import React, { Component } from "react";

class HeaderLeft extends Component {
  render() {
    return (
      <div className="w-1/5 flex items-center">
        <i className="fas fa-bars  text-2xl ml-12"></i>
        <i className="bx bxl-youtube text-4xl ml-7 text-red-600 cursor-pointer"></i>
        <span className="font-bold text-sm ml-3 cursor-pointer">YOUTUBE</span>
      </div>
    );
  }
}

export default HeaderLeft;
