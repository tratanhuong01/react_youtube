import React, { useState } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";

function Content({ videos, onRegisterChanel }) {
  //
  const [videoMain, setVideoMain] = useState(videos[0]);
  //
  return (
    <div className="w-full mt-16">
      <div className="w-11/12 mx-auto bg-white p-2 flex">
        {videoMain && (
          <>
            <ContentLeft
              videoMain={videoMain}
              onLoadUI={setVideoMain}
              onRegisterChanel={onRegisterChanel}
            />
            <ContentRight videos={videos} onLoadUI={setVideoMain} />
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
