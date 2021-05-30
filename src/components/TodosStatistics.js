import React, { Component } from "react";
import "./TodosStatistics.scss";

class TodosStatistics extends Component {
  render() {
    return (
      <div className="todosStatistics">
        <p className="todosStatistics__statusCount todosStatistics__statusCount--done p-4 rounded">
          DONE: {this.getTodosCountByStatus("DONE")}
        </p>
        <p className="todosStatistics__statusCount todosStatistics__statusCount--inprogress p-4 rounded">
          IN_PROGRESS: {this.getTodosCountByStatus("IN_PROGRESS")}
        </p>
        <p className="todosStatistics__statusCount todosStatistics__statusCount--todo p-4 rounded">
          TODO: {this.getTodosCountByStatus("TODO")}
        </p>
      </div>
    );
  }

  getTodosCountByStatus(todo_status) {
    const result = this.props.todos.filter((todo) => todo.todo_status === todo_status);
    return result.length;
  }
}

export default TodosStatistics;
