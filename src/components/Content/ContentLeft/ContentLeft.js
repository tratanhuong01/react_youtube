import React from "react";
import VideoShow from "./MainContent/VideoShow";
import InfoVideo from "./MainContent/InfoVideo/InfoVideo";
import DetailVideo from "./MainContent/DetailVideo/DetailVideo";
import Comment from "./MainContent/Comment/Comment";
import ContentRight from "../ContentRight/ContentRight";
import { useSelector } from "react-redux";

function ContentLeft(props) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <div className={`${view.zoomIn ? "w-full" : "w-70%  pr-4"}`}>
      <VideoShow />
      <div className={`w-full flex ${view.zoomIn ? "p-3" : ""}`}>
        <div className={`${view.zoomIn ? "w-70%  pr-4" : "w-full"}`}>
          <InfoVideo video={view.video} />
          <DetailVideo video={view.video} />
          <Comment video={view.video} />
        </div>
        {view.zoomIn && <ContentRight />}
      </div>
    </div>
  );
}

export default ContentLeft;
