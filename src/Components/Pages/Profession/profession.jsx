import React, { Component } from "react";
import "./profession.css";

export class Profession extends Component {
  render() {
    return (
      <div className="profWrapper">
        <h1 className="profH1">Professional Experience</h1>
        <div className="profContent">
          <div className="miniWrap">
            <div className="period">
              <h1 className="year">2019 - 2020</h1>
            </div>
            <div className="desc">
              <p className="title" id="firstTitle">
                PRACTITIONER
              </p>
              <p className="title">ALPHA MODERN LANGUAGE CENTER</p>
              <p className="details">
                Professional practice in the domain of foreign languages, by
                drawing up raports, assisting in the supervision of examinations
                in foreign languages for accredited diplomas, corrrecting the
                mistakes of the students, both writing and speaking.
              </p>
            </div>
          </div>
          <div className="miniWrap">
            <div className="period">
              <h1 className="year">2014 - 2018</h1>
            </div>
            <div className="desc">
              <p className="title" id="firstTitle">
                VOLUNTEER
              </p>
              <p className="title">
                CARITAS - SOCIAL ASSISTANCE ORGANIZATION, PETROSANI
              </p>
              <p className="details">
                Volunteer who had the obligation to organize charitable events
                and fundraisings, to promote the organization in high schools,
                to assist detrimental families and groups in offering our care
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profession;
