import React, { Component } from "react";
import "./education.css";

export class Education extends Component {
  render() {
    return (
      <div id="educationWrapper">
        <div>
          <h1 id="educationH1">Education</h1>
        </div>

        <div id="educationContent">
          <div id="books">
            <div className="book" id="book1">
              <div className="back" id="back1"></div>
              <div className="page6"></div>
              <div className="page5"></div>
              <div className="page4"></div>
              <div className="page3"></div>
              <div className="page2"></div>
              <div className="page1"></div>
              <div className="front" id="front1">
                <span className="spanEd">INFORMAL SCHOOL OF IT</span>
              </div>
            </div>
            <div className="book" id="book2">
              <div className="back" id="back2"></div>
              <div className="page6"></div>
              <div className="page5"></div>
              <div className="page4"></div>
              <div className="page3"></div>
              <div className="page2"></div>
              <div className="page1"></div>
              <div className="front" id="front2">
                <span className="spanEd">UNIVERSITY</span>
              </div>
            </div>
            <div className="book" id="book3">
              <div className="back" id="back3"></div>
              <div className="page6"></div>
              <div className="page5"></div>
              <div className="page4"></div>
              <div className="page3"></div>
              <div className="page2"></div>
              <div className="page1"></div>
              <div className="front" id="front3">
                <span className="spanEd">JUNIOR COLLEGE</span>
              </div>
            </div>
            <div className="book" id="book4">
              <div className="back" id="back4"></div>
              <div className="page6"></div>
              <div className="page5"></div>
              <div className="page4"></div>
              <div className="page3"></div>
              <div className="page2"></div>
              <div className="page1"></div>
              <div className="front" id="front4">
                <span className="spanEd">HIGH SCHOOL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
