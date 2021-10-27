import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import * as viewsAction from "./actions/view/index";
import { useDispatch } from "react-redux";
function App(props) {
  //
  const videos = [
    {
      id: "1",
      name: "Cậu bé nhà quê thử lòng chó và cái kết",
      tag: "#mottrieulike #LộnXộn5 #Đen",
      url: "https://i9.ytimg.com/vi_webp/yKwIcQxAhRU/mqdefault.webp?v=59a11f47&sqp=CKyQ5IsG&rs=AOn4CLCiqtBAhiyme5GN6RRtL0NOpEPVpA",
      poster: "Hưởng vlog",
      avatar: "",
      slug: "cau-be-nha-que-thu-long-cho-va-cai-ket",
      file: "cau_be_nha_que_thu_long_cho_va_cai_ket",
      view: "63.098.234 lượt xem",
      time: "19 thg 1, 2020",
      like: "19 N",
      dislike: "1,1 N",
      isRegister: true,
    },
    {
      id: "2",
      name: "Cuộc sống hoang dã || Hến sông chấm muối ớt",
      slug: "cuoc-song-hoang-gia-hen-song-cham-moi-ot",
      file: "cuoc_song_hoang_gia_hen_song_cham_moi_ot",
      tag: "#freakd​ #lofi​ #tinhyeumauhong",
      url: "https://i9.ytimg.com/vi_webp/43Eu2hSiKBc/mqdefault.webp?v=5b1330ab&sqp=CKyQ5IsG&rs=AOn4CLBEjE1w9KsWiZ4P9ErVgd3-H7aJVA",
      avatar: "",
      poster: "Hưởng vlog",
      view: "7.098.234 lượt xem",
      time: "04 thg 01, 2021",
      like: "19 N",
      dislike: "1,1 N",
      isRegister: true,
    },
    {
      id: "3",
      name: "Nhạc lofi chill || Dịu dàng là ngày em đến ...",
      slug: "nhac-lofi-chill-dieu-dang-la-ngay-em-den",
      file: "nhac_lofi_chill_dieu_dang_la_ngay_em_den",
      tag: "#freakd​ #lofi​ #tinhyeumauhong",
      url: "https://i.ytimg.com/vi/zzY3HAmwr1E/maxresdefault.jpg",
      avatar: "",
      poster: "Freak D Music",
      view: "7.098.234 lượt xem",
      time: "04 thg 01, 2021",
      like: "19 N",
      dislike: "1,1 N",
      isRegister: true,
    },
    {
      id: "4",
      name: "Cuộc sống hoang dã || Nấu mỳ tơm trong ống tre ",
      slug: "cuoc-song-hoang-da-nau-my-tom-trong-ong-tre",
      file: "cuoc_song_hoang_da_nau_my_tom_trong_ong_tre",
      tag: "#freakd​ #lofi​ #tinhyeumauhong",
      url: "https://i9.ytimg.com/vi/QZ2EzCoUWwI/mq2.jpg?sqp=CIic5IsG&rs=AOn4CLB4PELmD7kbK70oUDDzMv5QdZuiGw",
      avatar: "",
      poster: "Hưởng vlog",
      view: "7.098.234 lượt xem",
      time: "04 thg 01, 2021",
      like: "19 N",
      dislike: "1,1 N",
      isRegister: true,
    },
    {
      id: "5",
      name: "Anh hưởng review về cốc lắc rơm #Seri#1",
      slug: "anh-huong-review-ve-coc-lac-seri-1",
      file: "anh_huong_review_ve_coc_lac_seri_1",
      tag: "#freakd​ #lofi​ #tinhyeumauhong",
      url: "https://i9.ytimg.com/vi_webp/bMi-R_Qv0f4/mqdefault.webp?v=5b663771&sqp=CLSe5IsG&rs=AOn4CLCX_4GjvkX3N1lLPaATxmBae1slTw",
      avatar: "",
      poster: "Đời Sống Anh Hưởng",
      view: "7.098.234 lượt xem",
      time: "04 thg 01, 2021",
      like: "19 N",
      dislike: "1,1 N",
      isRegister: true,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(viewsAction.updateInformation("videos", videos));
    //
  }, []);
  //
  return (
    <Router>
      <Switch>
        {routes &&
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            );
          })}
      </Switch>
    </Router>
  );
}

export default App;
