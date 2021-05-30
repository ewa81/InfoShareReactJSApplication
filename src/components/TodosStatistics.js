import React, { Component } from "react";
import "./TodosStatistics.scss";
import {Row, Col} from "react-bootstrap";

class TodosStatistics extends Component {
  render() {
    return (
      <div className="todosStatistics">
          <Col className="p-0">
            <p className="todosStatistics__statusCount todosStatistics__statusCount--done mb-2 p-4 rounded d-flex justify-content-between">
              DONE<span className="badge badge-light text-success p-2">{this.getTodosCountByStatus("DONE")}</span>
            </p>
          </Col>
          <Col className="p-0">
            <p className="todosStatistics__statusCount todosStatistics__statusCount--inprogress mb-2 p-4 rounded d-flex justify-content-between">
              IN_PROGRESS<span className="badge badge-light text-warning p-2">{this.getTodosCountByStatus("IN_PROGRESS")}</span>
            </p>
          </Col>
          <Col className="p-0">
            <p className="todosStatistics__statusCount todosStatistics__statusCount--todo mb-2 p-4 rounded d-flex justify-content-between">
              TODO<span className="badge badge-light text-danger p-2">{this.getTodosCountByStatus("TODO")}</span>
            </p>
          </Col>
      </div>
    );
  }

  getTodosCountByStatus(todo_status) {
    const result = this.props.todos.filter((todo) => todo.todo_status === todo_status);
    return result.length;
  }
}

export default TodosStatistics;
