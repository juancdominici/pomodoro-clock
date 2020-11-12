import React, { useState } from "react";
import Session from "./components/Session"
import Break from "./components/Break"

class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isSession: true,
      sessionLength: 25,
      breakLength: 5,
      timerMinute: 25,
      timerSecond: 0,
    };
    this.incSessionCounter = this.incSessionCounter.bind(this);
    this.decSessionCounter = this.decSessionCounter.bind(this);
    this.incBreakCounter = this.incBreakCounter.bind(this);
    this.decBreakCounter = this.decBreakCounter.bind(this);
  }

  display = () => {
    const minutes = this.state.timerMinute;
    const seconds =
      this.state.timerSecond === 0
        ? "00"
        : this.state.timerSecond < 10
        ? "0" + this.state.timerSecond
        : this.state.timerSecond;

    return minutes + ":" + seconds;
  };

  incSessionCounter = () => {
    this.setState({
        sessionLength: this.state.sessionLength + 1,
    });
  };

  decSessionCounter = () => {
    this.setState({
        sessionLength: this.state.sessionLength - 1,
    });
  };

  incBreakCounter = () => {
    this.setState({
        breakLength: this.state.breakLength + 1,
    });
  };

  decBreakCounter = () => {
    this.setState({
        breakLength: this.state.breakLength - 1,
    });
  };

  render() {
    return (
      <div id="pomodoro-clock">
        <div id="timer">
          <div id="timer-laber">
            {this.state.isSession ? "Session" : "Break"}
          </div>
          <div id="time-left">{this.display()}</div>
        </div>
        <Session
          interval={this.state.sessionLength}
          onDecreaseSession={this.decSessionCounter}
          onIncreaseSession={this.incSessionCounter}
        />
        <Break
          interval={this.state.breakLength}
          onDecreaseBreak={this.decBreakCounter}
          onIncreaseBreak={this.incBreakCounter}
        />
        <div id="controls">
          <button id="start__stop">startstop</button>
          <button id="reset">reset</button>
        </div>
      </div>
    );
  }
}

export default Clock;