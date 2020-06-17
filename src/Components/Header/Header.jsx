import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage.jsx";
import About from "../Pages/About/about.jsx";
import Contact from "../Pages/Contact/contact.jsx";
import Other from "../Pages/Other/other.jsx";

export class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <button className="btn" id="homeBtn">
            <Link to="/">Home</Link>
          </button>
          <button className="btn" id="aboutBtn">
            <Link to="/about">About</Link>
          </button>
          <button className="btn" id="hireBtn">
            <Link to="/contact">HIRE ME</Link>
          </button>
          <button className="btn" id="otherBtn">
            <Link to="/other">Other Projects</Link>
          </button>
        </nav>

        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/other" component={Other} />
      </Router>
    );
  }
}
