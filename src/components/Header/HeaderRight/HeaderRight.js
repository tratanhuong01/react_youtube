import React from "react";

function HeaderRight(props) {
  return (
    <div className="w-1/5">
      <ul className="flex justify-end">
        <li className="py-2 px-2.5 text-2xl text-gray-600">
          <i className="bx bxs-video-plus"></i>
        </li>
        <li className="py-2 px-2.5 text-2xl text-gray-600">
          <i className="bx bxs-category"></i>
        </li>
        <li className="py-2 px-2.5 text-2xl text-gray-600">
          <i className="bx bxs-bell"></i>
        </li>
        <li className="py-1 px-2.5 text-4xl text-gray-600">
          <i className="bx bxs-user-circle"></i>
        </li>
      </ul>
    </div>
  );
}

export default HeaderRight;
