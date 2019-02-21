import React, { Component } from "react";
import Form from "./form";
import ProductLists from "./productList";
import axios from "axios";
import { Element } from "react-scroll";
import Error from "../errorComponent/error";
class FormWrapper extends Component {
  state = {
    movies: [],
    name: "",
    response: ""
  };

  onchange = event => {
    this.setState({ name: event.target.value });
  };

  onsubmit = event => {
    event.preventDefault();
    const nameValue = this.state.name;
    axios
      .get(`https://www.omdbapi.com/?apikey=bcfe7e46&s=${nameValue}`)
      .then(res => {
        const movies = res.data.Search;
        const response = res.data.Response;
        this.setState({ movies, response });
      });
  };

  render() {
    console.log(this.state.response);
    return (
      <Element id="form-wrapper" name="form-wrapper" className="form">
        <div className="form-wrapper">
          <Form onsubmit={this.onsubmit} onchange={this.onchange} />
        </div>
        {this.state.response === "False" ? (
          <Error />
        ) : (
          <ProductLists getdata={this.state} />
        )}
      </Element>
    );
  }
}

export default FormWrapper;
