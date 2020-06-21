import React, { Component } from "react";
import "./other.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import five from "./5.png";

class Other extends Component {
  render() {
    return (
      <div className="otherWrapper">
        <div className="otherContent">
          <h1 className="otherH1">OTHER PROJECTS</h1>
        </div>
        <div className="contentAPI">
          <h1 className="h1API">API Website</h1>
          <a href="https://github.com/Boo1122/IMDB">
            <img src={one} alt="one" className="apiIMG"></img>
          </a>

          <a href="https://github.com/Boo1122/IMDB">
            <img src={three} alt="three" className="apiIMG"></img>
          </a>
          <a href="https://github.com/Boo1122/IMDB">
            <img src={two} alt="two" className="apiIMG"></img>
          </a>
          <a href="https://github.com/Boo1122/IMDB">
            <img src={five} alt="five" className="apiIMG"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Other;
