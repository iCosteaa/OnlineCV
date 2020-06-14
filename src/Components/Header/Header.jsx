import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <button class="btn" id="aboutBtn">
            About
          </button>
          <button class="btn" id="hireBtn">
            <span>HIRE ME</span>
          </button>
          <button class="btn" id="otherBtn">
            Other Projects
          </button>
        </nav>
      </React.Fragment>
    );
  }
}
