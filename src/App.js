import React, { Component } from 'react';

class App extends Component {
  render() {
   const todos = [
     {text: 'learn ReactJS'},
     {text: 'learn NodeJS'},
   ]
    return (
      <div className="App">
      {todos.map((todo, index) => <li key={index}>
        {todo.text} <button>Done</button>
        </li>)}
      </div>
    );
  }
}

export default App;