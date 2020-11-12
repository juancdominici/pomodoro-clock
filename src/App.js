import React from "react";
import "./App.css";
import Clock from "./components/Clock";

const App = () => {
  return (
    <div id="container">
      <div id="leaf"></div>
      <Clock />
      <audio id="beep">
        <source
          src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav"
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default App;
