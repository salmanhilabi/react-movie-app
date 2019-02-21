import React from "react";
import WOW from "wow.js";
import { Element } from "react-scroll";

class ArticleGrid extends React.Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  render() {
    return (
      <Element id="articles" className="article-container">
        <img alt="article img" src={require("../../images/articles.png")} />
        <div className="article-wrapper">
          <h2>ARTICLES</h2>
          <div className="article-grid-wrapper">
            <div className="wow animated fadeInUp delay-1 article-grid one">
              <div>
                <h5>Surprising Facts About Dinosaur</h5>
                <p>
                  Dave Paul <span>8d ago</span>
                </p>
              </div>
            </div>
            <div className="wow animated fadeInUp delay-2 article-grid two">
              <div>
                <h5>Humanity Embraces Its Alien Overlords</h5>
                <p>
                  Stacy McKee <span>12h ago</span>
                </p>
              </div>
            </div>
            <div className="wow animated fadeInUp delay-3 article-grid three">
              <div>
                <h5>Terrific World design and Visual Effect</h5>
                <p>
                  Joeseph Kwan <span>4d ago</span>
                </p>
              </div>
            </div>
            <div className="wow animated fadeInUp delay-4 article-grid four">
              <div>
                <h5>Who will die in Avengers Endgame</h5>
                <p>
                  Jeff Morgan <span>6d ago</span>
                </p>
              </div>
            </div>
            <div className="wow animated fadeInUp delay-5 article-grid five">
              <div>
                <h5>
                  The underwater kingdom ruled by the power-hungry King Orm
                </h5>
                <p>
                  Peter Lee <span>1d ago</span>
                </p>
              </div>
            </div>
            <div className="wow animated fadeInUp delay-6 article-grid six">
              <div>
                <h5>Top 5 mind blowing Animation effects of this movie</h5>
                <p>
                  Lana Heyman <span>9h ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default ArticleGrid;
