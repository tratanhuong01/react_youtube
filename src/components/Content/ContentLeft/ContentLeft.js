import React, { Component } from "react";
import VideoShow from "./MainContent/VideoShow";
import InfoVideo from "./MainContent/InfoVideo/InfoVideo";
import DetailVideo from "./MainContent/DetailVideo/DetailVideo";
import Comment from "./MainContent/Comment/Comment";

function ContentLeft({ videoMain, onRegisterChanel }) {
  return (
    <div className="w-70% pr-4">
      <VideoShow video={videoMain} />
      <InfoVideo video={videoMain} />
      <DetailVideo onRegisterChanel={onRegisterChanel} video={videoMain} />
      <Comment video={videoMain} />
    </div>
  );
}

export default ContentLeft;
