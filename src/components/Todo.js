import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todo.scss";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

class Todo extends Component {
  render() {
    const {
      _id: id,
      todo_title,
      todo_description,
      todo_status,
      createdAt,
      updatedAt
    } = this.props.todo;

    return (
      <Col className="todos__item mt-2" sm={3} as="li">
        <Row>
          <Col sm={6}>
            <p className={this.setTheTaskStatusClass(todo_status)}>
              {todo_status}
            </p>
          </Col>
          <Col sm={6}>
            <FontAwesomeIcon
              icon={faTrash}
              className="todos__icon todos__icon--delete float-right"
              onClick={() => this.props.removeTodo(this.props.todo._id)}
            />
            {this.props.deleteMode ? (
              <Form.Check
                type="checkbox"
                className="todos__checkbox mt-2 mb-2"
                label="Check todo to delete"
                onClick={() => this.props.selectTodoToRemove(this.props.index)}
              />
            ) : null}
          </Col>
          <Col sm={12}>
            <Link to={`form-edit/${id}`}>
              <p className="todos__title">{todo_title}</p>
            </Link>
          </Col>
          <Col sm={12}>
            <p className="todos__description">{todo_description}</p>
          </Col>
          <Col sm={6}>
            <p>Created At:</p>
            <p className="todos__createdAt">
              {this.formatDate(new Date(createdAt))}
            </p>
          </Col>
          <Col sm={6}>
            <p>Updated At:</p>
            <p className="todos__updatedAt">
              {this.formatDate(new Date(updatedAt))}
            </p>
          </Col>
        </Row>
      </Col>
    );
  }

  setTheTaskStatusClass(todo_status) {
    let statusClass;

    switch (todo_status) {
      case "DONE":
        statusClass = "badge badge-success";
        break;
      case "IN_PROGRESS":
        statusClass = "badge badge-warning";
        break;
      case "TODO":
        statusClass = "badge badge-danger";
        break;
      default:
        statusClass = "badge badge-light";
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
