import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title id="break-label">Break length</Card.Title>
              </Card.Header>
              <Card.Body>
                <ButtonGroup>
                  <Button
                    variant="warning"
                    id="break-increment"
                    onClick={this.handleIncrement}
                  >
                    ↑
                  </Button>
                  <Button variant="warning" disabled>
                    5
                  </Button>
                  <Button
                    variant="warning"
                    id="break-decrement"
                    onClick={this.handleDecrement}
                  >
                    ↓
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title id="session-label">Session length</Card.Title>
              </Card.Header>
              <Card.Body>
                <ButtonGroup>
                  <Button
                    variant="info"
                    id="session-increment"
                    onClick={this.handleIncrement}
                  >
                    ↑
                  </Button>
                  <Button variant="info" disabled>
                    25
                  </Button>
                  <Button
                    variant="info"
                    id="session-decrement"
                    onClick={this.handleDecrement}
                  >
                    ↓
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title id="timer-label">Session</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text id="time-left">
                
                </Card.Text>
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    id="start__stop"
                  >
                    ►||
                  </Button>
                  <Button variant="secondary" id="reset">
                    ♺
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
      </Container>
    );
  }
}


export default App;
