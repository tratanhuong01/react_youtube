import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CategoryLeft from "../components/CategoryLeft/CategoryLeft";
import VideoShow from "../components/Content/ContentLeft/MainContent/VideoShow";
import Header from "../components/Header/Header";
import HeaderLeft from "../components/Header/HeaderLeft/HeaderLeft";

function MainPage(props) {
  //
  const view = useSelector((state) => state.view);
  const history = useHistory();
  useEffect(() => {
    if (view.zoomOut === true) history.push("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.zoomOut]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.headerZoom])
  //
  return (
    <>
      <Header />
      <div className="w-full pt-16">{props.children}</div>
      {view.zoomOut === true && <VideoShow />}
      {view.modalZ && <div className="fixed top-0 left-0 bg-black bottom-0 right-0 bg-opacity-50 z-40">
        <CategoryLeft headerZoom={true} modal={true} headerLeft={<HeaderLeft modal={true} />} />
      </div>}
    </>
  );
}
export default MainPage;
