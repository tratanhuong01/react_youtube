import React from "react";
import { Link } from "react-router-dom";

function HeaderLeft(props) {
  return (
    <div className="w-1/5 flex items-center">
      <i className="fas fa-bars  text-2xl ml-5"></i>
      <i className="bx bxl-youtube text-4xl ml-7 text-red-600 cursor-pointer"></i>
      <Link to="" className="font-bold text-sm ml-3 cursor-pointer">
        YOUTUBE
      </Link>
    </div>
  );
}

export default HeaderLeft;
