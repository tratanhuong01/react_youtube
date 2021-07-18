import React, { Component } from "react";

class HeaderCenter extends Component {
  render() {
    return (
      <div className="w-3/5 flex items-center">
        <div className="w-9/12 relative">
          <input
            type="text"
            className="w-full p-1 border-solid 
                    border-gray-200 border-2 rounded-sm"
            placeholder="Tìm kiếm"
          />
          <i className="bx bxs-keyboard absolute right-4 top-2 text-xl"></i>
        </div>
        <button
          className="py-1 px-7 border-2 border-solid border-gray-200 
                bg-gray-200 "
        >
          <i className="bx bx-search text-gray-600"></i>
        </button>
        <i className="bx bxs-microphone text-2xl mx-4  text-gray-600"></i>
      </div>
    );
  }
}

export default HeaderCenter;