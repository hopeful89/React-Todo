import React from "react";
import toDoList from "./dummyData";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Grid } from "@material-ui/core";
import "fontsource-roboto";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: localStorage.getItem("toDo")
        ? JSON.parse(localStorage.getItem("toDo"))
        : toDoList,
    };
  }

  addToDo = (task) => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { ...task, id: Date.now(), completed: false },
      ],
    });
  };

  updateCompleted = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map((toDo) => {
        //
        if (toDo.id === id) {
          console.log(id);
          return {
            ...toDo,
            completed: !toDo.completed,
          };
        }
        return toDo;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter((toDo) => toDo.completed === false),
    });
  };
  render() {
    localStorage.setItem("toDo", JSON.stringify(this.state.toDoList));
    if (localStorage.getItem("toDo")) {
      return (
        <div>
          <h2 style={{ textAlign: "center" }}>Welcome to your Todo App!</h2>
          <TodoForm
            addToDo={this.addToDo}
            clearCompleted={this.clearCompleted}
          />
          <Grid container spacing={1} justify="center">
            <TodoList
              toDoList={this.state.toDoList}
              updateCompleted={this.updateCompleted}
            />
          </Grid>
        </div>
      );
    } else {
      return <div>Please Wait</div>;
    }
  }
}

export default App;
