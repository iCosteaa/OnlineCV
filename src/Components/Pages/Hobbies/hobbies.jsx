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
          <img src={book} alt="book" />
          <img src={drawing} alt="drawing" />
          <img src={gaming} alt="gaming" />
          <img src={gym} alt="gym" />
          <img src={travel} alt="travel" />
        </div>
      </div>
    );
  }
}

export default Hobbies;
