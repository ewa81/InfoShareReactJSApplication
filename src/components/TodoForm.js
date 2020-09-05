import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TodoSelectForm from "./TodoSelectForm";

class TodoForm extends Component {
  state = {
    title: "",
    description: "",
    status: "",
    createdAt: new Date().toISOString()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (<Form className="todosForm" onSubmit={this.handleSubmit}>
      <Form.Group className="todosFrom__group" controlId="formBasicTittle">
        <Form.Label className="todosFrom__label">Title</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="title" onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="todosForm__group" controlId="formBasicDescription">
        <Form.Label className="todosForm__label">Description</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="description" onChange={this.handleChange}/>
      </Form.Group>
      <TodoSelectForm/>
      <Button className="todosFrom__button" variant="primary" type="submit">Submit</Button>
    </Form>);
  }
}

export default TodoForm;
