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

removeTodo = (id) => {
  const conf = window.confirm('Are you sure you want to delete this todo?');
  
  if (conf) {
    axios.delete(`http://localhost:8080/api/todos/${id}`);
    const todos = this.state.todos;
    const index = todos.findIndex(todo => todo._id === id);
    todos.splice(index, 1);
    this.setState({todos});
  };
};

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
