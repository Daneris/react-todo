import React, {Component} from "react";

//class is referenced in JSX in the app.js file
class ToDo extends Component {
  render() {

    return(

      <li>

        <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete}/>
        <span>{this.props.description}</span>
        <button onClick={this.props.deleteTodo} type="button" className="btn">Delete</button>


        </li>



    )
  }



}

export default ToDo;
