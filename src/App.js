import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'buy food', isCompleted: false},
         {description: 'buy wine', isCompleted: false},
         {description: 'clean', isCompleted: true}

      ]




    }
  }
  render() {
    return (
      <div className="App">
        <ul>

          {this.state.todos.map((todo,index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} />

          )}

        </ul>

      </div>
    );
  }
}

export default App;
