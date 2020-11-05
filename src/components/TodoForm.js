import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

class TodoForm extends Component {
  state = {
    todo_title: "",
    todo_description: "",
    todo_status: "TODO",
    createdAt: new Date().toISOString(),
    validated: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    this.setState({ validated: true });
    event.preventDefault();

    const postTodosForm = {
      this_title: this.state.todo_title,
      this_description: this.state.todo_description,
      this_status: this.state.todo_status,
      createdAt: this.state.createdAt
    }

    if (this.state.todo_title) {
      try {
        await axios.post('http://localhost:8080/api/todos', postTodosForm);
      } catch(error) {
        console.log(error);
      }
    }
  };

  render() {
    const {validated} = this.state;

    return (<Form noValidate validated={validated} className="todosForm" onSubmit={this.handleSubmit}>
      <Form.Group className="todosFrom__group" controlId="formBasicTittle">
        <Form.Label className="todosFrom__label">Title</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="todo_title" onChange={this.handleChange} required/>
        <Form.Control.Feedback type="invalid">Please provide title</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="todosForm__group" controlId="formBasicDescription">
        <Form.Label className="todosForm__label">Description</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="todo_description" onChange={this.handleChange}/>
      </Form.Group>
      <Button className="todosFrom__button" variant="primary" type="submit">Submit</Button>
    </Form>);
  }
}

export default TodoForm;
