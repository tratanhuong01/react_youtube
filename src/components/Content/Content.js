import React from "react";
import { useSelector } from "react-redux";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";

function Content(props) {
  //
  const view = useSelector((state) => state.view);
  //
  return (
    <div className="w-full">
      <div
        className={`${
          view.zoomIn ? "w-full" : "w-11/12 p-2"
        } mx-auto bg-white flex`}
      >
        {view.video && (
          <>
            <ContentLeft />
            {!view.zoomIn && <ContentRight />}
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
