import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class TodoFormEdit extends Component {
  state = {
    todo_title: "",
    todo_description: "",
    todo_status: "",
    updatedAt: new Date().toISOString()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const todo =  await axios.get(`http://localhost:8080/api/todos/${id}`);
      const { data } = todo;
      const { todo_title, todo_description, todo_status } = data;

      this.setState({
        todo_title,
        todo_description,
        todo_status
      });
    } catch(error) {
      console.log(error);
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="todosFormEdit">
        <Form.Group className="todosFormEdit__group" controlId="formBasicTittle">
          <Form.Label className="todosFormEdit__label">Title:</Form.Label>
          <Form.Control className="todosFormEdit__control" type="text" name="todo_title" onChange={this.handleChange} value={this.state.todo_title}/>
        </Form.Group>
        <Form.Group className="todosFormEdit__group" controlId="formBasicDescription">
          <Form.Label className="todosFormEdit__label">Description:</Form.Label>
          <Form.Control className="todosFormEdit__control" type="text" name="todo_description" onChange={this.handleChange} value={this.state.todo_description}/>
        </Form.Group>
        <Form.Group className="todosFormEdit__group" controlId="formBasicStatus">
          <Form.Label className="todosFormEdit__label">Status</Form.Label>
          <Form.Control className="todosFormEdit__control" as="select" name="todo_status" custom onChange={this.handleChange} value={this.state.todo_status}>
          <option value=""></option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="DONE">DONE</option>
          </Form.Control>
        </Form.Group>
        <Button className="todosFormEdit__button" variant="primary" type="submit">Submit</Button>
      </Form>
    );
  };
}

export default TodoFormEdit;
