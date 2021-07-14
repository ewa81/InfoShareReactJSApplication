import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

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

    for (
      let number = 1;
      number <= Math.ceil(this.props.todos.length / perPage);
      number++
    ) {
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
