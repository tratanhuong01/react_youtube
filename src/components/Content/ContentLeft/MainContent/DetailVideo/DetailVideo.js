import React, { Component } from "react";

class DetailVideo extends Component {
  onRegisterChanel = () => {
    this.props.onRegisterChanel(this.props.video);
  };
  render() {
    return (
      <div
        className="w-full py-5 border-gray-200 border-b-2 border-solid 
        flex relative"
      >
        <div className="w-1/12">
          <img
            src={process.env.PUBLIC_URL + this.props.video.url}
            className="w-14 h-14 object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="w-11/12">
          <p className="text-sm pt-4   font-bold">
            {process.env.PUBLIC_URL + this.props.video.poster}
            <i className="bx bxs-check-circle ml-1"></i>
          </p>
          <p className="py-7">
            {process.env.PUBLIC_URL + this.props.video.name}
          </p>
          <p className="text-gray-600 text-sm">HIỂN THỊ THÊM</p>
        </div>
        <button
          onClick={this.onRegisterChanel}
          className={
            this.props.video.isRegister === false
              ? "font-bold px-4 py-2.5 absolute top-6 right-3 rounded-sm text-sm bg-red-600 text-white "
              : "font-bold px-4 py-2.5 absolute top-6 right-3 rounded-sm text-sm bg-gray-600 text-white "
          }
        >
          {this.props.video.isRegister === true ? "ĐÃ ĐĂNG KÍ" : "ĐĂNG KÍ"}
        </button>
      </div>
    );
  }
}

export default DetailVideo;
