import React, { useEffect, useRef, useState } from "react";
import ProcessVideo from "./ProcessVideo/ProcessVideo";
import video from "../../../../assets/videos/video.mp4";
function VideoShow({ videoData }) {
  //
  const [max, setMax] = useState(false);
  const [play, setPlay] = useState(false);
  const [sec, setSec] = useState(0);
  const [secCurrent, setSecCurrent] = useState(0);
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.keyCode === 27) {
        setMax(false);
      }
    };
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp, true);
    };
  }, []);
  const refVideo = useRef(null);
  useEffect(() => {
    if (refVideo && refVideo.current) {
      if (!play) refVideo.current.pause();
      else refVideo.current.play();
    }
  }, [play]);
  useEffect(() => {
    let interval = null;
    if (secCurrent >= sec) {
      clearInterval(interval);
    } else {
      if (play) {
        interval = setInterval(() => {
          setSecCurrent((pre) => pre + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [play]);
  //
  return (
    <div className={`w-full ${max ? "fixed h-screen top-0 left-0 z-50" : ""}`}>
      <div className={`w-full  ${max ? "" : "pt-4"} relative`}>
        <video
          ref={refVideo}
          className={`w-full object-cover${max ? "h-screen" : "h-32rem"}`}
          src={video}
          onLoadedMetadata={() =>
            refVideo.current && setSec(refVideo.current.duration)
          }
          autoPlay
        />
        <ProcessVideo
          secCurrent={secCurrent}
          sec={sec}
          setSec={setSec}
          max={max}
          setMax={setMax}
          refVideo={refVideo}
          play={play}
          setPlay={setPlay}
          setSecCurrent={setSecCurrent}
        />
      </div>
    </div>
  );
}

export default VideoShow;
