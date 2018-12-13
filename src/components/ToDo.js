import React, {Component} from "react";

//class is referenced in JSX in the app.js file
class ToDo extends Component {
  render() {

    return(
    
      <li>
        <input type="checkbox" checked={this.props.isCompleted}/>
        <span>{this.props.description}</span>
        </li>

    )
  }



}

export default ToDo;
