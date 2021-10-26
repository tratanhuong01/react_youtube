import React from "react";
import VideoChild from "./VideoChild/VideoChild";

function ContentRight({ onLoadUI, videos }) {
  return (
    <div className="w-30% px-2">
      {videos &&
        videos.map((video) => {
          return (
            <VideoChild onLoadUI={onLoadUI} video={video} key={video.id} />
          );
        })}
    </div>
  );
}

export default ContentRight;
