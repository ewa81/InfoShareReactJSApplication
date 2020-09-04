import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Todo.scss"
import { Link } from "react-router-dom";

class Todo extends Component {
  render() {
    const { id, title, description, status, createdAt, updatedAt } = this.props.todo;

    return (
      <li className="todosList__item">
        <p className="todosList__id">{id}</p>
        <p className="todosList__title"><Link to={`form-edit/${id}`}>{title}</Link></p>
        <p className="todosList__description">{description}</p>
        <p className={this.setTheTaskStatusClass(status)}>{status}</p>
        <p className="todosList__createdAt">
          {this.formatDate(new Date(createdAt))}
        </p>
        <p className="todosList__updatedAt">{this.formatDate(new Date(updatedAt))}</p>
        <FontAwesomeIcon icon={faTrash} className="todos__icon todos__icon--delete" onClick={() => this.props.removeTodo(id)}/>
      </li>
    );
  }

  setTheTaskStatusClass(status) {
    let statusClass;

    switch (status) {
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
