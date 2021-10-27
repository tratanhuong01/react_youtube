import React from "react";
import { useSelector } from "react-redux";
import VideoChild from "./VideoChild/VideoChild";

function ContentRight(props) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <div className="w-30% px-2">
      {view.videos &&
        view.videos.map((video) => {
          return <VideoChild video={video} key={video.id} />;
        })}
    </div>
  );
}

export default ContentRight;
