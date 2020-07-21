import React, { Component } from "react";
import "./TodosStatistics.css";

class TodosStatistics extends Component {
  render() {
    return (
      <div className="todosStatistics">
        <h5>Tasks:</h5>
        <p className="todosStatistics__statusCount todosStatistics__statusCount--done">
          DONE: {this.getTodosCountByStatus("DONE")}
        </p>
        <p className="todosStatistics__statusCount todosStatistics__statusCount--inprogress">
          IN_PROGRESS: {this.getTodosCountByStatus("IN_PROGRESS")}
        </p>
        <p className="todosStatistics__statusCount todosStatistics__statusCount--todo">
          TODO: {this.getTodosCountByStatus("TODO")}
        </p>
      </div>
    );
  }

  getTodosCountByStatus(status) {
    const result = this.props.todos.filter(todo => todo.status === status);
    return result.length;
  }
}

export default TodosStatistics;
