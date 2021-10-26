import React, { useEffect, useRef, useState } from "react";

function ProcessVideo({
  max,
  setMax,
  refVideo,
  play,
  setPlay,
  sec,
  secCurrent,
  setSec,
  setSecCurrent,
}) {
  //
  const [show, setShow] = useState(false);
  const refReal = useRef(null);
  const refFake = useRef(null);
  const refMain = useRef(null);
  const toggleFullScreen = () => {
    setMax(!max);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  //
  return (
    <div className="w-full absolute bottom-0">
      <div className="w-full">
        <ul className="w-full relative">
          <li
            ref={refReal}
            className="absolute py-0.5 bg-red-600 cursor-pointer"
            style={{ width: `${(secCurrent / sec) * 100}%` }}
          ></li>
          <li
            ref={refFake}
            className={`py-0.5 bg-gray-300 cursor-pointer w-40 absolute z-50 ${
              show ? "" : "hidden"
            }`}
          ></li>
          <li
            onClick={() => {
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
                    ((refFake.current.offsetWidth +
                      refReal.current.offsetWidth) /
                      refMain.current.offsetWidth) *
                    sec;
                  refVideo.current.currentTime = currentTime;
                  setSecCurrent(currentTime);
                }
              }
            }}
            ref={refMain}
            onMouseEnter={(e) => {
              const rect = e.target.getBoundingClientRect();
              const left = e.clientX - rect.left; //x position within the element.
              if (refFake && refFake.current && refReal && refReal.current) {
                refFake.current.style.left = refReal.current.offsetWidth + "px";
                refFake.current.style.width =
                  left - refReal.current.offsetWidth + "px";
                setShow(true);
              }
            }}
            onMouseLeave={() => setShow(false)}
            className="w-full p-0.5 bg-gray-500 cursor-pointer"
          ></li>
        </ul>
      </div>
      <div className="w-full flex">
        <div className="w-7/12">
          <ul className="text-white font-bold flex">
            <li
              onClick={() => {
                if (refVideo.current) setPlay(!play);
              }}
              className="text-3xl p-1.5 flex items-center"
            >
              <i
                className={`bx bx-${play ? "stop" : "play"} cursor-pointer`}
              ></i>
            </li>
            <li className="text-3xl p-1.5 flex items-center">
              <i className="bx bx-skip-next cursor-pointer"></i>
            </li>
            <li className="text-xl py-1.5 px-2 mt-0.5 flex items-center">
              <i className="bx bxs-volume-full cursor-pointer"></i>
            </li>
            <li className="px-2 text-sm flex items-center">
              {`${
                Math.floor(secCurrent / 3600) < 10
                  ? `0${Math.floor(secCurrent / 3600)}`
                  : Math.floor(secCurrent / 3600)
              }:${
                Math.floor((secCurrent % 3600) / 60) < 10
                  ? `0${Math.floor((secCurrent % 3600) / 60)}`
                  : Math.floor((secCurrent % 3600) / 60)
              }:${
                Math.floor((secCurrent % 3600) % 60) < 10
                  ? `0${Math.floor((secCurrent % 3600) % 60)}`
                  : Math.floor((secCurrent % 3600) % 60)
              }`}{" "}
              /{" "}
              {`${
                Math.floor(sec / 3600) < 10
                  ? `0${Math.floor(sec / 3600)}`
                  : Math.floor(sec / 3600)
              }:${
                Math.floor((sec % 3600) / 60) < 10
                  ? `0${Math.floor((sec % 3600) / 60)}`
                  : Math.floor((sec % 3600) / 60)
              }:${
                Math.floor((sec % 3600) % 60) < 10
                  ? `0${Math.floor((sec % 3600) % 60)}`
                  : Math.floor((sec % 3600) % 60)
              }`}
              <span className="mx-1">*</span>
              Hoài một đời chờ đợi
            </li>
          </ul>
        </div>
        <div className="w-5/12 flex justify-end">
          <ul className="text-white font-bold flex">
            <li className="text-xl p-1.5 flex items-center">
              <i className="bx bx-movie-play cursor-pointer"></i>
            </li>
            <li className="text-xl p-1.5 flex items-center">
              <i className="bx bxs-movie-play cursor-pointer"></i>
            </li>
            <li className="text-xl py-1.5 px-2 mt-0.5 flex items-center relative">
              <i className="fas fa-cog cursor-pointer"></i>
              <div
                className="w-4 h-4 text-xxs top-0.5 right-0 text-white absolute rounded-full
                   flex justify-center 
                      items-center bg-red-600 font-bold"
              >
                HD
              </div>
            </li>
            <li className="px-2 text-xl flex items-center">
              <i className="fas fa-tv cursor-pointer"></i>
            </li>
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
