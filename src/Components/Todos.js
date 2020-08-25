import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import todos from "../mocks/todos.json";

class Todos extends Component {
  state = {
    todos: todos,
  };

  render() {
    return (<div className="todos">
      <TodosStatistics todos={this.state.todos}/>
      <ul className="todosList__list">
        {this.state.todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}
      </ul>
    </div>);
  }
}

export default Todos;
