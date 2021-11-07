import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./TodosPagination.scss";

class TodosPagination extends Component {
  state = {
    currentPage: 1
  };

  selectAPageForPaginantion = number => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: number
    });

    if (number === currentPage) {
      return;
    }

    const todosCount = this.props.todos;

    const pageNumber = number;

    const page = Math.ceil(todosCount / 5);

    const start = 5 * (pageNumber - 1);

    const end =
      pageNumber === page
        ? 5 * Math.floor(todosCount / 5) + (todosCount % 5)
        : 5 * (pageNumber - 1) + 5;

    this.props.setPaginationRange(start, end);
  };

  render() {
    const { currentPage } = this.state;
    const pageNumbers = [];
    const perPage = 5;

    const pagesCount = Math.ceil(this.props.todos / perPage);

    for (let number = 1; number <= pagesCount; number++) {
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
      <Pagination className="todosPagination d-flex justify-content-end m-0">
        {pageNumbers}
      </Pagination>
    );
  }
}

export default TodosPagination;
