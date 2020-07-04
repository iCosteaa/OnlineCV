import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <div id="aboutWrapper">
        <div id="aboutTitle">
          <h1 id="aboutH1">About me</h1>
        </div>

        <div id="birth">
          <div id="firstCircle">
            <p className="dmy" id="year">
              2000
            </p>
          </div>
          <div id="secondCircle">
            <p className="dmy" id="day">
              3rd
            </p>
          </div>
          <div id="thirdCircle">
            <p className="dmy" id="born">
              I was born on
            </p>
            <p className="dmy" id="month">
              March
            </p>
          </div>
        </div>

        <div id="aboutContent">
          <div id="aboutAndCircles">
            <div id="aboutText">
              <div id="aboutSummary">
                A creative student who thinks outside the box and continously
                seeks to learn and grow in a work environment that would give me
                a break for my career path.
              </div>
            </div>
            <div id="circles">
              <div className="dataCircle">
                <span className="percentageTrait">30%</span>
                <span className="nameTrait">Creativity</span>
              </div>
              <div className="dataCircle" id="ambition">
                <span className="percentageTrait" id="ambitionP">
                  20%
                </span>
                <span className="nameTrait" id="ambitionT">
                  Ambition
                </span>
              </div>
              <div className="dataCircle" id="intelligence">
                <span className="percentageTrait">50%</span>
                <span className="nameTrait">Intelligence</span>
              </div>
              <span id="eq">=</span>
              <div className="dataCircle" id="total">
                <span className="percentageTrait">100%</span>
                <span className="nameTrait">Willingness to learn!</span>
              </div>
            </div>
          </div>
          <div id="places">
            <div className="petCJ"></div>
            <div id="placeData">
              <p>
                I am from <span>Petroșani</span> but I currently live in
                <span> Cluj-Napoca</span>
              </p>
            </div>
            <div className="petCJ"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
