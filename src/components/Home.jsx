import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import ToDo from "./ToDo";
import DoneContainer from "./DoneContainer";
import Add from "./Add";
import TodoCard from "./TodoCard";

function Home() {
  const [todos, setTodos] = useState("Faire la vaisselle");
  const [done, setDone] = useState(["Pendre le linge"]);

  function getTodo(todo) {
    if (todo.length) {
      setTodos((todos) => [...todos, todo.toUpperCase()]);
    }
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Box m={4}>
        <Typography variant="h2">ToDoList</Typography>
      </Box>
      <Box m={2}>
        <Add getTodo={getTodo} />
      </Box>
      <Grid container item direction="row" justify="space-around">
        <Grid item xs={5} md={5} lg={4}>
          <ToDo todos={todos} />
        </Grid>
        <Grid item xs={5} md={5} lg={4}>
          <DoneContainer todo={done} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
