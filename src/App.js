import React, {Component} from "react";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Nav from "./components/Nav";
import TodoForm from "./components/TodoForm";
import TodoFormEdit from "./components/TodoFormEdit";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "./App.scss";
import TodosPagination from "./components/TodosPagination";

class App extends Component {
  render() {
    return (<Router>
        <Container fluid>
          <Nav/>
            <TodosPagination/>
              <Switch>
                <Redirect exact="exact" from="/" to="/todos"/>
                <Route path="/todos" to="/todos" component={Todos}/>
                <Route path="/form" component={TodoForm}/>
                <Route path="/form-edit/:id" component={TodoFormEdit}/>
              </Switch>
        </Container>
    </Router>);
  }
}

export default App;
