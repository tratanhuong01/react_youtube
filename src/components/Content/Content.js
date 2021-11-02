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
          view.zoomIn ? "w-full" : "content__main__app p-2"
        } mx-auto bg-white flex`}
      >
        {view.video && (
          <>
            <ContentLeft />
            {!view.zoomIn && <ContentRight type="right" />}
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
