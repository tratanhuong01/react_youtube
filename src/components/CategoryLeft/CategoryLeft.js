import React, { useState } from "react";
import { categoriesIcon, categoriesImage, categoriesOther, categoriesSetting } from "./categoriesIcon";
import ItemCategoryLeft from "./ItemCategoryLeft/ItemCategoryLeft";

function CategoryLeft({ refCategoryLeft, headerZoom, modal, headerLeft }) {
  //
  const [active, setActive] = useState(-1);
  //
  return (
    <div
      ref={refCategoryLeft}
      className={`w-20 ${headerZoom ? 'md:w-60' : 'md:w-24'} ${modal ? 'h-full bg-white w-60' :
        'h-screen top-0 pt-16 mt-4 overflow-hidden z-20 fixed hidden md:block'}`}
    >
      <div className={`w-full h-full overflow-scroll box-content pr-4 ${modal ? 'bg-white' : '-mt-2'}`}>
        {headerLeft && headerLeft}
        <ItemCategoryLeftLoad active={active} setActive={setActive} modal={modal}
          categories={categoriesIcon} headerZoom={headerZoom} />
        <ItemCategoryLeftLoad active={active} setActive={setActive} hidden={true} modal={modal}
          categories={categoriesImage} label='KÊNH ĐĂNG KÍ' headerZoom={headerZoom} />
        <ItemCategoryLeftLoad active={active} setActive={setActive} hidden={true} modal={modal}
          categories={categoriesOther} label='DỊCH VỤ KHÁC' headerZoom={headerZoom} />
        <ItemCategoryLeftLoad active={active} setActive={setActive} hidden={true} modal={modal}
          categories={categoriesSetting} headerZoom={headerZoom} />
      </div>
    </div>
  );
}

const ItemCategoryLeftLoad = ({ label, categories, active, setActive, headerZoom, hidden, modal }) => {
  return (
    <>
      {label && <p className={`font-bold text-xm pl-4 text-gray-800 my-2 hidden ${headerZoom ? 'md:flex' : ''}`}>
        {label}
      </p>}
      <div className={headerZoom ? '' : hidden ? 'hidden' : ''}>
        {categories.map((category) => {
          return category.id ? (
            <ItemCategoryLeft category={category} key={category.id} active={active}
              setActive={setActive} headerZoom={headerZoom} modal={modal} />
          ) : (
            <hr
              className={`my-2 border-1 border-solid border-gray-300 ${headerZoom ? '' : 'hidden'}`}
              key={category.id}
            />
          );
        })}
      </div>
    </>
  )
}

export default CategoryLeft;
