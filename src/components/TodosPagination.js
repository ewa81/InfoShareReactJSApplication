import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Col } from "react-bootstrap";

class TodosPagination extends Component {
  state = {
    currentPage: 1
  };

  selectAPageForPaginantion = number => {
    this.setState({
      currentPage: number
    });
  };

  render() {
    const { currentPage } = this.state;
    const pageNumbers = [];

    for (let number = 1; number <= 3; number++) {
      pageNumbers.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => this.selectAPageForPaginantion(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <Col>
        <Pagination className="todosPagination d-flex justify-content-end m-0">
          {pageNumbers}
        </Pagination>
      </Col>
    );
  }
}

export default TodosPagination;
