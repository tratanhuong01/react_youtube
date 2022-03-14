import React from "react";
import { useHistory } from "react-router";
import { PAGE_VIEW } from "../../../../constants/Config";
import * as viewsAction from "../../../../actions/view/index";
import { useDispatch } from "react-redux";

function VideoChild({ video, index }) {
  //
  const dispatch = useDispatch();
  const history = useHistory();
  //
  return (
    <div
      className={`${index ? "item__video__child" : "ml-2 flex py-2 item__video__child"
        } cursor-pointer`}
      style={index ? {} : { width: "100%" }}
    >
      <div
        onClick={async () => {
          await dispatch(viewsAction.updateInformation("reset", true));
          await history.push(`${PAGE_VIEW}/${video.slug}`);
        }}
        className={`${index ? "w-full mb-2" : "w-5/12 pr-3 pt-2"}`}
      >
        <img
          src={process.env.PUBLIC_URL + video.url}
          alt=""
          className={`w-full ${index ? "h-44 img-500 img-index" : "h-24"} object-cover `}
        />
      </div>
      <div className={`${index ? "w-full" : "w-7/12"}`}>
        <p
          onClick={async () => {
            await dispatch(viewsAction.updateInformation("reset", true));
            await history.push(`${PAGE_VIEW}/${video.slug}`);
          }}
          className="font-bold text-sm w-full whitespace-nowrap overflow-ellipsis overflow-hidden"
        >
          {video.name.replaceAll('_', ' ')}
        </p>
        <div className="text-gray-600 mt-1.5">
          <p className="text-sm">
            {video.poster} <i className="bx bxs-check-circle"></i>
          </p>
          <p className="text-sm">
            {video.view} * {video.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoChild;
