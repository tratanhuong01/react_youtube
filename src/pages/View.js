import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content/Content";
import MainPage from "./MainPage";
import * as viewsAction from "../actions/view/index";
function View({ match }) {
  //
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  useEffect(() => {
    if (view.reset) {
      dispatch(viewsAction.resetView());
    }
    const index = view.videos.findIndex(
      (video) => video.slug === match.match.params.slug
    );
    if (index !== -1)
      if (view.video) {
        if (view.videos[index].id === view.video) {
        } else {
          dispatch(viewsAction.updateInformation("video", view.videos[index]));
        }
      } else {
        dispatch(viewsAction.updateInformation("video", view.videos[index]));
      }
  }, [match.match.params.slug, view.videos, view.reset]);
  //
  return <MainPage>{view.video && <Content />}</MainPage>;
}

export default View;
