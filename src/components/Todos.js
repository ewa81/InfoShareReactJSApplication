import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import todos from "../mocks/todos.json";
import axios from "axios";

class Todos extends Component {
  state = {
    todos
  };

componentDidMount() {
  axios.get("http://localhost:8080/api/todos")
  .then(res => {
    console.log(res);
    this.setState({todos: res.data});
  });
}

removeTodo = (id) => {
  const todos = this.state.todos;
  const index = todos.findIndex(todo => todo.id === id);
  todos.splice(index, 1);
  this.setState({todos});
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
