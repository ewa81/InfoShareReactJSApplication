import React, { Component } from "react";

class TodoFormEdit extends Component {
  render() {
    return (
      <div className="todosFormEdit">
        <h1 className="todosFormEdit__id">Hello, TodoFormEdit Component here, this, is an id you have sent: {this.props.match.params.id}</h1>
      </div>
    );
  };
}

export default TodoFormEdit;
