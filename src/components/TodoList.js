import React, { Component } from "react";
import Todo from "./Todo";
import { Grid } from "@material-ui/core";

class TodoList extends Component {
  //stateless functional component could be used
  render() {
    return this.props.toDoList.map((toDo) => {
      return (
        <Grid item xs={4}>
          <Todo
            key={toDo.id}
            toDo={toDo}
            updateCompleted={this.props.updateCompleted}
          />
        </Grid>
      );
    });
  }
}

export default TodoList;
