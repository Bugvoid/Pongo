import React from "react";
import "./App.css";

import logo from "./assets/comunikime.png";
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Comunikime" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
