import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header.jsx";
import { Homepage } from "./Components/Pages/Homepage/Homepage.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
