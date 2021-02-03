import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Todos extends Component {
  state = {
    todos: [],
    showButton: false
  };

async componentDidMount() {
  try {
    const todoResp = await axios.get('http://localhost:8080/api/todos');
    this.setState({todos: todoResp.data});
  } catch(error) {
    console.log(error);
  }
};

removeTodo = async (id) => {
  const conf = window.confirm('Are you sure you want to delete this todo?');

  if (conf) {
    const todos = this.state.todos;
    const index = todos.findIndex(todo => todo._id === id);
    todos.splice(index, 1);
    this.setState({todos});
    try {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
    } catch(error) {
      console.log(error);
    }
  };
};

  handleClick = () => {
    this.setState({
      showButton: !this.state.showButton
    });
  };

  render() {

    return (<div className="todos">
      <TodosStatistics todos={this.state.todos}/>
      <Button variant="info" onClick={this.handleClick}>
        {this.state.showButton ? "Stop Chosing" : "Choose todos to remove"}
      </Button>{' '}
        {this.state.showButton ? <Button variant="primary">Remove chosen todos</Button> : null}
      <ul className="todos__list">
        {this.state.todos.map(todo => (<Todo key={todo._id} todo={todo} removeTodo={this.removeTodo}/>))}
      </ul>
    </div>);
  }
}

export default Todos;
