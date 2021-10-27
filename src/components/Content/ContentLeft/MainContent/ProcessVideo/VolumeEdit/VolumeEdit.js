import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as viewsAction from "../../../../../../actions/view/index";
function VolumeEdit({ refVideo }) {
  //
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  const refCursor = useRef(null);
  const refVolume = useRef(view.volume);
  useEffect(() => {
    if (refVideo && refVideo.current) {
      refVideo.current.volume = view.volume / 100;
    }
  }, []);
  const eventMouse = (e) => {
    const rect = e.target.getBoundingClientRect();
    const left = e.clientX - rect.left; //x position within the element.
    if (refVideo && refVideo.current) {
      dispatch(
        viewsAction.updateInformation(
          "volume",
          (left / 80 > 1 ? 1 : left / 80) * 100
        )
      );
      refVideo.current.volume = ((left / 80 > 1 ? 1 : left / 80) * 100) / 100;
    }
  };
  //
  return (
    <div className="hover__item flex">
      <li className="text-xl flex items-center mx-3">
        <i
          onClick={() => {
            if (refVideo && refVideo.current) {
              if (view.volume <= 0) {
                dispatch(
                  viewsAction.updateInformation("volume", refVolume.current)
                );
                refVideo.current.volume = refVolume.current / 100;
              } else {
                dispatch(viewsAction.updateInformation("volume", 0));
                refVideo.current.volume = 0;
              }
            }
          }}
          className={`${
            view.volume <= 0 ? "bx bx-volume-mute" : "bx bxs-volume-full"
          } cursor-pointer`}
        ></i>
      </li>
      <div className="relative item items-center" style={{ width: 80 }}>
        <div
          onClick={eventMouse}
          className="py-0.5 bg-gray-500 w-full cursor-pointer"
        ></div>
        <div className="absolute flex items-center left-0">
          <div
            onClick={eventMouse}
            className="py-0.5 bg-gray-200 cursor-pointer"
            style={{ width: `${(view.volume * 80) / 100}px` }}
          ></div>
          <div
            onClick={eventMouse}
            onMouseDown={eventMouse}
            onMouseUp={eventMouse}
            ref={refCursor}
            className="-ml-1.5 h-3 w-3 rounded-full bg-white cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default VolumeEdit;
