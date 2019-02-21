import React, { Component } from "react";
import data from "../dataDatabase/moviesData";
import WOW from "wow.js";

class CategoryProduct extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  render() {
    return (
      <div className="item-container">
        {this.props.passData.length === 0
          ? data.comingsoon.map(item => {
              return (
                <div
                  key={item.id}
                  className="wow animated fadeInUp item-wrapper"
                >
                  <img alt="product img" src={item.posterUrl} />
                  <p>
                    <strong style={{ marginRight: 28 }}>Release Date: </strong>
                    {item.releasedate}
                  </p>
                  <h4>{item.title}</h4>
                </div>
              );
            })
          : this.props.passData.map(item => {
              return (
                <div
                  key={item.id}
                  className="wow animated fadeInUp item-wrapper"
                >
                  <img alt="product img" src={item.posterUrl} />
                  {item.releasedate ? (
                    <p>
                      <strong style={{ marginRight: 28 }}>
                        Release Date:{" "}
                      </strong>
                      {item.releasedate}
                    </p>
                  ) : item.releaseon ? (
                    <p>
                      <strong style={{ marginRight: 28 }}>Released On: </strong>
                      {item.releaseon}
                    </p>
                  ) : (
                    <p>
                      <strong style={{ marginRight: 20 }}>Revenue: </strong>
                      {item.budget}
                    </p>
                  )}

                  <h4>{item.title}</h4>
                </div>
              );
            })}
      </div>
    );
  }
}

export default CategoryProduct;
