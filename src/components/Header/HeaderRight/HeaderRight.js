import React from "react";
import avatar from "../../../assets/images/avatar.jpg";
function HeaderRight(props) {
  return (
    <div className="w-1/5 mt-1 flex justify-end items-center text-gray-600 text-2xl ">
      <i className="bx bx-video-plus mx-3"></i>
      <i className="bx bxs-grid mx-3"></i>
      <i className="bx bx-bell mx-3"></i>
      <img
        src={avatar}
        alt=""
        className="w-9 h-9 border-2 border-solid border-gray-500 rounded-full mx-3 object-cover"
      />
    </div>
  );
}

export default HeaderRight;
