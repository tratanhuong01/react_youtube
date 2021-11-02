import React from "react";
import NameTag from "./NameTag/NameTag";
import ViewTime from "./ViewTime/ViewTime";
import FeelOrShare from "./FeelOrShare/FeelOrShare";

function InfoVideo({ video }) {
  return (
    <div className="w-full pt-2 border-b-2 border-solid border-gray-300">
      <NameTag video={video} />
      <div className="w-full flex py-1 flex-col lg:flex-row">
        <ViewTime video={video} />
        <FeelOrShare video={video} />
      </div>
    </div>
  );
}

export default InfoVideo;
