import React from "react";

function HeaderCenter(props) {
  return (
    <div className="md:w-3/5 items-center hidden md:flex">
      <div className="w-9/12 relative">
        <input
          type="text"
          className="w-full py-1 px-3 border-solid border-gray-200 border-2 rounded-sm"
          placeholder="Tìm kiếm"
        />
        <i className="bx bxs-keyboard absolute right-4 top-1 text-xl"></i>
      </div>
      <button className="py-1 px-7 border-2 border-solid border-gray-200 bg-gray-200 ">
        <i className="bx bx-search text-gray-600"></i>
      </button>
      <i className="bx bxs-microphone text-2xl mx-4  text-gray-600 hidden md:flex"></i>
    </div>
  );
}

export default HeaderCenter;
