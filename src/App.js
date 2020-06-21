import React, {Component} from "react";
import Todos from "./Components/Todos";
import "./App.css";

class App extends Component {
  render() {
    return (<div className="todosApp">
      <Todos/>
    </div>);
  }
}

export default App;
