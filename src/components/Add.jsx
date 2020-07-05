import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";

function Add(props) {
  const [todoItem, setTodoItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.getTodo(todoItem);
    setTodoItem("");
  }

  return (
    <div>
      <Grid container direction="row">
        <TextField
          id="todo"
          label="Todo"
          value={todoItem}
          onChange={(event) => setTodoItem(event.target.value)}
          variant="outlined"
          color="primary"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        />
        <Button onClick={handleSubmit} variant="outlined" color="primary">
          <Typography align="center">ADD</Typography>
        </Button>
      </Grid>
    </div>
  );
}

export default Add;
