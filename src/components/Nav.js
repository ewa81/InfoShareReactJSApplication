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
            <Row className="todosNav__list m-2 p-0 d-flex justify-content-between" as="ul">
              <Col>
                <Link to="/todos">
                  <li className="todosNav__link p-2">Todos</li>
                </Link>
              </Col>
              <Col className="d-flex justify-content-end">
                <Link to="/form">
                  <li className="todosNav__icon p-2"><FontAwesomeIcon className="todos__icon todos__icon--plus" icon={faPlus}/></li>
                </Link>
              </Col>
            </Row>
          </nav>
        </Col>
      </Row>
    );
  }
}

export default Nav;
