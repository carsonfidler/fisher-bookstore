import React, { Component } from "react";

import "./App.css";
import { Navbar } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";


export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="lg" expand="lg">
          <Navbar.Brand>
            <Link to="/">What Can I Cook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/recipes">Recipes</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/login">Login/Sign Up</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}
