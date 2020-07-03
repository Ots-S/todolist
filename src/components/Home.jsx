import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import ToDo from "./ToDo";
import Done from "./Done";
import Add from "./Add";

function Home() {
  return (
    <Grid container direction="column" alignItems="center">
      <Box m={4}>
        <Typography variant="h2">ToDoList</Typography>
      </Box>
      <Box m={2}>
        <Add />
      </Box>
      <Grid container item direction="row" justify="space-around">
        <Grid item xs={5} md={5} lg={4}>
          <ToDo />
        </Grid>
        <Grid item xs={5} md={5} lg={4}>
          <Done />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
