import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <button className="btn" id="homeBtn">
            Home
          </button>
          <button className="btn" id="aboutBtn">
            About
          </button>
          <button className="btn" id="hireBtn">
            <span>HIRE ME</span>
          </button>
          <button className="btn" id="otherBtn">
            Other Projects
          </button>
        </nav>
      </React.Fragment>
    );
  }
}
