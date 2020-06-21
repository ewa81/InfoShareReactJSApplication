import React, {Component} from "react";

class Todo extends Component {
  render() {
    const {id, title, description, status, createdAt} = this.props.todo;
    return (<li className="todos__item">
      <p className="todos__id">{id}</p>
      <p className="todos__title">{title}</p>
      <p className="todos__description">{description}</p>
      <p className="todos__status">{status}</p>
      <p className="todo__createdAt">{createdAt}</p>
    </li>);
  }
}

export default Todo;
