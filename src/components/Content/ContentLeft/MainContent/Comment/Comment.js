import React from "react";

function Comment(props) {
  return (
    <div className="w-full py-5">
      <p className="text-gray-600 text-sm flex items-center">
        456 binh luận
        <i className="fas fa-sort-amount-up text-xl mx-4"></i>
        <span>SẮP XẾP THEO</span>
      </p>
      <p className="py-10 font-500 text-center">
        Tính năng bình luận đã bị tắt.
      </p>
    </div>
  );
}

export default Comment;
