import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
class Todo extends Component {
  render() {
    return (
      <Card
        raised
        style={{
          color: "white",
          background:
            this.props.toDo.completed === false
              ? "slategrey"
              : "rgba(0, 255, 0, .4)",
        }}
        onClick={(e) => {
          this.props.updateCompleted(this.props.toDo.id);
        }}
      >
        <CardContent component="h2" style={{ textAlign: "center" }}>
          {this.props.toDo.task}
        </CardContent>
      </Card>
    );
  }
}

export default Todo;
