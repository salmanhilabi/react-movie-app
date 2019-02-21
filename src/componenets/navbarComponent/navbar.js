import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          RMD <span>React Movie Database</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              to="showcase"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className="nav-link"
            >
              <span>Home</span>
            </Link>
            <Link
              to="form-wrapper"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className="nav-link"
            >
              <span>Search</span>
            </Link>
            <Link
              to="category"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-link"
            >
              <span>Category</span>
            </Link>
            <Link
              to="movie-grid"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-link"
            >
              <span>Popular</span>
            </Link>
            <Link
              to="trailer"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-link"
            >
              <span>Trailer</span>
            </Link>
            <Link
              to="articles"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-link"
            >
              <span>Article</span>
            </Link>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-link"
            >
              <span>Info</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
