import React from "react";

function ItemCategoryLeft({ category, active }) {
  return (
    <div
      className={`w-full p-1.5 cursor-pointer flex items-center ${
        active === category.id ? "bg-gray-300 font-bold" : " hover:bg-gray-100"
      }`}
    >
      <div className="w-full md:w-12 flex items-center justify-center mr-5">
        {category.icon ? (
          <i className={`${category.icon} text-2xl mx-auto md:mx-0`}></i>
        ) : (
          <img
            src={category.image}
            alt=""
            className="w-7 h-7 rounded-full mx-auto md:mx-0.5"
          />
        )}
      </div>
      <span className="hidden md:flex">{category.name}</span>
    </div>
  );
}

export default ItemCategoryLeft;
