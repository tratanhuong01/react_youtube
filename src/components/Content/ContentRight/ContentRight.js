import React from "react";
import { useSelector } from "react-redux";
import VideoChild from "./VideoChild/VideoChild";

function ContentRight({ type }) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <div
      className={` ${
        type === "right"
          ? " w-30% hidden lg:block "
          : view.zoomIn
          ? "w-full lg:w-30%"
          : " lg:hidden"
      }`}
    >
      {view.videos &&
        view.videos.map((video) => {
          return <VideoChild video={video} key={video.id} />;
        })}
    </div>
  );
}

export default ContentRight;
