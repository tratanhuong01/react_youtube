import React, { useEffect, useRef, useState } from "react";
import ProcessVideo from "./ProcessVideo/ProcessVideo";
import { useDispatch, useSelector } from "react-redux";
import * as viewsAction from "../../../../actions/view/index";
import * as videoData from "../../../../assets/videos/videoData";
import { useHistory } from "react-router";
import { PAGE_VIEW } from "../../../../constants/Config";
function VideoShow(props) {
  //
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  const refSecCurrent = useRef(null);
  const history = useHistory();
  useEffect(() => {
    let timeOut = null;
    if (refVideo && refVideo.current) {
      refVideo.current.currentTime = view.secCurrent + 2;
      timeOut = setTimeout(() => {
        refVideo.current.muted = false;
      }, 500);
    }
    const onKeyUp = (e) => {
      if (e.keyCode === 27) {
        dispatch(viewsAction.updateInformation("zoomFullScreen", false));
      }
      if (e.keyCode === 32) {
        dispatch(viewsAction.updateInformation("play", !view.play));
      }
      if (e.keyCode === 37) {
        dispatch(
          viewsAction.updateInformation(
            "secCurrent",
            document.getElementById("refSecCurrent").value - 10
          )
        );
        refVideo.current.currentTime =
          document.getElementById("refSecCurrent").value - 10;
      }
      if (e.keyCode === 39) {
        dispatch(
          viewsAction.updateInformation(
            "secCurrent",
            Number(document.getElementById("refSecCurrent").value) + 10
          )
        );
        refVideo.current.currentTime =
          Number(document.getElementById("refSecCurrent").value) + 10;
      }
    };
    const onKeyDown = (e) => {
      if (e.keyCode === 32) return;
    };
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timeOut);
      document.removeEventListener("keyup", onKeyUp, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [view.video]);
  const refVideo = useRef(null);
  useEffect(() => {
    if (refVideo && refVideo.current) {
      if (!view.play) {
        refVideo.current.pause();
      } else {
        refVideo.current.play();
      }
    }
  }, [view.play]);
  useEffect(() => {
    let interval = null;
    if (view.secCurrent >= view.sec) {
      clearInterval(interval);
      dispatch(viewsAction.updateInformation("play", false));
      dispatch(viewsAction.updateInformation("secCurrent", view.secCurrent));
    } else {
      if (view.play) {
        interval = setInterval(() => {
          dispatch(
            viewsAction.updateInformation("secCurrent", view.secCurrent + 1)
          );
          refSecCurrent.current.value = view.secCurrent + 1;
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [view.play, view.secCurrent, view.video]);
  useEffect(() => {
    if (view.zoomFullScreen)
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    else
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
  }, [view.zoomFullScreen]);
  //
  return (
    <div
      className={`hover__item__block ${
        !view.zoomFullScreen && !view.zoomIn && !view.zoomOut && " pt-4  "
      } ${view.zoomOut ? "fixed w-1/3 right-3  h-72 bottom-1" : "w-full"} ${
        view.zoomFullScreen ? "fixed h-screen top-0 left-0 z-50 " : ""
      }`}
    >
      <input ref={refSecCurrent} className="hidden" id="refSecCurrent" />
      <div
        className={`w-full  ${
          view.zoomFullScreen
            ? "h-full"
            : view.zoomIn
            ? "h-full"
            : view.zoomOut
            ? "h-full"
            : ""
        }  relative bg-black`}
      >
        <div
          onClick={() =>
            dispatch(viewsAction.updateInformation("play", !view.play))
          }
          className={`text-3xl w-12 h-12 rounded-full bg-black bg-opacity-50  flex items-center justify-center absolute top-1/2 left-1/2 transform text-white 
          -translate-x-1/2 -translate-y-1/2 z-50 ${
            view.loadingPlay ? "" : "hidden"
          }`}
        >
          <i
            className={`bx bx-${view.play ? "stop" : "play"} cursor-pointer`}
          ></i>
        </div>
        {view.zoomOut && (
          <div className="w-full flex absolute z-40 top-0 justify-between">
            <span
              onClick={async () => {
                await dispatch(viewsAction.updateInformation("zoomOut", false));
                await dispatch(viewsAction.updateInformation("reset", false));
                await history.push(`${PAGE_VIEW}/${view.video.slug}`);
              }}
              className="bx bx-left-top-arrow-circle text-3xl text-white p-3 "
            ></span>
            <span
              onClick={() => {
                dispatch(viewsAction.updateInformation("reset", true));
                dispatch(viewsAction.updateInformation("zoomOut", false));
                dispatch(viewsAction.resetView());
              }}
              className="bx bx-x text-3xl text-white p-3"
            ></span>
          </div>
        )}
        <video
          onClick={() => {
            dispatch(viewsAction.updateInformation("loadingPlay", true));
            dispatch(viewsAction.updateInformation("play", !view.play));
            setTimeout(() => {
              dispatch(viewsAction.updateInformation("loadingPlay", false));
            }, 500);
          }}
          ref={refVideo}
          className={`${
            view.zoomIn && !view.zoomOut && !view.zoomFullScreen
              ? "w-70% mx-auto"
              : "w-full"
          } ${
            view.zoomIn && !view.zoomOut && !view.zoomFullScreen
              ? " h-40rem"
              : "h-full"
          } ${
            !view.zoomIn && !view.zoomFullScreen && !view.zoomOut
              ? " h-32rem"
              : ""
          } ${!view.zoomOut ? " h-full" : ""} object-cover${
            view.zoomFullScreen ? " h-screen" : ""
          }`}
          src={videoData[view.video.file]}
          onLoadedMetadata={() =>
            refVideo.current &&
            dispatch(
              viewsAction.updateInformation("sec", refVideo.current.duration)
            )
          }
          autoPlay
          muted
        />
        {!view.zoomOut && <ProcessVideo refVideo={refVideo} />}
      </div>
    </div>
  );
}

export default VideoShow;
