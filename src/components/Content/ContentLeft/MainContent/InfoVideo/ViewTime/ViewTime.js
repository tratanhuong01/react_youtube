import React from "react";

function ViewTime({ video }) {
  return (
    <div className="w-1/3 py-1 text-gray-600 text-sm">
      {video.view} • {video.time}
    </div>
  );
}

export default ViewTime;
