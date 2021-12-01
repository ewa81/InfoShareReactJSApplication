import React, { Component } from "react";
import Todo from "./Todo";
import TodosStatistics from "./TodosStatistics";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import TodosPagination from "./TodosPagination";

class Todos extends Component {
  state = {
    todos: [],
    deleteMode: false,
    selectedTodosIds: [],
    visibleTodos: [],
    selectedStatus: ""
  };

  async componentDidMount() {
    try {
      const todoResp = await axios.get("http://localhost:8080/api/todos");
      this.setState({
        todos: todoResp.data,
        visibleTodos: todoResp.data.slice(0, 5)
      });
    } catch (error) {
      console.log(error);
    }
  }

  removeTodo = async id => {
    console.log("id: ", id);
    const conf = window.confirm("Are you sure you want to delete this todo?");

    if (conf) {
      const todos = this.state.todos;
      const visibleTodos = this.state.visibleTodos;
      const index = visibleTodos.findIndex(todo => todo._id === id);
      visibleTodos.splice(index, 1);
      console.log(this.state.visibleTodos);

      const indexTodos = todos.find(todo => todo._id === id);
      todos.splice(indexTodos, 1);
      this.setState({ visibleTodos, todos });
        try {
          await axios.delete(`http://localhost:8080/api/todos/${id}`);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  toggleButton = () => {
    this.setState({
      deleteMode: !this.state.deleteMode
    });
  };

  selectTodoToRemove = id => {
    console.log("id: ", id);
    // const selectedTodosIds = this.state.selectedTodosIds;
    //
    // if (selectedTodosIds.indexOf(id) === -1) {
    //   selectedTodosIds.push(id);
    // } else {
    //   selectedTodosIds.splice(selectedTodosIds.indexOf(id), 1);
    // }
    //
    // this.setState({
    //   selectedTodosIds
    // });
  };

  removeSelectedTodos = async () => {
    // const isRemovalConfirmed = window.confirm(
    //   "Do you really want to remove these todo"
    // );
    //
    // if (!isRemovalConfirmed) {
    //   return;
    // }
    //
    // const { todos, selectedTodosIds } = this.state;
    // const selectedIds = [];
    //
    // for (let i = 0; i < selectedTodosIds.length; i++) {
    //   const todoIndex = selectedTodosIds[i];
    //   const todoId = todos[todoIndex]._id;
    //   selectedIds.push(todoId);
    // }
    //
    // const todoList = selectedIds.join();
    //
    // try {
    //   await axios.delete(`http://localhost:8080/api/todos/many/${todoList}`);
    // } catch (error) {
    //   console.lob(error);
    // }
    //
    // const todosAfterRemoval = todos.filter((item, index) => {
    //   return selectedTodosIds.indexOf(index) === -1;
    // });
    //
    // this.setState({
    //   todos: todosAfterRemoval,
    //   selectedTodosIds: []
    // });
  };

  setSelectedStatus = status => {
    const { selectedStatus } = this.state;
    const { todos } = this.state;

    const statusToSet = selectedStatus === status ? "" : status;

    const filteredTodos = statusToSet
      ? todos.filter(todo => todo.todo_status === statusToSet)
      : todos.slice(0, 5);

    this.setState({
      selectedStatus: statusToSet,
      visibleTodos: filteredTodos
    });
  };

  setPaginationRange = (start, end) => {
    const { todos } = this.state;

    this.setState({
      visibleTodos: todos.slice(start, end)
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <Row>
        <Col sm={2}>
          <TodosStatistics
            todos={this.state.todos}
            selectedStatus={this.state.selectedStatus}
            setSelectedStatus={this.setSelectedStatus}
          />
        </Col>
        <Col className="todos" sm={10}>
          <Row className="mb-3">
            <Col className="todos__removeButtons">
              <Button
                variant="info"
                className="mr-2"
                onClick={this.toggleButton}
              >
                {this.state.deleteMode
                  ? "Stop Chosing"
                  : "Choose todos to remove"}
              </Button>
              {this.state.deleteMode ? (
                <Button variant="primary" onClick={this.removeSelectedTodos}>
                  Remove chosen todos
                </Button>
              ) : null}
            </Col>
            <Col className="todos__pagination">
              <TodosPagination
                todos={todos.length}
                setPaginationRange={this.setPaginationRange}
              />
            </Col>
          </Row>
          <Row className="todos__list p-0" as="ul">
            {this.state.visibleTodos.map(todo => (
              <Todo
                key={todo._id}
                todo={todo}
                removeTodo={this.removeTodo}
                deleteMode={this.state.deleteMode}
                selectTodoToRemove={this.selectTodoToRemove}
              />
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Todos;
