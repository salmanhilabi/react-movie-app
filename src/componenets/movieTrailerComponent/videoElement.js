import React, { Component } from "react";
import VideoUrls from "./videoUrls";
import data from "../dataDatabase/moviesData";

class VideoElement extends Component {
  state = {
    videosrc: "https://www.youtube.com/embed/vn9mMeWcgoM?controls=0",
    index: 0,
    categorywidth: 0,
    borderslide: 0,
    borderWidth: 0,
    isActive: 3,
    sliderWidth: 0,
    sliderLength: 0
  };
  componentWillMount() {
    if (window.innerWidth <= 550) {
      this.setState({
        sliderWidth: 100,
        sliderLength: 700,
        borderWidth: 10.921
      });
    } else if (window.innerWidth <= 930) {
      this.setState({
        sliderWidth: 100,
        sliderLength: 300,
        borderWidth: 25.483
      });
    } else if (window.innerWidth <= 1200) {
      this.setState({
        sliderWidth: 33.3,
        sliderLength: 166.5,
        borderWidth: 15.29
      });
    } else {
      this.setState({
        sliderWidth: 25,
        sliderLength: 100,
        borderWidth: 19.1125
      });
    }
  }
  changeUrl(src, id) {
    this.setState({ videosrc: src, isActive: id });
  }
  slideRight = () => {
    const index = this.state.index + 1;
    const borderslide = this.state.borderslide + this.state.borderWidth;
    const width = this.state.categorywidth + this.state.sliderWidth;
    this.state.categorywidth === this.state.sliderLength
      ? this.setState({
          categorywidth: 0,
          index: 0,
          borderslide: 0
        })
      : this.setState({
          categorywidth: width,
          index,
          borderslide
        });
  };
  slideLeft = () => {
    const index = this.state.index - 1;
    const borderslide = this.state.borderslide - this.state.borderWidth;
    const width = this.state.categorywidth - this.state.sliderWidth;
    this.state.categorywidth === 0
      ? this.setState({
          categorywidth: this.state.sliderLength,
          index: 8,
          borderslide: 76.45
        })
      : this.setState({
          categorywidth: width,
          index,
          borderslide
        });
  };
  render() {
    return (
      <div className="video-element-wrapper">
        <i className="fas fa-caret-left" onClick={this.slideLeft} />
        <div>
          <VideoUrls changevideo={this.state.videosrc} />
        </div>
        <div className="video-catogery-container">
          <div
            className="video-catogery"
            style={{
              left: `-${this.state.categorywidth}%`
            }}
          >
            {data.videourl.map(item => {
              return (
                <div
                  onClick={() => this.changeUrl(item.src, item.id)}
                  className={`video-img-wrapper`}
                  key={item.id}
                >
                  <img
                    alt="img"
                    src={item.imgsrc}
                    className={this.state.isActive === item.id ? "active" : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="custom-border">
          <span style={{ left: `${this.state.borderslide}%` }} />
        </div>
        <i className="fas fa-caret-right" onClick={this.slideRight} />
      </div>
    );
  }
}

export default VideoElement;
