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

      ],
      newTodoDescription: "",



    };
  }

  deleteTodo(index){
    const newItems = this.state.todos.filter((todos,i) => {
      return i !== index;

    })
    this.setState({

      todos: newItems


    })

  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos});
  }
  handleChange(e) {
    this.setState({
      newToDoDescription: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newToDoDescription) {return}
    const newTodo = {description: this.state.newToDoDescription, isCompleted: false}
    this.setState({
      todos: [...this.state.todos, newTodo],
      newToDoDescription: " "
    })
  }
  render() {
    return (
      <div className="App">
        <ul>

          {this.state.todos.map((todo,index) =>
            <ToDo key={index} deleteTodo={() => this.deleteTodo(index)}description={todo.description} isCompleted={todo.isCompleted} toggleComplete={() => this.toggleComplete(index)} />

          )}



        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.state.newToDoDescription} onChange={(e) => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
        <div>


        </div>

      </div>
    );
  }
}

export default App;
//{this.state.todos.map((todo,index)=>
  //<button key={index} onClick={(e) => this.removeItem(index)} type="button" className="btn">Delete</button>
