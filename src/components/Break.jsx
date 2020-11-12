import React from "react";
import { Row, Container, Button } from "react-bootstrap";

const Break = (props) => {
  const increaseCounter = () => {
    if (props.interval === 60) {
      return;
    }

    props.handleBreak(true);
  };

  const decreaseCounter = () => {
    if (props.interval === 1) {
      return;
    }

    props.handleBreak(false);
  };

  return (
    <Container id="break">
      <Row id="break-label">Break length</Row>
      <Row>
        <Button variant="dark" id="break-decrement" onClick={decreaseCounter}>
          -
        </Button>
        <div id="break-length">{props.interval}</div>
        {/* Default 5 min */}
        <Button variant="dark" id="break-increment" onClick={increaseCounter}>
          +
        </Button>
      </Row>
    </Container>
  );
};

export default Break;
