import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

function PreviewVideoMini({
  refVideo,
  refPreview,
  show,
  refMain,
  refFake,
  refReal,
}) {
  //
  const view = useSelector((state) => state.view);
  const [timeCurrent, setTimeCurrent] = useState(0);
  useLayoutEffect(() => {
    if (
      refMain &&
      refMain.current &&
      refReal &&
      refReal.current &&
      refFake &&
      refFake.current
    ) {
      const videoNew = document.getElementById("videoNew");
      videoNew.src = refVideo.current.src;
      const time = isNaN(
        ((refFake.current.offsetWidth + refReal.current.offsetWidth) /
          refMain.current.offsetWidth) *
          view.sec
      )
        ? 0
        : ((refFake.current.offsetWidth + refReal.current.offsetWidth) /
            refMain.current.offsetWidth) *
          view.sec;
      videoNew.currentTime = time;
      setTimeCurrent(time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);
  //
  return (
    <div
      ref={refPreview}
      className={`w-52 absolute bottom-full mb-2 ${show ? "" : "hidden"}`}
    >
      <div className="w-full relative">
        <video id="videoNew" src="" className="h-28 w-full"></video>
        <p className="text-white font-bold text-center my-2">
          {`${
            Math.floor(timeCurrent / 3600) < 10
              ? `0${Math.floor(timeCurrent / 3600)}`
              : Math.floor(timeCurrent / 3600)
          }:${
            Math.floor((timeCurrent % 3600) / 60) < 10
              ? `0${Math.floor((timeCurrent % 3600) / 60)}`
              : Math.floor((timeCurrent % 3600) / 60)
          }:${
            Math.floor((timeCurrent % 3600) % 60) < 10
              ? `0${Math.floor((timeCurrent % 3600) % 60)}`
              : Math.floor((timeCurrent % 3600) % 60)
          }`}
        </p>
      </div>
    </div>
  );
}

export default PreviewVideoMini;
