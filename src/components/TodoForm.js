import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class TodoForm extends Component {
  state = {
    title: "",
    description: "",
    status: "TODO",
    createdAt: new Date().toISOString(),
    validated: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState({ validated: true });
    event.preventDefault();

    if (this.state.title) {
      console.log('state ', this.state)  ;
    }
  };

  render() {
    const {validated} = this.state;

    return (<Form noValidate validated={validated} className="todosForm" onSubmit={this.handleSubmit}>
      <Form.Group className="todosFrom__group" controlId="formBasicTittle">
        <Form.Label className="todosFrom__label">Title</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="title" onChange={this.handleChange} required/>
        <Form.Control.Feedback type="invalid">Please provide title</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="todosForm__group" controlId="formBasicDescription">
        <Form.Label className="todosForm__label">Description</Form.Label>
        <Form.Control className="todosForm__control" type="text" name="description" onChange={this.handleChange}/>
      </Form.Group>
      <Button className="todosFrom__button" variant="primary" type="submit">Submit</Button>
    </Form>);
  }
}

export default TodoForm;
