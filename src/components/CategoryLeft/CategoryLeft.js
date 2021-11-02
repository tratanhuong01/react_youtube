import React from "react";
import ItemCategoryLeft from "./ItemCategoryLeft/ItemCategoryLeft";

function CategoryLeft({ refCategoryLeft }) {
  //
  const categoriesIcon = [
    {
      id: 1,
      icon: "bx bx-home",
      name: "Trang chủ",
    },
    {
      id: 2,
      icon: "bx bxs-plane-take-off",
      name: "Khám phá",
    },
    {
      id: 3,
      icon: "bx bxl-youtube",
      name: "Kênh đăng kí",
    },
    {},
    {
      id: 4,
      icon: "bx bx-library",
      name: "Thư viện",
    },
    {
      id: 5,
      icon: "bx bx-history",
      name: "Lịch sử xem",
    },
    {
      id: 6,
      icon: "bx bx-stopwatch",
      name: "Xem sau",
    },
    {
      id: 7,
      icon: "bx bx-like",
      name: "Đã thích",
    },
    {},
  ];
  const categoriesImage = [
    {
      id: 1,
      image:
        "https://yt3.ggpht.com/fWOA_4cbmO5FVbuyLJGe3MoWvXh8Njgh0xcX9Kv6lvsIlHN_Pm6z00QGPgVpaBmcgIdvLKnxSQ=s88-c-k-c0x00ffffff-no-rj",
      name: "Âm nhạc",
    },
    {
      id: 2,
      image:
        "https://yt3.ggpht.com/2KAW6dEeWsk1ibjFTv3Tc8KM_3CyptGFj3F5mf4itV0ckg6dv0XCEwBRgkb37UHWuMbgNy0uADQ=s88-c-k-c0x00ffffff-no-rj",
      name: "Thể thao",
    },
    {
      id: 3,
      image:
        "https://yt3.ggpht.com/or5_RZpQCNivv4VZTanLkw0CwrHJwvEMW6fpCWy15Ln_sOxVCMlwhF6l9pcyo5_Qur71ztjM7c8=s88-c-k-c0x00ffffff-no-rj",
      name: "Trò chơi",
    },
    {
      id: 4,
      image:
        "https://yt3.ggpht.com/pZxo_dJtADS-AkEx1mnPpc49paUy_aQywNgHju68VLQRMWJ4z30_thCXaNzERG8Vn74xPS-LLw=s88-c-k-c0x00ffffff-no-rj",
      name: "Tin tức",
    },
    {},
  ];
  const categoriesOther = [
    {
      id: 1,
      icon: "bx bx-game",
      name: "Trò chơi",
    },
    {
      id: 2,
      icon: "bx bx-station",
      name: "Sự kiện trực tiếp",
    },
    {
      id: 3,
      icon: "bx bx-drink",
      name: "Thể thao",
    },
    {},
  ];
  const categoriesSetting = [
    {
      id: 1,
      icon: "fas fa-cog",
      name: "Cài đặt",
    },
    {
      id: 2,
      icon: "bx bx-flag",
      name: "Lịch sử báo cáo",
    },
    {
      id: 3,
      icon: "bx bx-help-circle",
      name: "Trợ giúp",
    },
    {
      id: 4,
      icon: "bx bxs-contact",
      name: "Gửi phản hồi",
    },
    {},
  ];
  //
  return (
    <div
      ref={refCategoryLeft}
      className="w-20 md:w-60 h-screen top-0 pt-16 mt-4 overflow-hidden fixed"
    >
      <div className="w-full h-full overflow-scroll box-content pr-4">
        {categoriesIcon.map((category) => {
          return category.id ? (
            <ItemCategoryLeft category={category} key={category.id} />
          ) : (
            <hr
              className="my-2 border-1 border-solid border-gray-300"
              key={category.id}
            />
          );
        })}
        <p className="font-bold text-xm pl-4 text-gray-800 my-2 hidden md:flex">
          KÊNH ĐĂNG KÍ
        </p>
        {categoriesImage.map((category) => {
          return category.id ? (
            <ItemCategoryLeft category={category} key={category.id} />
          ) : (
            <hr
              className="my-2 border-1 border-solid border-gray-300"
              key={category.id}
            />
          );
        })}
        <p className="font-bold text-xm pl-4 text-gray-800 my-2  hidden md:flex">
          DỊCH VỤ KHÁC
        </p>
        {categoriesOther.map((category) => {
          return category.id ? (
            <ItemCategoryLeft category={category} key={category.id} />
          ) : (
            <hr
              className="my-2 border-1 border-solid border-gray-300"
              key={category.id}
            />
          );
        })}
        {categoriesSetting.map((category) => {
          return category.id ? (
            <ItemCategoryLeft category={category} key={category.id} />
          ) : (
            <hr
              className="my-2 border-1 border-solid border-gray-300"
              key={category.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryLeft;
