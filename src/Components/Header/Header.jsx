import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage.jsx";
import Contact from "../Pages/Contact/contact.jsx";
import Other from "../Pages/Other/other.jsx";

export class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn" id="homeBtn">
              Home
            </button>
          </Link>

          <Link to="/contact">
            <button className="btn" id="hireBtn">
              <span>HIRE ME</span>
            </button>
          </Link>

          <Link to="/other" className="link">
            <button className="btn" id="otherBtn">
              Other Projects
            </button>
          </Link>
        </nav>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/other" element={<Other/>} />
      </Routes>
      </Router>
    );
  }
}
