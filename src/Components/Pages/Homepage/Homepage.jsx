import React, { Component } from "react";
import "./Homepage.css";
import { About } from "../About/about.jsx";

export class Homepage extends Component {
  render() {
    return (
      <div id="homepage">
        <div id="nameWrapper">
          <h1 id="name">
            <span id="nameSpan">COSTEA IOANA</span>
          </h1>
          <span id="desc">
            An unemployed and hungry student looking for a position in Web
            Development
          </span>
        </div>
        <About />
      </div>
    );
  }
}

export default Homepage;
