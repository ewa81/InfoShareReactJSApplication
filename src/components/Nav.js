import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <Row>
        <Col className="todosNav" sm={12}>
          <nav className="todosNav__nav">
            <ul className="todosNav__list">
              <Link to="/todos">
                <li>Todos</li>
              </Link>
              <Link to="/form">
            <li>Form</li>
          </Link>
        </ul>
      </nav>
    </Col>
  </Row>);
  }
}

export default Nav;
