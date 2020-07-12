import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (<div className="todosNav">
      <nav className="todosNav__nav">
        <ul className="todosNav__list">
          <Link to="/todos">
            <li>Todos</li>
          </Link>
          <Link to="/form">
            <li>Form</li>
          </Link>
        </ul>
      </nav>
    </div>);
  }
}

export default Nav;
