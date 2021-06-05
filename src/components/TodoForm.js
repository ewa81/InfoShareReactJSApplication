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
    validated: false,
    isValid: true
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if (event.target.value) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  };

  handleSubmit = async event => {
    this.setState({ validated: true });
    event.preventDefault();

    const postTodosForm = {
      todo_title: this.state.todo_title,
      todo_description: this.state.todo_description,
      todo_status: this.state.todo_status,
      createdAt: this.state.createdAt
    }

    if (this.state.todo_title) {
      try {
        await axios.post('http://localhost:8080/api/todos', postTodosForm);
        this.props.history.goBack();
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
        <Form.Control className="todosForm__control" type="text" name="todo_title" maxLength="40" onChange={this.handleChange} required/>
        <Form.Control.Feedback type="invalid">Please provide title</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="todosForm__group" controlId="formBasicDescription">
        <Form.Label className="todosForm__label">Description</Form.Label>
        <Form.Control className="todosForm__control" as="textarea" name="todo_description" maxLength="200" onChange={this.handleChange} required/>
        <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
      </Form.Group>
      <Button className="todosFrom__button" variant="primary" type="submit">Submit</Button>
    </Form>);
  }
}

export default TodoForm;
