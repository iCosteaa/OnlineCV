import React, { Component } from "react";
import "./Homepage.css";
import img from "./me.png";
import petrosani from "./petrosani.png";
import cluj from "./cluj.png";

export class Homepage extends Component {
  render() {
    return (
      <div id="homepage">
        <div id="nameWrapper">
          <h1 id="name">
            <span id="nameSpan">COSTEA IOANA</span>
          </h1>
          <span id="desc">
            {" "}
            <img src={img} id="imgMe" alt="me"></img>An unemployed and hungry
            student looking for a job in Web Development
          </span>
        </div>

        <div id="aboutWrapper">
          <div id="aboutTitle"></div>
          <h1 id="aboutH1">About me</h1>
          <div id="aboutContent">
            <div id="aboutText">
              <div id="places">
                <img src="http://www.rleonardi.com/interactive-resume/image/building-a.png"></img>
                <div id="fromLive">
                  <p>
                    I am from Petroșani, Hunedoara, but I currently live in
                    Cluj-Napoca
                  </p>
                  <p>I am studying at "Babeș-Bolyai" University</p>
                </div>
                <img src="http://www.rleonardi.com/interactive-resume/image/building-a.png"></img>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
