import React from "react";

function ItemCategoryLeft({ category, active, setActive, headerZoom, modal }) {
  return (
    <div
      onClick={() => category.unClick ? '' : setActive(category.id)}
      className={`w-full p-2 cursor-pointer text-sm flex ${headerZoom ? '' : modal ? '' : 'flex-col'} items-center 
      ${active === category.id ? "bg-gray-200 font-semibold" : " hover:bg-gray-100"}`}>
      <div className={`${modal ? 'mr-5' : headerZoom ? 'md:w-12 lg:mr-5' : ''} flex items-center justify-center`}>
        {!category.image ? (
          <svg viewBox="0 0 24 24" className={`w-6 h-6 ${modal ? '' : 'block'}`} focusable="false">
            <g><path d={active === category.id ? category.active : category.inActive}>
            </path>
            </g>
          </svg>
        ) : (
          <img
            src={category.image}
            alt=""
            className={`w-7 h-7 rounded-full ${modal ? '' : 'block'} mx-auto md:mx-0.5`}
          />
        )}
      </div>
      <span className={`${modal ? '' : 'hidden'} ${headerZoom ? 'md:flex' : 'text-xs md:block text-center'}`}>{category.name}</span>
    </div>
  );
}

export default ItemCategoryLeft;
