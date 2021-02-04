import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Todos extends Component {
  state = {
    todos: [],
    deleteMode: false
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

  toggleButton = () => {
    this.setState({
      deleteMode: !this.state.deleteMode
    });
  };

  render() {

    return (<div className="todos">
      <TodosStatistics todos={this.state.todos}/>
      <Button variant="info" className="mr-2 bg warning mb-2 bg warning" onClick={this.toggleButton}>
        {this.state.deleteMode ? "Stop Chosing" : "Choose todos to remove"}
      </Button>
        {this.state.deleteMode ? <Button variant="primary" className="mb-2 bg warning">Remove chosen todos</Button> : null}
      <ul className="todos__list">
        {this.state.todos.map(todo => (<Todo key={todo._id} todo={todo} removeTodo={this.removeTodo}/>))}
      </ul>
    </div>);
  }
}

export default Todos;
