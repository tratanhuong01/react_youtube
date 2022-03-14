import React from "react";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
function Header(props) {
  return (
    <div className="w-full py-2 flex justify-between fixed top-0 bg-white z-30">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}

export default Header;
