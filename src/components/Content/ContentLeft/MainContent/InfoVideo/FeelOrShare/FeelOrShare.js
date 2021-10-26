import React from "react";

function FeelOrShare(props) {
  return (
    <div className="w-2/3">
      <ul className="flex justify-end">
        <li className="px-3 py-0.5 text-gray-600 flex justify-center items-center">
          <i className="bx bxs-like text-2xl mr-2"></i> 26 N
        </li>
        <li className="px-3 py-0.5 text-gray-600 flex justify-center items-center">
          <i className="bx bxs-dislike text-2xl mr-2"></i> 1,6 N
        </li>
        <li className="px-3 py-0.5 text-gray-600 flex justify-center items-center">
          <i className="bx bxs-share transform -rotate-180 text-2xl mr-2"></i>
          CHIA SẼ
        </li>
        <li className="px-3 py-0.5 text-gray-600 flex justify-center items-center">
          <i className="bx bx-list-plus  text-2xl mr-2"></i>
          LƯU
        </li>
      </ul>
    </div>
  );
}

export default FeelOrShare;
