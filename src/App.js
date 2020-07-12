import React, {Component} from "react";
import Todos from "./Components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (<div className="todosApp">
      <Container>
        <Row>
          <Col>
            <Todos/>
          </Col>
        </Row>
      </Container>
    </div>);
  }
}

export default App;
