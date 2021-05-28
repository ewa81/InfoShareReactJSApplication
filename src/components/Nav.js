import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import "./Nav.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  render() {
    return (
      <Row className="todosNav__menu mb-3">
        <Col className="todosNav" sm={12}>
          <nav className="todosNav__nav">
            <ul className="todosNav__list m-0 p-0 d-flex justify-content-between">
              <Link to="/todos">
                <li className="todosNav__link p-3">Todos</li>
              </Link>
              <Link className="d-flex justify-content-end" to="/form">
                <li className="todosNav__icon p-3"><FontAwesomeIcon icon={faPlus}/></li>
              </Link>
              </ul>
          </nav>
        </Col>
      </Row>
    );
  }
}

export default Nav;
