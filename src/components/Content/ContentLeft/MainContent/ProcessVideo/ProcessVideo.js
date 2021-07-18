import React, { Component } from "react";

class ProcessVideo extends Component {
  render() {
    return (
      <div className="w-full absolute bottom-0">
        <div className="w-full">
          <ul className="w-full flex">
            <li className="w-3/4 p-0.5 bg-red-600"></li>
            <li className="w-1/4 p-0.5 bg-gray-300"></li>
          </ul>
        </div>
        <div className="w-full flex">
          <div className="w-7/12">
            <ul className="text-white font-bold flex">
              <li className="text-3xl p-1.5 flex items-center">
                <i className="bx bx-play cursor-pointer"></i>
              </li>
              <li className="text-3xl p-1.5 flex items-center">
                <i className="bx bx-skip-next cursor-pointer"></i>
              </li>
              <li className="text-xl py-1.5 px-2 mt-0.5 flex items-center">
                <i className="bx bxs-volume-full cursor-pointer"></i>
              </li>
              <li className="px-2 text-sm flex items-center">
                00:38:45 / 00:38:45
                <span className="mx-1">*</span>
                Hoài một đời chờ đợi
              </li>
            </ul>
          </div>
          <div className="w-5/12 flex justify-end">
            <ul className="text-white font-bold flex">
              <li className="text-xl p-1.5 flex items-center">
                <i className="bx bx-movie-play cursor-pointer"></i>
              </li>
              <li className="text-xl p-1.5 flex items-center">
                <i className="bx bxs-movie-play cursor-pointer"></i>
              </li>
              <li className="text-xl py-1.5 px-2 mt-0.5 flex items-center relative">
                <i className="fas fa-cog cursor-pointer"></i>
                <div
                  className="w-4 h-4 text-xxs top-0.5 right-0 text-white absolute rounded-full
                   flex justify-center 
                      items-center bg-red-600 font-bold"
                >
                  HD
                </div>
              </li>
              <li className="px-2 text-xl flex items-center">
                <i className="fas fa-tv cursor-pointer"></i>
              </li>
              <li className="px-2 text-xl flex text-gray-100 items-center">
                <i className="fas fa-compress cursor-pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessVideo;
