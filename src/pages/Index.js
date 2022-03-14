import React from "react";
import { useSelector } from "react-redux";
import CategoryLeft from "../components/CategoryLeft/CategoryLeft";
import VideoChild from "../components/Content/ContentRight/VideoChild/VideoChild";
import ListTypeVideo from "../components/ListTypeVideo/ListTypeVideo";
import MainPage from "./MainPage";

function Index(props) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <MainPage>
      <div
        className="w-full py-3 flex box-border relative flex-wrap"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <CategoryLeft headerZoom={view.headerZoom} />
        <div className={`${view.headerZoom ? 'main__index' : 'main__index__mini'} lg:px-5 relative -top-3`}>
          <ListTypeVideo />
          <div className="w-3/4 wrapper__main__index mx-auto md:w-full flex flex-wrap gap-4 px-2">
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
