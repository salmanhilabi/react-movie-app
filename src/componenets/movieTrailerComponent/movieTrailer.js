import React, { Component } from "react";
import VideoElement from "./videoElement";
import { Element } from "react-scroll";

class MovieTrailer extends Component {
  render() {
    return (
      <Element id="trailer" className="movietrailer-container">
        <i className="fas fa-film" />
        <h1>In Theater</h1>
        <VideoElement />
      </Element>
    );
  }
}

export default MovieTrailer;
