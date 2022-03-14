import React from "react";

function HeaderCenter(props) {
  return (
    <div className="lg:w-3/5 md:w-2/5 md:items-center hidden md:flex md:margin-auto">
      <div className="w-9/12 relative">
        <input
          type="text"
          className="w-full py-2 px-3 border-solid border-gray-200 focus:border-blue-500 focus:shadow-sm border rounded-sm"
          placeholder="Tìm kiếm"
        />
        <i className="bx bxs-keyboard absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
      </div>
      <button className="py-1.5 px-7 border text-xl border-solid border-gray-200 hover:bg-gray-200 ">
        <i className="bx bx-search text-gray-600"></i>
      </button>
      <i className="bx bxs-microphone text-2xl mx-2.5 block w-10 h-10 rounded-full bg-gray-100
       text-gray-600 hidden md:flex md:justify-center md:items-center"></i>
    </div>
  );
}

export default HeaderCenter;
