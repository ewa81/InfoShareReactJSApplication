import React, { Component } from "react";
import "./TodosStatistics.scss";
import {Row, Col} from "react-bootstrap";

class TodosStatistics extends Component {
  render() {
    return (
      <Row className="todosStatistics">
          <Col sm={12}>
            <p className="todosStatistics__statusCount todosStatistics__statusCount--done mb-2 p-3 rounded d-flex justify-content-between align-items-center">
              <span className="todosStatistics__statusLabel">DONE</span>
              <span className="todosStatistics__statusDone p-2 rounded">
                {this.getTodosCountByStatus("DONE")}
              </span>
            </p>
          </Col>
          <Col sm={12}>
            <p className="todosStatistics__statusCount todosStatistics__statusCount--inprogress mb-2 p-3 rounded d-flex justify-content-between align-items-center">
              <span className="todosStatistics__statusLabel">IN_PROGRESS</span>
              <span className="todosStatistics__statusInprogress p-2 rounded">
                {this.getTodosCountByStatus("IN_PROGRESS")}
              </span>
            </p>
          </Col>
          <Col sm={12}>
            <p className="todosStatistics__statusCount todosStatistics__statusCount--todo mb-2 p-3 rounded d-flex justify-content-between align-items-center">
              <span className="todosStatistics__statusLabel">TODO</span>
              <span className="todosStatistics__statusTodo p-2 rounded">
                {this.getTodosCountByStatus("TODO")}
              </span>
            </p>
          </Col>
      </Row>
    );
  }

  getTodosCountByStatus(todo_status) {
    const result = this.props.todos.filter((todo) => todo.todo_status === todo_status);
    return result.length;
  }
}

export default TodosStatistics;
