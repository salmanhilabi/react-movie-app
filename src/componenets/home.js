import React from "react";
import Showcase from "./showcaseComponent/showCase";
import FormWrapper from "./formComponent/formWrapper";
import MovieGrid from "./movieGridComponent/movieGrid";
import MovieTrailer from "./movieTrailerComponent/movieTrailer";
import Footer from "./footerComponent/footer";
import CategoryList from "./categoryListCompenent/categoryList";
import ArticleGrid from "./articleGridCompenent/articleGrid";
import Navigation from "./navbarComponent/navbar";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Showcase />
        <FormWrapper />
        <CategoryList />
        <MovieGrid />
        <MovieTrailer />
        <ArticleGrid />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
