import React, { Component } from "react";
import Todos from "./Components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./Components/Nav";
import TodoForm from "./Components/TodoForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="todosApp">
          <Container>
            <Nav />
            <Row>
              <Col>
                <Switch>
                  <Redirect exact="exact" from="/" to="/todos" />
                  <Route path="/todos" to="/todos" component={Todos} />
                  <Route path="/form" component={TodoForm} />
                </Switch>
                <Todos />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
