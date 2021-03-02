import React, {Component} from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Todos extends Component {
  state = {
    todos: [],
    deleteMode: false,
    selectedTodos: []
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

  selectTodoToRemove = (id) => {
    const selectedTodos = this.state.selectedTodos;

    if (selectedTodos.indexOf(id) === -1) {
      selectedTodos.push(id);
    } else {
      selectedTodos.splice(selectedTodos.indexOf(id), 1);
    }

    this.setState({
      selectedTodos,
      deleteMode: false
    });
  };

  render() {

    return (<div className="todos">
      <TodosStatistics todos={this.state.todos}/>
      <div className="todos__removeButtons mb-2">
        <Button variant="info" className="mr-2" onClick={this.toggleButton}>
        {this.state.deleteMode ? "Stop Chosing" : "Choose todos to remove"}
        </Button>
        {this.state.deleteMode ? <Button variant="primary">Remove chosen todos</Button> : null}
      </div>
      <ul className="todos__list">
        {this.state.todos.map((todo, index) => (
          <Todo
            key={todo._id}
            index={index}
            todo={todo}
            removeTodo={this.removeTodo}
            deleteMode={this.state.deleteMode}
            selectTodoToRemove={this.selectTodoToRemove}
            />))}
      </ul>
    </div>);
  }
}

export default Todos;
