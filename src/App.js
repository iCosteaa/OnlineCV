import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
