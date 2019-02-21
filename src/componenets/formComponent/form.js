import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onsubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search movie"
          onChange={this.props.onchange}
        />
      </form>
    );
  }
}

export default Form;
