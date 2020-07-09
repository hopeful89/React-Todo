import React, { Component } from "react";
import { Button, InputLabel, Input, Grid } from "@material-ui/core/";

class TodoForm extends Component {
  initialState = {
    task: "",
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.addToDo(this.state);
    this.setState(this.initialState);
  };

  handleClear = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    // console.log(this.props.addToDo)
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container justify="center" alignItems="center">
          <InputLabel htmlFor="task">New Task</InputLabel>
          <Input
            style={{ margin: "1%" }}
            name="task"
            placeholder="..."
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <Grid container justify="center">
            <Grid item xs={1}>
              <Button
                size="medium"
                style={{ margin: "1%" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Add New Task
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                size="medium"
                style={{ margin: "1%" }}
                variant="outlined"
                color="secondary"
                onClick={this.handleClear}
              >
                Clear Completed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default TodoForm;
