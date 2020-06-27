import React, { Component } from "react";
import "./skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skillsWrapper">
        <h1 className="titleH1">Skills</h1>
        <div className="contentWrapper">
          <div className="firstSkills">
            <h4>Programming and 3D Modelling Skills</h4>
            <h4>HTML</h4>
            <div className="line line1">90%</div>
            <h4>CSS</h4>
            <div className="line line2">70%</div>
            <h4>Javascript</h4>
            <div className="line line3">35%</div>
            <h4>Git</h4>
            <div className="line line4">55%</div>
            <h4>React</h4>
            <div className="line line5">35%</div>
            <h4>Bootstrap</h4>
            <div className="line line6">25%</div>
            <h4>Blender</h4>
            <div className="line line7">20%</div>
            <h4>3Ds Max</h4>
            <div className="line line8">15%</div>
          </div>

          <div className="secondBox">
            <div className="Skills" id="languages">
              <div className="speechBubble" id="english">
                <span className="language">English</span>
                <span>Fluent</span>
              </div>
              <div id="centre">
                <span>Languages</span>
              </div>
              <div className="speechBubble" id="romanian">
                <span className="language">Romanian</span>
                <span>Native</span>
              </div>
              <div className="speechBubble" id="norwegian">
                <span className="language">Norwegian</span>
                <span>Advanced</span>
              </div>
              <div className="speechBubble" id="french">
                <span className="language">French</span>
                <span>Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

//Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
