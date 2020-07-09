import React from "react";
import toDoList from "./dummyData";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"; //container map display todo
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import 'fontsource-roboto';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoList: toDoList,
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
      toDoList: this.state.toDoList.map(toDo => { //
        if(toDo.id === id){
          return{
          ...toDo,
          completed: !toDo.completed
          }
        }
        return toDo
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(toDo => toDo.completed === false)
    })
  }
  
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Welcome to your Todo App!</h2>
        <TodoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted}/>
        <Grid container spacing={1}>
          <TodoList toDoList={this.state.toDoList} updateCompleted={this.updateCompleted}/>
        </Grid>
      </div>
    );
  }
}

export default App;
