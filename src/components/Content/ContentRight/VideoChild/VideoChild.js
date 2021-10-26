import React from "react";

function VideoChild({ onLoadUI, video }) {
  return (
    <div
      onClick={() => onLoadUI(video)}
      className="w-full ml-2 flex py-2 cursor-pointer"
    >
      <div className="w-5/12 pr-3 pt-2">
        <img src={process.env.PUBLIC_URL + video.url} alt="" />
      </div>
      <div className="w-7/12">
        <p className="font-bold text-sm">{video.name}</p>
        <div className="text-gray-600">
          <p className="text-sm">
            {video.poster} <i className="bx bxs-check-circle"></i>
          </p>
          <p className="text-sm">
            {video.view} * {video.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoChild;
