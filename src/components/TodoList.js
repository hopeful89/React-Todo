import React, { Component } from "react";
import Todo from "./Todo";
import { Grid } from '@material-ui/core'

class TodoList extends Component {
  //stateless functional component could be used
  constructor(props) {
    super(props);
  }

  render() {
    //   console.log(this.props.updateCompleted)
    return this.props.toDoList.map((toDo) => {
      return (
          <Grid item xs={4} spacing={1} justify="center">
            <Todo key={toDo.id} toDo={toDo} updateCompleted={this.props.updateCompleted} />
          </Grid>
      )
    });
  }
}

export default TodoList;
