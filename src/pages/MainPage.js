import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import VideoShow from "../components/Content/ContentLeft/MainContent/VideoShow";
import Header from "../components/Header/Header";

function MainPage(props) {
  //
  const view = useSelector((state) => state.view);
  const history = useHistory();
  useEffect(() => {
    if (view.zoomOut === true) history.push("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.zoomOut]);
  //
  return (
    <>
      <Header />
      <div className="w-full pt-16">{props.children}</div>
      {view.zoomOut === true && <VideoShow />}
    </>
  );
}
export default MainPage;
