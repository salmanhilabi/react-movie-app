import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ProductLists extends React.Component {
  state = {
    tempData: []
  };
  componentDidMount() {
    this.tempData();
  }
  tempData = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=bcfe7e46&s=guardians")
      .then(res => {
        this.setState({
          tempData: res.data.Search
        });
      });
  };
  render() {
    return (
      <div className="card-ul-list-wrapper">
        <div className="container">
          {this.props.getdata.name === "" ? (
            <ul className="productList-grid">
              {this.state.tempData.map(tmpmovie => {
                return (
                  <li key={tmpmovie.imdbID}>
                    <Link
                      to={{
                        pathname: "./productdetail",
                        movieid: tmpmovie.imdbID
                      }}
                    >
                      <div className="searchList-card">
                        {tmpmovie.Poster === "N/A" ? (
                          <img
                            alt="Card img cap"
                            src="https://consumercomplaintscourt.com/wp-content/uploads/2015/12/no_uploaded.png"
                          />
                        ) : (
                          <img alt="Card img cap" src={tmpmovie.Poster} />
                        )}
                        <h5>{tmpmovie.Title.slice(0, 16)}</h5>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="productList-grid">
              {this.props.getdata.movies.map(movie => (
                <li key={movie.imdbID}>
                  <Link
                    to={{ pathname: "./productdetail", movieid: movie.imdbID }}
                  >
                    <div className="searchList-card">
                      {movie.Poster === "N/A" ? (
                        <img
                          alt="Card img cap"
                          src="https://consumercomplaintscourt.com/wp-content/uploads/2015/12/no_uploaded.png"
                        />
                      ) : (
                        <img alt="Card img cap" src={movie.Poster} />
                      )}
                      <h5>{movie.Title.slice(0, 16)}</h5>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
export default ProductLists;
