import React, { Component, Fragment } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";

class Content extends Component {
  state = {
    videoMain: "",
    loading: false,
  };

  componentWillMount() {
    console.log("1");
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        videoMain: this.props.videos[0],
      });
    }, 3000);
  }
  componentDidMount() {
    console.log("3");
  }
  onLoadUI = (video) => {
    this.setState({
      videoMain: video,
    });
  };
  onRegisterChanel = (video) => {
    this.props.onRegisterChanel(video);
  };
  render() {
    return (
      <div className="w-full mt-16">
        <div className="w-11/12 mx-auto bg-white p-2 flex">
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <Fragment>
              <ContentLeft
                videoMain={this.state.videoMain}
                onLoadUI={this.onLoadUI}
                onRegisterChanel={this.onRegisterChanel}
              />
              <ContentRight
                videos={this.props.videos}
                onLoadUI={this.onLoadUI}
              />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
