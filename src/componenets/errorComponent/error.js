import React, { Component } from "react";
class Error extends Component {
  render() {
    return (
      <div className="error-container">
        <h1>Movie Not Found!</h1>
        <p>Please make sure all spellings are right</p>
      </div>
    );
  }
}

export default Error;
