import React from "react";

function NameTag({ video }) {
  return (
    <div>
      <p className="text-blue-500 text-sm">{video.tag}</p>
      <p className="text-xl py-1">{video.name}</p>
    </div>
  );
}

export default NameTag;
