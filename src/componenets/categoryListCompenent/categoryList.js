import React from "react";
import data from "../dataDatabase/moviesData";
import CategoryProduct from "./categoryProduct";
import { Element } from "react-scroll";

class CategoryList extends React.Component {
  state = {
    productlist: [],
    activeSection: "coming-soon"
  };
  comingSoon = () => {
    this.setState({
      productlist: data.comingsoon,
      activeSection: "coming-soon"
    });
  };
  boxOffice = () => {
    this.setState({
      productlist: data.boxoffice,
      activeSection: "box-office"
    });
  };
  newRelease = () => {
    this.setState({
      productlist: data.newrelease,
      activeSection: "new-release"
    });
  };
  render() {
    return (
      <Element id="category" className="categoryList-container">
        <div className="container">
          <div className="categoryList-text-wrapper">
            <h5
              className={
                this.state.activeSection === "coming-soon" ? "active" : ""
              }
              onClick={this.comingSoon}
            >
              COMING SOON
            </h5>
            <h5
              className={
                this.state.activeSection === "box-office" ? "active" : ""
              }
              onClick={this.boxOffice}
            >
              BOX OFFICE
            </h5>
            <h5
              className={
                this.state.activeSection === "new-release" ? "active" : ""
              }
              onClick={this.newRelease}
            >
              NEW RELEASE
            </h5>
          </div>
          <div className=" categoryList-component-wrapper">
            <CategoryProduct
              passData={this.state.productlist}
              passAnimation={this.state.activeSection}
            />
          </div>
        </div>
      </Element>
    );
  }
}

export default CategoryList;
