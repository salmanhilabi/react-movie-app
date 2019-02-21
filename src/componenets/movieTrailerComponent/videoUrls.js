import React, { Component } from "react";

class VideoUrls extends Component {
  render() {
    return (
      <div className="video-player">
        <iframe
          title="video"
          width="100%"
          height="100%"
          src={this.props.changevideo}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default VideoUrls;
