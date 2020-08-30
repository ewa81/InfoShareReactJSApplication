import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import todos from "../mocks/todos.json";

class Todos extends Component {
  state = {
    todos
  };

  removeTodo = (index) => {
    const filteredItems = Object.assign([], this.state.todos);
    filteredItems.splice(index, 1);
    this.setState({
      todos: filteredItems
    });
  }

  render() {
    return (<div className="todos">
      <TodosStatistics todos={this.state.todos}/>
      <ul className="todosList__list">
        {this.state.todos.map(todo => (<Todo key={todo.id} todo={todo} removeTodo={this.removeTodo}/>))}
      </ul>
    </div>);
  }
}

export default Todos;
