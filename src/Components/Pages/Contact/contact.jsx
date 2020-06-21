import React, { Component } from "react";
import "./contact.css";
import Facebook from "./fb.png";
import Linkedin from "./linkedin.png";
import Instagram from "./instagram.png";

class Contact extends Component {
  render() {
    return (
      <div id="contactWrapper">
        <div id="contactContent">
          <div id="contactH1">
            <h1>CONTACT ME</h1>
          </div>
          <span className="contactSpan">
            If you are be interested in offering me a job, which I would very
            much appreciate, then you can contact me on these platforms:
          </span>
          <div className="icons">
            <a href="https://www.facebook.com/ioana.andrada.3">
              <img src={Facebook} className="icon" alt="facebook" />
            </a>

            <a href="https://www.linkedin.com/in/ioana-andrada-costea-9b161b190/">
              <img src={Linkedin} className="icon" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/w1stea/?hl=ro">
              <img src={Instagram} className="icon" alt="instagram" />
            </a>
          </div>
          <span className="contactSpan" id="secondSpan">
            Or you can send me an e-mail!
          </span>
          <span className="contactSpan" id="email">
            ioana.andrada.3@gmail.com
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
