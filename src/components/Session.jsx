import React from "react";
import { Row, Container, Button } from "react-bootstrap";

const Session = (props) => {
  const increaseCounter = () => {
    if (props.interval === 60) {
      return;
    }

    props.handleSession(true);
  };

  const decreaseCounter = () => {
    if (props.interval === 1) {
      return;
    }

    props.handleSession(false);
  };

  return (
    <Container id="session">
      <Row id="session-label">Session length</Row>
      <Row>
        <Button variant="dark" id="session-decrement" onClick={decreaseCounter}>
          -
        </Button>
        <div id="session-length">{props.interval}</div>
        {/* Default 25 min */}
        <Button variant="dark" id="session-increment" onClick={increaseCounter}>
          +
        </Button>
      </Row>
    </Container>
  );
};

export default Session;
