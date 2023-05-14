import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import circleLogo from "/dblogo-whitecircle.png";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="align-center justify-center">
        <Navbar />
        <img src={circleLogo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

export default App;
