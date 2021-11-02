import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VolumeEdit from "./VolumeEdit/VolumeEdit";
import * as viewsAction from "../../../../../actions/view/index";
import PreviewVideoMini from "./PreviewVideoMini/PreviewVideoMini";
function ProcessVideo({ refVideo }) {
  //
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  const [show, setShow] = useState(false);
  const refReal = useRef(null);
  const refFake = useRef(null);
  const refMain = useRef(null);
  const refPreview = useRef(null);
  const toggleFullScreen = () => {
    dispatch(
      viewsAction.updateInformation("zoomFullScreen", !view.zoomFullScreen)
    );
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  const touchTimeVideo = (e) => {
    if (refVideo && refVideo.current) {
      if (
        refMain &&
        refMain.current &&
        refFake &&
        refFake.current &&
        refReal &&
        refReal.current
      ) {
        const currentTime =
          ((refFake.current.offsetWidth + refReal.current.offsetWidth) /
            refMain.current.offsetWidth) *
          view.sec;
        refVideo.current.currentTime = currentTime;
        dispatch(viewsAction.updateInformation("secCurrent", currentTime));
      }
    }
  };
  //
  return (
    <div className="w-full absolute bottom-0 item__block bg-black bg-opacity-50 process__video">
      <div className="w-full">
        <ul className="w-full relative">
          <PreviewVideoMini
            refVideo={refVideo}
            show={show}
            refMain={refMain}
            refReal={refReal}
            refFake={refFake}
            refPreview={refPreview}
          />
          <li
            onMouseEnter={(e) => {
              setShow(true);
              const rect = e.target.getBoundingClientRect();
              const left = e.clientX - rect.left; //x position within the element.
              if (refPreview && refPreview.current) {
                if (left > 100) {
                  refPreview.current.style.left = left - 110 + "px";
                } else {
                  refPreview.current.style.left = 8 + "px";
                }
              }
            }}
            onMouseLeave={() => setShow(false)}
            onClick={async (e) => {
              const rect = e.target.getBoundingClientRect();
              const left = e.clientX - rect.left; //x position within the element.
              if (refVideo && refVideo.current) {
                if (
                  refMain &&
                  refMain.current &&
                  refFake &&
                  refFake.current &&
                  refReal &&
                  refReal.current
                ) {
                  const currentTime =
                    (left / refMain.current.offsetWidth) * view.sec;
                  refVideo.current.currentTime = currentTime;
                  dispatch(
                    viewsAction.updateInformation("secCurrent", currentTime)
                  );
                }
              }
            }}
            ref={refReal}
            className="absolute pt-1.5 bg-red-600 cursor-pointer z-50"
            style={{ width: `${(view.secCurrent / view.sec) * 100}%` }}
          ></li>
          <li
            ref={refFake}
            className={` pt-1.5 bg-gray-300 cursor-pointer w-40 absolute z-40 ${
              show ? "" : "hidden"
            }`}
          ></li>
          <li
            onClick={touchTimeVideo}
            ref={refMain}
            onMouseEnter={(e) => {
              const rect = e.target.getBoundingClientRect();
              const left = e.clientX - rect.left; //x position within the element.
              if (refFake && refFake.current && refReal && refReal.current) {
                refFake.current.style.left = refReal.current.offsetWidth + "px";
                refFake.current.style.width =
                  left - refReal.current.offsetWidth + "px";
                setShow(true);
                if (refPreview && refPreview.current) {
                  if (left > 100) {
                    refPreview.current.style.left = left - 110 + "px";
                  } else {
                    refPreview.current.style.left = 8 + "px";
                  }
                }
              }
            }}
            onMouseLeave={() => setShow(false)}
            className="ml-auto pt-1.5 w-full bg-gray-500 cursor-pointer"
          ></li>
        </ul>
      </div>
      <div className="w-full flex">
        <div className="w-2/3 md:w-7/12">
          <ul className="text-white md:font-bold flex items-center">
            <li
              onClick={() => {
                if (refVideo.current)
                  dispatch(viewsAction.updateInformation("play", !view.play));
              }}
              className="text-3xl p-1.5"
            >
              <i
                className={`bx bx-${
                  view.play ? "stop" : "play"
                } cursor-pointer`}
              ></i>
            </li>
            <li className="text-3xl p-1.5 flex items-center">
              <i className="bx bx-skip-next cursor-pointer"></i>
            </li>
            <VolumeEdit refVideo={refVideo} />
            <li className={`px-2 md:text-sm flex items-center ml-4 text-xs`}>
              {`${
                Math.floor(view.secCurrent / 3600) < 10
                  ? `0${Math.floor(view.secCurrent / 3600)}`
                  : Math.floor(view.secCurrent / 3600)
              }:${
                Math.floor((view.secCurrent % 3600) / 60) < 10
                  ? `0${Math.floor((view.secCurrent % 3600) / 60)}`
                  : Math.floor((view.secCurrent % 3600) / 60)
              }:${
                Math.floor((view.secCurrent % 3600) % 60) < 10
                  ? `0${Math.floor((view.secCurrent % 3600) % 60)}`
                  : Math.floor((view.secCurrent % 3600) % 60)
              }`}{" "}
              /{" "}
              {`${
                Math.floor(view.sec / 3600) < 10
                  ? `0${Math.floor(view.sec / 3600)}`
                  : Math.floor(view.sec / 3600)
              }:${
                Math.floor((view.sec % 3600) / 60) < 10
                  ? `0${Math.floor((view.sec % 3600) / 60)}`
                  : Math.floor((view.sec % 3600) / 60)
              }:${
                Math.floor((view.sec % 3600) % 60) < 10
                  ? `0${Math.floor((view.sec % 3600) % 60)}`
                  : Math.floor((view.sec % 3600) % 60)
              }`}
              <span className="mx-1">*</span>
              Đang xem...
            </li>
          </ul>
        </div>
        <div className="w-1/3 md:w-5/12 flex justify-end">
          <ul className="text-white font-bold flex">
            {!view.zoomOut && !view.zoomFullScreen && (
              <li
                onClick={() => {
                  dispatch(viewsAction.updateInformation("reset", false));
                  dispatch(viewsAction.updateInformation("zoomOut", true));
                }}
                className="text-xl p-1.5 flex items-center"
              >
                <i className="bx bxs-movie-play cursor-pointer"></i>
              </li>
            )}
            <li className="text-xl py-1.5 px-2 mt-0.5 flex items-center relative">
              <i className="fas fa-cog cursor-pointer"></i>
              <div
                className="w-4 h-4 text-xxs top-0.5 right-0 text-white absolute rounded-full
                  justify-center  items-center bg-red-600 font-bold md:flex hidden"
              >
                HD
              </div>
            </li>
            {!view.zoomFullScreen && !view.zoomOut && (
              <li
                onClick={() =>
                  dispatch(
                    viewsAction.updateInformation("zoomIn", !view.zoomIn)
                  )
                }
                className="px-2 text-xl flex items-center"
              >
                <i className="fas fa-tv cursor-pointer"></i>
              </li>
            )}
            <li
              onClick={toggleFullScreen}
              className="px-2 text-xl flex text-gray-100 items-center"
            >
              <i className="fas fa-compress cursor-pointer"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessVideo;
