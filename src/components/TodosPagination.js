import React, {Component} from "react";
import Pagination from "react-bootstrap/Pagination";
import {Row, Col} from "react-bootstrap";

class TodosPagination extends Component {

  render() {
    let active = 1;
    let pageNumbers = [];

    for (let number = 1; number <= 3; number++) {
      pageNumbers.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    };

    return (
      <Row>
        <Col>
          <Pagination className="todosPagination d-flex justify-content-end">{pageNumbers}</Pagination>
        </Col>
      </Row>
    );
  }
}

export default TodosPagination;
