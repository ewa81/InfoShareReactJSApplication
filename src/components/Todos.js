import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import axios from "axios";

class Todos extends Component {
  state = {
    todos: []
  };

async componentDidMount() {
  try {
    const todoResp = await axios.get('http://localhost:8080/api/todos');
    this.setState({todos: todoResp.data});
  } catch(error) {
    console.log(error);
  }
};

async deleteTodo(id) {
  await axios.delete ('http://localhost:8080/api/todos/:id');
  let todoList = this.state.todos;

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    if (todo.id === id) {
      todoList.splice(i, 1);
    }
  }
  this.setState({todos: todoList});
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
      <ul className="todos__list">
        {this.state.todos.map(todo => (<Todo key={todo._id} todo={todo} removeTodo={this.removeTodo}/>))}
      </ul>
    </div>);
  }
}

export default Todos;
