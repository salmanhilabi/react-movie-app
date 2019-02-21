import React, { Component } from "react";
import WOW from "wow.js";
import { Element } from "react-scroll";
function defaultState() {
  const arr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  const dir = ["Right", "Left"];
  const obj = { width: 0 };
  for (let i = 0; i < dir.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      obj[`animate${dir[i]}${arr[k]}`] = "";
    }
  }
  return obj;
}

class Showcase extends Component {
  constructor() {
    super();
    this.sliderInterval = null;
    this.animateInterval = null;
    this.state = defaultState();
  }
  componentDidMount() {
    this.widthSlider();
    this.startAnimate();
    const wow = new WOW();
    wow.init();
  }
  startAnimate = () => {
    const arr = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ];
    let counter = 1;
    this.animateInterval = setInterval(() => {
      if (counter === 9) {
        counter = 0;
        this.setState(defaultState());
      } else {
        const state = this.state;
        state[
          `animateLeft${arr[counter]}`
        ] = `animated fadeInLeftBig delay-${arr[counter].toLowerCase()}`;
        state[
          `animateRight${arr[counter]}`
        ] = `animated fadeInRightBig delay-${arr[counter].toLowerCase()}`;
        this.setState(state);
      }
      counter++;
    }, 7000);
  };

  widthSlider = () => {
    this.sliderInterval = setInterval(() => {
      const slide = this.state.width + 100;
      this.state.width === 800
        ? this.setState({
            width: 0
          })
        : this.setState({
            width: slide
          });
    }, 7000);
  };
  componentWillUnmount() {
    if (this.sliderInterval) clearInterval(this.sliderInterval);
    if (this.animateInterval) clearInterval(this.animateInterval);
  }
  render() {
    return (
      <Element id="showcase" className="showcase">
        <div
          className="img-container"
          ref="container"
          style={{ left: `-${this.state.width}%` }}
        >
          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie1.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftOne} movie-genre`}>
                <p>Action</p>
                <p>Fantasy</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightOne}`}>
                  Sucker Punch
                </h1>
                <h4 className={`${this.state.animateRightOne}`}>
                  Emily Browning, Vanessa Hudgens, Abbie Cornish
                </h4>
              </div>
              <div
                className={`${this.state.animateLeftOne} movie-btn
                `}
              >
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie2.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftTwo} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightTwo}`}>Iron Man 3</h1>
                <h4 className={`${this.state.animateRightTwo}`}>
                  Robert Downey Jr, Guy Pearce, Gwyneth Paltrow
                </h4>
              </div>
              <div className={`${this.state.animateLeftTwo} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie3.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftThree} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightThree}`}>Looper</h1>
                <h4 className={`${this.state.animateRightThree}`}>
                  {" "}
                  Joseph Gordon-Levitt, Bruce Willis, Emily Blunt
                </h4>
              </div>
              <div className={`${this.state.animateLeftThree} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie4.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftFour} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightFour}`}>
                  300 <br /> Rise of an Empire
                </h1>
                <h4 className={`${this.state.animateRightFour}`}>
                  Sullivan Stapleton, Eva Green, Lena Headey
                </h4>
              </div>
              <div className={`${this.state.animateLeftFour} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie5.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftFive} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightFive}`}>
                  Mortal Engines
                </h1>
                <h4 className={`${this.state.animateRightFive}`}>
                  Hera Hilmar, Robert Sheehan, Hugo Weaving
                </h4>
              </div>
              <div className={`${this.state.animateLeftFive} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie6.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftSix} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightSix}`}>
                  Detective Pikachu
                </h1>
                <h4 className={`${this.state.animateRightSix}`}>
                  Ryan Reynolds, Suki Waterhouse, Kathryn Newton
                </h4>
              </div>
              <div className={`${this.state.animateLeftSix} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie7.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftSeven} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightSeven}`}>
                  Avengers <br /> Infinity War
                </h1>
                <h4 className={`${this.state.animateRightSeven}`}>
                  Robert Downey Jr, Chris Evans, Scarlett Johansson
                </h4>
              </div>
              <div className={`${this.state.animateLeftSeven} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie8.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftEight} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightEight}`}>
                  Thor <br /> the God of Thunder
                </h1>
                <h4 className={`${this.state.animateRightEight}`}>
                  Chris Hemsworth, Anthony Hopkins, Natalie Portman
                </h4>
              </div>
              <div className={`${this.state.animateLeftEight} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrapper">
            <img alt="showcase img" src={require("../../images/movie9.jpg")} />
            <div className="img-text-container">
              <div className={`${this.state.animateLeftNine} movie-genre`}>
                <p>Action</p>
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
              <div className="movie-title">
                <h1 className={`${this.state.animateRightNine}`}>
                  Warcraft <br /> The Beginning
                </h1>
                <h4 className={`${this.state.animateRightNine}`}>
                  Travis Fimmel, Paula Patton, Ben Foster
                </h4>
              </div>
              <div className={`${this.state.animateLeftNine} movie-btn`}>
                <p>
                  <i className="fas fa-video" /> Watch Trailer
                </p>
                <p>
                  <i className="fas fa-shopping-cart" /> Buy Ticket
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Showcase;
