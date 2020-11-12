import React, { useState } from "react";
import Session from "./Session";
import Break from "./Break";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isSession: true,
      sessionLength: 25,
      breakLength: 5,
      timerMinute: 25,
      timerSecond: 0,
      intervalId: 0,
      playing: false,
    };

    this.sessionCounter = this.sessionCounter.bind(this);
    this.breakCounter = this.breakCounter.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  sessionCounter = (e) => {
    if (e) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timerMinute: this.state.sessionLength + 1,
      });
    } else {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timerMinute: this.state.sessionLength - 1,
      });
    }
  };

  breakCounter = (e) => {
    if (e) {
      this.setState({
        breakLength: this.state.breakLength + 1,
      });
    } else {
      this.setState({
        breakLength: this.state.breakLength - 1,
      });
    }
  };

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

  toggleInterval = () => {
    if (this.state.isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  };

  play = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId,
      playing: true,
    });
  };

  stop = () => {
    this.setState({
      playing: false,
    });
    clearInterval(this.state.intervalId);
    this.stopAudio();
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.state.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });

            this.toggleInterval(this.state.isSession);
          }
          this.playAudio();
        }
        this.setState({
          timerSecond: 59,
          timerMinute: this.state.timerMinute - 1,
        });
        break;
      default:
        this.setState({
          timerSecond: this.state.timerSecond - 1,
        });
        break;
    }
  };

  reset = () => {
    this.stop();
    this.setState({
      /* For full reset */
      sessionLength: 25,
      breakLength: 5,
      timerMinute: 25,
      timerSecond: 0,
      intervalId: 0,
      playing: false,
      /* For settings reset */
      /*
      timerSecond: 0,
      timerMinute: this.state.sessionLength, */
    });
  };

  playAudio = () => {
    const audio = document.getElementById("beep");
    audio.play();
  };

  stopAudio = () => {
    const audio = document.getElementById("beep");
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <div id="timer">
            <div id="timer-laber">
              {this.state.isSession ? "Session" : "Break"}
            </div>
            <div id="time-left">{this.display()}</div>
          </div>
        </Row>
        <Row>
          <Col>
            <Session
              interval={this.state.sessionLength}
              handleSession={this.sessionCounter}
            />
          </Col>
          <Col>
            <Break
              interval={this.state.breakLength}
              handleBreak={this.breakCounter}
            />
          </Col>
        </Row>
        <Row>
            <div id="controls">
              <Button
                variant="dark"
                id="start__stop"
                onClick={this.state.playing ? this.stop : this.play}
              >
                <p>►❚❚</p>
              </Button>
              <Button variant="dark" id="reset" onClick={this.reset}>
                <p>■</p>
              </Button>
            </div>
        </Row>
      </Container>
    );
  }
}

export default Clock;
