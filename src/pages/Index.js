import React from "react";
import { useSelector } from "react-redux";
import CategoryLeft from "../components/CategoryLeft/CategoryLeft";
import VideoChild from "../components/Content/ContentRight/VideoChild/VideoChild";
import MainPage from "./MainPage";

function Index(props) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <MainPage>
      <div
        className="w-full py-3 flex box-border flex-wrap"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <CategoryLeft />
        <div className="main__index relative -top-1">
          <div className="w-full flex flex-wrap">
            {view.videos &&
              view.videos.map((video) => (
                <VideoChild
                  onLoadUI={() => ""}
                  video={video}
                  key={video.id}
                  index={true}
                />
              ))}
          </div>
        </div>
      </div>
    </MainPage>
  );
}

export default Index;
