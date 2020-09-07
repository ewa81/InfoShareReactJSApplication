import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TodoFormEdit extends Component {
  state = {
    title: "",
    description: "",
    status: "",
    updatedAt: new Date().toISOString()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
    <Form className="todosFormEdit" onSubmit={this.handleSubmit}>
      <Form.Group className="todosFromEdit__group" controlId="formBasicTittle">
        <Form.Label className="todosFromEdit__label">Title</Form.Label>
        <Form.Control className="todosFormEdit__control" type="text" name="title" onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="todosFormEdit__group" controlId="formBasicDescription">
        <Form.Label className="todosFormEdit__label">Description</Form.Label>
        <Form.Control className="todosFormEdit__control" type="text" name="description" onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="todosFormEdit__group" controlId="formBasicStatsu">
        <Form.Label className="todosFormEdit__label">Status</Form.Label>
        <Form.Control className="todosFormEdit__control" as="select" name="status" custom onChange={this.handleChange}>
          <option value=""></option>
          <option value="TODO">TODO</option>
          <option value="IN PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </Form.Control>
      </Form.Group>
      <Button className="todosFromEdit__button" variant="primary" type="submit">Submit</Button>
    </Form>
    );
  };
}

export default TodoFormEdit;
