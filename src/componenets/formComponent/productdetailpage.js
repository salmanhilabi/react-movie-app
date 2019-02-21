import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
class ProductDetailPage extends React.Component {
  state = {
    movieIdSearch: []
  };

  componentDidMount() {
    const movieid = this.props.location.movieid;
    axios
      .get(`https://www.omdbapi.com/?apikey=bcfe7e46&i=${movieid}`)
      .then(res => {
        const movieById = res.data;
        this.setState({ movieIdSearch: movieById });
      });
  }

  render() {
    const {
      Poster,
      Title,
      Released,
      Runtime,
      Genre,
      imdbRating,
      Language,
      Actors,
      Plot
    } = this.state.movieIdSearch;
    return (
      <div className="product-detail-container">
        <Container className="product-wrapper">
          <Row>
            <Col lg="5" md="5" sm="12" xs="12" className="content-poster">
              {Poster === "N/A" ? (
                <img
                  alt="img"
                  src="https://consumercomplaintscourt.com/wp-content/uploads/2015/12/no_uploaded.png"
                />
              ) : (
                <img style={{ height: "80vh" }} alt="img" src={Poster} />
              )}
            </Col>
            <Col lg="7" md="7" sm="12" xs="12" className="content-detail ">
              <h4>{Title}</h4>
              <div className="content-detail-upper-layer">
                <p>
                  <strong>Released :</strong>
                  {Released}
                </p>
                <p>
                  <strong>Duration :</strong>
                  {Runtime}
                </p>
                <p>
                  <strong style={{ marginRight: 32 }}>Genres :</strong>
                  {Genre}
                </p>
                <p>
                  <strong style={{ marginRight: 18 }}>Language :</strong>
                  {Language}
                </p>
                <p>
                  <strong style={{ marginRight: 30 }}>Ratings :</strong>
                  {imdbRating}
                </p>
              </div>
              <div className="content-detail-middle-layer">
                <h5>Story: </h5>
                <p>{Plot}</p>
                <h5>Actors: </h5>
                <p style={{ fontSize: "1em" }}>{Actors}</p>
              </div>
              <Link className="exitbtn" to="/">
                Go Back
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ProductDetailPage;
