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
              <div className="page6">
                <span className="edProf">INTRO IN IT COURSE</span>
                <span className="edProf">WEB DEVELOPMENT COURSE</span>
              </div>
              <div className="page5">
                <span className="edPeriod">SEPT 2019 - NOV 2019</span>
                <span className="edPeriod">NOV 2019 - JUNE 2020</span>
              </div>
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
              <div className="page6">
                <span className="edProf">
                  "BABES BOLYAI" UNIVERSITY, FACULTY OF LETTERS, ENGLISH MINOR
                  NORWEGIAN MAJOR, DEGREE IN LANGUAGE AND LITERATURE,
                  CLUJ-NAPOCA
                </span>
              </div>
              <div className="page5">
                <span className="edPeriod">OCT 2018 - PRESENT</span>
              </div>
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
              <div className="page6">
                <span className="edProf">
                  VOCATIONAL TRAINING DEGREE IN TOURISTIC GUIDE, NATIONAL
                  COLLEGE "HERMES", PETROSANI
                </span>
              </div>
              <div className="page5">
                <span className="edPeriod">SEPT 2019 - JUNE 2020</span>
              </div>
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
              <div className="page6">
                <span className="edProf">
                  PHILOLOGY, ENGLISH INTENSIVE, NATIONAL COLLEGE "MIHAI
                  EMINESCU" PETROSANI
                </span>
              </div>
              <div className="page5">
                <span className="edPeriod">SEPT 2014 - JUNE 2018</span>
              </div>
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
