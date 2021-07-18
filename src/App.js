import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
class App extends Component {
  componentWillMount() {
    this.setState({
      myVideo: [
        {
          id: "1",
          name: "Đen - một triệu like ft. Thành Đồng (M/V)",
          tag: "#mottrieulike #LộnXộn5 #Đen",
          url: "image/1.PNG",
          poster: "Đen Vâu",
          avatar: "",
          view: "63.098.234 lượt xem",
          time: "19 thg 1, 2020",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: true,
        },
        {
          id: "2",
          name: "Tình Yêu Màu Hồng (Lofi Ver.) - Hồ Văn Quý x Xám x Freak D",
          tag: "#freakd​ #lofi​ #tinhyeumauhong",
          url: "image/2.PNG",
          avatar: "",
          poster: "Freak D Music",
          view: "7.098.234 lượt xem",
          time: "04 thg 01, 2021",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: true,
        },
        {
          id: "3",
          name: "BINZ x ĐEN - CHO MÌNH EM (Studio Session)",
          tag: "#ChoMinhEm #Binz #Den",
          url: "image/3.PNG",
          avatar: "",
          poster: "Binz Da Poet",
          view: "24.742.474 lượt xem",
          time: "26 thg 3, 2020",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: false,
        },
        {
          id: "4",
          name: "Vì Ngày Hôm Nay Em Cưới Rồi, Chẳng Thể Tìm Được Em..",
          tag: "#HaSang #changthetimduocem #lofibuon",
          url: "image/4.PNG",
          avatar: "",
          poster: "Hạ sang",
          view: "4.742.474 lượt xem",
          time: "8 thg 12, 2020",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: false,
        },
        {
          id: "5",
          name: "MV Thế Phong Tình - BlackBi ft DT ft Elbi || FAPtv",
          tag: "#faptv #the_phong_tinh",
          url: "image/5.PNG",
          avatar: "",
          poster: "FAPTV",
          view: "16.742.474 lượt xem",
          time: "9 thg 1, 2020",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: false,
        },
        {
          id: "6",
          name:
            "SAO CHA KHÔNG - PHAN MẠNH QUỲNH | OFFICIAL MV | OST BỐ GIÀ 2021",
          tag: "#BoGia​ #BoGiaDienAnh​​ #TranThanh​",
          url: "image/6.PNG",
          avatar: "",
          poster: "Trấn Thành Town",
          view: "16.320.049 lượt xem",
          time: "12 thg 3, 2021",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: false,
        },
        {
          id: "7",
          name: "3107-2 - Sau Này Liệu Chúng Ta - Sợ Lắm 2 ft. Hẹn Yêu - P2",
          tag: "#lofi​ #chill",
          url: "image/7.PNG",
          avatar: "",
          poster: "Pii Music",
          view: "13.324.029 lượt xem",
          time: "5 thg 3, 2021",
          like: "19 N",
          dislike: "1,1 N",
          isRegister: false,
        },
      ],
    });
  }
  findChanel = (videoSearch) => {
    var { myVideo } = this.state;
    // var result = -1;
    // myVideo.forEach((video, index) => {
    //   if (videoSearch.id === video.id) result = index;
    // });
    return myVideo.findIndex((video) => videoSearch.id === video.id);
    // return result;
  };
  onRegisterChanel = (video) => {
    var index = this.findChanel(video);
    var { myVideo } = this.state;
    if (index !== -1) myVideo[index].isRegister = !myVideo[index].isRegister;
    this.setState({
      myVideo: myVideo,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Content
          videos={this.state.myVideo}
          onRegisterChanel={this.onRegisterChanel}
        />
      </div>
    );
  }
}

export default App;
