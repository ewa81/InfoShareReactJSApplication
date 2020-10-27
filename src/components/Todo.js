import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Todo.scss"
import { Link } from "react-router-dom";

class Todo extends Component {
  render() {
    const { id, todo_title, todo_description, todo_status, createdAt, updatedAt } = this.props.todo;

    return (
      <li className="todosList__item">
        <p className="todosList__id">{id}</p>
        <Link to={`form-edit/${id}`}><p className="todosList__title">{todo_title}</p></Link>
        <p className="todosList__description">{todo_description}</p>
        <p className={this.setTheTaskStatusClass(todo_status)}>{todo_status}</p>
        <p className="todosList__createdAt">
          {this.formatDate(new Date(createdAt))}
        </p>
        <p className="todosList__updatedAt">{this.formatDate(new Date(updatedAt))}</p>
        <FontAwesomeIcon icon={faTrash} className="todos__icon todos__icon--delete" onClick={() => this.props.removeTodo(id)}/>
      </li>
    );
  }

  setTheTaskStatusClass(todo_status) {
    let statusClass;

    switch (todo_status) {
      case "DONE":
        statusClass = "btn btn-success";
        break;
      case "IN_PROGRESS":
        statusClass = "btn btn-warning";
        break;
      case "TODO":
        statusClass = "btn btn-danger";
        break;
      default:
        statusClass = "btn btn-light";
    }
    return statusClass;
  }

  formatDate(date) {
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    const second = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

    return (
      day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second
    );
  }
}

export default Todo;
