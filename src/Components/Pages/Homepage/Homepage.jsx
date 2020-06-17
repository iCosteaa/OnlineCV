import React, { Component } from "react";
import "./Homepage.css";

export class Homepage extends Component {
  render() {
    return (
      <div id="homepage">
        <div id="nameWrapper">
          <h1 id="name">
            <span id="nameSpan">COSTEA IOANA</span>
          </h1>
          <span id="desc">Unemployed and hungry student</span>
        </div>

        <div id="game"></div>
      </div>
    );
  }
}

export default Homepage;
