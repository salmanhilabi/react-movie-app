import React from "react";
import data from "../dataDatabase/moviesData";
import WOW from "wow.js";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
class MovieGrid extends React.Component {
  state = {};
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  render() {
    return (
      <Element id="movie-grid" className="container-fluid moviegrid">
        <Row>
          {data.griddata.map(item => (
            <Col
              lg="3"
              md="6"
              sm="6"
              xs="12"
              className="wow animated fadeInLeftBig grid-content-wrapper"
              key={item.id}
            >
              <img alt="img" src={item.posterUrl} />
              <div className="text-animation-wrapper">
                <h4>{item.title}</h4>
                <p>{item.genres}</p>
                <button>view more</button>
              </div>
            </Col>
          ))}
        </Row>
      </Element>
    );
  }
}

export default MovieGrid;
