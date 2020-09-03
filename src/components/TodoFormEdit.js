import React, { Component } from "react";

class TodoFormEdit extends Component {
  render() {
    return (
      <div>
        <h1>Hello, TodoFormEdit Component here, this, is an id you have sent: {this.props.match.params.id}</h1>
      </div>
    );
  };
}

export default TodoFormEdit;
