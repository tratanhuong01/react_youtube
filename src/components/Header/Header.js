import React, { Component } from "react";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
class Header extends Component {
  render() {
    return (
      <div className="w-full py-2 flex fixed top-0 bg-white z-50">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    );
  }
}

export default Header;
