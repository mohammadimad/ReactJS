import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {text: 'learn ReactJS'},
      {text: 'learn NodeJS'},
      {text: 'learn VueJS'},
      {text: 'learn AngularJS'},
    ]
  }
  completeTask = (index) => {
    const todos = [...this.state.todos];

    this.splice(index, 1);

    this.setState({todos});
  }
  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
  }
  render() {
    return (
      <div className="App">
      {this.state.todos.map((todo, index) => <li key={index}>
        {todo.text}
         <button onClick={() =>{this.completeTask(index)}}>
          Done
        </button>
        </li>)}

        <input value={this.state.newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
    );
  }
}

export default App;