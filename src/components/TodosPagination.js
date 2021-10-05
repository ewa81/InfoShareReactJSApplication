import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./TodosPagination.scss";

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
    const perPage = 5;

    const pagesCount = Math.ceil(this.props.todos / perPage);

    for (let number = 1; number <= pagesCount; number++) {
      pageNumbers.push(
        <Pagination.Item
          className="todosPaginationLinkStyle"
          key={number}
          active={number === currentPage}
          onClick={() => this.selectAPageForPaginantion(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <Pagination className="todosPagination d-flex justify-content-end m-0">
        {pageNumbers}
      </Pagination>
    );
  }
}

export default TodosPagination;
