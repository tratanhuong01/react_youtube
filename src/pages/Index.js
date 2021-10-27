import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CategoryLeft from "../components/CategoryLeft/CategoryLeft";
import VideoChild from "../components/Content/ContentRight/VideoChild/VideoChild";
import MainPage from "./MainPage";

function Index(props) {
  const refCategoryLeft = useRef(null);
  const refContentIndex = useRef(null);
  const view = useSelector((state) => state.view);
  useEffect(() => {
    //
    if (
      refContentIndex &&
      refContentIndex.current &&
      refCategoryLeft &&
      refCategoryLeft.current
    ) {
      refContentIndex.current.style.left =
        refCategoryLeft.current.offsetWidth + "px";
    }
    //
  }, []);
  return (
    <MainPage>
      <div
        className="w-full py-3 flex"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <CategoryLeft refCategoryLeft={refCategoryLeft} />
        <div
          ref={refContentIndex}
          className="w-10/12 left-2/12 relative -top-1"
        >
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
