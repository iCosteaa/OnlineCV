import React, { Component } from "react";
import "./hobbies.css";
import book from "./book.png";
import drawing from "./drawing.png";
import gaming from "./gaming.png";
import gym from "./gym.png";
import travel from "./travel.png";

export class Hobbies extends Component {
  render() {
    return (
      <div className="hobbiesWrapper">
        <h1 className="hobH1">Hobbies</h1>
        <div className="iconsHob">
          <img src={book} />
          <img src={drawing} />
          <img src={gaming} />
          <img src={gym} />
          <img src={travel} />
        </div>
      </div>
    );
  }
}

export default Hobbies;
