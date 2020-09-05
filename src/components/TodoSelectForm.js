import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class TodoSelectForm extends Component {
  render() {
    return(
      <Form.Group className="todosForm__group" controlId="formBasicStatsu">
        <Form.Label className="todosForm__label">Status</Form.Label>
        <Form.Control className="todosForm__control" as="select" name="status" custom onChange={this.handleChange}>
          <option value=""></option>
          <option value="todo">TODO</option>
          <option value="in_progress">IN_PROGRESS</option>
          <option value="done">DONE</option>
          </Form.Control>
      </Form.Group>
    );
  };
}

export default TodoSelectForm;
