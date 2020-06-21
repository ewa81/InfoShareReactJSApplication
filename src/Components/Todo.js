import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { id, title, description, status, createdAt } = this.props.todo;

    return (
      <li className="todosList__item">
        <p className="todosList__id">{id}</p>
        <p className="todosList__title">{title}</p>
        <p className="todosList__description">{description}</p>
        <p className="todosList__status">{status}</p>
        <p className="todosList__createdAt">{createdAt}</p>
      </li>
    );
  }
}

export default Todo;
