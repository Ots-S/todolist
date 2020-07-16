import React from "react";
import TodoCard from "./TodoCard";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toDoContainer: {
    border: "1px solid lightblue",
  },
});

export default function ToDo(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <Box className={classes.toDoContainer} mt={2}>
        <Typography variant="h5" align="center">
          TO DO
        </Typography>
        <TodoCard todo={props.todos} />
      </Box>
    </div>
  );
}
